# Arquitectura y fases del nuevo sitio

Fecha de referencia: 16 de octubre de 2026, America/Bogota.

Estado: documento de planificación de la migración. **Actualización de implementación:** la fase 1 ya cuenta con base Next.js, Home y endpoint health; consultar el [README actual](../README.md) y la evidencia en `verificacion/`. Las rutas, modelos y fases posteriores de este documento siguen siendo propuestas. No se ha realizado despliegue.

## 1. Decisiones y punto de partida

El sitio atenderá a **ambos públicos: visitantes y miembros de la Iglesia de Dios en Colombia**. La experiencia pública debe permitir conocer la organización, encontrar una congregación, participar y consultar información útil. Los miembros y líderes tendrán acceso visible a agenda, recursos y credencialización, sin exigir una cuenta para consultar información pública.

El usuario confirmó la dirección visual **institucional y cercana, con fotografías de la comunidad**. Esta elección orienta los siguientes criterios de diseño:

- Mostrar personas, encuentros y congregaciones reales mediante fotografías seleccionadas y con uso autorizado.
- Combinar una presentación institucional ordenada con mensajes de bienvenida sencillos y humanos.
- Dar visibilidad a Encontrar una iglesia y Miembros y líderes, con lectura cómoda y navegación clara.
- Situar las campañas en bloques propios con contexto y acción, respetando la tarea principal de cada página.
- Definir colores y tipografías a partir de los materiales de marca; esta preferencia todavía no fija una paleta, una fuente o una composición final.

La revisión inicial reporta un repositorio sin aplicación, sin commits ni remoto configurado, en la rama `master`. Los archivos de investigación que se agregan durante esta etapa son documentación y evidencia; no constituyen una aplicación Next.js. Antes de la implementación se debe comprobar nuevamente el estado del repositorio y preservar cualquier cambio posterior.

El stack acordado es Next.js, React, TypeScript estricto, App Router, Node.js Runtime y Tailwind CSS, con API propia mediante Route Handlers. La entrega prevista es **GitHub → Vercel**. PostgreSQL y Prisma se incorporarán únicamente ante una necesidad comprobada de persistencia.

Los criterios de diseño de Impeccable y Sites sirven como referencia de calidad. El requisito explícito de Next.js y Vercel gobierna la implementación y el alojamiento; no se adopta la alternativa de Vinext/Cloudflare descrita por Sites.

