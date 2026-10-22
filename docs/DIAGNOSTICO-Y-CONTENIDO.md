# Diagnóstico y recolección de contenido

Fecha de corte: **16 de octubre de 2026 · America/Bogota**. Sitio: [iglesiadedioscolombia.com](https://www.iglesiadedioscolombia.com/).

El sitio dispone de contenido institucional y congregacional valioso, pero mezcla información definitiva, campañas, plantillas y herramientas operativas. La migración debe conservar la identidad y organizar esos contenidos según dos públicos confirmados por el usuario: **personas que buscan conocer o visitar la iglesia** y **miembros que necesitan recursos, agenda y gestiones**.

## Qué se verificó

Se consultaron robots, índice de sitemaps y páginas públicas por HTTP; se contrastaron páginas con lectura web y dos inspecciones independientes en navegador. La captura directa se realizó durante la noche del 16 de octubre en Colombia; sus marcas técnicas UTC son del 17 de octubre. Se priorizó la captura directa cuando los resultados del buscador reflejaban contenido antiguo.

El sitemap declara **147 URL**, de las cuales **86 son perfiles personales excluidos** y **61 corresponden a rutas dentro del alcance**. Un enlace de la portada añadió `/account/mi-cuenta`: **62 rutas consultadas**. Todas respondieron HTTP 200; este estado no demuestra que exista contenido completo, que un widget cargue o que una función opere correctamente.

La tecnología actual se identifica como **Wix**, por su generador HTML, recursos y widgets. El repositorio local no contiene su código ni una exportación del CMS. El rastreo público tampoco reemplaza una exportación de colecciones, medios y funciones desde Wix.

## Mapa actual

| Familia | Contenido recuperado o identificado | Tratamiento inicial |
|---|---|---|
| Inicio | Bienvenida, historia, campaña Latinfest 2026, video, accesos, blog y contactos | Reorganizar alrededor de los dos públicos; campaña con espacio y acción propios. |
| Institucional | Historia, misión/visión, organigrama, ruta, fe, iglesia internacional, Conexión 20/30 y política de datos | Preservar doctrina y memoria; validar vigencia y transcribir piezas gráficas. |
| Ministerios | 13 páginas bajo Ejes | Tres contienen desarrollo específico; diez repiten una invitación genérica. |
| Iglesias | Listado con 10 registros y 9 URL de detalle en sitemap | Normalizar y reconciliar antes de definir cobertura o duplicados. |
| Agenda | Calendario 2026, dos listados, tres eventos de ejemplo y Convención 2024 | Separar eventos vigentes, archivo histórico y contenido de plantilla. |
| Recursos | Biblioteca y credencialización | Conservar archivos, niveles y enlaces; verificar vigencia y responsables. |
| Actualidad | Blog con tres artículos del 13/02/2024 | Revisar instrucciones de plantilla antes de republicar. |
| Contacto y participación | Contacto, formulario alternativo, servicios/cultos y colaborar/donar | Confirmar propósito, horarios, datos y funcionamiento. |
| Área operativa | 12 rutas asociadas a reportes, estadísticas, datos de iglesias, miembros y cuenta | Investigación funcional aparte; acceso restringido confirmado en `/reportes`. |

El [inventario completo](INVENTARIO-SITIO-ACTUAL.md) asigna un identificador y una decisión propuesta a cada URL.

## Información que conviene conservar

- **Historia:** distingue el origen internacional en 1886 y el desarrollo colombiano desde 1956; incluye una atribución al pastor César Rodríguez Zambrano. Conservar la fuente del relato y revisar cifras, nombres, fechas y referencias relativas. [Fuente](https://www.iglesiadedioscolombia.com/historia).
- **Declaración de fe:** 14 afirmaciones doctrinales. Migrar fielmente la versión institucional aprobada; el rediseño no implica reinterpretar doctrina. [Fuente](https://www.iglesiadedioscolombia.com/declaraci%C3%B3n-de-fe).
- **Misión, visión, liderazgo y estrategia:** existen textos esenciales dentro de imágenes. Registrar el archivo y convertir su contenido a HTML accesible tras transcripción y validación. [Misión y visión](https://www.iglesiadedioscolombia.com/misi%C3%B3n-y-visi%C3%B3n), [organigrama](https://www.iglesiadedioscolombia.com/organigrama), [ruta estratégica](https://www.iglesiadedioscolombia.com/copia-de-organigrama).
- **Plan Conexión 20/30:** documento institucional publicado con horizonte 2021–2030; validar versión, equipo y ejecución antes de presentarlo como actualizado. [Fuente](https://www.iglesiadedioscolombia.com/conexi%C3%B3n-20-30).
- **Directorio:** fotografías, ciudades, direcciones, responsables, teléfonos, correos, horarios y reseñas. Reutilizar como registros estructurados con fecha y responsable de verificación. [Fuente](https://www.iglesiadedioscolombia.com/iglesiasdedios).

## Ministerios y contenido pendiente

Los 13 ejes visibles son Infantil, Misiones transculturales, Generación emergente, Conestadas/Ministerio de la mujer, Hombres, Matrimonio y familia, Educación, Evangelismo y discipulado, Plantación de iglesias, Incidencia pública y social, Capellanía, Cuidado y desarrollo ministerial y H-MAX.

**Educación**, **Plantación de iglesias** e **Incidencia pública y social** aportan contenido específico. Las otras diez páginas usan el mismo texto general: requieren propósito propio, público, responsable, programas activos, formas de participar, recursos y fotografías. La captura directa confirmó también Cuidado y H-MAX, que no se recuperaron en la primera lectura web.

Plantación publica una meta de 200 iglesias en cuatro años; falta fijar el periodo y el avance antes de reutilizarla. Un texto menciona cinco áreas y 22 ejes frente a 13 enlaces en el menú: confirmar la estructura institucional completa. No inferir que faltan nueve ministerios activos. Confirmar también la grafía oficial de “Conestadas”; corregir “Insidencia” únicamente en el nuevo texto aprobado y preservar su URL antigua mediante redirección.

## Hallazgos editoriales prioritarios

| Prioridad | Hallazgo observado | Acción propuesta |
|---|---|---|
| P1 | La política conserva instrucciones de redacción y usa teléfono/correos distintos del pie. | Solicitar versión aprobada y un registro institucional único de contactos. Esto es un hallazgo editorial, no una evaluación legal. |
| P1 | Las redes del pie apuntan a Facebook WixEspanol e Instagram Wix; la bienvenida sí enlaza cuentas institucionales. | Validar y centralizar enlaces oficiales. |
| P1 | Los tres eventos de ejemplo tienen fecha 2023, instrucciones del editor y ubicación Madrid. | Excluirlos de la agenda vigente; confirmar eliminación o archivo antes del cambio público. |
| P1 | Los artículos incluyen indicaciones para agregar testimonios o recursos, sin esos contenidos definitivos. | Completar con información aprobada o retirar de la selección de lanzamiento; no fabricar testimonios. |
| P2 | Diez ministerios tienen contenido intercambiable. | Crear una ficha editorial por ministerio antes de diseñar páginas largas sin información. |
| P2 | Calendario, organigrama, misión y visión dependen de imágenes. | Recuperar fuente editable y transcribir; comprobar lectura, accesibilidad y vigencia. |
| P2 | Directorio presenta diez registros pero nueve detalles; municipios repetidos y datos por confirmar. | Identificar cada congregación mediante ID; no deduplicar solo por ciudad. |
| P2 | Convención 2024 conserva un registro antiguo y un mensaje de aplicación no disponible. | Convertir a archivo histórico con fecha y desactivar inscripción obsoleta cuando se migre. |

Fuentes: [política de datos](https://www.iglesiadedioscolombia.com/datos-personales), [inicio](https://www.iglesiadedioscolombia.com/), [ejemplo Proyecto Luz](https://www.iglesiadedioscolombia.com/events-1/proyecto-luz), [blog](https://www.iglesiadedioscolombia.com/blog), [Convención 2024](https://www.iglesiadedioscolombia.com/convencion2024). Las páginas de eventos y convención se contrastaron con los HTML locales aunque el buscador no siempre pudo abrirlas.

## Contactos y destinos institucionales

Datos publicados en contacto/pie, todavía pendientes de ratificación institucional:

- Teléfono/WhatsApp: **+57 317 598 4406**.
- Dirección: **Calle 68 # 17-33, barrio Chapinero, Bogotá D. C.**
- Correos: **asistentesupervisor@iglesiadedioscolombia.com** y **supervisornacional@iglesiadedioscolombia.com**.
- Redes de la bienvenida: [Facebook](https://www.facebook.com/iglesiadedioscolombia), [Instagram](https://www.instagram.com/iglesiadedioscolombia/), [TikTok](https://www.tiktok.com/@iddcol), [YouTube](https://www.youtube.com/@IglesiadeDioscolombia). Los destinos se registraron; no se verificó propiedad de cuentas.

La política publica **302 409 8450** y correos `@iglesiadedios.org.co`. No se eligió arbitrariamente entre ambas versiones. En el directorio aparece un dominio de correo `gomeil.com` que requiere confirmación; no se corrigió automáticamente.

## Funciones e integraciones

| Función | Observación | Qué falta para migrarla |
|---|---|---|
| Contacto | Nombre, email, teléfono y mensaje; etiquetas y campos requeridos | Receptor, proveedor, conservación de datos y prueba autorizada de entrega. No se enviaron mensajes. |
| Reportes | Pantalla de contraseña “Solo para invitados” | Documentación de roles, formularios, datos, exportación y flujos con responsable autorizado. No se accedió. |
| Comunidad | Acceso a `/account/mi-cuenta` | Decidir si aporta valor al nuevo sitio y revisar acceso/membresía. |
| Biblioteca | Widget carga carpetas Logos (19), Credencialización (2) y Educación FETP (2), fechadas 17/12/2024 | Catálogo de nombres, versiones, permisos, originales y enlaces de descarga. No confundir ausencia en HTML con biblioteca vacía. |
| Credencialización | Cuatro Google Forms, uno por nivel ministerial | Confirmar requisitos, recepción, vigencia y titularidad; inicialmente se pueden conservar enlaces. |
| Videos | Canal Wix, anuncio de 03:35 y controles de búsqueda | Identificar archivos/canal autorizado y estrategia de reproducción sin carga innecesaria. No se reprodujo íntegro. |
| Donación | Invitación en portada y página `/donar` | Responsable, finalidad y mecanismo aprobado. No se verificó una pasarela operativa. |
| Búsqueda | Campo del pie, búsqueda de videos y búsqueda de biblioteca | Definir alcance y comprobar resultados. |

Formularios observados: [Obrero Nacional](https://forms.gle/qhanvKg4GFYa4wnSA), [Ministro Exhortador](https://forms.gle/wNQYkHqjN79h6FEe7), [Ministro Ordenado](https://forms.gle/xWsjhm9bzmdqapZe8) y [Obispo Ordenado](https://forms.gle/wmmU2QpmZ6aS7XuP8). Registrados desde credencialización; destinos no enviados ni validados funcionalmente.

## Recursos y SEO

El [catálogo de recursos](investigacion/inventario-recursos.json) agrupa **101 fuentes de imagen**, referencias exactas observadas, texto alternativo y páginas de uso. Incluye fotografías reales, logos y campañas; no garantiza derechos, actualidad ni calidad de originales. Hay **2 documentos enlazados** desde incidencia social (PDF y PPTX), todavía sin lectura de contenido. Los **23 elementos de la biblioteca** son un conjunto dinámico adicional cuyo contenido individual sigue pendiente.

En el HTML de las 62 rutas se detectaron **58 sin meta description** y **37 sin H1**. Estos conteos incluyen rutas operativas y pantallas vacías/restringidas: son indicadores para revisar, no 95 fallos independientes. Inicio sí tiene título, descripción y canonical. Conservar esos fundamentos y preparar metadatos específicos, imagen social y sitemap público en Next.js.

Las [redirecciones propuestas](investigacion/redirecciones-propuestas.json) son borradores deshabilitados. Contienen origen, destino y razón; no afectan producción. Las URL sin destino equivalente requieren decisión individual. Evitar perder enlaces antiguos al cambiar `/about-1`, `/copia-de-organigrama` o `/copia-de-historia`.

## Material que falta solicitar o validar

| Entregable pendiente | Responsable sugerido | Uso |
|---|---|---|
| Manual de marca, logos originales, paleta y tipografía | Comunicaciones | Establecer identidad visual antes del diseño definitivo. |
| Textos oficiales de misión/visión, doctrina, estructura y estrategia | Dirección institucional | Publicar contenido fiel y vigente. |
| Directorio nacional con ID, municipio, horarios, contactos y coordenadas | Coordinación territorial | Resolver cobertura, duplicados y búsqueda por ubicación. |
| Fichas de los 13 ministerios | Responsable de cada eje | Completar páginas útiles con programas y acciones reales. |
| Agenda estructurada y responsable de actualización | Comunicaciones/eventos | Mostrar fechas vigentes y archivar vencidos. |
| Biblioteca y medios exportados de Wix | Administrador actual | Migrar los archivos y sus permisos conservando versiones. |
| Flujo de reportes, roles y exportaciones autorizadas | Administración | Definir alcance futuro de autenticación, base de datos e integraciones. |
| Contactos, redes y política aprobados | Dirección y responsable de datos | Resolver contradicciones y destinatarios antes de publicar. |

Estos pendientes no impiden preparar el esqueleto Next.js. Sí condicionan qué textos, contactos, documentos y funciones se podrán publicar como definitivos.

## Límites de esta entrega

No se obtuvo acceso administrativo a Wix ni se certificó la totalidad de contenido dinámico. No se enviaron formularios, probaron contraseñas o realizaron pagos. No se midieron Core Web Vitals, contraste completo o cumplimiento integral de accesibilidad. La prueba de ancho reducido usó un navegador de escritorio a 390 px, no un teléfono físico. El sitio actual quedó sin cambios.
