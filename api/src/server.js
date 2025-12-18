require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {
  handleRegister,
  handleLogin,
  handleRefresh,
  handleLogout,
  handleMe,
  authenticate,
} = require('./auth');

// Importamos el controlador de WhatsApp
const { exchangeCodeForToken } = require('./whatsapp'); 

// --- ESTA ES LA LÍNEA QUE FALTABA ---
const app = express(); 
// ------------------------------------

const clientUrl = process.env.CLIENT_URL;

app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Rutas de Autenticación
app.post('/auth/register', handleRegister);
app.post('/auth/login', handleLogin);
app.post('/auth/refresh', handleRefresh);
app.post('/auth/logout', handleLogout);
app.get('/me', authenticate, handleMe);

// Ruta de WhatsApp Onboarding
app.post('/whatsapp/onboard', authenticate, exchangeCodeForToken);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`API running on port ${port}`);
});