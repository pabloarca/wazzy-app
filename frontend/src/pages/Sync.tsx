import { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { MessageCircle, Loader2 } from 'lucide-react'
import { authorizedFetch } from '../lib/api-client'
import { useToast } from '../components/ui/use-toast'

const FB_APP_ID = import.meta.env.VITE_FB_APP_ID;
const FB_CONFIG_ID = import.meta.env.VITE_FB_CONFIG_ID;

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

export function SyncPage() {
  const [isSdkReady, setIsSdkReady] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (window.FB) {
      setIsSdkReady(true);
      return;
    }

    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : FB_APP_ID,
        cookie           : true,
        xfbml            : true,
        version          : 'v21.0'
      });
      
      window.FB.AppEvents.logPageView();

      
      window.FB.getLoginStatus(function(response: any) {
        console.log("Estado inicial de Facebook:", response);
        setIsSdkReady(true);
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement; 
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
  }, []);

  // Función para enviar el código a tu API
  const handleBackendExchange = async (code: string) => {
    setIsSyncing(true);
    try {
      console.log('🔄 Enviando código al backend...'); 
      
      // Enviamos el code al endpoint que creamos en el backend
      await authorizedFetch('/whatsapp/onboard', {
        method: 'POST',
        body: JSON.stringify({ code })
      });

      console.log('✅ Respuesta recibida del backend con éxito');
      
      toast({
        title: "¡Conexión Exitosa!",
        description: "Tu número de WhatsApp se ha vinculado correctamente.",
      });

    } catch (error) {
      console.error('❌ Error al conectar:', error);
      toast({
        title: "Error de conexión",
        description: "No pudimos vincular tu cuenta. Revisa la consola para más detalles.",
      });
    } finally {
      setIsSyncing(false);
    }
  }

  const launchWhatsAppSignup = () => {
    if (!isSdkReady || !window.FB) return;

    window.FB.login(function(response: any) {
      if (response.authResponse) {
        const code = response.authResponse.code;
        console.log('✅ CODE CONSEGUIDO DE META:', code);
        
        // Llamamos a la función que conecta con el backend
        handleBackendExchange(code);

      } else {
        console.log('❌ Cancelado por el usuario');
      }
    }, {
      config_id: FB_CONFIG_ID,
      response_type: 'code',
      override_default_response_type: true,
      extras: {
        setup: {},
        featureType: '',
        sessionInfoVersion: '2',
      }
    });
  }

  // Lógica para el texto del botón
  const buttonText = isSyncing 
    ? 'Vinculando...' 
    : isSdkReady 
      ? 'Conecta con WhatsApp Business' 
      : 'Cargando conexión...';

  return (
    <div className="flex h-full w-full items-center">
      <Button
        onClick={launchWhatsAppSignup}
        disabled={!isSdkReady || isSyncing} // Bloqueamos si no está listo o está cargando
        className="w-full justify-start rounded-xl border border-border bg-white px-8 py-12 text-left text-sm font-normal shadow-md hover:bg-slate-50 md:text-base disabled:opacity-70"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
            {/* Mostramos spinner si no está listo el SDK o si estamos enviando al backend */}
            {!isSdkReady || isSyncing ? (
                <Loader2 className="h-5 w-5 text-white animate-spin" />
            ) : (
                <MessageCircle className="h-5 w-5 text-white" />
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-foreground font-semibold md:text-lg">
              {buttonText}
            </span>
            <span className="text-xs text-muted-foreground md:text-sm">
              Conecta tu número de teléfono con Meta
            </span>
          </div>
        </div>
      </Button>
    </div>
  )
}