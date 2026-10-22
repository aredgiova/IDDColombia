---
name: Iglesia de Dios en Colombia
description: Sistema institucional, formal y contemporáneo para el sitio público, con fotografía real y lectura clara.
colors:
  blue: "#0b2d48"
  blue-hover: "#071f33"
  accent: "#265f88"
  ink: "#142c40"
  muted: "#536677"
  white: "#fff"
  pale: "#f2f5f7"
  line: "#d7e0e7"
  control-border: "#6f879a"
  light-hover: "#dfeaf4"
  on-blue-muted: "#d6e2eb"
  resource-line: "#c9d7e3"
  footer-line: "#426079"
  focus: "#327cbf"
  focus-on-blue: "#b6d9f5"
  map-unpublished: "#f1f5f8"
  map-boundary: "#7191a9"
  map-published: "#cadfed"
  map-hover: "#9cbed7"
  map-focus: "#b36b0a"
  map-divider-on-blue: "#54799e"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.4rem, 4.1vw, 3.9rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  hero-display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(3rem, 4.7vw, 4.7rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.8rem, 3vw, 2.65rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.5
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.87rem"
    fontWeight: 600
    lineHeight: 1.75
  map-stat:
    fontFamily: "Manrope, sans-serif"
    fontSize: "2.7rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  map-label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 800
  institutional-lead:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.4rem, 2.15vw, 1.95rem)"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.025em"
  institutional-statement:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.8
  article-body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.85
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  focus: "3px"
  control: "6px"
  surface: "12px"
spacing:
  "12": "12px"
  "20": "20px"
  "24": "24px"
  "26": "26px"
  "30": "30px"
  "34": "34px"
  "40": "40px"
  "56": "56px"
  "60": "60px"
  "76": "76px"
  "104": "104px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.blue}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-outline-hover:
    backgroundColor: "{colors.pale}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
  button-light-hover:
    backgroundColor: "{colors.light-hover}"
  button-small:
    padding: "10px 21px"
  text-link:
    textColor: "{colors.blue}"
  desktop-navigation:
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
  menu-toggle:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue}"
    rounded: "{rounded.control}"
    width: "46px"
    height: "46px"
  ministry:
    textColor: "{colors.ink}"
    padding: "30px 0 0"
  resource-link:
    textColor: "{colors.ink}"
    padding: "24px 0"
  welcome-paths:
    textColor: "{colors.ink}"
    padding: "28px 0"
  search-input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 16px 14px 49px"
  calendar-month-select:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 42px 12px 16px"
---

# Design System: Iglesia de Dios en Colombia

## Overview

**Creative North Star: "Presencia institucional, comunidad visible"**

El sistema expresa una organización nacional vinculada a una comunidad internacional mediante azul profundo, proporciones estables, fotografía documental y jerarquía tipográfica compartida. La presentación es formal, sofisticada y contemporánea; la cercanía permanece en las personas reales, la bienvenida y los destinos comprensibles. El espacio en blanco, las líneas discretas y las superficies tonales ordenan la información.

El usuario solicitó este refinamiento para todo el sitio. Evoluciona la dirección inicial «institucional y cercana» y conserva logo, Manrope, contenido y funciones. No hubo una composición generada aprobada ni ratificación del manual de marca. Esta documentación describe el código vigente; las verificaciones de entregas anteriores conservan valor histórico y no certifican el refinamiento actual.

**Key Characteristics:**

- Azul profundo en barra institucional, bienvenida, llamadas destacadas y pie de página.
- Fotografías documentales y logo auténtico sobre superficies que aseguran su lectura.
- Escala tipográfica, controles y ritmo compartidos por quince rutas públicas de contenido.
- Lectura abierta con divisores, bloques tonales selectivos y jerarquías claras.
- Prioridad compartida para visitantes y miembros, reflujo estrecho y foco de teclado visible.

Fuentes: estilos globales y de directorio, biblioteca, blog, mapa y páginas institucionales, junto a sus componentes. El sistema abarca Home, directorio, biblioteca, índice y tres artículos del blog, portada institucional, seis páginas interiores y calendario. No incorpora autenticación, administración ni formularios de envío.

