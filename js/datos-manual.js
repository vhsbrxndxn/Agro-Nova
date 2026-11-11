// 1. Objeto de metadatos documentales, marca y sitio web
export const infoIdentidad = {
  fuente: {
    documento: "II Avance Proyecto Final - Idea de Negocio: Agro-Nova",
    archivo_origen: "avance #2 Agro Nova proyecto modelo idea de negocio, grupo #1.pdf",
    paginas: 49,
    criterio: "Solo afirmaciones y datos expresamente contenidos en el documento. No disponible significa no especificado.",
    institucion: "Universidad de Costa Rica",
    sede: "Sede del Caribe",
    curso: "DN0101 Introducción a la Administración de Negocios.",
    profesora: "Rocío Valverde",
    integrantes: [
      "Michelle Camacho Vargas",
      "Michael Barahona Villachica",
      "Ellen Acuña Vega",
      "Jonathan Elizondo Jiménez"
    ],
    paginas_fuente: [1]
  },
  marca: {
    nombre: "Agro-Nova",
    variantes_en_el_documento: ["Agro-Nova", "AgroNova", "Agro Nova"],
    slogan: "TU CAMPO tu control",
    propuesta_de_valor: "Transformamos la intuición agrícola en decisiones de precisión: software de bajo costo con IA para maximizar su cosecha sin requerir sensores costosos.",
    descripcion_de_servicio: "Agro-Nova es una plataforma digital de asistencia técnica integral diseñada para pequeños y medianos agricultores. Funciona como un consultor agrícola de bolsillo que utiliza inteligencia de datos y reconocimiento de imágenes para sustituir la necesidad de hardware costoso (sensores). El agricultor interactúa con la app subiendo fotos de sus cultivos y recibiendo planes de acción inmediatos basados en su ubicación geográfica y tipo de siembra.",
    justificacion_nombre: "El prefijo \"Agro\" vincula directamente la marca con su sector raíz, la agricultura. El sufijo \"Nova\" (del latín \"nueva\") simboliza la innovación, la luz y la explosión de una nueva era tecnológica en el campo.",
    identidad_visual: "El diseño de la hoja verde simboliza la naturaleza y la agricultura combinado con circuitos tecnológicos que representan la innovación y el uso de tecnología.",
    significado_verde: "naturaleza, el crecimiento y la agricultura",
    codigos_hexadecimales: "No disponible",
    familia_tipografica: "No disponible",
    logo_como_archivo_independiente: "No disponible",
    rediseño_pendiente: "Se ajustará la tipografía del logo y la paleta gráfica para modernizar la marca, haciéndola más atractiva y memorable según las recomendaciones directas del mercado meta.",
    paginas_fuente: [17, 18, 19, 20, 34]
  },
  sitio: {
    landing_page_existente: "https://camilabarahonavill.wixsite.com/agro-nova",
    proposito: "una página web que tiene toda la información sobre nuestro servicio o app Agro Nova, con el objetivo de que los clientes conozcan de manera concisa nuestra idea.",
    sitio_web_oficial_como_canal: "nuestro sitio web oficial",
    arquitectura_de_paginas: "No disponible",
    menu_navegacion: "No disponible",
    formulario_contacto: "No disponible",
    correo_contacto: "No disponible",
    numero_contacto: "No disponible",
    paginas_fuente: [24, 43]
  },
  fichaProducto: {
    tipo: "plataforma digital de asistencia técnica integral",
    publico: "pequeños y medianos agricultores",
    tipo_dispositivo_mencionado: "smartphone",
    modalidad_comercial: "SaaS (Software as a Servicie)",
    sin_sensores_fisicos: "Accesibilidad de Precisión sin Hardware",
    disponibilidad_descripta: "24/7",
    paginas_fuente: [1, 11, 17, 18, 20, 43]
  }
};

