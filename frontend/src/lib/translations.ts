export type Language = 'es' | 'en'

export type TranslationResources = {
  language: {
    toggle: string
    english: string
    spanish: string
    shortLabel: {
      es: string
      en: string
    }
  }
  nav: {
    dashboard: string
    profile: string
    company: string
    sync: string
    sectionLabel: string
    logout: string
    session: string
    guest: string
    headerPrefix: string
  }
  login: {
    title: string
    description: string
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    submit: string
    question: string
    cta: string
    successTitle: string
    successDescription: string
    errorTitle: string
    errorDescription: string
    invalidEmail: string
    minPassword: string
  }
  register: {
    title: string
    description: string
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    passwordLabel: string
    confirmPasswordLabel: string
    passwordPlaceholder: string
    submit: string
    question: string
    cta: string
    successTitle: string
    successDescription: string
    errorTitle: string
    errorDescription: string
    invalidEmail: string
    minPassword: string
    confirmPassword: string
    passwordMismatch: string
    minName: string
    acceptTermsPrefix: string
    termsLink: string
    acceptTermsError: string
    
  }
  dashboard: {
    welcome: string
    quickActions: string
    quickActionsDescription: string
    panelTitle: string
    panelDescription: string
    userLabel: string
    idLabel: string
    syncWithMeta: string
    logout: string
  }
  profile: {
    title: string
    description: string
    loading: string
    email: string
    name: string
    missingName: string
    id: string
    missingId: string
    logout: string
  }
  company: {
    space: string
    title: string
    cardTitle: string
    cardDescription: string
    paragraphOne: string
    paragraphTwo: string
  }
  sync: {
    successTitle: string
    successDescription: string
    errorTitle: string
    errorDescription: string
    buttonReady: string
    buttonLoading: string
    buttonSyncing: string
    subtitle: string
  }
  privacy: {
    badge: string
    heroTitle: string
    heroSubtitle: string
    overviewCards: { title: string; description: string }[]
    intro: {
      title: string
      paragraphs: string[]
    }
    controller: {
      title: string
      details: { label: string; value: string }[]
      paragraphs: string[]
    }
    purposes: {
      title: string
      intro: string
      list: string[]
    }
    retention: {
      title: string
      intro: string
      list: string[]
    }
    legalBasis: {
      title: string
      intro: string
      list: string[]
    }
    recipients: {
      title: string
      intro: string
      paragraphs: string[]
      list: string[]
      closing: string
    }
    rights: {
      title: string
      paragraphs: string[]
    }
    social: {
      title: string
      paragraphs: string[]
    }
    cookies: {
      title: string
      paragraphs: string[]
    }
    waba: {
      title: string
      paragraphs: string[]
    }
    youtube: {
      paragraphs: string[]
      provider: string
      infoLinks: string[]
      buttons: string
      safeguards: string
    }
    footer: {
      updatedLabel: string
      help: string
      backToLogin: string
    }
  }
}

