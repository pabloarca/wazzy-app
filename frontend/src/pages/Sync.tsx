import { useEffect, useMemo, useState } from 'react'
import { Button } from '../components/ui/button'
import { MessageCircle, Loader2 } from 'lucide-react'
import { authorizedFetch } from '../lib/api-client'
import { useToast } from '../components/ui/use-toast'
import { useLanguage } from '../context/language-context'


const FB_APP_ID = import.meta.env.VITE_FB_APP_ID
const FB_CONFIG_ID = import.meta.env.VITE_FB_CONFIG_ID

declare global {
  interface Window {
    
    fbAsyncInit: () => void
    FB: any
  }
}

export function SyncPage() {  
  const [isSdkReady, setIsSdkReady] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)
  const { toast } = useToast()
  const { translations } = useLanguage()

  useEffect(() => {
    if (window.FB) {
      setIsSdkReady(true)
      return
    }


    window.fbAsyncInit = function () {
      window.FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v21.0',
      })

      window.FB.AppEvents.logPageView()

      window.FB.getLoginStatus(function (response: any) {
        console.log('Estado inicial de Facebook:', response)
        setIsSdkReady(true)
      })
    }

    ;(function (d, s, id) {
      const js: HTMLScriptElement | null = d.getElementById(id) as HTMLScriptElement | null
      const fjs = d.getElementsByTagName(s)[0]
      if (js) return
      const script = d.createElement(s) as HTMLScriptElement
      script.id = id
      script.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode?.insertBefore(script, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])

  const handleBackendExchange = async (code: string) => {
    
    setIsSyncing(true)
    try {
      await authorizedFetch('/whatsapp/onboard', {
        method: 'POST',
        body: JSON.stringify({ code }),
      })

    
      toast({
        title: translations.sync.successTitle,
        description: translations.sync.successDescription,
      })
    } catch (error) {
      console.error('Error al conectar:', error)
      toast({
        title: translations.sync.errorTitle,
        description: translations.sync.errorDescription,
      })
    } finally {
      setIsSyncing(false)
    }
  }

  const launchWhatsAppSignup = () => {
    if (!isSdkReady || !window.FB) return

    window.FB.login(
      function (response: any) {
        if (response.authResponse) {
          const code = response.authResponse.code

          handleBackendExchange(code)
        } else {
          console.log('❌ Cancelado por el usuario')
        }
      },
      {
        config_id: FB_CONFIG_ID,
        response_type: 'code',
        override_default_response_type: true,
        extras: {
          setup: {},
          featureType: '',
          sessionInfoVersion: '2',
        },
      }
    
    )
  }

 

  const buttonText = useMemo(() => {
    if (isSyncing) return translations.sync.buttonSyncing
    if (!isSdkReady) return translations.sync.buttonLoading
    return translations.sync.buttonReady
  }, [isSdkReady, isSyncing, translations.sync])

  return (
    <div className="flex h-full w-full items-center">
      <Button
        onClick={launchWhatsAppSignup}
        
        disabled={!isSdkReady || isSyncing}
        className="w-full justify-start rounded-xl border border-border bg-white px-8 py-12 text-left text-sm font-normal shadow-md hover:bg-slate-50 md:text-base disabled:opacity-70"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
            
            {!isSdkReady || isSyncing ? (
                
              <Loader2 className="h-5 w-5 animate-spin text-white" />
            ) : (
                
              <MessageCircle className="h-5 w-5 text-white" />
            )}
          </div>

          <div className="flex flex-col">
            
            <span className="text-foreground font-semibold md:text-lg">{buttonText}</span>
            <span className="text-xs text-muted-foreground md:text-sm">{translations.sync.subtitle}</span>
          </div>
        </div>
      </Button>
    </div>
  )

}