## Colors

La paleta combina azul profundo y neutrales fríos. Los valores normativos están en el frontmatter y corresponden al CSS vigente.

### Primary

- **Azul institucional (blue):** barra superior, hero, pie, botones, enlaces, territorio seleccionado y navegación local activa. La variante blue-hover profundiza el botón principal.
- **Azul de énfasis (accent):** respuesta de navegación y enlaces, numeración institucional y algunos iconos.
- **Foco sobre claro y sobre azul (focus, focus-on-blue):** contornos de teclado según la superficie, independientes del hover.

### Neutral

- **Tinta azul y gris azulado (ink, muted):** títulos y texto principal, frente a párrafos y datos secundarios.
- **Blanco (white):** lectura, texto sobre azul, botones claros y soporte del logo en el pie.
- **Gris pálido (pale):** introducciones de directorio y biblioteca, cabeceras institucionales, recursos, avisos y controles de calendario.
- **Líneas frías (line, resource-line, footer-line):** divisores sobre superficies claras, recursos y pie azul, sin envolver cada elemento en una tarjeta.
- **Borde de control (control-border):** inputs, selectores, botones de contorno y menú móvil.
- **Texto suave y respuesta clara (on-blue-muted, light-hover):** lectura secundaria sobre azul y hover del botón blanco.

Las variables de :root son la autoridad para los colores compartidos. --blue y --navy coinciden y el frontmatter los representa una sola vez. Algunos matices de leyendas y colores del mapa siguen como literales locales. Las rampas del sidecar son muestras sintetizadas para el panel; no amplían la paleta implementada.

### Estados cartográficos

Los tokens map- describen territorio sin fichas, territorio publicado, frontera, hover y divisor sobre azul. La selección reutiliza el azul institucional. El foco aplica trazo ocre de 3.5 px: es una señal funcional local, no un acento de marca. El selector hereda el borde global de controles.

## Typography

**Display Font:** Manrope variable, con respaldo sans-serif.
**Body Font:** Manrope variable, con respaldo sans-serif.

**Character:** una sola familia conecta navegación, títulos, lectura y herramientas. El peso alto y el tracking negativo distinguen títulos; la interlínea amplia permite leer datos y textos institucionales sin densidad excesiva.

La fuente local se carga mediante next/font/local, variable --font-manrope, display: swap y pesos 400–800. Archivo: public/fonts/manrope-latin.woff2; licencia: public/fonts/Manrope-OFL.txt. La procedencia consta en docs/ACTIVOS-UTILIZADOS.md. No se presenta como tipografía oficial ratificada.

### Hierarchy

- **Display:** H1 de directorio, biblioteca, blog y páginas institucionales; corresponde a --type-display.
- **Hero display:** variante mayor para la bienvenida sobre azul, con ancho máximo de 13ch en escritorio. La segunda frase usa un azul claro local.
- **Headline:** H2 de secciones, mapa, páginas institucionales y lectura destacada; corresponde a --type-section.
- **Title:** H3 y destinos de contenido; corresponde a --type-title. Los títulos usan text-wrap: balance.
- **Body:** base de 16 px, con lectura habitual de 39–55ch; el hero usa 42ch e interlínea 1.8. Los artículos institucionales admiten 72ch.
- **Article body:** blog limitado a 68ch, con tamaño e interlínea propios para texto continuo.
- **Label / navigation / metadata:** acciones con peso 700, navegación con peso 600 y metadatos secundarios. Los tamaños menores son contextuales.
- **Institutional lead / statement:** frase de portada y declaraciones sobre superficies tonales; estas últimas bajan a 1 rem en móvil.
- **Map stat / label:** conteos tabulares y etiquetas sobre SVG con contorno blanco. «Sin registro» y «No publicado» usan tamaño de texto, no de cifra.

## Layout

El contenedor compartido tiene máximo de 1280 px y ancho calc(100% - 80px). Hasta 767 px usa márgenes de 20 px; hasta 359 px, de 16 px. La separación general de secciones es 104 px por extremo en escritorio, 76 px bajo 1024 px y 60 px bajo 768 px. Los pasos del frontmatter describen valores existentes, sin convertir cada ajuste local en token.

