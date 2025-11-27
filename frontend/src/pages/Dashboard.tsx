import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useAuth } from '../context/auth-context'

export function DashboardPage() {
  const { user, logout } = useAuth()

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Bienvenido</p>
          <h1 className="text-3xl font-semibold">{user?.name || user?.email}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link to="/profile">Perfil</Link>
          </Button>
          <Button variant="destructive" onClick={logout}>
            Cerrar sesión
          </Button>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Panel</CardTitle>
            <CardDescription>Resumen de tu cuenta</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Usuario: {user?.email}</li>
              <li>ID: {user?.id ?? 'N/D'}</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Acciones rápidas</CardTitle>
            <CardDescription>Administra tu sesión y perfil</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-3">
            <Button asChild>
              <Link to="/profile">Ver perfil</Link>
            </Button>
            <Button variant="secondary" onClick={logout}>
              Salir
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
