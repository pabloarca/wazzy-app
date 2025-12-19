const { prisma } = require('./auth'); 

async function exchangeCodeForToken(req, res) {
  try {
    const { code } = req.body;
    const userId = req.userId;

    if (!code) return res.status(400).json({ error: 'Code is required' });

    console.log(`🔄 [1/3] Canjeando código para usuario ${userId}...`);

    // 1. Canjear Código por Token de Usuario (System User Token)
    const params = new URLSearchParams({
      client_id: process.env.FB_APP_ID,
      client_secret: process.env.FB_APP_SECRET,
      code: code,
    });

    const tokenResp = await fetch(
      `https://graph.facebook.com/v21.0/oauth/access_token?${params.toString()}`
    );
    const tokenData = await tokenResp.json();

    if (tokenData.error) {
      console.error('❌ Error Token:', tokenData.error);
      return res.status(400).json({ error: tokenData.error.message });
    }

    const { access_token } = tokenData;
    console.log('✅ [2/3] Token de usuario conseguido.');

    let wabaId = null;

    // 2. Inspeccionar Token usando un "App Access Token" (Llave Maestra)
    console.log('🕵️ [3/3] Inspeccionando token con App Token...');
    
    // Generamos el App Token al vuelo (APP_ID|APP_SECRET)
    const appAccessToken = `${process.env.FB_APP_ID}|${process.env.FB_APP_SECRET}`;

    // Llamamos a debug_token usando la llave maestra
    const debugResp = await fetch(
      `https://graph.facebook.com/v21.0/debug_token?input_token=${access_token}&access_token=${appAccessToken}`
    );
    const debugData = await debugResp.json();

    // Verificamos si hay error en la inspección
    if (debugData.error) {
        console.error('❌ Error en debug_token:', debugData.error);
    } else {
        // Buscamos ID en granular_scopes
        const scopes = debugData.data?.granular_scopes || [];
        const whatsappScope = scopes.find(s => s.scope === 'whatsapp_business_management');
        
        if (whatsappScope && whatsappScope.target_ids && whatsappScope.target_ids.length > 0) {
            wabaId = whatsappScope.target_ids[0];
            console.log('🎯 WABA ID encontrado:', wabaId);
        } else {
            console.log('⚠️ No se encontró whatsapp_business_management en los scopes.');
            console.log('Scopes recibidos:', JSON.stringify(scopes));
        }
    }

    // 3. Guardar en Base de Datos
    await prisma.user.update({
      where: { id: userId },
      data: { 
        whatsappToken: access_token,
        whatsappWabaId: wabaId, 
        whatsappConnectedAt: new Date()
      }
    });

    console.log(`✅ Proceso finalizado. Guardado en DB.`);

    return res.json({ 
        success: true, 
        wabaId,
    });

  } catch (error) {
    console.error('Error interno:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { exchangeCodeForToken };