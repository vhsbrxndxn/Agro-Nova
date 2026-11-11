import {
  infoIdentidad,
  modulosFuncionales,
  requisitosExperiencia,
  mercadoMeta,
  problemasNecesidades,
  finanzasYCanales,
  validacionYSostenibilidad,
  especificacionesNoDisponibles,
  inconsistenciasDocumentales
} from "./datos-manual.js";

const contenedorSecciones = document.querySelector("#contenedor-secciones");
const criterioEl = document.querySelector("#criterio-documental");
const pieEl = document.querySelector("#pie-documental");
const menuFiltros = document.querySelector("#menu-filtros");
const buscadorInput = document.querySelector("#buscador-memoria");

function crearElemento(etiqueta, clase, texto) {
  const el = document.createElement(etiqueta);
  if (clase) el.className = clase;
  if (texto !== undefined && texto !== null) {
    el.textContent = String(texto);
  }
  return el;
}

function crearNodoValor(valor) {
  if (valor === "No disponible" || valor === null || valor === undefined) {
    return crearElemento("span", "etiqueta-nd", "No disponible");
  }
  if (Array.isArray(valor)) {
    return crearElemento("span", "", valor.join(" | "));
  }
  return crearElemento("span", "", String(valor));
}

function crearItemLista(etiqueta, valor) {
  const li = document.createElement("li");
  const strong = crearElemento("strong", "", `${etiqueta}: `);
  li.append(strong, crearNodoValor(valor));
  return li;
}

function crearSeccion(categoriaVista, titulo, paginas) {
  const sec = crearElemento("section", "vista-modulo");
  sec.dataset.vista = categoriaVista;

  const enc = crearElemento("div", "encabezado-modulo");
  enc.append(crearElemento("h2", "", titulo));

  if (Array.isArray(paginas) && paginas.length > 0) {
    enc.append(crearElemento("span", "etiqueta-flujo", `Págs. PDF: ${paginas.join(", ")}`));
  }

  sec.append(enc);
  return sec;
}

function construirSeccionIdentidad() {
  const { fuente, marca, sitio, fichaProducto } = infoIdentidad;
  criterioEl.textContent = `${fuente.documento} (${fuente.paginas} págs.) — ${fuente.criterio}`;
  pieEl.textContent = `${fuente.institucion} (${fuente.sede}) | ${fuente.curso} | Profesora: ${fuente.profesora}`;

  const sec = crearSeccion("identidad", "1. Identificación del Proyecto, Marca y Sitio Web", fichaProducto.paginas_fuente);
  const rejilla = crearElemento("div", "rejilla-tarjetas");

  const tFuente = crearElemento("article", "tarjeta-item");
  tFuente.append(crearElemento("h3", "subtitulo-tarjeta", "Fuente Académica y Producto"));
  const ulFuente = crearElemento("ul", "lista-detalles");
  ulFuente.append(
    crearItemLista("Documento", fuente.documento),
    crearItemLista("Archivo origen", fuente.archivo_origen),
    crearItemLista("Institución y sede", `${fuente.institucion}, ${fuente.sede}`),
    crearItemLista("Curso y profesora", `${fuente.curso} (${fuente.profesora})`),
    crearItemLista("Integrantes", fuente.integrantes),
    crearItemLista("Tipo de producto", fichaProducto.tipo),
    crearItemLista("Modalidad comercial", fichaProducto.modalidad_comercial),
    crearItemLista("Dispositivo y disponibilidad", `${fichaProducto.tipo_dispositivo_mencionado} (${fichaProducto.disponibilidad_descripta})`)
  );
  tFuente.append(ulFuente);

  const tMarca = crearElemento("article", "tarjeta-item");
  tMarca.append(crearElemento("h3", "subtitulo-tarjeta", "Identidad de Marca y Propuesta de Valor"));
  const ulMarca = crearElemento("ul", "lista-detalles");
  ulMarca.append(
    crearItemLista("Variantes en el documento", marca.variantes_en_el_documento),
    crearItemLista("Eslogan", marca.slogan),
    crearItemLista("Propuesta de valor", marca.propuesta_de_valor),
    crearItemLista("Descripción original", marca.descripcion_de_servicio),
    crearItemLista("Justificación del nombre", marca.justificacion_nombre),
    crearItemLista("Identidad visual", marca.identidad_visual),
    crearItemLista("Códigos HEX", marca.codigos_hexadecimales),
    crearItemLista("Familia tipográfica", marca.familia_tipografica),
    crearItemLista("Rediseño pendiente", marca.rediseño_pendiente)
  );
  tMarca.append(ulMarca);

  const tSitio = crearElemento("article", "tarjeta-item");
  tSitio.append(crearElemento("h3", "subtitulo-tarjeta", "Sitio Web Documentado"));
  const ulSitio = crearElemento("ul", "lista-detalles");
  ulSitio.append(
    crearItemLista("Landing page existente", sitio.landing_page_existente),
    crearItemLista("Propósito", sitio.proposito),
    crearItemLista("Arquitectura de páginas", sitio.arquitectura_de_paginas),
    crearItemLista("Menú de navegación", sitio.menu_navegacion),
    crearItemLista("Formulario / Correo / Teléfono", sitio.formulario_contacto)
  );
  tSitio.append(ulSitio);

  rejilla.append(tFuente, tMarca, tSitio);
  sec.append(rejilla);
  contenedorSecciones.append(sec);
}