// 2. Arreglo de los 4 módulos funcionales
export const modulosFuncionales = [
  {
    id: "diagnostico_plagas",
    titulo: "Módulo de Diagnóstico y Control de Plagas",
    descripcion_literal: "Identificación por foto y recomendación de tratamientos (químicos u orgánicos).",
    datos_de_entrada_mencionados: ["fotos de sus cultivos", "ubicación geográfica", "tipo de siembra"],
    procesamiento_mencionado: ["visión artificial", "reconocimiento de imágenes", "inteligencia artificial"],
    salidas_mencionadas: [
      "identificar plagas y enfermedades en tiempo real",
      "recomendación de tratamientos (químicos u orgánicos)",
      "planes de acción inmediatos"
    ],
    campos_detallados: "No disponible",
    especificacion_algoritmo_o_ia: "No disponible",
    paginas_fuente: [17, 18, 21]
  },
  {
    id: "fertilizacion_riego",
    titulo: "Planificador de Fertilización y Riego",
    descripcion_literal: "Calendarios dinámicos que indican qué cantidad de recurso aplicar según la etapa del cultivo.",
    datos_de_entrada_mencionados: ["etapa de crecimiento", "etapa del cultivo", "área"],
    procesamiento_mencionado: ["cálculo de cantidades de fertilizante", "cálculo de cantidades de agua"],
    salidas_mencionadas: ["guías de dosificación exacta", "calendarios dinámicos y recomendaciones de riego"],
    campos_detallados: "No disponible",
    especificacion_algoritmo_o_ia: "No disponible",
    paginas_fuente: [15, 18, 21]
  },
  {
    id: "alerta_climatica",
    titulo: "Sistema de Alerta Climática Predictiva",
    descripcion_literal: "Notificaciones sobre riesgos climáticos locales (heladas, exceso de lluvia) con consejos preventivos.",
    datos_de_entrada_mencionados: ["ubicación geográfica", "datos climáticos locales"],
    procesamiento_mencionado: ["alertas predictivas"],
    salidas_mencionadas: ["notificaciones sobre riesgos climáticos locales", "consejos preventivos"],
    campos_detallados: "No disponible",
    especificacion_algoritmo_o_ia: "No disponible",
    paginas_fuente: [18, 21]
  },
  {
    id: "bitacora_recursos",
    titulo: "Bitácora Digital de Recursos y Reportes",
    descripcion_literal: "Registro administrativo para controlar inventarios, gastos de producción y rentabilidad de la cosecha.",
    datos_de_entrada_mencionados: ["inventarios", "gastos de producción", "datos de rendimiento y manejo de cultivos"],
    procesamiento_mencionado: ["registro administrativo", "estadísticas y gráficos"],
    salidas_mencionadas: ["control de recursos y rentabilidad", "reportes de producción e interpretación de resultados"],
    campos_detallados: "No disponible",
    especificacion_algoritmo_o_ia: "No disponible",
    paginas_fuente: [15, 18, 34]
  }
];

// 3. Arreglo de requisitos adicionales de funcionamiento y experiencia de uso
export const requisitosExperiencia = [
  { elemento: "Funcionamiento sin internet", especificacion: "Acceso a funciones críticas en zonas rurales sin señal", estado: "Mejora acordada" },
  { elemento: "Actualización de información", especificacion: "Los datos se actualizarán automáticamente cuando el dispositivo detecte una conexión estable", estado: "Mejora acordada" },
  { elemento: "Estadísticas", especificacion: "Herramientas de estadísticas y gráficos de manejo de cultivos", estado: "Mejora acordada" },
  { elemento: "Notificaciones", especificacion: "Notificaciones push preventivas sobre riesgos del clima", estado: "Propuesta de valor" },
  { elemento: "Interfaz", especificacion: "Interfaz ultra-simplificada de iconografía directa", estado: "Compromiso descrito" },
  { elemento: "Interacciones", especificacion: "Flujos automatizados de máximo tres interacciones", estado: "Compromiso descrito" },
  { elemento: "Disponibilidad", especificacion: "Funcionamiento ininterrumpido (24/7)", estado: "Objetivo operativo" },
  { elemento: "Hardware", especificacion: "No requerir sensores físicos costosos", estado: "Característica principal" }
];

// 4. Objeto y arreglos de público objetivo y mercado meta
export const mercadoMeta = {
  criterios: {
    pais: "Costa Rica",
    edad: "18 a 80 años",
    genero: "Hombres y mujeres",
    nivel_educativo: "Primaria completa hasta técnicos o profesionales en administración de fincas",
    nivel_ingresos: "Ingresos medios-bajos a medios",
    frecuencia_uso: "Diario (consulta de clima y bitácora) y semanal (monitoreo de plagas y riego)",
    sensibilidad_precio: "Muy alta",
    actitud_tecnologica: "Apertura moderada a la tecnología siempre que demuestre un beneficio económico inmediato y no sea complicada de usar"
  },
  grupos_usuarios: [
    "Pequeños y Medianos Productores Independientes",
    "Cooperativas Agrícolas Regionales",
    "Emprendedores de Agronegocios"
  ],
  regiones_prioritarias: [
    "Región Huetar Norte (San Carlos)",
    "Región Central Oriental (Cartago/Zarcero)",
    "Zona de los Santos (Tarrazú, Dota, León Cortés)",
    "Zona Caribe"
  ],
  paginas_fuente: [16, 24, 27, 28, 29]
};

