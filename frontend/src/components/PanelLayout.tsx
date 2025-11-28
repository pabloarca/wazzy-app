import { useMemo } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { Button } from './ui/button'
import { useAuth } from '../context/auth-context'
import { cn } from '../lib/utils'

const navItems = [
  { label: 'Principal', path: '/dashboard' },
  { label: 'Perfil', path: '/profile' },
  { label: 'Empresa', path: '/empresa' },
  { label: 'Sincronizar', path: '/sincronizar' },
]

export function PanelLayout() {
  const { pathname } = useLocation()
  const { logout, user } = useAuth()

  const currentSection = useMemo(() => {
    const active = navItems.find((item) => pathname.startsWith(item.path))
    return active?.label ?? 'Panel'
  }, [pathname])

  return (
    <div className="flex min-h-screen bg-muted/30 text-sm">
      <aside className="flex w-64 flex-col border-r bg-background px-6 py-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <img src="/favicon.svg" alt="Wazzy" className="h-9 w-9" />
          <span className="text-xl font-semibold text-foreground">Wazzy</span>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive =
              pathname === item.path || pathname.startsWith(`${item.path}/`)

            return (
              <Button
                key={item.path}
                asChild
                variant="ghost"
                className={cn(
                  'w-full justify-start py-2 text-base font-medium',
                  isActive && 'bg-primary/10 text-primary hover:bg-primary/20'
                )}
              >
                <Link to={item.path}>{item.label}</Link>
              </Button>
            )
          })}
        </nav>

        <div className="pt-6">
          <Button
            variant="ghost"
            className="w-full justify-start text-base text-destructive hover:text-destructive"
            onClick={logout}
          >
            Cerrar sesión
          </Button>
          <p className="mt-2 text-xs text-muted-foreground">
            Sesión: {user?.name || user?.email || 'Invitado'}
          </p>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-center border-b bg-background px-8 py-4 shadow-sm">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Estás en
            </p>
            <p className="text-xl font-semibold text-foreground">
              {currentSection}
            </p>
          </div>
        </header>

        <main className="flex-1 px-8 py-6">
          {/* Aquí se pinta la página actual: Principal / Perfil / Empresa */}
          <Outlet />
        </main>
      </div>
    </div>
  )
}