function construirSeccionModulos() {
  const sec = crearSeccion("modulos", "2. Especificación Documental de los 4 Módulos y Requisitos", [15, 17, 18, 21, 29, 34, 41]);
  const rejillaModulos = crearElemento("div", "rejilla-tarjetas");

  modulosFuncionales.forEach((mod) => {
    const tarjeta = crearElemento("article", "tarjeta-item");
    tarjeta.append(crearElemento("h3", "subtitulo-tarjeta", mod.titulo));
    const ul = crearElemento("ul", "lista-detalles");
    ul.append(
      crearItemLista("Descripción literal", mod.descripcion_literal),
      crearItemLista("Datos de entrada", mod.datos_de_entrada_mencionados),
      crearItemLista("Procesamiento", mod.procesamiento_mencionado),
      crearItemLista("Resultados", mod.salidas_mencionadas),
      crearItemLista("Estructura de campos", mod.campos_detallados),
      crearItemLista("Fórmulas / Modelo IA", mod.especificacion_algoritmo_o_ia)
    );
    tarjeta.append(ul);
    rejillaModulos.append(tarjeta);
  });

  const tRequisitos = crearElemento("article", "tarjeta-item");
  tRequisitos.append(crearElemento("h3", "subtitulo-tarjeta", "Requisitos de Funcionamiento y Experiencia de Uso"));
  const ulReq = crearElemento("ul", "lista-detalles");
  requisitosExperiencia.forEach((req) => {
    ulReq.append(crearItemLista(`${req.elemento} (${req.estado})`, req.especificacion));
  });
  tRequisitos.append(ulReq);

  sec.append(rejillaModulos, tRequisitos);
  contenedorSecciones.append(sec);
}

function construirSeccionMercado() {
  const sec = crearSeccion("mercado", "3. Público Objetivo, Regiones y Problemas que Resuelve", [10, 16, 20, 21, 22, 24, 27, 28, 29, 34]);
  const rejilla = crearElemento("div", "rejilla-tarjetas");

  const tPerfil = crearElemento("article", "tarjeta-item");
  tPerfil.append(crearElemento("h3", "subtitulo-tarjeta", "Perfil del Mercado Meta"));
  const ulPerfil = crearElemento("ul", "lista-detalles");
  Object.entries(mercadoMeta.criterios).forEach(([clave, valor]) => {
    ulPerfil.append(crearItemLista(clave.replace(/_/g, " ").toUpperCase(), valor));
  });
  ulPerfil.append(
    crearItemLista("Grupos de usuarios", mercadoMeta.grupos_usuarios),
    crearItemLista("Regiones prioritarias", mercadoMeta.regiones_prioritarias)
  );
  tPerfil.append(ulPerfil);

  const tProblemas = crearElemento("article", "tarjeta-item");
  tProblemas.append(crearElemento("h3", "subtitulo-tarjeta", "Problemas Identificados vs. Necesidades"));
  const ulProb = crearElemento("ul", "lista-detalles");
  problemasNecesidades.forEach((item) => {
    ulProb.append(crearItemLista(item.problema, item.necesidad));
  });
  tProblemas.append(ulProb);

  rejilla.append(tPerfil, tProblemas);
  sec.append(rejilla);
  contenedorSecciones.append(sec);
}

