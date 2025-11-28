import { useQuery } from '@tanstack/react-query'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useToast } from '../components/ui/use-toast'
import { useAuth, fetchProfile } from '../context/auth-context'
import { PanelLayout } from '../components/PanelLayout'

export function ProfilePage() {
  const { user, logout } = useAuth()
  const { toast } = useToast()

  const { data, isLoading, refetch } = useQuery({
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
              <CardTitle>Perfil</CardTitle>
              <CardDescription>Información de la cuenta</CardDescription>
            </div>
            <Button
              variant="secondary"
              onClick={() =>
                refetch().catch(() =>
                  toast({
                    title: 'No se pudo actualizar',
                  })
                )
              }
            >
              Actualizar
            </Button>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            {isLoading ? (
              <p>Cargando perfil...</p>
            ) : (
              <>
                <p>
                  <span className="font-medium text-foreground">Correo:</span> {profile?.email}
                </p>
                <p>
                  <span className="font-medium text-foreground">Nombre:</span> {profile?.name ?? 'Sin nombre'}
                </p>
                <p>
                  <span className="font-medium text-foreground">ID:</span> {profile?.id ?? 'N/D'}
                </p>
              </>
            )}
            <Button variant="destructive" onClick={logout}>
              Cerrar sesión
            </Button>
          </CardContent>
        </Card>
      </div>
    
  )
}
