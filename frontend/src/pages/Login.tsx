import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useMemo } from 'react'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../components/ui/form'
import { Input } from '../components/ui/input'
import { useToast } from '../components/ui/use-toast'
import { useAuth } from '../context/auth-context'
import { PasswordInput } from '../components/ui/password-input'
import { useLanguage } from '../context/language-context'

export type LoginFormValues = {
  email: string
  password: string
}

export function LoginPage() {
  const { translations } = useLanguage()
  const { login } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const loginSchema = useMemo(
    () =>
      z.object({
        email: z.string().email(translations.login.invalidEmail),
        password: z.string().min(6, translations.login.minPassword),
      }),
    [translations.login.invalidEmail, translations.login.minPassword]
  )

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await login(values)
      toast({ title: translations.login.successTitle, description: translations.login.successDescription })
      navigate('/dashboard')
    } catch (error) {
      toast({ title: translations.login.errorTitle, description: translations.login.errorDescription })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{translations.login.title}</CardTitle>
          <CardDescription>{translations.login.description}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.login.emailLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={translations.login.emailPlaceholder} type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.login.passwordLabel}</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder={translations.login.passwordPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-[#77F5BD] text-black hover:bg-[#69dfae]">
                {translations.login.submit}
              </Button>
              <p className="text-sm text-muted-foreground">
                {translations.login.question}{' '}
                <Link className="text-primary hover:underline" to="/register">
                  {translations.login.cta}
                </Link>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}
