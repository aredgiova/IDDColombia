# Iglesia de Dios en Colombia

## Platform

Web pública responsive, en español, para Colombia. Debe funcionar desde 320 px y ser accesible por teclado y tecnologías de asistencia.

## Usuarios y propósito

El usuario confirmó que visitantes y miembros tienen igual prioridad. Visitantes: conocer la iglesia y encontrar una congregación. Miembros y líderes: acceder a recursos, agenda, credencialización y herramientas existentes. La primera entrega estableció la base técnica y la Home; las ampliaciones implementadas se describen abajo. Los destinos aún no migrados enlazan a las páginas públicas actuales.

## Stack

Elección explícita del usuario: Next.js, React, TypeScript estricto, App Router, Node.js Runtime, Tailwind CSS, API propia mediante Route Handlers y despliegue GitHub → Vercel. PostgreSQL y Prisma solo si una fase posterior justifica persistencia. Sin Express, servidor permanente, microservicios ni dependencias de infraestructura anticipadas.

## Compromisos de marca y contenido

Dirección visual vigente solicitada por el usuario: institucional, formal, sofisticada y moderna, con presencia de una organización nacional vinculada a una comunidad internacional. Evoluciona la dirección inicial institucional y cercana y conserva fotografía de comunidad, logo auténtico y Manrope. Usar medios reales de fuentes institucionales y documentar procedencia. No inventar testimonios, cifras, eventos, horarios, funciones o cargos. Los contenidos de investigación no equivalen a aprobación editorial definitiva. Los colores y la tipografía implementados siguen pendientes de ratificación con el manual de marca; la solicitud de refinamiento no equivale a esa ratificación ni a aprobación de mockups.

## Alcance confirmado de la primera entrega

Layout, Home, Header, Footer, navegación funcional, componentes básicos reutilizables, fuentes, estilos, responsive, metadata, favicon, Open Graph, Twitter, robots, sitemap, /api/health, configuración de entorno, Git y README. Ejecutar lint, typecheck y build y verificar rutas. Sin autenticación, administración, base de datos o formularios simulados. Dejar listo para conectar GitHub y Vercel, sin publicar ni sustituir el sitio actual durante esta entrega.

## Evidencia y decisiones

Investigación inicial en docs/: 62 rutas, 13 ministerios, directorio visible de diez fichas y biblioteca dinámica. La primera entrega partió de ambos públicos y dirección institucional cercana, con implementación directa solicitada. Las ampliaciones posteriores conservaron esa base. El encargo de refinamiento global pide elevar coherencia y presencia institucional de todo lo ya implementado; no altera los hechos, fuentes ni alcances funcionales de cada ampliación.

## Extensión implementada: directorio

El usuario solicitó crear la página del directorio con el contenido de la URL institucional. `/iglesias` incorpora sus diez congregaciones, búsqueda y filtro por ciudad, direcciones, horarios, contactos y reseñas. Conserva el sistema visual existente. La ruta anterior `/iglesiasdedios` redirige al directorio nuevo. No añade base de datos ni administración; los datos editables residen en `src/data/churches.ts` con trazabilidad en `docs/DIRECTORIO-CONTENIDO.md`.

## Extensión implementada: mapa del hero

La primera ampliación del mapa sustituyó la fotografía principal por cartografía interactiva de los 32 departamentos y Bogotá D. C. En el refinamiento global vigente, la fotografía documental de formación vuelve a acompañar la bienvenida y el mapa se sitúa después de los dos accesos de la Home. Un clic, el selector nativo o el teclado permiten consultar el mismo territorio; el enlace de cada territorio con fichas lleva al directorio con el departamento filtrado. `/iglesias` combina ese filtro con búsqueda y ciudad, y permite restablecerlos.

El mapa resume las diez fichas del directorio público, no un censo nacional. Atlántico muestra aproximadamente 63 miembros reportados por dos de sus tres iglesias publicadas, sin fecha de corte. La membresía desconocida se muestra como «No publicado» y un territorio sin fichas como «Sin registro», sin afirmar que no existan congregaciones allí. No se convierte asistencia en membresía ni se añaden sedes a partir de menciones históricas. Los criterios y fuentes están en `docs/investigacion/mapa-datos-fuentes.md`.

La cartografía usa fronteras de geoBoundaries derivadas de OpenStreetMap, con atribución visible y datos adaptados disponibles bajo ODbL. Las islas se muestran ampliadas en un recuadro; el mapa sirve para seleccionar territorios, no para ubicar congregaciones o medir distancias. Procedencia, transformaciones y regeneración: `docs/MAPA-COLOMBIA.md`.

