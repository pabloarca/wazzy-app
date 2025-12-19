import { Globe2 } from 'lucide-react'
import { Button } from './ui/button'
import { useLanguage } from '../context/language-context'

export function LanguageToggle() {
  const { language, toggleLanguage, translations } = useLanguage()
  const isSpanish = language === 'es'

  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 shadow-sm backdrop-blur">
      <Globe2 className="h-4 w-4 text-muted-foreground" />
      <span className="text-xs text-muted-foreground">{translations.language.toggle}</span>
      <Button size="sm" variant="outline" className="h-8 px-3" onClick={toggleLanguage}>
        {isSpanish ? translations.language.shortLabel.en : translations.language.shortLabel.es}
      </Button>
    </div>
  )
}
