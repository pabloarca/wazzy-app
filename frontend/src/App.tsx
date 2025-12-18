import { Navigate, Route, Routes } from 'react-router-dom'
// import { ProtectedRoute } from './components/ProtectedRoute' // <-- Opcional: Puedes comentar esto
import { LoginPage } from './pages/Login'
import { RegisterPage } from './pages/Register'
import { DashboardPage } from './pages/Dashboard'
import { ProfilePage } from './pages/Profile'
import { CompanyPage } from './pages/Company'
import { PanelLayout } from './components/PanelLayout'
import { SyncPage } from './pages/Sync'
import { PrivacyPolicyPage } from './pages/Privacy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/privacidad" element={<PrivacyPolicyPage />} />

      {/* --- INICIO DEL BY-PASS --- */}
      {/* Comentamos el Guardián de seguridad para que deje pasar siempre */}
      {/* <Route element={<ProtectedRoute />}> */}

        {/* Mantenemos el Layout visual, pero ahora es accesible públicamente */}
        <Route element={<PanelLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/empresa" element={<CompanyPage />} />
          <Route path="/sincronizar" element={<SyncPage />} />
        </Route>

      {/* Cerramos el comentario del Guardián */}
      {/* </Route> */}
      {/* --- FIN DEL BY-PASS --- */}

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}

export default App