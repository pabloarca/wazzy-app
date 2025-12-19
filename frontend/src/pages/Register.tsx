import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
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

export type RegisterFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean 
}

export function RegisterPage() {
  const { translations } = useLanguage()
  const { register: registerUser } = useAuth()
  const navigate = useNavigate()
  const { toast } = useToast()

  const registerSchema = useMemo(
    () =>
      z
        .object({
          name: z.string().min(2, translations.register.minName),
          email: z.string().email(translations.register.invalidEmail),
          password: z.string().min(6, translations.register.minPassword),
          confirmPassword: z.string().min(6, translations.register.confirmPassword),
          
          acceptTerms: z.literal(true, {
            errorMap: () => ({ message: translations.register.acceptTermsError }),
          }),
        })
        .refine((data) => data.password === data.confirmPassword, {
          message: translations.register.passwordMismatch,
          path: ['confirmPassword'],
        }),
    [
      translations.register, 
    ]
  )

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { 
      name: '', 
      email: '', 
      password: '', 
      confirmPassword: '', 
      acceptTerms: false 
    },
  })

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      await registerUser({ name: values.name, email: values.email, password: values.password })
     
      toast({ title: translations.register.successTitle, description: translations.register.successDescription })
      navigate('/dashboard')
    } catch (error) {
      toast({ title: translations.register.errorTitle, description: (error as Error).message || translations.register.errorDescription })
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{translations.register.title}</CardTitle>
          <CardDescription>{translations.register.description}</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.register.nameLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={translations.register.namePlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.register.emailLabel}</FormLabel>
                    <FormControl>
                      <Input placeholder={translations.register.emailPlaceholder} type="email" {...field} />
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
                    <FormLabel>{translations.register.passwordLabel}</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder={translations.register.passwordPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{translations.register.confirmPasswordLabel}</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder={translations.register.passwordPlaceholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="h-4 w-4 rounded border-primary text-primary focus:ring-primary mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="cursor-pointer font-normal">
                        {translations.register.acceptTermsPrefix}{' '}
                        <Link 
                          to="/privacidad" 
                          target="_blank" 
                          className="font-semibold text-primary underline hover:text-primary/80"
                        >
                          {translations.register.termsLink}
                        </Link>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full bg-[#77F5BD] text-black hover:bg-[#69dfae]">
                {translations.register.submit}
              </Button>
              <p className="text-sm text-muted-foreground">
                {translations.register.question}{' '}
                <Link className="text-primary hover:underline" to="/login">
                  {translations.register.cta}
                </Link>
              </p>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  )
}