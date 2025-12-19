import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations, Language, TranslationResources } from '../lib/translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  translations: TranslationResources
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'wazzy-language'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'es'

    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === 'es' || stored === 'en') return stored

    const browserLang = window.navigator.language.toLowerCase()
    return browserLang.startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language)
    }
  }, [language])

  const setLanguage = (value: Language) => setLanguageState(value)
  const toggleLanguage = () =>
    setLanguageState((current) => (current === 'es' ? 'en' : 'es'))

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, translations: translations[language] }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}