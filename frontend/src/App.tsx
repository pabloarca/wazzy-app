import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute' 
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { DashboardPage } from './pages/Dashboard'
import { ProfilePage } from './pages/Profile'
import { CompanyPage } from './pages/Company'
import { PanelLayout } from './components/PanelLayout'
import { SyncPage } from './pages/Sync'
import { PrivacyPolicyPage } from './pages/Privacy'
import { LanguageToggle } from './components/LanguageToogle'

function App() {
  return (
    
    <>
    
      <div className="fixed right-4 top-4 z-50">
        <LanguageToggle />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/privacidad" element={<PrivacyPolicyPage />} />


      
      <Route element={<ProtectedRoute />}>
          <Route element={<PanelLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/empresa" element={<CompanyPage />} />
            <Route path="/sincronizar" element={<SyncPage />} />
          </Route>
        </Route>

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
    </>
  )
}

export default App