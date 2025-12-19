import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { AuthProvider } from './context/auth-context'
import { LanguageProvider } from './context/language-context'
import { createQueryClient } from './lib/query-client'
import { Toaster } from './components/ui/toaster'

const queryClient = createQueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </LanguageProvider>
  </React.StrictMode>
)