La cabecera permanece en el flujo. Una barra azul de 42 px precede al área blanca de al menos 104 px. El logo mide 220 px en escritorio, 184 px en móvil y 170 px en anchos muy estrechos. La barra pasa a 36 px en móvil y mantiene el nombre institucional mientras oculta sus accesos secundarios. El área principal baja a 82 px bajo 1024 px y a 76 px bajo 768 px.

La Home abre con texto sobre azul y foto real en columnas 1fr 1.06fr, con separación de 60 px y foto de al menos 560 px de alto. Siguen dos accesos de bienvenida y el mapa sobre blanco. Los demás bloques alternan texto/foto, tres columnas abiertas de ministerios y filas de recursos. Congregaciones usa azul y 88/52 px de separación vertical en escritorio/móvil; recursos usa gris pálido y 96/56 px.

### Responsive

- **Hasta 1100 px:** se reducen espacios; directorio y biblioteca reorganizan datos y acciones sin perder campos. La navegación tiene un ajuste adicional entre 1024 y 1199 px.
- **Hasta 1023 px:** el menú móvil sustituye navegación y contacto de escritorio; el pie pasa a dos columnas. El hero usa clamp(2.6rem, 4.7vw, 3.5rem) para su titular.
- **Hasta 767 px:** bienvenida, contenidos y listados pasan a una columna. La bienvenida precede a la foto, cuya proporción es 1.6; el encuadre horizontal pasa de 72% a 65%. Los accesos se apilan con divisor horizontal. El directorio oculta su foto introductoria y conserva todos los controles.
- **Titular del hero móvil:** clamp(2.45rem, 7.8vw, 3.8rem), interlínea 1.14; hasta 359 px usa 2.2 rem. Los H2 mantienen el token global. El H1 de artículo del blog tiene variante móvil clamp(2rem, 6.5vw, 2.8rem).
- **Pie móvil:** invitación y botón apilados; marca y contacto a ancho completo, con grupos de enlaces que refluyen. Los correos admiten corte de palabra.

### Mapa y herramientas

El mapa comienza 64 px después de los accesos, o 40 px en móvil; su H2 comparte la escala de sección. En escritorio, el SVG ocupa la columna flexible y selector/ficha una columna de 360 px, separados 64 px; hasta 1100 px son 320 px y 22 px. En móvil, selector, mapa y ficha se ordenan verticalmente con 18 px de separación. El SVG mide 530 px de alto en escritorio, 500 px en el ajuste intermedio y alto automático limitado a 470 px en móvil.

Directorio y biblioteca abren sobre gris pálido. Búsquedas, etiquetas y filas de resultados comparten escala. El directorio usa tres columnas de filtros, dos bajo 1100 px con búsqueda a ancho completo y una en móvil. Las filas distribuyen identificación, datos y acción; en móvil se leen de arriba abajo.

### Páginas de lectura

La portada institucional combina introducción y foto con 80 px de separación; tres preguntas ordenan siete destinos. Las páginas interiores usan cabecera tonal con 48 px de padding y artículo junto a navegación de 248 px, separados 80 px. Bajo 1100 px la navegación usa 216 px y el espacio 40 px. Permanece adhesiva a 32 px del borde superior. El artículo precede a la navegación en el DOM; en móvil conserva ese orden y la navegación deja de ser adhesiva. El blog centra la cabecera de artículo en escritorio y la alinea a la izquierda en móvil.

Cronología, organización, índice de fe y calendario permiten reflujo. La impresión institucional oculta cabecera, pie, navegación y controles, y lleva las superficies tonales a blanco con texto negro.

## Elevation & Depth

La profundidad procede de superficies, espaciado y líneas. Fotos y bloques informativos seleccionados tienen esquinas moderadas; las filas de ministerios, recursos, congregaciones y carpetas permanecen abiertas. La elevación se reserva para navegación superpuesta.

### Shadow Vocabulary

- **Menú móvil:** 0 16px 28px rgb(15 44 76 / 8%).
- **Submenú institucional de escritorio:** 0 18px 44px rgb(12 34 53 / 14%).

