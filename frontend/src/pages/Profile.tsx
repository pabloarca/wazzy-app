import { useQuery } from '@tanstack/react-query'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

import { useAuth, fetchProfile } from '../context/auth-context'
import { useLanguage } from '../context/language-context'

export function ProfilePage() {
  const { user, logout } = useAuth()

  const { translations } = useLanguage()

 
  const { data, isLoading } = useQuery({
    queryKey: ['/auth/me'],
    queryFn: fetchProfile,
    enabled: !!user,
  })

  const profile = data ?? user

  return (
    
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle>{translations.profile.title}</CardTitle>
            <CardDescription>{translations.profile.description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          {isLoading ? (
            <p>{translations.profile.loading}</p>
          ) : (
            <>
              <p>
                <span className="font-medium text-foreground">{translations.profile.email}:</span> {profile?.email}
              </p>
              <p>
                <span className="font-medium text-foreground">{translations.profile.name}:</span>{' '}
                {profile?.name ?? translations.profile.missingName}
              </p>
              <p>
                <span className="font-medium text-foreground">{translations.profile.id}:</span> {profile?.id ?? translations.profile.missingId}
              </p>
            </>
          )}
          <Button variant="destructive" onClick={logout}>
            {translations.profile.logout}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}