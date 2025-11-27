import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { accessToken } = useAuth()

  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return children
}
