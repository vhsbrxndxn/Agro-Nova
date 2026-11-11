import {
  regionesCostaRica,
  catalogoCultivos,
  etapasFenologicas,
  catalogoPlagasCR,
  alertasClimaticasCR,
  bitacoraRecursos,
  planesYAlianzas
} from "./datos.js";

// Referencias del DOM
const navPrincipal = document.querySelector("#nav-principal");
const btnModoRed = document.querySelector("#btn-modo-red");
const indicadorSinc = document.querySelector("#indicador-sincronizacion");

// Módulo 1: Diagnóstico
const formDiagnostico = document.querySelector("#form-diagnostico");
const inputFoto = document.querySelector("#input-foto");
const selectSintoma = document.querySelector("#select-sintoma");
const diagUbicacion = document.querySelector("#diag-ubicacion");
const diagCultivo = document.querySelector("#diag-cultivo");
const imgPreview = document.querySelector("#img-preview");
const textoPreview = document.querySelector("#texto-preview");
const resultadoDiagnostico = document.querySelector("#resultado-diagnostico");

// Módulo 2: Planificador
const formPlanificador = document.querySelector("#form-planificador");
const planCultivo = document.querySelector("#plan-cultivo");
const planEtapa = document.querySelector("#plan-etapa");
const planArea = document.querySelector("#plan-area");
const resultadoPlanificador = document.querySelector("#resultado-planificador");

// Módulo 3: Clima
const climaRegion = document.querySelector("#clima-region");
const contenedorAlertasClima = document.querySelector("#contenedor-alertas-clima");

// Módulo 4: Bitácora
const resumenFinanciero = document.querySelector("#resumen-financiero");
const formBitacora = document.querySelector("#form-bitacora");
const graficoBarras = document.querySelector("#grafico-barras");
const listaBitacora = document.querySelector("#lista-bitacora");

// Sección Planes y Alianzas
const contenedorPlanes = document.querySelector("#contenedor-planes");
const contenedorAlianzas = document.querySelector("#contenedor-alianzas");

// Estado en memoria del Modo Offline (pág. 34)
let modoOfflineActivo = false;
let cambiosPendientesSincronizar = 0;

function crearElemento(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto !== undefined && texto !== null) {
    el.textContent = String(texto);
  }
  return el;
}

function crearFilaDetalle(titulo, descripcion) {
  const li = crearElemento("li");
  const strong = crearElemento("strong", "", `${titulo}: `);
  const span = crearElemento("span", "", descripcion);
  li.append(strong, span);
  return li;
}

// 1. Navegación por pestañas y Conmutador Offline/Online
function inicializarNavegacionYRed() {
  navPrincipal.addEventListener("click", (e) => {
    const boton = e.target.closest(".tab-modulo");
    if (!boton) return;

    navPrincipal.querySelectorAll(".tab-modulo").forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    const idDestino = boton.dataset.modulo;
    document.querySelectorAll(".vista-modulo").forEach((sec) => {
      sec.classList.toggle("oculto", sec.id !== idDestino);
    });
  });

  btnModoRed.addEventListener("click", () => {
    modoOfflineActivo = !modoOfflineActivo;
    if (modoOfflineActivo) {
      btnModoRed.textContent = "Modo Offline Rural (Sin Señal)";
      btnModoRed.className = "boton-red offline";
      indicadorSinc.textContent = "Operando en memoria local sin internet";
    } else {
      btnModoRed.textContent = "Modo Online Activo (24/7)";
      btnModoRed.className = "boton-red online";
      indicadorSinc.textContent = cambiosPendientesSincronizar > 0
        ? `Sincronizados ${cambiosPendientesSincronizar} registros rurales automáticamente`
        : "Datos sincronizados";
      cambiosPendientesSincronizar = 0;
    }
  });
}

