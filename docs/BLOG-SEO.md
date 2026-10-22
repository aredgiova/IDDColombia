# SEO del blog

La migración implementa `/blog` y tres artículos estáticos con App Router. Los metadatos y el contenido están presentes en HTML sin depender de JavaScript del cliente. Datos editoriales: `src/data/blog.ts`. No hay dependencias nuevas ni CMS en esta fase.

## Implementado

- Títulos SEO y descripciones individuales basados en el contenido real; título principal único y subsecciones H2 descriptivas.
- Canonical absoluto por ruta con `SITE_URL`, Open Graph de tipo article, imágenes sociales de cada publicación y Twitter summary_large_image.
- Blog y BreadcrumbList en el índice; BlogPosting y BreadcrumbList por artículo. JSON-LD serializado con escape de `<`, fechas ISO originales, autoría conservada y editor institucional. No se declaran valoraciones ni testimonios inexistentes.
- Imágenes originales alojadas localmente, dimensiones explícitas, `next/image`, tamaños adaptativos y carga diferida excepto imagen principal. El logo del artículo Iglesia mantiene su proporción.
- Slugs ASCII cortos, enlaces internos desde cabecera y pie, lecturas relacionadas y retorno al índice.
- Sitemap con las siete páginas implementadas e imágenes de artículos. Fechas del artículo tomadas de modifiedAt o publishedAt, nunca de la fecha de compilación.
- Redirecciones HTTP 308 exactas para los tres artículos originales; conservan parámetros. No se redirigen rutas ajenas sin equivalente.
- Slugs inexistentes responden 404. Previews y local conservan noindex/nofollow; solo `VERCEL_ENV=production` habilita indexación.

## Criterios editoriales

Conservar el contenido sustantivo, sin alargar artículos con palabras clave ni fabricar datos. Las notas «Se pueden incluir…» y «Se pueden ofrecer…» no eran testimonios ni recursos terminados: permanecen en `editorialNotes`, fuera del cuerpo mostrado. La corrección de títulos, encabezados y el error «I ntroducción» se documenta en el inventario. El tiempo de lectura se calcula sobre el texto mostrado. La selección del artículo juvenil como lectura principal no implica mayor actualidad.

## Comprobación y publicación

Se verifican los metadatos renderizados, JSON-LD, coincidencia de fechas, enlaces, sitemap, redirecciones, respuesta 404, carga de imágenes y adaptación a pantalla. Evidencia en `docs/verificacion/blog/`. La verificación local no equivale a indexación ni a una prueba en Search Console.

Comprobación reproducible, con build terminado y servidor local activo: `node scripts/verificar-blog.mjs`. Opcionalmente acepta `BLOG_TEST_ORIGIN` para otro servidor y `SITE_URL` para el origen canónico configurado. No envía formularios ni modifica servicios remotos.

Al publicar en Vercel: configurar `SITE_URL` con el dominio canónico definitivo, revisar el resultado con Rich Results Test y Search Console y enviar `/sitemap.xml`. Mantener el dominio en Wix hasta completar los demás destinos de la migración. Las redirecciones solo operarán en el nuevo despliegue; este trabajo no modifica Wix ni garantiza posiciones en Google.

Referencias: [Google: datos estructurados Article](https://developers.google.com/search/docs/appearance/structured-data/article), [Google: guía SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) y documentación local Next 16.4.2 de metadata, generateStaticParams, Image y JSON-LD.