## Extensión implementada: biblioteca

El usuario solicitó una página nueva con la información de la biblioteca actual. `/biblioteca` presenta el catálogo público de Logos, Credencialización y Educación (FETP), sus 23 elementos anunciados, fechas y buscador. Las tres carpetas exigen autenticación en origen. Se preservan enlaces de acceso y se explica ese requisito; no se han migrado los archivos protegidos ni el sistema de permisos. Fuentes y límites en `docs/BIBLIOTECA-CONTENIDO.md`.

## Extensión implementada: blog

El usuario solicita crear el blog y optimizar sus publicaciones para SEO, conservando el contenido del sitio actual. `/blog` y sus tres artículos mantienen texto sustantivo, imágenes, autoría y fechas verificadas. Las cuatro notas de borrador sobre testimonios o recursos aún inexistentes se conservan en los datos de migración, fuera del cuerpo público. El índice destaca Juventud por su fotografía; no afirma que sea la publicación más reciente.

Rutas legibles, metadatos únicos, canonical, datos estructurados, imágenes locales optimizadas, enlaces internos, sitemap y redirecciones permanentes desde los tres `/post/` originales. Las previews siguen sin indexación; no se ha publicado el sitio ni se prometen posiciones en buscadores. Registro en `docs/BLOG-CONTENIDO.md` y `docs/BLOG-SEO.md`.

## Extensión implementada: Quiénes somos

El usuario pidió reutilizar, mejorar y reorganizar las siete páginas institucionales del sitio anterior. `/quienes-somos` agrupa Nuestra identidad, Organización y dirección y Vida de la iglesia. Las páginas de historia, misión y visión, declaración de fe, organización, ruta estratégica e iglesia internacional están bajo esa ruta; el calendario anual vive en `/calendario`, accesible desde el mismo menú. Se incorporan submenús de escritorio/móvil, enlaces internos y redirecciones de las siete URL anteriores.

Historia nacional con diez hitos, cuatro hitos internacionales y atribución al pastor César Rodríguez Zambrano; catorce declaraciones de fe íntegras; misión, visión, cinco ejes, 39 entradas del organigrama y tres etapas de multiplicación transcritas. El calendario 2026 permite consultar doce meses y 95 entradas mensuales (incluye actividades que continúan entre meses), con fechas no publicadas identificadas. Se conservan veinte imágenes originales para consulta y descarga. No se incorporan estadísticas históricas como cifras actuales ni se corrigen por inferencia las discrepancias de cargos o nombres.

Fuentes y decisiones: `docs/QUIENES-SOMOS-CONTENIDO.md` y `docs/QUIENES-SOMOS-FUENTES-GRAFICAS.md`. Es una migración local revisable; no se ha publicado ni sustituido el sitio anterior. Los nombres y regiones del organigrama requieren confirmación institucional donde la propia fuente es inconsistente.

## Refinamiento global implementado

El sistema visual compartido abarca quince rutas públicas de contenido: Home, directorio, biblioteca, blog y tres artículos, portada institucional y seis páginas interiores, y calendario. Conserva Manrope y establece azul institucional profundo, tinta y neutrales fríos, radios moderados, escala común de títulos y controles de borde definido. Una barra institucional precede a la cabecera blanca; el pie azul agrupa contacto y navegación con el logo sobre soporte blanco. La Home abre con bienvenida y fotografía documental, seguida por accesos y mapa. Directorio, biblioteca, blog y páginas institucionales comparten jerarquía, ritmo y estados visibles.

El refinamiento conserva las funciones del mapa, filtros y búsquedas, los requisitos de acceso de biblioteca, SEO y contenido del blog, navegación institucional, originales descargables y calendario. No agrega estadísticas, testimonios, autenticación, administración ni formularios de envío. `DESIGN.md` y `.impeccable/design.json` describen la implementación; el brief del hero registra su composición. La evidencia de entregas previas conserva su carácter histórico y no constituye por sí sola verificación de este refinamiento.

## Pendientes generales de contenido

Manual de marca; vigencia de contactos, directorio y organigrama; originales y derechos de medios; exportación de biblioteca; procesos de reportes protegidos. Los textos institucionales de las siete páginas ya están transcritos. La Home orienta hacia fuentes públicas actuales para los destinos restantes; estos pendientes condicionan la migración completa, no el esqueleto solicitado.
