import { Link } from 'react-router-dom'
import { ShieldCheck, Mail, UserCheck, Database, Lock } from 'lucide-react'
import { useLanguage } from '../context/language-context'

const infoLinks = ['www.youtube.com/yt/about/', 'www.google.de/intl/policies/privacy/']

export function PrivacyPolicyPage() {
  const { translations, language } = useLanguage()
  const { privacy } = translations

  const overviewIcons = [Database, UserCheck, Lock, Mail]
  const formattedDate = new Date().toLocaleDateString(language === 'es' ? 'es-ES' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-lg bg-white p-8 shadow-sm">
        <header className="space-y-4 text-center">
          <div className="flex items-center justify-center gap-3 text-primary">
            <ShieldCheck className="h-10 w-10" />
            
            <span className="text-lg font-semibold">{privacy.badge}</span>
          </div>

          <div className="space-y-2">
            
            <h1 className="text-3xl font-bold tracking-tight">{privacy.heroTitle}</h1>
            <p className="text-muted-foreground">{privacy.heroSubtitle}</p>
          </div>
        </header>

        
        <section className="grid gap-6 md:grid-cols-2">
          
          {privacy.overviewCards.map((card, index) => {
            const Icon = overviewIcons[index]
            return (
              <article key={card.title} className="space-y-3 rounded-lg border border-border bg-muted/10 p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Icon className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </article>
            )
          })}
        </section>

        
        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">{privacy.intro.title}</h2>
            {privacy.intro.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            
            <h3 className="text-xl font-semibold">{privacy.controller.title}</h3>
            <div className="rounded-lg border border-border bg-muted/10 p-5">
              <ul className="space-y-2 text-sm text-muted-foreground">
                
                {privacy.controller.details.map((detail) => {
                  const isEmail = detail.value.includes('@')
                  const numericValue = detail.value.replace(/\D/g, '')
                  const isPhone = numericValue.length >= 6 && !isEmail

                  if (isEmail) {
                    return (
                      <li key={detail.label}>
                        <strong>{detail.label}:</strong>{' '}
                        <a className="text-primary underline" href={`mailto:${detail.value}`}>
                          {detail.value}
                        </a>
                      </li>
                    )
                  }

                  if (isPhone) {
                    return (
                      <li key={detail.label}>
                        <strong>{detail.label}:</strong>{' '}
                        <a className="text-primary underline" href={`tel:${numericValue}`}>
                          {detail.value}
                        </a>
                      </li>
                    )
                  }

                  return (
                    <li key={detail.label}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </li>
                  )
                })}
              </ul>
            </div>

            
            {privacy.controller.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">2. Purposes of Processing</h3>
            <h3 className="text-xl font-semibold">{privacy.purposes.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{privacy.purposes.intro}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
      
              {privacy.purposes.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
           
            <h3 className="text-xl font-semibold">{privacy.retention.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{privacy.retention.intro}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
             
              {privacy.retention.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{privacy.legalBasis.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{privacy.legalBasis.intro}</p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              
              {privacy.legalBasis.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          
          

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{privacy.recipients.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{privacy.recipients.intro}</p>

            
            {privacy.recipients.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              
              {privacy.recipients.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            
            <p className="text-sm leading-relaxed text-muted-foreground">{privacy.recipients.closing}</p>
          </div>

          <div className="space-y-3">
            
            <h3 className="text-xl font-semibold">{privacy.rights.title}</h3>
            {privacy.rights.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-3">
           
            <h3 className="text-xl font-semibold">{privacy.social.title}</h3>
            {privacy.social.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            
            <h3 className="text-xl font-semibold">{privacy.cookies.title}</h3>
            {privacy.cookies.paragraphs.map((paragraph, index) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
                {index === 5 && (
                  <>
                    <br />
                    {infoLinks.map((link) => (
                      <span key={link} className="block text-primary underline">
                        {link}
                      </span>
                    ))}
                  </>
                )}
              </p>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">{privacy.waba.title}</h3>
            {privacy.waba.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          
        </section>

        <footer className="flex flex-col gap-3 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            
            {privacy.footer.updatedLabel}:{' '}
            {formattedDate}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            
            <span>{privacy.footer.help}</span>
            <Link to="/login" className="text-primary hover:underline">
             
              {privacy.footer.backToLogin}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}