import { Button } from '../components/ui/button'
import { MessageCircle } from 'lucide-react'

export function SyncPage() {
  return (
    <div className="flex h-full w-full items-center">
      <Button
        className="w-full justify-start rounded-xl border border-border bg-white px-8 py-12 text-left text-sm font-normal shadow-md hover:bg-slate-50 md:text-base"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
            <MessageCircle className="h-5 w-5 text-white" />
          </div>

          <div className="flex flex-col">
            <span className="text-foreground font-semibold md:text-lg">
              Conecta con WhatsApp Business
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