function construirSeccionFinanzas() {
  const sec = crearSeccion("finanzas", "4. Modelo de Negocio, Costos y Canales de Distribución", finanzasYCanales.paginas_fuente);
  const rejilla = crearElemento("div", "rejilla-tarjetas");

  const tIngresos = crearElemento("article", "tarjeta-item");
  tIngresos.append(crearElemento("h3", "subtitulo-tarjeta", "Fuentes de Ingreso y Medios de Pago"));
  const ulIngresos = crearElemento("ul", "lista-detalles");
  finanzasYCanales.ingresos_previstos.forEach((ing) => {
    ulIngresos.append(crearItemLista(ing.fuente, ing.descripcion));
  });
  ulIngresos.append(
    crearItemLista("Medios de pago", finanzasYCanales.medios_pago),
    crearItemLista("Esquema tarifario", finanzasYCanales.compromiso_tarifario),
    crearItemLista("Precios y proveedor de pagos", "No disponible")
  );
  tIngresos.append(ulIngresos);

  const tCostos = crearElemento("article", "tarjeta-item");
  tCostos.append(crearElemento("h3", "subtitulo-tarjeta", "Estructura de Costos (Fijos y Variables)"));
  const ulCostos = crearElemento("ul", "lista-detalles");
  ulCostos.append(
    crearItemLista("Costos fijos (10 rubros)", finanzasYCanales.costos_fijos),
    crearItemLista("Costos variables (9 rubros)", finanzasYCanales.costos_variables),
    crearItemLista("Montos y punto de equilibrio", finanzasYCanales.montos_y_punto_equilibrio)
  );
  tCostos.append(ulCostos);

  const tCanales = crearElemento("article", "tarjeta-item");
  tCanales.append(crearElemento("h3", "subtitulo-tarjeta", "Canales de Distribución y Alianzas"));
  const ulCanales = crearElemento("ul", "lista-detalles");
  const cd = finanzasYCanales.canales_distribucion;
  ulCanales.append(
    crearItemLista("Modelo", cd.modelo),
    crearItemLista("Distribución digital", cd.distribucion_digital),
    crearItemLista("Redes sociales", cd.redes_sociales),
    crearItemLista("Publicidad digital", cd.publicidad_digital),
    crearItemLista("Contacto presencial", cd.contacto_presencial),
    crearItemLista("Alianzas mencionadas", cd.alianzas),
    crearItemLista("Asistencia", cd.asistencia),
    crearItemLista("Enlaces y cuentas oficiales", cd.cuentas_enlaces_y_telefonos)
  );
  tCanales.append(ulCanales);

  rejilla.append(tIngresos, tCostos, tCanales);
  sec.append(rejilla);
  contenedorSecciones.append(sec);
}

