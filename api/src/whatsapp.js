const { prisma } = require('./auth'); 

// Intercambia el código temporal por un token de acceso permanente
async function exchangeCodeForToken(req, res) {
  try {
    const { code } = req.body;
    const userId = req.userId; // Viene del middleware 'authenticate'

    if (!code) {
      return res.status(400).json({ error: 'Code is required' });
    }

    console.log(`🔄 Iniciando intercambio de token para usuario ${userId}...`);

    // 1. Llamar a Meta para canjear el código
    const params = new URLSearchParams({
      client_id: process.env.FB_APP_ID,
      client_secret: process.env.FB_APP_SECRET,
      code: code,
    });

    const response = await fetch(
      `https://graph.facebook.com/v21.0/oauth/access_token?${params.toString()}`
    );

    const data = await response.json();

    if (data.error) {
      console.error('❌ Error de Meta:', data.error);
      return res.status(400).json({ error: data.error.message });
    }

    const { access_token, id: system_user_id } = data;

    // 2. (Opcional pero recomendado) Obtener detalles de la cuenta de WhatsApp conectada
    // Esto te ayuda a saber qué WABA ID conectó el usuario
    const debugTokenParams = new URLSearchParams({
        input_token: access_token,
        access_token: access_token // Usamos el mismo token para inspeccionarse a sí mismo
    });
    
 

    // 3. Guardar el token en la base de datos asociado al usuario
    
    await prisma.user.update({
      where: { id: userId },
      data: { 
        whatsappToken: access_token,
        whatsappConnectedAt: new Date()
      }
    });

    console.log('✅ Token guardado en PostgreSQL para el usuario', userId);

    return res.json({ 
      success: true, 
      message: 'WhatsApp connected successfully',
    });

  } catch (error) {
    console.error('Error interno:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  exchangeCodeForToken
};