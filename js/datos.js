// Regiones prioritarias establecidas en las páginas 13, 24 y 27 del documento
export const regionesCostaRica = [
  "Región Huetar Norte (San Carlos)",
  "Región Central Oriental (Cartago / Zarcero)",
  "Zona de los Santos (Tarrazú, Dota, León Cortés)",
  "Zona Caribe (Guápiles / Talamanca)"
];

// Cultivos principales de pequeños y medianos productores mencionados en el documento (págs. 24, 26)
export const catalogoCultivos = [
  {
    id: "cafe",
    nombre: "Café de Altura / Especialidad",
    aguaLitrosPorM2Dia: 4.2,
    fertilizanteGramosPorM2: 35,
    insumoBase: "Fórmula completa NPK + Magnesio y Boro"
  },
  {
    id: "hortalizas",
    nombre: "Hortalizas (Tomate, Chile, Lechuga, Repollo)",
    aguaLitrosPorM2Dia: 5.5,
    fertilizanteGramosPorM2: 28,
    insumoBase: "Nitrato de calcio y compost orgánico mineralizado"
  },
  {
    id: "papa_cebolla",
    nombre: "Tubérculos y Bulbos (Papa y Cebolla - Zarcero/Cartago)",
    aguaLitrosPorM2Dia: 4.8,
    fertilizanteGramosPorM2: 40,
    insumoBase: "Fórmula rica en Fósforo y Potasio para desarrollo radicular"
  },
  {
    id: "platano_cacao",
    nombre: "Plátano y Cacao (Zona Caribe / Huetar Norte)",
    aguaLitrosPorM2Dia: 6.0,
    fertilizanteGramosPorM2: 45,
    insumoBase: "Biofertilizante potásico y enmienda cálcica para suelo húmedo"
  }
];

// Etapas fenológicas del cultivo (págs. 18, 21 y 43)
export const etapasFenologicas = [
  {
    id: "siembra",
    nombre: "Etapa 1: Siembra y Enraizamiento Inicial",
    factorAgua: 0.75,
    factorFertilizante: 0.6,
    frecuenciaRiego: "Riego ligero cada 2 días (mantener humedad sin saturar raíz)",
    calendarioFert: "Aplicación fraccionada al día 1 y día 15 tras la siembra."
  },
  {
    id: "crecimiento",
    nombre: "Etapa 2: Desarrollo Vegetativo y Follaje",
    factorAgua: 1.0,
    factorFertilizante: 1.0,
    frecuenciaRiego: "Riego diario matutino (6:00 a.m. - 8:00 a.m.) para evitar evaporación",
    calendarioFert: "Dosificación quincenal localizada al pie de la planta (no 'al ojo')."
  },
  {
    id: "floracion_cosecha",
    nombre: "Etapa 3: Floración, Llenado de Fruto y Cosecha",
    factorAgua: 1.25,
    factorFertilizante: 1.15,
    frecuenciaRiego: "Riego controlado diario con monitoreo de drenaje en parcela",
    calendarioFert: "Refuerzo potásico mensual; suspender químicos 20 días antes de cosecha."
  }
];

// Base de datos tropicalizada de plagas y enfermedades (Módulo 1 - págs. 17, 18, 21, 22, 26)
export const catalogoPlagasCR = [
  {
    id: "roya_hongo",
    sintomaVisible: "Manchas amarillentas o polvo anaranjado en el envés de la hoja",
    nombrePlaga: "Roya del Cafeto / Hongo Foliar (Hemileia vastatrix)",
    severidad: "Alta — Acción inmediata para evitar pérdida del 30% de cosecha",
    tratamientoOrganico: "Caldo bordelés al 1% o extracto de cola de caballo + poda sanitaria para ventilación.",
    tratamientoQuimico: "Fungicida sistémico del grupo de los triazoles en dosis exacta de 1.5 ml por litro de agua (asesoría neutral sin marca obligatoria).",
    planAccion: "1. Aplicar tratamiento hoy mismo en las zonas con manchas. 2. Evitar riego por aspersión sobre el follaje esta tarde. 3. Registrar lote en la Bitácora Digital."
  },
  {
    id: "moho_humedad",
    sintomaVisible: "Manchas oscuras acuosas en hojas y tallos tras lluvias intensas",
    nombrePlaga: "Tizón Tardío / Hongo por Exceso de Humedad (Phytophthora)",
    severidad: "Alta — Riesgo crítico en microclimas húmedos",
    tratamientoOrganico: "Aplicación de biofungicida Trichoderma harzianum al suelo y follaje (3 g por litro).",
    tratamientoQuimico: "Fungicida preventivo de contacto a base de cobre o mancozeb según etapa fenológica.",
    planAccion: "1. Limpiar canales de drenaje de la parcela hoy. 2. Retirar hojas basales afectadas. 3. Reducir lámina de riego en un 30% durante los próximos 4 días."
  },
  {
    id: "plaga_insecto",
    sintomaVisible: "Hojas perforadas, brotes enrollados o presencia de insectos pequeños",
    nombrePlaga: "Mosca Blanca / Vaquita / Broca en estadio temprano",
    severidad: "Media — Detección temprana ideal para control sin pérdidas",
    tratamientoOrganico: "Jabón potásico al 1.5% combinado con aceite de Neem aplicado al atardecer + trampas amarillas.",
    tratamientoQuimico: "Insecticida selectivo de baja residualidad aplicado únicamente en los focos detectados.",
    planAccion: "1. No fumigar toda la finca 'al ojo'; aplicar solo en las hileras afectadas. 2. Revisar nuevamente con foto en 7 días."
  },
  {
    id: "deficiencia_suelo",
    sintomaVisible: "Amarillamiento uniforme en hojas viejas y bajo crecimiento de la planta",
    nombrePlaga: "Estrés Nutricional y Acidez del Suelo (Lavado de nutrientes)",
    severidad: "Media — Optimización de fertilización requerida",
    tratamientoOrganico: "Incorporación de abono bocashi (250 g por planta) y té de vermicompost.",
    tratamientoQuimico: "Corrección de pH con cal agrícola y aplicación foliar de elementos menores (Zinc y Magnesio).",
    planAccion: "1. Pasar al Módulo 2 (Planificador) para recalcular la dosis según el área exacta. 2. Fraccionar el fertilizante para evitar escorrentía."
  }
];