function construirSeccionValidacion() {
  const { investigacion, sostenibilidad } = validacionYSostenibilidad;
  const sec = crearSeccion("validacion", "5. Investigación (Encuesta de 18 Preguntas) y Sostenibilidad", investigacion.paginas_fuente);
  const rejilla = crearElemento("div", "rejilla-tarjetas");

  const tEncuesta = crearElemento("article", "tarjeta-item");
  tEncuesta.append(crearElemento("h3", "subtitulo-tarjeta", "Validación y Formulario de 18 Preguntas"));
  const ulEncuesta = crearElemento("ul", "lista-detalles");
  ulEncuesta.append(
    crearItemLista("Muestra", investigacion.muestra),
    crearItemLista("Funciones mejor valoradas", investigacion.funciones_mejor_valoradas),
    crearItemLista("Tres mejoras acordadas", investigacion.mejoras_documentadas),
    crearItemLista("Temáticas de las 18 preguntas", investigacion.temas_formulario_18_preguntas),
    crearItemLista("Porcentajes individuales y BD de respuestas", investigacion.porcentajes_y_base_respuestas)
  );
  tEncuesta.append(ulEncuesta);

  const tSost = crearElemento("article", "tarjeta-item");
  tSost.append(crearElemento("h3", "subtitulo-tarjeta", "Responsabilidad Social y Sostenibilidad"));
  const ulSost = crearElemento("ul", "lista-detalles");
  ulSost.append(
    crearItemLista("Impacto ambiental", sostenibilidad.ambiental),
    crearItemLista("Inclusión tecnológica", sostenibilidad.inclusion_tecnologica),
    crearItemLista("Transparencia de datos", sostenibilidad.transparencia),
    crearItemLista("Reducción de agroquímicos", sostenibilidad.reduccion_agroquimicos),
    crearItemLista("Rendimiento de cosechas", sostenibilidad.rendimiento_cosechas),
    crearItemLista("Beneficiarios", sostenibilidad.beneficiarios)
  );
  tSost.append(ulSost);

  rejilla.append(tEncuesta, tSost);
  sec.append(rejilla);
  contenedorSecciones.append(sec);
}

function construirSeccionAuditoria() {
  const sec = crearSeccion("auditoria", "6. Especificaciones Técnicas No Disponibles e Inconsistencias", [15, 16, 17, 18, 21, 27, 32, 34, 43]);
  const rejilla = crearElemento("div", "rejilla-tarjetas");

  const tVacios = crearElemento("article", "tarjeta-item");
  tVacios.append(crearElemento("h3", "subtitulo-tarjeta", "16 Áreas Técnicas No Especificadas en el PDF"));
  const ulVacios = crearElemento("ul", "lista-detalles");
  especificacionesNoDisponibles.forEach((item) => {
    ulVacios.append(crearItemLista(item.area, item.estado));
  });
  tVacios.append(ulVacios);

  const tInconsistencias = crearElemento("article", "tarjeta-item");
  tInconsistencias.append(crearElemento("h3", "subtitulo-tarjeta", "3 Inconsistencias Documentales Conservadas"));
  const ulInc = crearElemento("ul", "lista-detalles");
  inconsistenciasDocumentales.forEach((inc) => {
    ulInc.append(crearItemLista(inc.punto, inc.detalle));
  });
  tInconsistencias.append(ulInc);

  rejilla.append(tVacios, tInconsistencias);
  sec.append(rejilla);
  contenedorSecciones.append(sec);
}

function configurarFiltros() {
  menuFiltros.addEventListener("click", (e) => {
    const boton = e.target.closest(".tab-modulo");
    if (!boton) return;

    menuFiltros.querySelectorAll(".tab-modulo").forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    const vistaSeleccionada = boton.dataset.vista;
    contenedorSecciones.querySelectorAll(".vista-modulo").forEach((sec) => {
      const mostrar = vistaSeleccionada === "todas" || sec.dataset.vista === vistaSeleccionada;
      sec.classList.toggle("oculto", !mostrar);
    });
  });

  buscadorInput.addEventListener("input", () => {
    const termino = buscadorInput.value.trim().toLowerCase();
    contenedorSecciones.querySelectorAll(".tarjeta-item").forEach((tarjeta) => {
      const coincide = tarjeta.textContent.toLowerCase().includes(termino);
      tarjeta.classList.toggle("oculto", !coincide);
    });
  });
}

construirSeccionIdentidad();
construirSeccionModulos();
construirSeccionMercado();
construirSeccionFinanzas();
construirSeccionValidacion();
construirSeccionAuditoria();
configurarFiltros();