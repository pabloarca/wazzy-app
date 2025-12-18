import { useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { MessageCircle, Loader2 } from 'lucide-react' // Agregué un icono de carga opcional

const FB_APP_ID = import.meta.env.VITE_FB_APP_ID;
const FB_CONFIG_ID = import.meta.env.VITE_FB_CONFIG_ID;

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  }
}

export function SyncPage() {
  const [isSdkReady, setIsSdkReady] = useState(false); // Estado para saber si cargó Meta

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

      // --- PASO 3: CHECK LOGIN STATUS ---
      // Meta verifica automáticamente si el usuario ya tiene sesión activa
      window.FB.getLoginStatus(function(response: any) {
        console.log("Estado inicial de Facebook:", response);
        
        // Aquí habilitamos el botón porque Meta ya respondió
        setIsSdkReady(true);

        if (response.status === 'connected') {
           console.log("El usuario ya autorizó tu app anteriormente.");
           // OJO: Aún si está conectado, sugerimos dejar que el usuario 
           // haga clic en el botón para iniciar el flujo de WhatsApp si lo necesita.
        } else if (response.status === 'not_authorized') {
           console.log("Logueado en Facebook, pero no en tu app.");
        } else {
           console.log("No logueado en Facebook.");
        }
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

  const launchWhatsAppSignup = () => {
    if (!isSdkReady || !window.FB) return;

    window.FB.login(function(response: any) {
      if (response.authResponse) {
        const code = response.authResponse.code;
        console.log('✅ CODE CONSEGUIDO:', code);
        
        // AQUÍ ENVIARÁS EL CÓDIGO A TU BACKEND
        // sendToBackend(code)

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

  return (
    <div className="flex h-full w-full items-center">
      <Button
        onClick={launchWhatsAppSignup}
        disabled={!isSdkReady} // Deshabilitamos si no ha cargado el SDK
        className="w-full justify-start rounded-xl border border-border bg-white px-8 py-12 text-left text-sm font-normal shadow-md hover:bg-slate-50 md:text-base disabled:opacity-70"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
            {/* Si no está listo, mostramos un spinner, si sí, el icono de mensaje */}
            {!isSdkReady ? (
                <Loader2 className="h-5 w-5 text-white animate-spin" />
            ) : (
                <MessageCircle className="h-5 w-5 text-white" />
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-foreground font-semibold md:text-lg">
              {isSdkReady ? 'Conecta con WhatsApp Business' : 'Cargando conexión...'}
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