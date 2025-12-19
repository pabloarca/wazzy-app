import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useLanguage } from '../context/language-context'

export function CompanyPage() {
  const { translations } = useLanguage()

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <header className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">{translations.company.space}</p>
        <h1 className="text-3xl font-semibold">{translations.company.title}</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>{translations.company.cardTitle}</CardTitle>
          <CardDescription>{translations.company.cardDescription}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-muted-foreground">
          <p>{translations.company.paragraphOne}</p>
          <p className="text-foreground">{translations.company.paragraphTwo}</p>
        </CardContent>
      </Card>
    </div>
  )
}