// 5. Arreglo de problemas identificados y necesidades expresadas
export const problemasNecesidades = [
  { problema: "Pérdidas por plagas", necesidad: "Identificación temprana de plagas y enfermedades" },
  { problema: "Uso ineficiente del agua", necesidad: "Guías de dosificación exacta" },
  { problema: "Aplicación excesiva de fertilizantes", necesidad: "Cálculo de cantidades según etapa y área" },
  { problema: "Incertidumbre climática", necesidad: "Alertas locales y consejos preventivos" },
  { problema: "Falta de asesoría técnica", necesidad: "Acceso a asistencia técnica digital" },
  { problema: "Costos elevados de sensores", necesidad: "Solución de precisión sin hardware costoso" },
  { problema: "Falta de información administrativa", necesidad: "Registro de inventarios, gastos y rentabilidad" },
  { problema: "Conectividad limitada", necesidad: "Acceso a funciones críticas sin internet" }
];

// 6. Objeto con arreglos del modelo de negocio, costos y canales
export const finanzasYCanales = {
  ingresos_previstos: [
    { fuente: "Suscripciones", descripcion: "Planes mensuales o anuales para acceder a funciones premium" },
    { fuente: "Pago por uso", descripcion: "Cobros específicos al utilizar funciones avanzadas" },
    { fuente: "Publicidad integrada", descripcion: "Anuncios de empresas de fertilizantes, herramientas o insumos" },
    { fuente: "Asesorías personalizadas", descripcion: "Recomendaciones técnicas y apoyo personalizado" },
    { fuente: "Alianzas con cooperativas", descripcion: "Paquetes del software para sus afiliados" },
    { fuente: "Datos anónimos", descripcion: "Reportes estadísticos sobre tendencias de cultivos y plagas" },
    { fuente: "Capacitaciones", descripcion: "Cursos virtuales pagos sobre tecnología agrícola" },
    { fuente: "Convenios", descripcion: "Promoción de productos de agrotiendas a cambio de comisión" }
  ],
  medios_pago: [
    "Efectivo, para ciertos convenios presenciales",
    "Tarjetas de débito o crédito",
    "Transferencias bancarias",
    "SINPE Móvil",
    "Suscripciones mensuales",
    "Pagos por uso de funciones premium"
  ],
  compromiso_tarifario: "Esquema tarifario freemium o de micro-suscripciones escalables (sin delimitar qué funciones serían gratuitas)",
  costos_fijos: [
    "Desarrollo y mantenimiento de la app",
    "Pago de programadores o soporte técnico",
    "Hosting y almacenamiento en la nube",
    "Suscripciones a software y herramientas digitales",
    "Publicidad en redes sociales",
    "Diseño gráfico y branding",
    "Internet y servicios básicos",
    "Transporte a ferias agrícolas",
    "Licencias y permisos",
    "Salarios administrativos"
  ],
  costos_variables: [
    "Publicidad pagada según campañas",
    "Comisiones de App Store o Play Store",
    "Atención al cliente según usuarios",
    "Actualización de bases de datos agrícolas",
    "Gastos de transporte promocional",
    "Banners, volantes y stands",
    "Capacitaciones y charlas",
    "Servidores según uso de la aplicación",
    "Incentivos o promociones para nuevos usuarios"
  ],
  montos_y_punto_equilibrio: "No disponible",
  canales_distribucion: {
    modelo: "Distribución Directa (Canal Corto)",
    distribucion_digital: ["Google Play Store", "Apple App Store", "Sitio web oficial"],
    redes_sociales: ["Facebook", "WhatsApp", "Instagram", "TikTok", "YouTube"],
    publicidad_digital: ["Google Ads", "Meta", "Instagram Reels", "TikTok", "YouTube Shorts"],
    contacto_presencial: ["Eventos y Ferias del Agricultor", "Stands informativos y demostraciones en vivo"],
    alianzas: ["CoopeVictoria", "CoopeDota", "El Colono Agropecuario", "CoopeAgri"],
    asistencia: "Comunidad en WhatsApp para soporte técnico",
    cuentas_enlaces_y_telefonos: "No disponible"
  },
  paginas_fuente: [23, 24, 25, 31, 32, 42, 46, 47]
};