export const translations: Record<Language, TranslationResources> = {
  en: {
    language: {
      toggle: 'English / Español',
      english: 'English',
      spanish: 'Spanish',
      shortLabel: { es: 'ES', en: 'EN' },
    },
    nav: {
      dashboard: 'Home',
      profile: 'Profile',
      company: 'Company',
      sync: 'Sync',
      sectionLabel: 'Panel',
      logout: 'Log out',
      session: 'Session',
      guest: 'Guest',
      headerPrefix: 'You are in',
    },
    login: {
      title: 'Sign in',
      description: 'Access your account to continue',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Password',
      passwordPlaceholder: '********',
      submit: 'Sign in',
      question: "Don't have an account?",
      cta: 'Create account',
      successTitle: 'Signed in',
      successDescription: 'Welcome back',
      errorTitle: "Couldn't sign in",
      errorDescription: 'Please check your details and try again.',
      invalidEmail: 'Invalid email',
      minPassword: 'Minimum 6 characters',
    },
    register: {
      title: 'Create account',
      description: 'Complete your details to register',
      nameLabel: 'Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm password',
      passwordPlaceholder: '********',
      submit: 'Create account',
      question: 'Already have an account?',
      cta: 'Sign in',
      successTitle: 'Registration completed',
      successDescription: 'You can now use your account',
      errorTitle: 'Registration error',
      errorDescription: 'Please review your information and try again.',
      invalidEmail: 'Invalid email',
      minPassword: 'Minimum 6 characters',
      confirmPassword: 'Confirm the password',
      passwordMismatch: 'Passwords do not match',
      minName: 'Enter your name',
      acceptTermsPrefix: 'I accept the',
      termsLink: 'terms and conditions',
      acceptTermsError: 'You must accept the terms and conditions',

    },
    dashboard: {
      welcome: 'Welcome',
      quickActions: 'Quick actions',
      quickActionsDescription: 'Manage your session and profile',
      panelTitle: 'Panel',
      panelDescription: 'Account summary',
      userLabel: 'User',
      idLabel: 'ID',
      syncWithMeta: 'Sync with Meta',
      logout: 'Log out',
    },
    profile: {
      title: 'Profile',
      description: 'Account information',
      loading: 'Loading profile...',
      email: 'Email',
      name: 'Name',
      missingName: 'No name',
      id: 'ID',
      missingId: 'N/A',
      logout: 'Log out',
    },
    company: {
      space: 'Company space',
      title: 'Company information',
      cardTitle: 'Basic data',
      cardDescription: 'Your organization summary',
      paragraphOne: 'Add company information here, including teams and key contacts.',
      paragraphTwo: 'Soon you will see shortcuts and metrics in this area.',
    },
    sync: {
      successTitle: 'Connection successful',
      successDescription: 'Your WhatsApp number was linked correctly.',
      errorTitle: 'Connection error',
      errorDescription: 'We could not link your account. Check the console for more details.',
      buttonReady: 'Connect with WhatsApp Business',
      buttonLoading: 'Loading connection...',
      buttonSyncing: 'Linking...',
      subtitle: 'Connect your phone number with Meta',
    },
    privacy: {
      badge: 'Privacy Policy',
      heroTitle: 'Your privacy matters to us',
      heroSubtitle:
        'This page explains what personal data we collect, why we collect it, how long we keep it, and your rights under applicable data protection laws. This policy is publicly accessible and does not require authentication.',
      overviewCards: [
        {
          title: 'Who we are',
          description:
            'The Data Controller for this website (https://app.wazzy.space/) is Wazzy Chatbot. Contact details are included below.',
        },
        {
          title: 'Why we process data',
          description:
            'We manage communications, operate the website, provide services, comply with obligations, and improve our offering (including analytics and cookies, where applicable).',
        },
        {
          title: 'Security and retention',
          description:
            'We apply appropriate safeguards and keep data only as long as needed for the described purposes or as required by law.',
        },
        {
          title: 'Your rights',
          description:
            'Request access, correction, deletion, restriction, portability, or object to processing in certain cases. See “Your Rights” for details.',
        },
        
      ],
      intro: {
        title: 'Privacy Policy',
        paragraphs: [
          'We believe your privacy is important. From the perspective of the person responsible for this website, the fact that you read and show interest in this section demonstrates your interest in the website itself. You should review privacy information whenever you visit new websites, especially if they request personal data. In this document, we explain what personal data we collect, on what basis, how long it will be stored, and other matters related to data protection regulations, in compliance with applicable law.',
          'We encourage you to read these terms carefully before providing your personal data. For individuals under 14 years of age, parental or guardian consent is required for the processing of their data. If you are under 14, you should not submit your data on this website unless your parents or guardians authorise it. Under no circumstances will data be collected from minors relating to professional or financial circumstances, or the privacy of other family members, without their consent.',
          'If you have any questions, please contact us using the email address of the Data Controller or, where applicable, the Data Protection Officer. The Controller maintains an ongoing commitment to privacy and follows best practices in the processing of your personal data.',
          'In accordance with applicable data protection rules (EU Regulation 2016/679 of 27 April 2016 — GDPR), Wazzy Chatbots (the “Owner”), owner of the website https://app.wazzy.space/ (the “Website”), sets out this Privacy Policy governing the processing of personal data. This policy applies without prejudice to the corresponding Legal Notice and Cookie Policy.',
        ],
      },
      controller: {
        title: '1. Data Controller',
        details: [
          { label: 'Data Controller', value: 'Wazzy Chatbots' },
          { label: 'Address', value: 'Cardanachama 10, Allariz, GALICIA  (Spain)' },
          { label: 'Email', value: 'juliovaldem@gmail.com' },
          { label: 'Phone', value: '681 947 487' },
        ],
        paragraphs: [
          'We aim to protect users’ privacy. You should know that we will never request personal information unless it is truly necessary to provide services, we will never share it with third parties (except where essential, and only on legitimate grounds previously communicated), and we will never use your data for purposes unrelated to the contractual relationship.',
          'This entity complies with Spanish Organic Law 3/2018 (LOPDGDD), EU Regulation 2016/679 (GDPR), and Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSICE/LSSI), as well as any implementing or supplementary rules.',
          'Accordingly, any data requested through contact forms, data provided by simply accessing the Website (cookies), data related to comments on corporate social media pages linked from the Website, personal data entered into enabled sections, or data provided through other communication channels (e.g., email), will be processed by the Data Controller in accordance with applicable law.',
        ],
      },
      purposes: {
        title: '2. Purposes of Processing',
        intro:
          'When you visit this Website, you may provide personal data. Such information may include personal data such as your IP address, name, physical address, email address, phone number, and other information. The purposes for which we process your data depend on the context or section in which it is collected, including:',
        list: [
          'Social media interactions: If you provide information through social networks linked from this Website, this entity acts as the Data Controller for the data provided within that context (e.g., photos uploaded by us or third parties, comments you make on our posts, etc.). We will process that information solely in relation to your enquiry, management, or comment, and within the social network and its context. We will not extract such data unless we obtain your consent. Please note that your use of these platforms is subject to their own terms, and they may process your data under conditions different from those described here. The official profiles linked from the Website exist to help you learn about our activity and to provide an alternative communication channel; however, we disclaim responsibility for the processing carried out by the companies that operate those social networks.',
          'Cookies and automatic data collection: Additional purposes may be related to cookie management or information we collect automatically when you visit the Website, including technical operation, analytics, and service improvement, as described in the Cookie Policy.',
        ],
      },
      retention: {
        title: '3. Data Retention Period',
        intro: 'Retention depends on the processing activity:',
        list: [
          'Cookie-related data is retained for the period indicated in the Cookie Policy.',
          'Data you provide through the channels made available by the Website (forms, email) will be kept for as long as the relationship with you remains in place or until you withdraw consent where applicable. We may then retain data where there is a legal obligation to do so, and in any case for the minimum period required depending on the relationship or processing activity. For example, invoicing data may be retained for tax and accounting purposes for 6 years. There is also a 5-year period under Article 1964 of the Spanish Civil Code for personal actions without a specific limitation period.',
          'Data included on social networks linked from the Website will be retained by us until you withdraw your consent. However, the entities responsible for those platforms may retain such data under their own policies, for which we accept no responsibility.',
        ],
      },
      legalBasis: {
        title: '4. Legal Basis for Processing',
        intro: 'The legal basis depends on the processing activity and may include:',
        list: [
          'Compliance with one or more legal obligations (e.g., tax obligations relating to invoices issued).',
          'Your consent to process your data under the terms described (e.g., by ticking an acceptance box or signing an information document presented prior to processing).',
          'A pre-contractual or contractual relationship (e.g., when you provide data relating to an entrusted request, so we can respond appropriately).',
        ],
      },
      recipients: {
        title: '5. Recipients of Your Data',
        intro:
          'Whenever we subcontract third parties to provide our services, we adopt appropriate legal safeguards and technical and organisational measures to ensure the protection of personal data in accordance with relevant law.',
        paragraphs: [
          'In addition to the Data Controller described above, data may be processed by other entities depending on the nature of the processing, including:',
        ],
        list: [
          'Social network operators linked from this Website, if you provide information through those networks.',
          'Service providers related to the Website, such as hosting providers (in our case, with data centres located within the European Economic Area).',
          'Public bodies, tax authorities, courts and tribunals, and in general competent authorities, where the Data Controller is legally obliged to disclose data.',
          'Certain cookie providers whose technologies may store information related to your IP address and browsing habits, as described in the Cookie Policy.',
        ],
        closing:
          'We apply strict supplier selection criteria to ensure compliance with data protection obligations and, where required, enter into data processing agreements imposing obligations including appropriate technical and organisational measures, processing only for agreed purposes and documented instructions, and deletion or return of data once services are completed.',
      },
      rights: {
        title: '6. Your Rights',
        paragraphs: [
          'You have the right to obtain confirmation as to whether we process personal data concerning you. You also have the right to access your personal data, request rectification of inaccurate data, or request erasure where, among other reasons, the data is no longer necessary for the purposes for which it was collected.',
          'In certain circumstances, you may request restriction of processing, in which case we will keep the data only for the exercise or defence of legal claims. In other circumstances, and for reasons related to your particular situation, you may object to processing.',
          'Where processing is based on consent, you have the right to withdraw your consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal. If you request it, we will cease processing your data except for compelling legitimate grounds, or the exercise or defence of possible claims.',
          'You may also request data portability so that your data can be transferred to another controller. Specific forms have been prepared and are available upon request to exercise your rights of access, rectification, erasure, restriction, objection, objection to automated individual decision-making (including profiling), and portability.',
          'If you believe your rights have not been properly addressed, you may lodge a complaint with the supervisory authority: the Spanish Data Protection Agency (Agencia Española de Protección de Datos — AEPD), Jorge Juan 6, 28001 Madrid, or via its electronic office: https://sedeagpd.gob.es',
          'If you prefer, you may contact us by post at the address listed above or by email, including a photocopy of your DNI/NIF or equivalent document to verify your identity, and stating the right you wish to exercise.',
        ],
      },
      social: {
        title: '7. Social Media Specific Information',
        paragraphs: [
          'The Owner maintains pages and/or profiles on various social networks linked from this Website. The Owner is not responsible for content posted by third parties on those networks. The use and processing of data by third parties on social networks is subject to their own general or specific terms, which may differ from this policy. We recommend reading those policies carefully.',
          'Our online presence includes facebook.com and Instagram, both operated by Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA. You can find us there and click “Like.” If you are logged in to Facebook, Facebook may associate your browsing with your account. For details on data collection, processing and usage by Facebook, as well as your rights and privacy settings, please consult Facebook’s privacy policy: http://www.facebook.com/policy.php',
          'By using these social networks and communicating with us, you authorise us to use your personal data solely within the relevant platform for managing our professional page and the bidirectional communications we may have with followers through chat, messages, or other tools made available by Facebook now or in the future. Accordingly: (1) we process data within that social network to manage the list of people who like our page; and (2) you may receive information related to events, activities, and promotions. Outside these cases, we do not use your data.',
          'Regarding Twitter: when a user follows us, we may access information about followers, specifically the username, photo (if the user has set one), and comments or “Tweets,” as well as other profile information such as followed accounts and followers. We do not use such information beyond managing and responding to “Tweets” or messages exchanged. The user’s “bio” may be visible to us. Users are responsible for how they use social networks. You can consult Twitter’s privacy policy here: https://twitter.com/es/privacy',
          'Twitter uses data for profiling, communication, connection, and creation and exchange of content between users and between users and the public. Tweets are short messages that can be created and sent via Twitter. Tweets are displayed to followers, Twitter users, and the public. We aim to share content through this network, which is why we have integrated it.',
          'Service provider: Twitter, Inc., 6805777875 Market Street, Suite 900, San Francisco, CA 94103, USA.',
          'If buttons are embedded on our Website, Twitter may automatically collect personal information. Twitter may receive personal data such as the user’s IP address and browsing habits for the purpose of optimising targeted advertising. Twitter may store this information in the United States and share it with third parties where appropriate. If the user is logged in, Twitter may recognise the user’s activities. Embedded buttons may allow Twitter to associate activity with the user’s profile, store it, and process it, which may involve transferring data outside the EEA. The privacy safeguards offered by Twitter can be reviewed in its privacy policy.',
        ],
      },
      cookies: {
        title: '8. Cookies and Other Matters',
        paragraphs: [
          'As a user, you are solely responsible for the truthfulness and accuracy of the data you submit through this Website. The Owner does not accept liability in this regard and does not guarantee the accuracy, validity, or authenticity of personal data provided by users.',
          'The Data Controller reserves the right to modify and/or update this data protection information as necessary to ensure correct compliance with applicable regulations. If changes occur, the updated text will be published on this page and will be accessible to users. In each case, the relationship with users will be governed by the rules in force at the time the Website is accessed. The effective version can be checked via the date shown below.',
          'For information about cookies collected on this Website, please refer to our Cookie Policy.',
          'This Website may include certain videos processed through YouTube. YouTube is a social and video platform used to publish, review, rate, and comment on video clips. The purpose of integrating YouTube is to share our content through the service. If you provide information via comments on images or videos, your personal data will be processed under the privacy policy of that social network. Likewise, we use commenters’ data solely to manage and respond to messages exchanged.',
          'Service provider: YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. YouTube, LLC is a subsidiary of Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.',
          'For more information, please consult:',
          'If buttons are embedded on our Website, YouTube may automatically collect information. Pages you visit may transmit data to YouTube. Through this technical process, YouTube may receive personal data such as the user’s IP address and browsing habits to optimise targeted advertising. YouTube may store this information in the United States and may share it with third parties where appropriate. If the user is logged in to YouTube, YouTube may recognise the user’s activity, and embedded buttons may allow YouTube to associate such activity with the user profile, store it, and process it, which may involve transfers outside the EEA. The privacy safeguards offered by YouTube can be reviewed in its privacy policy.',
        ],
      },
      waba: {
          title: '9. WhatsApp Business Platform (WABA)',
          paragraphs: [
            '5.1 Each Holder connects, via Embedded Signup, their own Business Manager, WABA, and phone number (phone_number_id). Wazzy does not reuse numbers or WABAs between clients.',
            '5.2 Messaging: by default, Wazzy only replies to conversations initiated by the user within the 24-hour window. No proactive messages (e.g., reminders) are sent unless the Holder explicitly enables it and meets WhatsApp’s requirements (approved templates and prior consent).',
            '5.3 The use of the channel is subject to WhatsApp/Meta’s terms and policies; the Holder ensures that its activity and content comply with those policies.',
            '5.4 Acceptable Use of Messaging: Wazzy is not a marketing or bulk messaging platform. The system only responds to messages initiated by the client and prohibits any use for spam, campaigns, or unsolicited communications. Wazzy may suspend or terminate accounts that use the service in violation of this policy.',
          ],
        },
      youtube: {
        paragraphs: [],
        provider: '',
        infoLinks: ['www.youtube.com/yt/about/', 'www.google.de/intl/policies/privacy/'],
        buttons: '',
        safeguards: '',
      },
      footer: {
        updatedLabel: 'Last updated',
        help: 'Need help?',
        backToLogin: 'Back to sign in',
      },
    },
  },
  es: {
    language: {
      toggle: 'Español / English',
      english: 'Inglés',
      spanish: 'Español',
      shortLabel: { es: 'ES', en: 'EN' },
    },
    nav: {
      dashboard: 'Principal',
      profile: 'Perfil',
      company: 'Empresa',
      sync: 'Sincronizar',
      sectionLabel: 'Panel',
      logout: 'Cerrar sesión',
      session: 'Sesión',
      guest: 'Invitado',
      headerPrefix: 'Estás en',
    },
    login: {
      title: 'Iniciar sesión',
      description: 'Accede a tu cuenta para continuar',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      passwordLabel: 'Contraseña',
      passwordPlaceholder: '********',
      submit: 'Entrar',
      question: '¿No tienes cuenta?',
      cta: 'Regístrate',
      successTitle: 'Sesión iniciada',
      successDescription: 'Bienvenido de nuevo',
      errorTitle: 'Error al iniciar sesión',
      errorDescription: 'Revisa tus datos e inténtalo otra vez.',
      invalidEmail: 'Correo inválido',
      minPassword: 'Mínimo 6 caracteres',
    },
    register: {
      title: 'Crear cuenta',
      description: 'Completa tus datos para registrarte',
      nameLabel: 'Nombre',
      namePlaceholder: 'Juan Perez',
      emailLabel: 'Correo electrónico',
      emailPlaceholder: 'tu@correo.com',
      passwordLabel: 'Contraseña',
      confirmPasswordLabel: 'Confirmar contraseña',
      passwordPlaceholder: '********',
      submit: 'Crear cuenta',
      question: '¿Ya tienes cuenta?',
      cta: 'Inicia sesión',
      successTitle: 'Registro completado',
      successDescription: 'Ya puedes usar tu cuenta',
      errorTitle: 'Error al registrarse',
      errorDescription: 'Revisa tu información e inténtalo nuevamente.',
      invalidEmail: 'Correo inválido',
      minPassword: 'Mínimo 6 caracteres',
      confirmPassword: 'Confirma la contraseña',
      passwordMismatch: 'Las contraseñas no coinciden',
      minName: 'Ingresa tu nombre',
      acceptTermsPrefix: 'Acepto los',
      termsLink: 'términos y condiciones',
      acceptTermsError: 'Debes aceptar los términos y condiciones',

    },
    dashboard: {
      welcome: 'Bienvenido',
      quickActions: 'Acciones rápidas',
      quickActionsDescription: 'Administra tu sesión y perfil',
      panelTitle: 'Panel',
      panelDescription: 'Resumen de tu cuenta',
      userLabel: 'Usuario',
      idLabel: 'ID',
      syncWithMeta: 'Sincronizar con Meta',
      logout: 'Salir',
    },
    profile: {
      title: 'Perfil',
      description: 'Información de la cuenta',
      loading: 'Cargando perfil...',
      email: 'Correo',
      name: 'Nombre',
      missingName: 'Sin nombre',
      id: 'ID',
      missingId: 'N/D',
      logout: 'Cerrar sesión',
    },
    company: {
      space: 'Espacio de empresa',
      title: 'Información de la empresa',
      cardTitle: 'Datos básicos',
      cardDescription: 'Resumen de tu organización',
      paragraphOne: 'Agrega aquí información de tu empresa, equipos y contactos principales.',
      paragraphTwo: 'Próximamente podrás ver métricas y accesos rápidos.',
    },
    sync: {
      successTitle: '¡Conexión exitosa!',
      successDescription: 'Tu número de WhatsApp se ha vinculado correctamente.',
      errorTitle: 'Error de conexión',
      errorDescription: 'No pudimos vincular tu cuenta. Revisa la consola para más detalles.',
      buttonReady: 'Conecta con WhatsApp Business',
      buttonLoading: 'Cargando conexión...',
      buttonSyncing: 'Vinculando...',
      subtitle: 'Conecta tu número de teléfono con Meta',
    },
    privacy: {
      badge: 'Política de privacidad',
      heroTitle: 'Tu privacidad nos importa',
      heroSubtitle:
        'Esta página explica qué datos personales recopilamos, por qué lo hacemos, cuánto tiempo los conservamos y cuáles son tus derechos según la normativa aplicable. Esta política es pública y no requiere autenticación.',
      overviewCards: [
        {
          title: 'Quiénes somos',
          description:
            'El Responsable del Tratamiento de este sitio (https://app.wazzy.space/) es Wazzy Chatbot. Los datos de contacto están más abajo.',
        },
        {
          title: 'Por qué tratamos datos',
          description:
            'Gestionamos comunicaciones, operamos la web, prestamos servicios, cumplimos obligaciones y mejoramos nuestra oferta (incluyendo analítica y cookies, cuando corresponda).',
        },
        {
          title: 'Seguridad y conservación',
          description:
            'Aplicamos medidas de seguridad adecuadas y conservamos los datos solo el tiempo necesario para los fines descritos o lo exigido por ley.',
        },
        {
          title: 'Tus derechos',
          description:
            'Solicita acceso, corrección, supresión, limitación, portabilidad u oposición en ciertos casos. Consulta “Tus derechos” para más detalles.',
        },
      ],
      intro: {
        title: 'Política de privacidad',
        paragraphs: [
          'Creemos que tu privacidad es importante. Para la persona responsable de este sitio web, que leas e indagues en esta sección demuestra tu interés por la página. Debes revisar la información de privacidad siempre que visites nuevas webs, especialmente si solicitan datos personales. En este documento explicamos qué datos personales recopilamos, con qué base, cuánto tiempo se almacenan y otras cuestiones relacionadas con la normativa de protección de datos, de conformidad con la ley aplicable.',
          'Te animamos a leer estos términos cuidadosamente antes de facilitar tus datos personales. Las personas menores de 14 años necesitan el consentimiento de sus padres o tutores para que se traten sus datos. Si eres menor de 14, no debes enviar tus datos en esta web salvo autorización de tus padres o tutores. En ningún caso se recopilarán datos de menores relativos a circunstancias profesionales o económicas, ni sobre la intimidad de otros miembros de la familia, sin su consentimiento.',
          'Si tienes dudas, contáctanos a través del correo del Responsable del Tratamiento o, en su caso, del Delegado de Protección de Datos. El Responsable mantiene un compromiso continuo con la privacidad y sigue buenas prácticas en el tratamiento de tus datos personales.',
          'De acuerdo con la normativa aplicable (Reglamento UE 2016/679 de 27 de abril de 2016 — RGPD), Wazzy Chatbots (el “Titular”), propietario del sitio https://app.wazzy.space/ (el “Sitio Web”), expone esta Política de Privacidad que regula el tratamiento de datos personales. Esta política se aplica sin perjuicio del Aviso Legal y la Política de Cookies correspondientes.',
        ],
      },
      controller: {
        title: '1. Responsable del tratamiento',
        details: [
          { label: 'Responsable', value: 'Wazzy Chatbots' },
          { label: 'Dirección', value: 'Cardanachama 10, Allariz, GALICIA  (España)' },
          { label: 'Correo', value: 'juliovaldem@gmail.com' },
          { label: 'Teléfono', value: '681 947 487' },
        ],
        paragraphs: [
          'Buscamos proteger la privacidad de los usuarios. Nunca solicitaremos información personal salvo que sea necesaria para prestar los servicios, nunca la compartiremos con terceros (salvo cuando sea imprescindible y sobre bases legítimas previamente comunicadas) y nunca usaremos tus datos para fines ajenos a la relación contractual.',
          'Esta entidad cumple con la Ley Orgánica 3/2018 (LOPDGDD), el Reglamento (UE) 2016/679 (RGPD) y la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE/LSSI), además de cualquier norma de desarrollo o complementaria.',
          'En consecuencia, los datos solicitados en formularios de contacto, los que se obtengan por el mero acceso al Sitio Web (cookies), los relativos a comentarios en redes sociales corporativas enlazadas desde la web, los datos introducidos en secciones habilitadas o los facilitados por otros medios de comunicación (p. ej., correo electrónico), serán tratados por el Responsable conforme a la legislación aplicable.',
        ],
      },
      purposes: {
        title: '2. Finalidades del tratamiento',
        intro:
          'Al visitar este Sitio Web puedes aportar datos personales. Esta información puede incluir tu IP, nombre, dirección física, correo electrónico, teléfono y otros datos. Las finalidades dependen del contexto o sección en la que se recojan, e incluyen:',
        list: [
          'Interacciones en redes sociales: si aportas información a través de redes sociales enlazadas desde este Sitio Web, esta entidad actúa como Responsable respecto a los datos facilitados en ese contexto (por ejemplo, fotos subidas por nosotros o terceros, comentarios que realizas en nuestras publicaciones, etc.). Trataremos esa información solo en relación con tu consulta, gestión o comentario, y dentro de la red social y su contexto. No extraeremos esos datos salvo que obtengamos tu consentimiento. Ten en cuenta que el uso de estas plataformas se rige por sus propias condiciones y pueden tratar tus datos en términos diferentes a los aquí descritos. Los perfiles oficiales enlazados desde la web existen para que conozcas nuestra actividad y dispongas de un canal alternativo de comunicación; no obstante, no nos responsabilizamos de los tratamientos realizados por las empresas que operan dichas redes.',
          'Cookies y recogida automática de datos: pueden existir finalidades adicionales relacionadas con la gestión de cookies o con información que recopilamos automáticamente cuando visitas la web, incluida la operación técnica, analítica y mejora del servicio, según lo descrito en la Política de Cookies.',
        ],
      },
      retention: {
        title: '3. Plazo de conservación de los datos',
        intro: 'El plazo depende de la actividad de tratamiento:',
        list: [
          'Los datos asociados a cookies se conservan durante el periodo indicado en la Política de Cookies.',
          'Los datos que facilites a través de los canales disponibles en el Sitio Web (formularios, correo electrónico) se conservarán mientras exista la relación contigo o hasta que retires el consentimiento cuando corresponda. Posteriormente podremos conservarlos si existe obligación legal y, en todo caso, durante el periodo mínimo exigible según la relación o actividad de tratamiento. Por ejemplo, los datos de facturación pueden conservarse por motivos fiscales y contables durante 6 años. Existe además un plazo de 5 años según el artículo 1964 del Código Civil para acciones personales sin plazo específico.',
          'Los datos incluidos en redes sociales enlazadas desde el Sitio Web se conservarán por nosotros hasta que retires tu consentimiento. No obstante, las entidades responsables de esas plataformas pueden retenerlos según sus propias políticas, de las que no nos hacemos responsables.',
        ],
      },
      legalBasis: {
        title: '4. Base jurídica del tratamiento',
        intro: 'La base legítima depende de la actividad de tratamiento e incluye:',
        list: [
          'Cumplimiento de una o más obligaciones legales (por ejemplo, obligaciones fiscales relativas a facturas emitidas).',
          'Tu consentimiento para tratar tus datos en los términos descritos (p. ej., marcando una casilla de aceptación o firmando un documento informativo presentado antes del tratamiento).',
          'Una relación precontractual o contractual (por ejemplo, cuando facilitas datos relativos a una solicitud para que podamos responder adecuadamente).',
        ],
      },
      recipients: {
        title: '5. Destinatarios de tus datos',
        intro:
          'Cuando subcontratamos a terceros para prestar servicios, adoptamos garantías legales y medidas técnicas y organizativas adecuadas para asegurar la protección de los datos personales conforme a la normativa.',
        paragraphs: [
          'Además del Responsable descrito, los datos pueden ser tratados por otras entidades según la naturaleza del tratamiento, entre ellas:',
        ],
        list: [
          'Operadores de redes sociales enlazadas desde este Sitio Web, si proporcionas información a través de dichas redes.',
          'Proveedores de servicios relacionados con la web, como proveedores de alojamiento (en nuestro caso, con centros de datos dentro del Espacio Económico Europeo).',
          'Organismos públicos, autoridades fiscales, juzgados y tribunales, y en general autoridades competentes, cuando el Responsable tenga obligación legal de comunicar datos.',
          'Determinados proveedores de cookies cuyas tecnologías pueden almacenar información relacionada con tu dirección IP y hábitos de navegación, según se describe en la Política de Cookies.',
        ],
        closing:
          'Aplicamos criterios estrictos de selección de proveedores para asegurar el cumplimiento de las obligaciones en materia de protección de datos y, cuando es necesario, firmamos acuerdos de encargo de tratamiento que imponen obligaciones como medidas técnicas y organizativas adecuadas, tratamiento solo para fines acordados y siguiendo instrucciones documentadas, y eliminación o devolución de los datos una vez finalizados los servicios.',
      },
      rights: {
        title: '6. Tus derechos',
        paragraphs: [
          'Tienes derecho a obtener confirmación sobre si tratamos datos personales que te conciernen. También puedes acceder a tus datos, solicitar la rectificación de datos inexactos o pedir su supresión cuando, entre otros motivos, ya no sean necesarios para los fines para los que se recogieron.',
          'En determinadas circunstancias podrás solicitar la limitación del tratamiento, en cuyo caso conservaremos los datos únicamente para el ejercicio o la defensa de reclamaciones. En otros casos, y por motivos relacionados con tu situación particular, puedes oponerte al tratamiento.',
          'Cuando el tratamiento se base en el consentimiento, tienes derecho a retirarlo en cualquier momento sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada. Si lo solicitas, dejaremos de tratar tus datos salvo por motivos legítimos imperiosos, o para el ejercicio o defensa de posibles reclamaciones.',
          'También puedes solicitar la portabilidad de tus datos para que sean transferidos a otro responsable. Hemos preparado formularios, disponibles a petición, para ejercer los derechos de acceso, rectificación, supresión, limitación, oposición, oposición a decisiones individuales automatizadas (incluida la elaboración de perfiles) y portabilidad.',
          'Si consideras que no se han atendido correctamente tus derechos, puedes presentar una reclamación ante la autoridad de control: Agencia Española de Protección de Datos (AEPD), Jorge Juan 6, 28001 Madrid, o a través de su sede electrónica: https://sedeagpd.gob.es',
          'Si lo prefieres, puedes contactarnos por correo postal en la dirección indicada o por email, incluyendo una fotocopia de tu DNI/NIF o documento equivalente para verificar tu identidad y señalando el derecho que deseas ejercer.',
        ],
      },
      social: {
        title: '7. Información específica sobre redes sociales',
        paragraphs: [
          'El Titular mantiene páginas y/o perfiles en varias redes sociales enlazadas desde este Sitio Web. No nos responsabilizamos de los contenidos publicados por terceros en dichas redes. El uso y tratamiento de datos por parte de terceros en redes sociales se rige por sus propias condiciones, generales o específicas, que pueden diferir de esta política. Recomendamos leerlas detenidamente.',
          'Nuestra presencia online incluye facebook.com e Instagram, operadas por Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA. Puedes encontrarnos allí y pulsar “Me gusta”. Si estás conectado en Facebook, esta red puede asociar tu navegación con tu cuenta. Para conocer detalles sobre recogida, tratamiento y uso de datos por Facebook, así como tus derechos y configuraciones de privacidad, consulta su política: http://www.facebook.com/policy.php',
          'Al usar estas redes y comunicarte con nosotros, nos autorizas a usar tus datos personales únicamente dentro de la plataforma correspondiente para gestionar nuestra página profesional y las comunicaciones bidireccionales con seguidores mediante chat, mensajes u otras herramientas que Facebook ofrezca ahora o en el futuro. En consecuencia: (1) tratamos datos dentro de esa red social para gestionar la lista de personas a las que les gusta nuestra página; y (2) puedes recibir información sobre eventos, actividades y promociones. Fuera de estos casos no utilizamos tus datos.',
          'Respecto a Twitter: cuando un usuario nos sigue, podemos acceder a información sobre seguidores, concretamente el nombre de usuario, la foto (si la ha configurado) y los comentarios o “Tweets”, así como otra información del perfil como cuentas seguidas y seguidores. No usamos esa información más allá de gestionar y responder a “Tweets” o mensajes intercambiados. El “bio” del usuario puede ser visible para nosotros. Los usuarios son responsables de cómo usan las redes sociales. Puedes consultar la política de privacidad de Twitter aquí: https://twitter.com/es/privacy',
          'Twitter utiliza datos para elaboración de perfiles, comunicación, conexión y creación e intercambio de contenidos entre usuarios y entre usuarios y el público. Los Tweets son mensajes breves que se pueden crear y enviar mediante Twitter. Se muestran a seguidores, usuarios de Twitter y al público. Buscamos compartir contenido mediante esta red, por eso la hemos integrado.',
          'Proveedor del servicio: Twitter, Inc., 6805777875 Market Street, Suite 900, San Francisco, CA 94103, USA.',
          'Si se incrustan botones en nuestro Sitio Web, Twitter puede recopilar información personal automáticamente. Puede recibir datos como la dirección IP del usuario y hábitos de navegación con el fin de optimizar la publicidad dirigida. Twitter puede almacenar esta información en Estados Unidos y compartirla con terceros cuando corresponda. Si el usuario ha iniciado sesión, Twitter puede reconocer su actividad. Los botones incrustados pueden permitir asociar la actividad al perfil del usuario, almacenarla y tratarla, lo que puede implicar transferencias fuera del EEE. Las garantías de privacidad ofrecidas por Twitter pueden consultarse en su política de privacidad.',
        ],
      },
      cookies: {
        title: '8. Cookies y otras cuestiones',
        paragraphs: [
          'Como usuario eres el único responsable de la veracidad y exactitud de los datos que envíes a través de este Sitio Web. El Titular no asume responsabilidad a este respecto y no garantiza la exactitud, vigencia o autenticidad de los datos personales aportados por los usuarios.',
          'El Responsable del Tratamiento se reserva el derecho de modificar y/o actualizar esta información sobre protección de datos cuando sea necesario para asegurar el cumplimiento normativo. Si se producen cambios, el texto actualizado se publicará en esta página y estará disponible para los usuarios. En cada caso, la relación con los usuarios se regirá por las normas vigentes en el momento de acceder al Sitio Web. La versión vigente puede comprobarse mediante la fecha que figura a continuación.',
          'Para información sobre las cookies recopiladas en este Sitio Web, consulta nuestra Política de Cookies.',
          'Este Sitio Web puede incluir algunos vídeos procesados a través de YouTube. YouTube es una plataforma social y de vídeo utilizada para publicar, revisar, valorar y comentar clips. La integración de YouTube tiene como finalidad compartir nuestro contenido mediante el servicio. Si aportas información mediante comentarios en imágenes o vídeos, tus datos personales se tratarán según la política de privacidad de esa red. Asimismo, usamos los datos de quienes comentan únicamente para gestionar y responder a los mensajes intercambiados.',
          'Proveedor del servicio: YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. YouTube, LLC es una filial de Google Inc., 1600 Amphitheatre Pkwy, Mountain View, CA 94043-1351, USA.',
          'Para más información, consulta:',
          'Si se incrustan botones en nuestro Sitio Web, YouTube puede recopilar información de forma automática. Las páginas que visitas pueden transmitir datos a YouTube. A través de este proceso técnico, YouTube puede recibir datos personales como la dirección IP del usuario y hábitos de navegación para optimizar la publicidad dirigida. YouTube puede almacenar esta información en Estados Unidos y compartirla con terceros cuando corresponda. Si el usuario ha iniciado sesión en YouTube, puede reconocerse su actividad y los botones incrustados pueden permitir asociar dicha actividad al perfil del usuario, almacenarla y tratarla, lo que puede implicar transferencias fuera del EEE. Las garantías de privacidad de YouTube pueden consultarse en su política.',
        ],
      },
      waba: {
      title: '9. Plataforma de WhatsApp Business (WABA)',
      paragraphs: [
        '5.1 Cada Titular conecta, mediante Embedded Signup, su propio Business Manager, WABA y número de teléfono (phone_number_id). Wazzy no reutiliza números ni WABAs entre clientes.',
        '5.2 Mensajería: por defecto, Wazzy solo responde a conversaciones iniciadas por el usuario dentro de la ventana de 24 horas. No se envían mensajes proactivos (ej. recordatorios) a menos que el Titular lo habilite explícitamente y cumpla los requisitos de WhatsApp (plantillas aprobadas y consentimiento previo).',
        '5.3 El uso del canal está sujeto a los términos y políticas de WhatsApp/Meta; el Titular garantiza que su actividad y contenido cumplen con dichas políticas.',
        '5.4 Uso Aceptable de Mensajería: Wazzy no es una plataforma de marketing ni de mensajería masiva. El sistema solo responde a mensajes iniciados por el cliente y prohíbe cualquier uso para spam, campañas o comunicaciones no solicitadas. Wazzy puede suspender o terminar cuentas que usen el servicio violando esta política.',
      ],
    },
      youtube: {
        paragraphs: [],
        provider: '',
        infoLinks: ['www.youtube.com/yt/about/', 'www.google.de/intl/policies/privacy/'],
        buttons: '',
        safeguards: '',
      },
      footer: {
        updatedLabel: 'Última actualización',
        help: '¿Necesitas ayuda?',
        backToLogin: 'Volver a iniciar sesión',
      },
    },
  },
}