No se han fijado versiones instaladas. En la fase técnica se seleccionarán versiones estables compatibles, se registrarán en el manifiesto y lockfile, y se alineará Node.js entre desarrollo y Vercel. La configuración deberá elegir expresamente `src/`; no se debe depender de los valores por defecto del generador. Véase la [guía oficial de instalación de Next.js](https://nextjs.org/docs/app/getting-started/installation).

## 2. Dos recorridos dentro de un mismo sitio

| Público y situación | Recorrido propuesto | Resultado verificable |
| --- | --- | --- |
| Visitante que quiere asistir | Inicio → Encontrar una iglesia → Municipio/congregación → Horarios y cómo llegar | Puede ubicar una congregación y su contacto con datos vigentes. |
| Visitante que quiere conocer la denominación | Inicio → Conócenos → Identidad, historia y creencias → Contacto | Comprende quiénes son y encuentra un canal institucional. |
| Persona interesada en participar | Inicio o Ministerios → Ministerio → Próxima actividad o contacto | Entiende a quién sirve el ministerio y cómo participar. |
| Miembro que busca información práctica | Miembros y líderes → Agenda o Recursos → Detalle/descarga | Encuentra contenido vigente, con fecha y responsable. |
| Líder que necesita credencialización | Miembros y líderes → Credencialización → Nivel/requisitos → Formulario vigente | Identifica el proceso correcto antes de salir al formulario externo. |
| Usuario de reportes | Acceso de utilidad Reportes → Sistema existente verificado | Llega al servicio apropiado; su reemplazo se estudia por separado. |

La portada mostrará pronto dos acciones comprensibles: **Encontrar una iglesia** y **Miembros y líderes**. Después presentará identidad, actividad vigente, ministerios y recursos seleccionados. El orden final se verificará con contenido real y revisión móvil; no se llenarán secciones con testimonios, cifras o programas inventados.

Para visitantes, el modo principal de la portada es orientar y motivar una acción. Para historia, doctrina y artículos es lectura. Para directorio, agenda y recursos es completar una tarea. Esta diferencia debe reflejarse en la densidad y jerarquía de cada página.

## 3. Navegación y rutas propuestas

Navegación principal: Conócenos, Iglesias, Ministerios, Agenda, Recursos y Contacto. El logo lleva a Inicio. La navegación de utilidad ofrece Miembros y líderes y, una vez comprobado el destino, Reportes. Blog queda accesible desde Recursos y puede destacarse como actualidad cuando exista una cadencia editorial sostenida.

Todas las rutas de esta tabla son una **propuesta pendiente de implementación**. La única excepción de estado es que algunas coinciden con URLs del sitio actual; esa coincidencia no significa que ya existan en el repositorio.

| Área | Rutas propuestas | Alcance |
| --- | --- | --- |
| Inicio | `/` | Bienvenida, doble recorrido y contenido vigente seleccionado. |
| Conócenos | `/nosotros` | Índice institucional; introduce historia, misión, visión, creencias y liderazgo. |
| Contenido institucional | `/historia`, `/mision-y-vision`, `/organigrama`, `/declaracion-de-fe`, `/iglesia-internacional` | Contenido revisado y accesible como texto; imágenes como apoyo. |
| Estrategia | `/ruta-estrategica`, `/conexion-2030` | Documentos vigentes, fecha, alcance y relación entre plan nacional y latinoamericano. |
| Directorio | `/iglesias`, `/iglesias/[slug]` | Búsqueda por nombre/municipio y fichas con ubicación, horarios y contacto. |
| Ministerios | `/ministerios`, `/ministerios/[slug]` | Índice de los 13 destinos hoy presentados como ejes y fichas con estructura común. |
| Agenda | `/agenda`, `/agenda/[slug]` | Eventos fechados; filtros útiles y archivo. El calendario anual será una vista o recurso, no el único formato. |
| Miembros y líderes | `/comunidad` | Accesos públicos a recursos, agenda, formación, credencialización y reportes. No implica autenticación. |
| Credencialización | `/credencializacion` | Niveles, requisitos confirmados, etapas, responsable y enlaces vigentes. |
| Recursos | `/recursos`, `/recursos/[slug]` | Biblioteca catalogada de documentos, materiales y enlaces; detalle con autor, fecha y formato. |
| Blog | `/blog`, `/post/[slug]` | Conservar las URLs de artículos existentes cuando el contenido se apruebe para migración. |
| Contacto | `/contacto` | Datos institucionales verificados; formulario solo cuando exista destino operativo. |
| Privacidad | `/datos-personales` | Texto institucional revisado, coherente con formularios e integraciones. |

En móvil, la misma arquitectura se presentará en un menú accesible con grupos claros. Los 13 ministerios no deben convertirse en 13 enlaces de primer nivel. Un índice con nombres, descripciones breves y agrupación confirmada permitirá explorarlos mejor.

La relación oficial entre áreas estratégicas, ejes y ministerios está pendiente de confirmación: el menú actual expone 13 destinos mientras la documentación estratégica menciona un conjunto más amplio. La taxonomía propuesta no cambia la organización institucional.

## 4. Arquitectura técnica propuesta

La primera implementación será una sola aplicación Next.js modular. Las páginas y layouts serán Server Components; se limitará `use client` a piezas con estado, eventos o APIs del navegador, como el menú móvil o filtros interactivos. Esta división sigue la [documentación oficial de Server y Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).

Estructura orientativa; se crearán únicamente las carpetas que tengan archivos y responsabilidad real en cada entrega:

```text
src/
  app/                    rutas, layouts y convenciones de Next.js
    api/health/route.ts    endpoint previsto para la fase de base técnica
    layout.tsx
    page.tsx
    globals.css
    sitemap.ts
    robots.ts
  components/
    layout/               header, navegación y footer
    ui/                   controles compartidos que realmente se utilicen
  features/               directorio, ministerios y otros módulos al incorporarlos
  content/                contenido público revisado y versionado inicialmente
  lib/                    utilidades de servidor compartidas cuando sean necesarias
  config/                 identidad del sitio y navegación
public/                   medios y documentos aprobados para publicación
```

No se propone crear inicialmente todas las capas posibles del prompt del stack. Por ejemplo, `services/`, `hooks/`, `validations/` y `prisma/` se añadirán cuando aparezca una necesidad concreta. Los módulos de contenido podrán leerse directamente desde los Server Components; no necesitan llamadas HTTP a la propia API para mostrar archivos locales del proyecto.

| Decisión | Aplicación al proyecto |
| --- | --- |
| Renderizado | Priorizar generación estática para contenido público estable. Evaluar revalidación cuando exista una fuente editorial que cambie sin despliegue; usar renderizado por solicitud solo donde sea necesario. Verificar la configuración de caché contra la versión finalmente instalada. |
| Contenido inicial | Datos públicos tipados y revisados, versionados junto al código. La escritura en archivos durante la ejecución no será un mecanismo de persistencia. |
| Estilos | Tailwind y un sistema de variables/tokens coherente. La guía actual de Tailwind para Next.js usa el plugin `@tailwindcss/postcss`; verificar lo generado antes de duplicar configuración. [Fuente oficial](https://tailwindcss.com/docs/installation/framework-guides/nextjs). |
| Imágenes y fuentes | `next/image` donde corresponda, dimensiones conocidas, texto alternativo útil, tamaños adecuados y `next/font`. Recuperar originales autorizados para reducir dependencia del Wix actual. [Soporte oficial en Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs). |
| SEO | Metadata por página y ficha: título, descripción, canonical y vista social. Sitemap generado desde contenido publicado; robots coherente con el entorno. [Metadata API](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) y [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots). |
| Backend | Route Handlers dentro de `src/app/api/`, con Node.js Runtime. No se necesita un servidor Express independiente para el alcance conocido. [Convención oficial de Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers). |
| Entornos | Separar Development, Preview y Production, con configuración y secretos propios de cada entorno. [Entornos de Vercel](https://vercel.com/docs/deployments/environments). |

La fase técnica deberá incluir el siguiente contrato solicitado; **todavía no existe**:

```http
GET /api/health
```

Respuesta prevista con HTTP 200:

```json
{
  "success": true,
  "status": "ok",
  "service": "web-api"
}
```

Es un chequeo de disponibilidad de la aplicación; no afirmará verificar correo, base de datos o integraciones que todavía no existan. Otros endpoints bajo `/api/v1/` se definirán solo con su función y consumidor. Las futuras operaciones deberán validar entradas en servidor, usar códigos HTTP adecuados y respetar el contrato de éxito/error del prompt del stack. Los formularios deben mostrar éxito únicamente después de una respuesta real satisfactoria.

## 5. Modelos de contenido

Son contratos conceptuales de contenido, **no tablas Prisma implementadas**. Se pueden representar primero como datos tipados y archivos revisados. Tener un modelo no obliga a instalar una base de datos.

Todos los registros tendrán identidad estable, URL o slug, estado editorial (`draft`, `review`, `published`, `archived`), fuentes de origen, fecha de captura, responsable editorial y fecha de última verificación. Las fechas de publicación del original y las de verificación deben mantenerse separadas. Los campos internos de revisión nunca se mostrarán automáticamente en la web pública.

| Modelo | Campos de dominio propuestos | Relaciones y condiciones para publicar |
| --- | --- | --- |
| `Church` | `id`, `slug`, nombre, departamento, municipio, dirección pública, coordenadas opcionales, responsables públicos, teléfono/correo institucionales, horarios estructurados, reseña, fotografía, enlaces de llegada y redes confirmadas | Una ficha debe tener nombre identificable, ubicación verificable y al menos una forma vigente de contacto. Los horarios incluyen día, hora, tipo de reunión y excepciones cuando existan. No inventar coordenadas, nombres ni horarios. |
| `Ministry` | `id`, `slug`, nombre oficial, resumen, propósito, público, área/eje confirmado, responsable y contacto públicos, programas, fotografía | Puede relacionarse con `Event`, `Resource` y `Article`. Se requiere contenido propio del ministerio; la invitación genérica repetida no basta para una ficha final. |
| `Event` | `id`, `slug`, título, descripción, audiencia, inicio, fin opcional, indicador de día completo, zona horaria, modalidad, lugar/enlace, organizador, inscripción, imagen y estado del evento | Relaciones opcionales con `Church` y `Ministry`. Diferenciar programado, aplazado, cancelado y concluido del estado editorial. Usar America/Bogota para eventos locales; no deducir fechas de una pieza ambigua. |
| `Article` | `id`, `slug`, título, extracto, cuerpo, autor acreditado, fecha original, actualización real, categoría, imagen y alternativas accesibles | Mantener `legacyPath` para conservar `/post/[slug]`. Revisar texto de plantilla, derechos y atribución antes de publicar. Relacionar ministerios o recursos solo cuando exista una conexión editorial real. |
| `Resource` | `id`, `slug`, título, descripción, tipo, autor/entidad, fecha/versión, audiencia, tema, idioma, archivo o URL, formato, tamaño cuando se conozca, accesibilidad y derechos | Puede pertenecer a un ministerio o evento. Verificar que el destino abra y que el archivo corresponda al título. Separar la ficha descriptiva del archivo descargable. |

Las páginas institucionales pueden mantenerse como contenido estructurado sencillo; no requieren otro sistema complejo. Los datos de contacto globales se centralizarán para evitar contradicciones entre pie, contacto y política.

La cantidad observada no equivale al censo nacional: la investigación encontró **10 fichas en el listado visible y 9 URLs de detalle en el sitemap**. Antes de importar `Church`, reconciliar identificadores, duplicados, registros sin detalle y fichas fuera del listado. El inventario de trabajo está en `docs/investigacion/inventario-paginas.json`. No presentar ese conjunto como cobertura completa de Colombia sin confirmación institucional.

## 6. Cuándo introducir persistencia

La primera web puede funcionar con contenido público versionado y formularios externos verificados. PostgreSQL y Prisma se justificarán si se aprueba, por ejemplo, un panel para que editores actualicen directorio/agenda, un registro propio de solicitudes con estados, inscripciones administradas o autenticación con permisos y datos propios.

Antes de incorporarlos se debe definir quién escribe, qué se guarda, por cuánto tiempo, qué permisos necesita cada rol y cómo se recuperan los datos. Los archivos multimedia necesitarían almacenamiento duradero apropiado; el filesystem de ejecución de Vercel no será la fuente persistente.

No se incluyen por anticipado microservicios, Redis, colas, Docker, Kubernetes ni servicios separados. El límite funcional conocido cabe en la aplicación Next.js; cualquier ampliación deberá responder a una necesidad concreta.

## 7. Web pública y reportes

La migración pública cubre identidad, directorio, ministerios, agenda, artículos, recursos, contacto y orientación de credencialización. La página Miembros y líderes reúne esos servicios públicos y puede enlazar a herramientas externas vigentes.

**Reportes requiere una investigación funcional independiente.** No se conoce aún el sistema completo, su propietario técnico, usuarios, datos, roles, autenticación, exportaciones o integraciones. Un enlace actual no demuestra que exista una API migrable ni autoriza a suponer el modelo de datos.

Hasta conocerlo, la propuesta es preservar un acceso al destino verificado y documentar la dependencia. No se propone copiar información privada en los modelos públicos ni diseñar un dashboard ficticio. Si se aprueba su modernización, será una fase posterior con requisitos y criterios de aceptación propios; la ubicación final, dentro de la app o en un servicio existente, se decidirá con esa evidencia.

## 8. Requisitos editoriales para la migración

| Contenido | Información o material que falta confirmar | Condición de salida |
| --- | --- | --- |
| Identidad | Logo original, variantes válidas, colores autorizados, fotografías propias y permisos de uso | Archivo maestro y selección aprobada para pantalla, favicon y redes. |
| Misión, visión y liderazgo | Texto contenido en imágenes y cargos vigentes | Texto transcrito y validado; gráficos complementarios accesibles. |
| Historia y doctrina | Fechas, nombres, cifras temporales, atribuciones y versión doctrinal aprobada | Documento editorial fiel a la institución y sin correcciones doctrinales inferidas. |
| Directorio | Cobertura real, diferencia 10/9, nombres de iglesias, municipios, teléfonos, correos y horarios | Fuente consolidada con responsable y fecha de verificación por ficha. |
| 13 ministerios/ejes | Nombres oficiales, taxonomía, responsables, programas y acción para participar | Fichas diferenciadas; contenido faltante marcado internamente. |
| Agenda | Eventos de las imágenes de 2026, fecha exacta, lugar, público, organizador y vigencia | Cada evento publicado corresponde a datos confirmados; archivo separado de lo próximo. |
| Credencialización | Cuatro niveles, requisitos, convocatorias, propietarios y estado de formularios | Cada enlace tiene contexto suficiente y destino confirmado. |
| Biblioteca y descargas | Alcance del contenido dinámico, originales PDF/PPTX, títulos, autores y derechos | Catálogo revisado y descargas comprobadas. |
| Blog | Autoría, textos definitivos y decisión sobre los tres artículos existentes | Eliminar instrucciones de borrador tras revisión; conservar atribución y fecha histórica. |
| Contacto y privacidad | Teléfono y dominio de correos correctos, receptor de mensajes y texto de privacidad institucional | Una fuente coherente para todos los puntos del sitio. |

La revisión editorial detectó información que exige atención: [Datos personales](https://www.iglesiadedioscolombia.com/datos-personales) contiene contactos diferentes de [Contacto](https://www.iglesiadedioscolombia.com/cont%C3%A1ctanos) e instrucciones de redacción sin resolver. Los [artículos actuales](https://www.iglesiadedioscolombia.com/blog) incluyen secciones propuestas como testimonios aún por agregar. La migración debe distinguir contenido original, correcciones propuestas y versión aprobada.

## 9. URLs, SEO y continuidad

La matriz definitiva de redirecciones se derivará del inventario completo. Se evitará cambiar URLs sin una mejora clara. Se propone conservar `/blog`, los tres `/post/[slug]` existentes, `/historia`, `/organigrama`, `/iglesia-internacional` y `/datos-personales` cuando sigan representando el mismo contenido.

Estas son correspondencias candidatas, **todavía no configuradas ni aprobadas como matriz final**:

| URL actual | Destino candidato | Motivo |
| --- | --- | --- |
| `/iglesiasdedios` | `/iglesias` | Nombre comprensible para el directorio. |
| `/about-1` | `/credencializacion` | El slug actual no describe su función. |
| `/copia-de-organigrama` | `/ruta-estrategica` | Describir correctamente el contenido. |
| `/copia-de-historia` | `/agenda` o un archivo anual de 2026 | Decidir tras transcribir el calendario; no redirigir a un destino que pierda su contenido. |
| `/misi%C3%B3n-y-visi%C3%B3n` | `/mision-y-vision` | Consistencia de nuevos slugs. |
| `/declaraci%C3%B3n-de-fe` | `/declaracion-de-fe` | Consistencia de nuevos slugs. |
| `/conexi%C3%B3n-20-30` | `/conexion-2030` | Unificar nombre del programa, tras confirmación institucional. |
| `/cont%C3%A1ctanos` | `/contacto` | Ruta breve y estable. |
| `/biblioteca` | `/recursos` | Solo si el nuevo catálogo conserva su alcance. |
| Las 13 páginas de ejes | `/ministerios/[slug]` | Mapear una a una, sin corregir nombres oficiales por suposición. |

Las URLs de detalle de iglesias también requieren correspondencia individual. Las páginas retiradas se evaluarán por contenido y enlaces existentes; no se enviarán todas a Inicio. Verificar variantes con/sin `www`, normalización de slashes y URLs codificadas antes del corte del dominio. El dominio canonical definitivo se definirá con la configuración real.

En producción, el sitemap contendrá solo URLs canónicas publicadas. Preview no debe indexarse; comprobar tanto metadata/cabeceras como la configuración efectiva del entorno. `robots.txt` no sustituye el control de acceso de servicios privados.

## 10. Fases y criterios de aceptación

| Fase | Entrega | Criterios para considerarla terminada |
| --- | --- | --- |
| 0. Investigación y definición — actual | Inventario, evidencia, clasificación editorial, arquitectura y prioridades para ambos públicos | URLs y activos trazables; límites de captura documentados; 10 fichas/9 detalles y 13 ejes registrados como pendientes de conciliación; stack y hosting definidos. |
| 1. Base técnica y visual | Next.js en `src/`, TypeScript estricto, Tailwind, layout, navegación, Home inicial, componentes necesarios, metadata, sitemap, robots y `/api/health` | Desarrollo inicia; lint, typecheck y build pasan; health devuelve el contrato; Home y navegación se revisan en móvil/escritorio; README, `.env.example`, `.gitignore` y lockfile coherentes; no se muestran datos inventados como definitivos. |
| 2. Migración pública prioritaria | Institucionales, directorio reconciliado, fichas de ministerios y hub Miembros y líderes | Visitantes encuentran una iglesia; miembros encuentran servicios; cada ficha publicada tiene contenido aprobado; lectura y navegación por teclado funcionan; enlaces antiguos tienen una decisión registrada. |
| 3. Agenda, recursos y operación | Eventos estructurados, biblioteca revisada, artículos aprobados, credencialización y contacto operativo | Fechas y estados son correctos; descargas y formularios externos abren; formulario propio, si se incluye, llega a un receptor real y maneja errores; contactos globales y privacidad son coherentes. |
| 4. Validación y publicación | Preview revisada, matriz de redirecciones, configuración de producción y corte de dominio | Build reproducible desde GitHub; rutas y redirecciones comprobadas; SEO y accesibilidad revisados; dominio y DNS preparados preservando correo; publicación y reversión documentadas; verificación final tras el cambio. |
| 5. Evolución opcional | Edición administrativa, persistencia, autenticación o renovación de reportes según requisitos aprobados | Caso de uso, roles, datos, operación y validaciones definidos antes de añadir dependencias o migrar servicios. No forma parte de la base inicial. |

La integración de Git con Vercel permite generar despliegues a partir de commits y pull requests; se configurará una rama de producción explícita y se usarán previews para revisión. No se asume que `master` deba renombrarse ni que exista ya una conexión. [Despliegues con Git](https://vercel.com/docs/deployments/git). El soporte de Next.js en Vercel permite comenzar sin un `vercel.json`; solo se añadirá si surge una necesidad documentada. [Next.js en Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs).

## 11. Validación común a las entregas

- Comprobar responsive en 320, 375, 768, 1024 y 1440 px, sin desplazamiento horizontal accidental ni acciones ocultas.
- Revisar HTML semántico, jerarquía de títulos, texto alternativo, labels, contraste, foco visible y navegación mediante teclado. Respetar movimiento reducido.
- Cubrir estados reales: directorio sin resultados, ficha inexistente, evento cancelado, recurso no disponible y formulario enviando/con error/con éxito. No simular integraciones completadas.
- Medir rendimiento con una herramienta identificada y registrar dispositivo/condiciones. Usar los resultados para detectar imágenes pesadas, desplazamientos de contenido y JavaScript innecesario; no confundir una prueba de laboratorio con datos reales de usuarios.
- Ejecutar lint de forma explícita, typecheck y build; las versiones actuales de Next.js no ejecutan lint automáticamente como parte de `next build`. [Instalación y lint de Next.js](https://nextjs.org/docs/app/getting-started/installation).
- Verificar rutas, health, canonical, sitemap, robots, enlaces externos y redirecciones relevantes. La aprobación de una fase no debe basarse solo en una captura de Home.
- Mantener secretos fuera del repositorio y del bundle público; reservar `NEXT_PUBLIC_` para configuración realmente pública. Documentar únicamente variables que la implementación utilice.

En esta etapa documental no corresponde ejecutar lint, typecheck o build de una aplicación inexistente. El siguiente entregable de implementación será la base de la fase 1; este plan no afirma que esa fase ya esté realizada.