// Sistema de Alertas Climáticas Predictivas por Región (Módulo 3 - págs. 18, 21, 41)
export const alertasClimaticasCR = [
  {
    region: "Región Huetar Norte (San Carlos)",
    fenomeno: "Aguaceros vespertinos intensos y humedad relativa superior al 88%",
    nivel: "alerta-alta",
    instruccionPreventiva: "Riesgo de hongo por humedad: aplique tratamiento preventivo hoy antes de las 11:00 a.m. y suspenda el riego vespertino."
  },
  {
    region: "Región Central Oriental (Cartago / Zarcero)",
    fenomeno: "Descenso brusco de temperatura nocturna (riesgo de helada/viento frío en partes altas)",
    nivel: "alerta-alta",
    instruccionPreventiva: "Riesgo de estrés térmico en hortalizas y papa: realice riego ligero al amanecer y proteja almácigos jóvenes."
  },
  {
    region: "Zona de los Santos (Tarrazú, Dota, León Cortés)",
    fenomeno: "Mañanas soleadas con lluvias moderadas en la tarde",
    nivel: "alerta-media",
    instruccionPreventiva: "Ventana óptima de fertilización entre 6:30 a.m. y 10:30 a.m. Verifique zanjas de desagüe para evitar lavado de nutrientes."
  },
  {
    region: "Zona Caribe (Guápiles / Talamanca)",
    fenomeno: "Alta precipitación acumulada en las últimas 48 horas",
    nivel: "alerta-alta",
    instruccionPreventiva: "Suelo saturado: suspenda el riego manual hoy, limpie drenajes secundarios y monitoree aparición de Sigatoka o pudrición radicular."
  }
];

// Bitácora Digital de Recursos en Memoria (Módulo 4 - págs. 15, 18, 34, 41)
export const bitacoraRecursos = [
  {
    id: 1,
    tipo: "Ingreso por cosecha",
    concepto: "Entrega de cosecha a cooperativa local (Lote Principal)",
    monto: 385000
  },
  {
    id: 2,
    tipo: "Gasto en fertilizantes/insumos",
    concepto: "Compra dosificada de insumos (con ahorro del 18% por cálculo exacto)",
    monto: 92000
  },
  {
    id: 3,
    tipo: "Gasto operativo / riego",
    concepto: "Mantenimiento de mangueras y control hídrico mensual",
    monto: 43000
  }
];

// Planes comerciales, formas de pago y alianzas estratégicas (págs. 23, 24, 31, 32, 42)
export const planesYAlianzas = {
  planes: [
    {
      nombre: "Plan Productor Freemium / Básico",
      modalidad: "Acceso inicial de democratización tecnológica",
      incluye: [
        "Alertas climáticas preventivas locales diarias",
        "Calculadora básica de riego y fertilización",
        "Bitácora digital de recursos (datos 100% privados del agricultor)"
      ]
    },
    {
      nombre: "Micro-Suscripción Agro-Nova Pro (SaaS)",
      modalidad: "Suscripción mensual/anual o Pago por Uso",
      incluye: [
        "Diagnóstico ilimitado de plagas por reconocimiento de imágenes con IA",
        "Modo Offline completo con sincronización automática rural",
        "Reportes estadísticos avanzados y asesoría técnica personalizada"
      ]
    }
  ],
  formasPago: [
    "SINPE Móvil (pago rápido e inmediato en Costa Rica)",
    "Transferencia bancaria nacional",
    "Tarjetas de débito o crédito",
    "Efectivo mediante convenios presenciales en cooperativas y ferias"
  ],
  alianzasYCanales: [
    "Cooperativas aliadas: CoopeVictoria, CoopeDota y CoopeAgri",
    "Almacenes agrotécnicos: El Colono Agropecuario (stands y demostraciones)",
    "Soporte directo: Comunidad oficial en WhatsApp y Ferias del Agricultor"
  ]
};