// 7. Objeto de investigación, encuesta de 18 preguntas y sostenibilidad
export const validacionYSostenibilidad = {
  investigacion: {
    muestra: "Entrevistas estructuradas a un mínimo de 20 personas pertenecientes al mercado meta y miembros de la cátedra",
    funciones_mejor_valoradas: [
      "Alertas climáticas",
      "Diagnóstico temprano de plagas",
      "Estadísticas de producción"
    ],
    mejoras_documentadas: [
      "Desarrollo de un Modo Offline (Sin Internet)",
      "Optimización de Reportes y Analítica",
      "Rediseño de Identidad Visual (Branding)"
    ],
    temas_formulario_18_preguntas: [
      "Edad",
      "Experiencia agrícola",
      "Problemas de cultivos",
      "Interés tecnológico",
      "Disposición de pago",
      "Facilidad de uso",
      "Preferencias de funciones",
      "Canales de publicidad",
      "Valoración del nombre y logotipo"
    ],
    porcentajes_y_base_respuestas: "No disponible",
    paginas_fuente: [33, 34, 35, 36, 37, 38, 39, 40, 48]
  },
  sostenibilidad: {
    ambiental: "Reducción del desperdicio de agua, fertilizantes y pesticidas",
    inclusion_tecnologica: "Herramientas accesibles para pequeños productores",
    transparencia: "La información de rendimiento e insumos pertenece exclusivamente al usuario",
    reduccion_agroquimicos: "Estimación de entre un 15% y un 20% (proyección documental, no experimental)",
    rendimiento_cosechas: "Incremento proyectado del 25% (proyección documental, no experimental)",
    beneficiarios: ["Productores", "Cooperativas", "Comunidades rurales", "Gobiernos locales"],
    paginas_fuente: [40, 41, 42, 43]
  }
};

// 8. Arreglo de las 16 especificaciones técnicas marcadas como "No disponible"
export const especificacionesNoDisponibles = [
  { area: "Estructura de HTML y distribución de pantallas", estado: "No disponible" },
  { area: "Hojas de estilo CSS y valores visuales exactos (HEX, tipografías, tamaños)", estado: "No disponible" },
  { area: "Funciones y eventos específicos de JavaScript", estado: "No disponible" },
  { area: "Lenguaje y framework del backend", estado: "No disponible" },
  { area: "Motor de base de datos", estado: "No disponible" },
  { area: "Tablas, atributos y relaciones", estado: "No disponible" },
  { area: "Endpoints y contratos API", estado: "No disponible" },
  { area: "Registro, inicio de sesión y recuperación de contraseña", estado: "No disponible" },
  { area: "Roles y permisos de acceso", estado: "No disponible" },
  { area: "Algoritmo para calcular agua y fertilizante", estado: "No disponible" },
  { area: "Modelo de IA para analizar fotografías", estado: "No disponible" },
  { area: "Fuente y API de datos meteorológicos", estado: "No disponible" },
  { area: "Tecnología de almacenamiento sin conexión", estado: "No disponible" },
  { area: "Integración y proveedor de pagos", estado: "No disponible" },
  { area: "Validaciones de formularios operativos", estado: "No disponible" },
  { area: "Seguridad y protección de datos a nivel técnico", estado: "No disponible" }
];

// 9. Arreglo de las 3 inconsistencias documentales conservadas
export const inconsistenciasDocumentales = [
  {
    punto: "Nombre de la marca",
    detalle: "Aparecen las variantes Agro-Nova, AgroNova y Agro Nova a lo largo del documento."
  },
  {
    punto: "Cliente ideal (Buyer Persona)",
    detalle: "La página 16 menciona a Carmen Ruiz como Buyer Persona, mientras que la imagen de la página 27 presenta a SOFIA MENDEZ."
  },
  {
    punto: "Política de uso de datos",
    detalle: "La página 32 contempla comercializar estadísticas anónimas, mientras que la página 43 establece que la información de rendimiento e insumos pertenece exclusivamente al usuario."
  }
];