// 2. Inicialización del Módulo 1: Diagnóstico y Control de Plagas
function inicializarModuloDiagnostico() {
  catalogoPlagasCR.forEach((p) => {
    const opt = crearElemento("option", "", p.sintomaVisible);
    opt.value = p.id;
    selectSintoma.append(opt);
  });

  regionesCostaRica.forEach((reg) => {
    const opt = crearElemento("option", "", reg);
    opt.value = reg;
    diagUbicacion.append(opt);
  });

  catalogoCultivos.forEach((c) => {
    const opt = crearElemento("option", "", c.nombre);
    opt.value = c.nombre;
    diagCultivo.append(opt);
  });

  // Lector de archivo de imagen para previsualizar foto del cultivo
  inputFoto.addEventListener("change", () => {
    const archivo = inputFoto.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = (evento) => {
      imgPreview.src = evento.target.result;
      imgPreview.classList.remove("oculto");
      textoPreview.textContent = `Fotografía cargada: ${archivo.name}`;
    };
    lector.readAsDataURL(archivo);
  });

  formDiagnostico.addEventListener("submit", (e) => {
    e.preventDefault();
    if (modoOfflineActivo) {
      cambiosPendientesSincronizar += 1;
      indicadorSinc.textContent = ` Cola offline: ${cambiosPendientesSincronizar} consulta(s) guardada(s) localmente`;
    }
    mostrarResultadoDiagnostico(
      selectSintoma.value,
      diagUbicacion.value,
      diagCultivo.value
    );
  });

  // Mostrar diagnóstico inicial de ejemplo al arrancar
  mostrarResultadoDiagnostico(catalogoPlagasCR[0].id, regionesCostaRica[0], catalogoCultivos[0].nombre);
}

function mostrarResultadoDiagnostico(idPlaga, ubicacion, cultivo) {
  const plaga = catalogoPlagasCR.find((p) => p.id === idPlaga) || catalogoPlagasCR[0];
  resultadoDiagnostico.replaceChildren();

  const titulo = crearElemento("h3", "subtitulo-tarjeta", `Diagnóstico IA: ${plaga.nombrePlaga}`);
  const meta = crearElemento("p", "ayuda-campo", `Ubicación: ${ubicacion} | Cultivo: ${cultivo}`);

  const ul = crearElemento("ul", "lista-detalles");
  ul.append(
    crearFilaDetalle("Nivel de urgencia", plaga.severidad),
    crearFilaDetalle("Síntoma analizado", plaga.sintomaVisible),
    crearFilaDetalle("Recomendación Orgánica (Sostenible)", plaga.tratamientoOrganico),
    crearFilaDetalle("Recomendación Química Neutral", plaga.tratamientoQuimico),
    crearFilaDetalle("Plan de Acción Inmediato", plaga.planAccion)
  );

  resultadoDiagnostico.append(titulo, meta, ul);
}

// 3. Inicialización del Módulo 2: Planificador de Fertilización y Riego
function inicializarModuloPlanificador() {
  catalogoCultivos.forEach((c) => {
    const opt = crearElemento("option", "", c.nombre);
    opt.value = c.id;
    planCultivo.append(opt);
  });

  etapasFenologicas.forEach((et) => {
    const opt = crearElemento("option", "", et.nombre);
    opt.value = et.id;
    planEtapa.append(opt);
  });

  formPlanificador.addEventListener("submit", (e) => {
    e.preventDefault();
    calcularDosificacion();
  });

  calcularDosificacion();
}

