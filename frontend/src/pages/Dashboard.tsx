import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useAuth } from '../context/auth-context'
import { useLanguage } from '../context/language-context'

export function DashboardPage() {
  const { user, logout } = useAuth()
  const { translations } = useLanguage()

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <header className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{translations.dashboard.welcome}</p>
        <h1 className="text-3xl font-semibold">{user?.name || user?.email}</h1>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{translations.dashboard.panelTitle}</CardTitle>
            <CardDescription>{translations.dashboard.panelDescription}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                {translations.dashboard.userLabel}: {user?.email}
              </li>
              
              
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{translations.dashboard.quickActions}</CardTitle>
            <CardDescription>{translations.dashboard.quickActionsDescription}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 md:flex-row">
            
            <Button
              asChild
              className="flex-3 justify-start rounded-xl border border-border bg-white px-5 py-4 text-sm font-semibold text-foreground shadow-md hover:bg-slate-50 md:text-base"
            >
              
              <Link to="/sincronizar" className="flex items-center gap-3">
                <span className=" items-center justify-center rounded-full bg-emerald-500">
                  <MessageCircle className="h-5 w-5 text-white" />
                </span>
                <span>{translations.dashboard.syncWithMeta}</span>
              </Link>
            </Button>

            <Button variant="secondary" onClick={logout}>
              {translations.dashboard.logout}
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

