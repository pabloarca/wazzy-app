import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'


export function CompanyPage() {
  return (
    
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <header className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">Espacio de empresa</p>
          <h1 className="text-3xl font-semibold">Información de la empresa</h1>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Datos básicos</CardTitle>
            <CardDescription>Resumen de tu organización</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>Agrega aquí información de tu empresa, equipos y contactos principales.</p>
            <p className="text-foreground">Próximamente podrás ver métricas y accesos rápidos.</p>
          </CardContent>
        </Card>
      </div>
    
  )
  }