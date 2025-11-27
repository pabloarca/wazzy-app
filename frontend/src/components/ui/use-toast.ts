import { toast } from 'sonner'

type ToastInput = {
  title: string
  description?: string
  actionLabel?: string
  onAction?: () => void
}

export function useToast() {
  const notify = ({ title, description, actionLabel, onAction }: ToastInput) => {
    toast(title, {
      description,
      action: onAction && actionLabel ? {
        label: actionLabel,
        onClick: onAction,
      } : undefined,
    })
  }

  return { toast: notify }
}

export { toast }