function calcularDosificacion() {
  const cultivo = catalogoCultivos.find((c) => c.id === planCultivo.value) || catalogoCultivos[0];
  const etapa = etapasFenologicas.find((e) => e.id === planEtapa.value) || etapasFenologicas[0];
  const areaM2 = Math.max(10, Number(planArea.value) || 1000);

  const aguaTotalLitrosDia = Math.round(cultivo.aguaLitrosPorM2Dia * etapa.factorAgua * areaM2);
  const fertilizanteTotalKg = ((cultivo.fertilizanteGramosPorM2 * etapa.factorFertilizante * areaM2) / 1000).toFixed(1);
  const ahorroEstimadoKg = (Number(fertilizanteTotalKg) * 0.18).toFixed(1);

  resultadoPlanificador.replaceChildren();
  const titulo = crearElemento("h3", "subtitulo-tarjeta", `Guía de Dosificación Exacta (${areaM2} m²)`);

  const ul = crearElemento("ul", "lista-detalles");
  ul.append(
    crearFilaDetalle("Cultivo seleccionado", cultivo.nombre),
    crearFilaDetalle("Etapa fenológica", etapa.nombre),
    crearFilaDetalle("Agua requerida por aplicación", `${aguaTotalLitrosDia.toLocaleString("es-CR")} litros`),
    crearFilaDetalle("Calendario dinámico de riego", etapa.frecuenciaRiego),
    crearFilaDetalle("Dosis exacta de fertilizante", `${fertilizanteTotalKg} kg totales (${cultivo.insumoBase})`),
    crearFilaDetalle("Calendario de fertilización", etapa.calendarioFert),
    crearFilaDetalle("Impacto ambiental y ahorro (15%-20%)", `Evita desperdiciar ~${ahorroEstimadoKg} kg de agroquímicos frente a la aplicación tradicional 'al ojo'.`)
  );

  resultadoPlanificador.append(titulo, ul);
}

// 4. Inicialización del Módulo 3: Sistema de Alerta Climática Predictiva
function inicializarModuloClima() {
  const optTodas = crearElemento("option", "", "Todas las regiones prioritarias de Costa Rica");
  optTodas.value = "todas";
  climaRegion.append(optTodas);

  regionesCostaRica.forEach((reg) => {
    const opt = crearElemento("option", "", reg);
    opt.value = reg;
    climaRegion.append(opt);
  });

  climaRegion.addEventListener("change", () => {
    renderizarAlertasClima(climaRegion.value);
  });

  renderizarAlertasClima("todas");
}

function renderizarAlertasClima(filtroRegion) {
  contenedorAlertasClima.replaceChildren();

  const alertasFiltradas = filtroRegion === "todas"
    ? alertasClimaticasCR
    : alertasClimaticasCR.filter((a) => a.region === filtroRegion);

  alertasFiltradas.forEach((alerta) => {
    const tarjeta = crearElemento("article", `tarjeta-item ${alerta.nivel}`);
    tarjeta.append(
      crearElemento("h3", "subtitulo-tarjeta", alerta.region),
      crearElemento("p", "", `Pronóstico microclimático: ${alerta.fenomeno}`),
      crearElemento("strong", "", `Consejo preventivo de acción: ${alerta.instruccionPreventiva}`)
    );
    contenedorAlertasClima.append(tarjeta);
  });
}

// 5. Inicialización del Módulo 4: Bitácora Digital de Recursos y Analítica
function inicializarModuloBitacora() {
  formBitacora.addEventListener("submit", (e) => {
    e.preventDefault();
    const tipo = document.querySelector("#bit-tipo").value;
    const concepto = document.querySelector("#bit-concepto").value.trim();
    const monto = Number(document.querySelector("#bit-monto").value) || 0;
    if (!concepto || monto < 0) return;

    bitacoraRecursos.unshift({
      id: Date.now(),
      tipo,
      concepto,
      monto
    });

    if (modoOfflineActivo) {
      cambiosPendientesSincronizar += 1;
      indicadorSinc.textContent = `Cola offline: ${cambiosPendientesSincronizar} registro(s) pendiente(s) de sincronizar`;
    }

    formBitacora.reset();
    document.querySelector("#bit-monto").value = "25000";
    renderizarBitacoraYAnalitica();
  });

  renderizarBitacoraYAnalitica();
}

