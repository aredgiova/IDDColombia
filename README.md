# Renovación web · Iglesia de Dios en Colombia

Base técnica y visual del nuevo sitio, construida a partir de la investigación del [sitio actual](https://www.iglesiadedioscolombia.com/). Primera entrega: **16 de octubre de 2026**, America/Bogota.

**Decisión confirmada:** el nuevo sitio atenderá con igual prioridad a visitantes y miembros. La arquitectura solicitada es **Next.js + React + TypeScript + Tailwind CSS + App Router + Node.js Runtime**, con GitHub y despliegue en Vercel. PostgreSQL y Prisma se incorporarán únicamente si aparece una necesidad real de persistencia.

**Dirección visual confirmada por el usuario:** institucional y cercana, con fotografías de la comunidad. La propuesta implementada utiliza fotografías reales, azul institucional y Manrope local, con recorridos para ambos públicos. La selección final de marca queda sujeta a contrastar el manual institucional.

**Refinamiento global · 17 de octubre de 2026:** las 15 páginas de contenido comparten una presencia más formal y moderna: azul profundo, barra de accesos institucionales, portada fotográfica, jerarquía tipográfica consistente y pie de navegación completo. [Cambios y verificación](docs/REFINAMIENTO-INSTITUCIONAL.md).

## Ejecutar el proyecto

Requiere **Node.js 22.x**. Se verificó con Node 22.15.0 y npm 10.9.2. Desde la raíz:

```powershell
npm ci
npm run dev
```

La aplicación abre en `http://localhost:3000`. Para comprobar producción:

```powershell
npm run lint
npm run typecheck
npm run build
npm run start
```

## Qué está implementado

- Home con bienvenida, identidad, acceso al directorio, ministerios, recursos y contacto.
- Directorio `/iglesias` con diez congregaciones tomadas del sitio actual, búsqueda sin distinción de tildes, filtro por ciudad, teléfonos, correos, horarios, direcciones y reseñas. La ruta anterior `/iglesiasdedios` redirige con HTTP 308.
- Biblioteca `/biblioteca` con las tres carpetas públicas, cantidades y fechas publicadas, búsqueda y enlaces al acceso existente. Los archivos individuales requieren una cuenta autorizada en el sitio actual y todavía no se han migrado.
- Blog `/blog` y tres artículos completos en `/blog/[slug]`, con contenido e imágenes originales, metadatos únicos, datos estructurados y redirecciones HTTP 308 desde sus URLs antiguas. Se retiraron del cuerpo público cuatro notas de borrador, preservadas en el registro de migración.
- Quiénes somos, seis páginas institucionales y calendario mensual 2026, con navegación agrupada, documentos originales y enlaces de consulta.
- Mapa interactivo de 32 departamentos y Bogotá D. C., conectado al filtro del directorio; sus datos corresponden a las fichas publicadas, no a un censo nacional.
- Header, navegación de escritorio, menú móvil con Escape y gestión de foco, Footer y componentes reutilizables de enlaces/iconos/secciones.
- App Router, Server Components por defecto, TypeScript estricto y Tailwind 4 mediante PostCSS. Menús, mapa, filtros y calendario usan estado del navegador.
- Fotografías reales en WebP, logo institucional, `next/image` y Manrope variable local mediante `next/font/local`. La fuente no solicita recursos de Google durante build o navegación.
- Metadata, canonical, Open Graph, Twitter cards, icono IDD provisional, sitemap y robots. Previews/local sin indexación; producción de Vercel indexable.
- API `GET /api/health`, runtime Node, HTTP 200 y `Cache-Control: no-store`.
- Página 404 con retorno al inicio; accesos por teléfono y correo, sin formulario que simule un envío.

La navegación de Home usa secciones reales y enlaza al directorio, biblioteca, blog, páginas institucionales y calendario locales. Los archivos protegidos de la biblioteca, credencialización, ministerios y reportes se consultan en sus páginas actuales. **Esta fase no sustituye esas aplicaciones ni migra el área privada.**

## Archivos principales

```text
src/
  app/
    layout.tsx, page.tsx, globals.css, not-found.tsx
    api/health/route.ts
    robots.ts, sitemap.ts
    icon.tsx, opengraph-image.tsx, twitter-image.tsx
  components/
    home/          secciones de la portada
    layout/        cabecera, menú móvil y pie
    ui/            enlaces externos e iconos SVG
  config/site.ts   contenido global, contactos y destinos actuales
  lib/site-url.ts  validación del origen canonical y entorno de indexación
public/
  images/         logo y cuatro fotografías optimizadas
  fonts/          Manrope Latin variable y licencia OFL
```

Las configuraciones están en `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `.nvmrc`, `.env.example` y `package.json`. `package-lock.json` fija la instalación. Se actualizaron `.gitignore`, README y el estado de la documentación; la investigación original se conserva.

## Dependencias y propósito

| Dependencia | Versión | Uso |
|---|---|---|
| `next` | 16.4.2 | App Router, renderizado, API, optimización y metadata. |
| `react`, `react-dom` | 19.3.1 | Componentes y menú interactivo. |
| `typescript` | 6.0.3 | Tipado estricto; compatible con el parser de ESLint instalado. |
| `tailwindcss`, `@tailwindcss/postcss` | 4.3.3 | Estilos y compilación CSS. |
| `postcss` | 8.5.30 | Procesamiento de estilos. |
| `eslint` | 9.39.5 | Análisis estático; versión compatible con los peers de los plugins. |
| `eslint-config-next` | 16.4.2 | Reglas Next, React, accesibilidad y TypeScript. |
| `@types/node` | 22.20.5 | Tipos del runtime Node. |
| `@types/react`, `@types/react-dom` | 19.3.0 | Tipos de React. |

No se instalaron Prisma, PostgreSQL, librerías de animación, iconos o servicios adicionales. Los iconos son SVG pequeños y consistentes.

## Rutas y variables de entorno

| Ruta | Comportamiento |
|---|---|
| `/` | Home prerenderizada. |
| `/iglesias` | Directorio renderizado en servidor, con preselección opcional `?departamento=`; búsqueda y filtros en el navegador. |
| `/iglesiasdedios` | Redirección permanente 308 a `/iglesias`. |
| `/biblioteca` | Catálogo prerenderizado de tres carpetas; búsqueda en el navegador y acceso externo a los archivos protegidos. |
| `/api/health` | JSON `{ "success": true, "status": "ok", "service": "web-api" }`. |
| `/robots.txt` | Bloquea local/preview; permite el sitio público en producción. |
| `/blog` | Índice de las tres publicaciones originales. |
| `/blog/[slug]` | Artículos estáticos sobre iglesia, juventud y familia; 404 para slugs desconocidos. |
| `/quienes-somos` y `/quienes-somos/[slug]` | Índice institucional y seis páginas de identidad, historia, organización y dirección. |
| `/calendario` | Agenda institucional 2026, consulta por mes y originales publicados. |
| `/post/…` | Tres redirecciones permanentes HTTP 308 hacia sus artículos nuevos. |
| `/sitemap.xml` | Las 15 páginas públicas de contenido implementadas. |
| `/icon` | Favicon PNG con monograma IDD provisional. |
| `/opengraph-image`, `/twitter-image` | Imágenes sociales PNG generadas por Next. |
| Cualquier ruta inexistente | HTTP 404 y pantalla de retorno. |

`SITE_URL` es opcional y de servidor: por defecto `https://www.iglesiadedioscolombia.com`. Solo admite un origen HTTP(S), sin credenciales, path, query o fragmento. Si hace falta cambiarlo localmente, copiar `.env.example` a `.env.local`. No se necesitan secretos en esta fase.

`VERCEL_ENV` lo proporciona Vercel. Solo el valor `production` habilita indexación. No confundir `NODE_ENV=production` con un despliegue público: las previews también compilan en modo producción. No se usan variables `NEXT_PUBLIC_`.

## Comprobaciones y límites

Lint, typecheck y `npm run build` se ejecutaron satisfactoriamente. Se verificaron Home, health, robots, sitemap, icono, imágenes sociales y respuesta 404 por HTTP. La revisión en navegador cubrió 320, 375, 768, 1024 y 1440 px, imágenes cargadas, ausencia de desbordamiento, un H1, menú y Escape. La evidencia está en [docs/verificacion](docs/verificacion/) y la revisión de cierre registra cualquier pendiente.

La auditoría de dependencias de producción reportó **0 vulnerabilidades**. La auditoría completa reportó **5 alertas HIGH** propagadas por una única dependencia de desarrollo (`braces` en la cadena de lint), sin parche publicado al revisar: [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). No se aplicó una degradación de la configuración de Next como supuesto arreglo. ESLint 9 está marcado como deprecado; se mantiene por compatibilidad declarada de sus plugins y deberá actualizarse cuando la cadena admita ESLint 10. No afecta al bundle de producción según `npm audit --omit=dev`.

No se midieron Core Web Vitals de usuarios reales ni se certifica cumplimiento integral WCAG. La marca visual, el favicon y los textos de presentación son la propuesta inicial; contactos y derechos de imágenes deberán ratificarse antes de la publicación final. [Procedencia de assets](docs/ACTIVOS-UTILIZADOS.md).

## GitHub y Vercel

El repositorio del proyecto es [aredgiova/IDDColombia](https://github.com/aredgiova/IDDColombia), con `git@github.com:aredgiova/IDDColombia.git` como remoto `origin` y `main` como rama principal. El proyecto está preparado para importar su raíz en Vercel con preset Next.js, Node 22.x, instalación `npm ci` y build `npm run build`. No necesita `vercel.json`, servidor Express ni almacenamiento persistente local. El despliegue en Vercel está pendiente.

El siguiente paso es importar el repositorio en Vercel, revisar una Preview y continuar la migración. **Mantener el dominio actual en Wix hasta resolver los destinos enlazados y las redirecciones**: cambiarlo ahora dejaría las páginas interiores sin migrar. La matriz de 25 redirecciones del inventario sigue deshabilitada; no corresponde activarla sobre rutas aún inexistentes.

## Documentos de trabajo

| Documento | Para qué sirve |
|---|---|
| [Sistema de diseño](DESIGN.md) | Colores, tipografía, composición, componentes y decisiones implementadas. |
| [Refinamiento institucional](docs/REFINAMIENTO-INSTITUCIONAL.md) | Actualización visual global, alcance y evidencia de revisión. |
| [Contenido del directorio](docs/DIRECTORIO-CONTENIDO.md) | Fuente de las diez fichas, normalizaciones y datos por confirmar. |
| [Diseño del directorio](docs/DIRECTORIO-DISENO.md) | Extensión visual, controles, estados y comportamiento responsive. |
| [Contenido de biblioteca](docs/BIBLIOTECA-CONTENIDO.md) | Carpetas, fechas, enlaces verificados y límite de acceso a los archivos. |
| [Diseño de biblioteca](docs/BIBLIOTECA-DISENO.md) | Catálogo, búsqueda, estados y extensión del sistema existente. |
| [Contenido del blog](docs/BLOG-CONTENIDO.md) | Artículos, autoría, fechas, imágenes y notas editoriales conservadas. |
| [SEO del blog](docs/BLOG-SEO.md) | Metadatos, datos estructurados, URLs, redirecciones y verificaciones. |
| [Diseño del blog](docs/BLOG-DISENO.md) | Composición de lectura, imágenes, estados y responsive. |
| [Diagnóstico y contenido](docs/DIAGNOSTICO-Y-CONTENIDO.md) | Hallazgos, patrimonio de contenido, problemas prioritarios y decisiones editoriales. |
| [Inventario de las 62 rutas](docs/INVENTARIO-SITIO-ACTUAL.md) | URL actual, clasificación, tratamiento y destino propuesto por página. |
| [Arquitectura y fases](docs/ARQUITECTURA-Y-FASES.md) | Recorridos de visitantes/miembros, mapa nuevo, stack y etapas de implementación. |
| [Revisión de diseño](docs/REVISION-DISENO.md) | Evaluación independiente de UX, accesibilidad observada y límites de la inspección. |
| [Requisitos originales del stack](docs/STACK-REQUISITOS.txt) | Copia del documento aportado por el usuario, sin modificar. |

## Material recolectado

- **62 rutas consultadas**: 61 rutas del sitemap dentro del alcance y una ruta de cuenta descubierta por enlace. El sitemap anuncia 147 URL; se excluyeron 86 perfiles personales del inventario.
- **13 ministerios**, 3 artículos, 3 eventos de ejemplo, páginas institucionales y 12 rutas del área operativa.
- **10 fichas visibles** en el directorio y **9 URL de detalle** localizadas. No equivale a una cifra nacional ni permite resolver duplicados.
- **101 fuentes de imagen** agrupadas por URL de origen; no se descargaron ni validaron todos los originales.
- **2 documentos enlazados** (PDF y PPTX), sin inspección de contenido.
- Biblioteca dinámica con **3 carpetas y 23 elementos anunciados**; nombres de los archivos aún pendientes de catalogar.
- **14 destinos externos** registrados, excluyendo enlaces automáticos para compartir y correos.

Los datos reutilizables están en [inventario-paginas.json](docs/investigacion/inventario-paginas.json), [inventario-recursos.json](docs/investigacion/inventario-recursos.json) y [redirecciones-propuestas.json](docs/investigacion/redirecciones-propuestas.json). La [captura pública](docs/investigacion/captura-publica.json) conserva textos, enlaces, metadatos y trazabilidad. Los HTML originales se guardan localmente en `docs/investigacion/fuentes-html/` y se excluyen de Git.

## Estado del repositorio

Antes de la investigación solo existía `.git`. Al iniciar la implementación había documentación, inventarios y scripts de recolección, pero no aplicación ni dependencias. La entrega inicial del repositorio reúne la aplicación Next.js, los recursos utilizados, la documentación, los inventarios y las evidencias de verificación. Las dependencias instaladas, compilaciones, variables locales, HTML bruto y originales descargados se mantienen fuera de Git según `.gitignore`. No se cambió el sitio Wix.

Se aplicaron los criterios de análisis de Impeccable y Sites. La publicación de Sites usa otra plataforma; la instrucción explícita del stack mantiene **Vercel** como destino. No se creó un proyecto alojado en Sites.

## Repetir la recolección

Requiere Node.js con `fetch` y acceso de lectura a Internet. No usa paquetes adicionales. Ejecutar desde la raíz del repositorio:

```powershell
node scripts/recolectar-sitio.mjs
node scripts/organizar-inventario.mjs
```

El recolector usa GET, sitemap y enlaces del mismo origen. Excluye perfiles personales, parámetros, archivos y medios; no inicia sesión ni envía formularios. Sobrescribe la captura actual. La clasificación editorial del segundo script es específica de este inventario: si aparece una ruta nueva, requiere asignarle tratamiento antes de regenerar.

## Siguiente etapa

Revisar la Home y el directorio con los responsables, validar los datos señalados y continuar con las páginas institucionales. El [plan por fases](docs/ARQUITECTURA-Y-FASES.md) conserva el alcance de la migración. La base técnica y el directorio están implementados; autenticación, administración, persistencia y renovación de reportes quedan para fases posteriores.
