// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/auth-context'

export function ProtectedRoute() {
  const { accessToken } = useAuth()

  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