function renderizarBitacoraYAnalitica() {
  let totalIngresos = 0;
  let totalGastos = 0;

  bitacoraRecursos.forEach((item) => {
    if (item.tipo === "Ingreso por cosecha") {
      totalIngresos += item.monto;
    } else {
      totalGastos += item.monto;
    }
  });

  const balanceNeto = totalIngresos - totalGastos;
  const margenRentabilidad = totalIngresos > 0
    ? Math.round((balanceNeto / totalIngresos) * 100)
    : 0;

  // Renderizar KPIs superiores
  resumenFinanciero.replaceChildren();
  const kpis = [
    { titulo: "Ingresos de cosecha", valor: `₡${totalIngresos.toLocaleString("es-CR")}` },
    { titulo: "Gastos e insumos", valor: `₡${totalGastos.toLocaleString("es-CR")}` },
    { titulo: "Rentabilidad neta", valor: `₡${balanceNeto.toLocaleString("es-CR")} (${margenRentabilidad}%)` }
  ];

  kpis.forEach((k) => {
    const caja = crearElemento("div", "caja-kpi");
    caja.append(crearElemento("span", "", k.titulo), crearElemento("strong", "", k.valor));
    resumenFinanciero.append(caja);
  });

  // Renderizar gráfico de barras comparativo (Optimización de Reportes pág. 34)
  graficoBarras.replaceChildren();
  const maximo = Math.max(totalIngresos, totalGastos, 1);
  const pctIngresos = Math.round((totalIngresos / maximo) * 100);
  const pctGastos = Math.round((totalGastos / maximo) * 100);

  graficoBarras.append(
    crearBarraGrafico(`Ingresos (${pctIngresos}%)`, pctIngresos),
    crearBarraGrafico(`Gastos de producción (${pctGastos}%)`, pctGastos)
  );

  // Renderizar lista de movimientos
  listaBitacora.replaceChildren();
  bitacoraRecursos.forEach((reg) => {
    const li = crearElemento("li", "item-bitacora");
    const info = crearElemento("div");
    info.append(
      crearElemento("strong", "", `${reg.tipo}: `),
      crearElemento("span", "", reg.concepto)
    );
    const montoTag = crearElemento("strong", "", `₡${reg.monto.toLocaleString("es-CR")}`);
    li.append(info, montoTag);
    listaBitacora.append(li);
  });
}

function crearBarraGrafico(etiqueta, porcentaje) {
  const fila = crearElemento("div", "fila-barra");
  const texto = crearElemento("span", "", etiqueta);
  const pista = crearElemento("div", "pista-barra");
  const relleno = crearElemento("div", "relleno-barra");
  relleno.style.width = `${porcentaje}%`;
  pista.append(relleno);
  fila.append(texto, pista);
  return fila;
}

// 6. Inicialización de la sección Comercial (Planes, SINPE Móvil y Alianzas)
function inicializarModuloPlanes() {
  planesYAlianzas.planes.forEach((plan) => {
    const tarjeta = crearElemento("article", "tarjeta-item");
    tarjeta.append(
      crearElemento("h3", "subtitulo-tarjeta", plan.nombre),
      crearElemento("p", "ayuda-campo", plan.modalidad)
    );
    const ul = crearElemento("ul", "lista-detalles");
    plan.incluye.forEach((beneficio) => {
      ul.append(crearElemento("li", "", `• ${beneficio}`));
    });
    tarjeta.append(ul);
    contenedorPlanes.append(tarjeta);
  });

  const tPagos = crearElemento("article", "tarjeta-item");
  tPagos.append(crearElemento("h3", "subtitulo-tarjeta", "Medios de Pago Habilitados"));
  const ulPagos = crearElemento("ul", "lista-detalles");
  planesYAlianzas.formasPago.forEach((mp) => {
    ulPagos.append(crearElemento("li", "", `• ${mp}`));
  });
  tPagos.append(ulPagos);

  const tAlianzas = crearElemento("article", "tarjeta-item");
  tAlianzas.append(crearElemento("h3", "subtitulo-tarjeta", "Alianzas y Soporte al Productor"));
  const ulAlianzas = crearElemento("ul", "lista-detalles");
  planesYAlianzas.alianzasYCanales.forEach((al) => {
    ulAlianzas.append(crearElemento("li", "", `• ${al}`));
  });
  tAlianzas.append(ulAlianzas);

  contenedorAlianzas.append(tPagos, tAlianzas);
}

// Arranque general de la aplicación Agro-Nova en memoria
inicializarNavegacionYRed();
inicializarModuloDiagnostico();
inicializarModuloPlanificador();
inicializarModuloClima();
inicializarModuloBitacora();
inicializarModuloPlanes();