Las transiciones habituales duran 0.2 s; el mapa usa 0.18 s para relleno y trazo. La flecha de recursos se desplaza 2 px arriba y a la derecha en hover. La foto del hero entra en 0.65 s con cubic-bezier(.16,1,.3,1), solo desde 768 px y sin preferencia de movimiento reducido. Esa preferencia elimina animaciones, transiciones y desplazamiento suave.

## Shapes

El radio surface equivale a --radius y une fotos, fichas y paneles tonales. El radio control corresponde a --radius-control; el foco tiene su radio propio. La fotografía del hero es rectangular y ocupa su columna. Los divisores son de 1 px y rectos. No se utilizan píldoras, blobs ni esquinas recortadas como lenguaje recurrente.

El logo institucional negro sobre transparencia requiere fondo claro y proporción intacta; en el pie azul dispone de soporte blanco con radio de control. Las fotos son documentales y proceden de páginas públicas de la organización y su CDN de Wix. docs/ACTIVOS-UTILIZADOS.md registra URLs y versiones; esa procedencia no equivale a ratificación definitiva de derechos o vigencia para lanzamiento.

## Components

### Buttons

Acciones sobrias, texto en frase y SVG lineal cuando corresponde. El botón general tiene alto mínimo de 54 px, separación de 24 px y borde de 1 px; el pequeño baja a 46 px. El primario usa azul y hover profundo; el de contorno usa borde de control y hover pálido; el claro funciona sobre azul. El foco es de 3 px separado 5 px, con variante clara sobre oscuro. Los botones generales no implementan loading ni error; la navegación mensual sí tiene estado disabled real.

### Inputs and selectors

Búsquedas y selectores mantienen fondo blanco, borde de control, etiqueta visible y foco global. Búsquedas y filtros del directorio tienen al menos 56 px de alto; el selector del mapa, 54 px; el mensual, 52 px. Directorio, biblioteca y calendario cambian el borde a azul en hover. Los placeholders no sustituyen las etiquetas. Los estados sin resultados usan superficie pálida y restablecimiento. No hay formulario de envío ni diálogo propio.

### Navigation

La barra institucional reúne nombre, iglesia internacional, calendario y reportes; la navegación principal permanece sobre blanco. Los enlaces tienen al menos 44 px de alto; la ruta activa usa aria-current, énfasis y subrayado. «Quiénes somos» y su control de 44 × 44 px son acciones separadas. El panel de escritorio presenta tres grupos con descripciones; en móvil se despliegan dentro del menú.

El botón móvil de 46 × 46 px comunica expansión y panel controlado. El panel limita su altura al viewport y permite desplazamiento interno. Escape cierra y devuelve el foco; los cambios de ancho conservan una ubicación de foco pertinente. Flecha abajo abre el submenú de escritorio y enfoca su primer destino. El enlace de salto aparece con foco. La navegación lateral institucional usa relleno azul, texto blanco y peso 700 para la página actual. Estos comportamientos pertenecen a React, no a los snippets estáticos del sidecar.

### Open articles and resource rows

Ministerios: línea superior de color de control, título, párrafo y enlaces; padding superior de 30 px en escritorio y 22 px en móvil. Recursos: enlace de fila con título, descripción, flecha, divisor inferior y padding vertical de 24 px. El hover cambia el título y desplaza la flecha. El sidecar representa el ministerio como card por la taxonomía del panel, conservando su forma abierta.

Los enlaces de texto tienen al menos 44 px de alto, gap de 12 px y flecha de 17 px. ExternalLink abre otra pestaña con noopener noreferrer y anuncia ese comportamiento a tecnologías de asistencia. Los SVG lineales usan currentColor, trazo de 1.7 y extremos redondeados, junto a un nombre visible.

### Welcome, photography and footer

El hero une titular, bienvenida, acción clara «Encuentra una iglesia», enlace institucional y foto de formación con leyenda. Debajo, dos enlaces del mismo peso orientan a visitantes y miembros. El mapa sigue a ambos accesos y ya no sustituye la foto.

