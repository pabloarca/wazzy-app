import type { QueryFunctionContext } from '@tanstack/react-query'
import { authSession } from './session'

const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

export async function authorizedFetch(
  endpoint: string,
  options: RequestInit = {},
  signal?: AbortSignal
) {
  const token = authSession.getToken()
  const headers = new Headers(options.headers || {})
  headers.set('Content-Type', 'application/json')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
    signal,
  })

  if (response.status === 401) {
    const refreshed = await authSession.refreshToken()
    if (refreshed) {
      headers.set('Authorization', `Bearer ${refreshed}`)
      const retryResponse = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers,
        signal,
      })
      if (!retryResponse.ok) {
        throw new Error(await formatError(retryResponse))
      }
      return parseBody(retryResponse)
    }
  }

  if (!response.ok) {
    throw new Error(await formatError(response))
  }

  return parseBody(response)
}

export async function apiFetcher({ queryKey, signal }: QueryFunctionContext) {
  const [endpoint, options] = queryKey as [string, RequestInit?]
  return authorizedFetch(endpoint, options, signal)
}

async function parseBody(response: Response) {
  const text = await response.text()
  try {
    return text ? JSON.parse(text) : null
  } catch {
    return text as unknown as never
  }
}

async function formatError(response: Response) {
  const text = await response.text()
  return text || response.statusText
}
