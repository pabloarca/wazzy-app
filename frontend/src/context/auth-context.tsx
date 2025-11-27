import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useMutation } from '@tanstack/react-query'
import { authSession } from '../lib/session'
import { authorizedFetch } from '../lib/api-client'

export type User = {
  id: number
  email: string
  name?: string | null
  createdAt?: string
}

export type Credentials = {
  email: string
  password: string
}

export type RegisterPayload = Credentials & { name?: string }

export type AuthContextValue = {
  user: User | null
  accessToken: string | null
  login: (payload: Credentials) => Promise<void>
  register: (payload: RegisterPayload) => Promise<void>
  logout: () => void
  refresh: () => Promise<string | null>
}

const AuthContext = createContext<AuthContextValue | null>(null)

const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

type AuthResponse = {
  accessToken: string
  user?: User
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const loginMutation = useMutation({
    mutationFn: async (payload: Credentials): Promise<AuthResponse> => {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('No se pudo iniciar sesión')
      }

      return (await response.json()) as AuthResponse
    },
  })

  const registerMutation = useMutation({
    mutationFn: async (payload: RegisterPayload): Promise<AuthResponse> => {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('No se pudo registrar')
      }

      return (await response.json()) as AuthResponse
    },
  })

  const refreshMutation = useMutation({
    mutationFn: async (): Promise<AuthResponse | null> => {
      const response = await fetch(`${API_BASE}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
      })

      if (!response.ok) {
        return null
      }

      return (await response.json()) as AuthResponse
    },
  })

  const applySession = useCallback((data: AuthResponse | null) => {
    if (!data) return null

    if (data.user) {
      setUser(data.user)
    }

    setAccessToken(data.accessToken)
    authSession.setToken(data.accessToken)

    return data.accessToken
  }, [])

  const login = useCallback(
    async (payload: Credentials) => {
      const session = await loginMutation.mutateAsync(payload)
      applySession(session)
    },
    [applySession, loginMutation]
  )

  const register = useCallback(
    async (payload: RegisterPayload) => {
      const session = await registerMutation.mutateAsync(payload)
      applySession(session)
    },
    [applySession, registerMutation]
  )

  const logout = useCallback(() => {
    setUser(null)
    setAccessToken(null)
    authSession.setToken(null)
    authSession.setRefreshHandler(null)

    // Opcional: informar al backend
    void fetch(`${API_BASE}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    }).catch(() => {
      // ignoramos errores de red al cerrar sesión
    })
  }, [])

  const refresh = useCallback(async () => {
    const refreshed = await refreshMutation.mutateAsync()
    if (!refreshed) {
      logout()
      return null
    }
    return applySession(refreshed)
  }, [applySession, logout, refreshMutation])

  useEffect(() => {
    authSession.setToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    authSession.setRefreshHandler(() => refresh())
    return () => authSession.setRefreshHandler(null)
  }, [refresh])

  const value = useMemo(
    () => ({ user, accessToken, login, register, logout, refresh }),
    [user, accessToken, login, register, logout, refresh]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth debe usarse dentro de AuthProvider')
  return ctx
}

export async function fetchProfile(): Promise<User> {
  // tu backend expone GET /me (no /auth/me)
  return authorizedFetch('/me') as Promise<User>
}