El pie azul abre con invitación y botón claro al directorio, y continúa con logo sobre blanco, contacto y navegación agrupada. Contacto conserva mailto y tel; los destinos externos mantienen su anuncio. No se añaden cifras o credenciales institucionales para reforzar la apariencia.

### Mapa de iglesias

ColombiaChurchMap conserva 33 territorios y Atlántico como selección inicial. Clic, selector y teclado actualizan territorio, ficha y destino. El SVG ofrece selección única y una parada de tabulación; flechas recorren la lista alfabética, Inicio/Fin llevan a los extremos y Enter/Espacio activan. Hover modifica la etiqueta geográfica sin sustituir selección; un estado accesible anuncia el resultado.

La ficha distingue iglesias publicadas de miembros reportados. Atlántico muestra aproximadamente 63 miembros informados por dos de sus tres fichas, sin fecha de corte. La membresía desconocida no se convierte en cero. Sin fichas se explica el límite del directorio y se ofrece contacto. «Sobre estas cifras» usa details nativo, cerrado al cambiar de territorio; la nota de datos parciales permanece visible.

Se conservan leyenda, atribución y enlace a datos. Las islas se amplían con advertencia de escala. «Ver iglesia(s)» abre /iglesias?departamento=<código>; búsqueda, departamento y ciudad se combinan, y cambiar departamento limpia ciudad. Criterios en docs/investigacion/mapa-datos-fuentes.md y cartografía en docs/MAPA-COLOMBIA.md.

### Lectura institucional, blog y calendario

Historia usa cronología; misión y visión, superficies pálida y azul; fe conserva catorce puntos con índice y numeración. Organización mantiene listas de definición y notas de discrepancias; la ruta, tres etapas. InstitutionalDocument preserva originales en details, apertura completa y descarga. Organigrama y panorama de la ruta comienzan abiertos.

El blog conserva fotografía destacada, dos lecturas complementarias, metadatos y cuerpo continuo. La presentación no altera autoría, fechas, texto, canonical, datos estructurados, sitemap ni redirecciones. La biblioteca preserva autenticación de sus carpetas en origen.

El calendario usa controles sobre superficie pálida, fechas tabulares y actividades en filas. Un aviso accesible anuncia mes y cantidad. Anterior/siguiente miden al menos 48 px y se deshabilitan en los extremos; las fechas desconocidas se identifican. Cada mes conserva su original, cerrado al cambiar de selección.

### Procedencia y evidencia histórica

La primera Home registró seed 6ba06cbf; la ampliación institucional, composición 3 y seed 915b9570. Son antecedentes de implementación directa, no aprobación de mockups. docs/verificacion y docs/verificacion/quienes-somos conservan capturas y comprobaciones de aquellas entregas. Las fuentes institucionales siguen en docs/QUIENES-SOMOS-CONTENIDO.md y docs/QUIENES-SOMOS-FUENTES-GRAFICAS.md. La verificación del refinamiento actual se registra por separado en docs/verificacion/institucional-visual; la evidencia anterior no debe usarse como sustituto.

## Do's and Don'ts

### Do:

- Do conservar logo, fotografías reales y atribuciones comprobables; consultar docs/ACTIVOS-UTILIZADOS.md al cambiar medios.
- Do reutilizar azul profundo, Manrope local, escala compartida, radios y estados del CSS, pendientes de ratificación con el manual de marca.
- Do mantener superficies abiertas, bloques tonales selectivos, lectura clara y enlaces con nombres concretos.
- Do preservar foco visible según superficie, enlace de salto, reflujo estrecho y movimiento reducido.
- Do mantener ambos públicos y las funciones de mapa, filtros, biblioteca, blog, navegación institucional y calendario.

### Don't:

- Don't presentar la dirección solicitada como aprobación de una composición generada ni ratificación del manual de marca.
- Don't inventar testimonios, cifras, eventos, horarios, nombres o cargos para completar una composición.
- Don't sustituir fotografías de la comunidad por personas generadas, recrear el logo ni colocarlo sin soporte claro sobre azul.
- Don't añadir sombras a cada bloque, tarjetas envolventes o estados de interfaz ausentes del producto.
- Don't presentar enlaces externos o archivos protegidos como contenidos ya migrados ni incorporar formularios simulados.
