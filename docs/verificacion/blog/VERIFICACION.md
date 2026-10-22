# Verificación del blog

- `npm run lint`: correcto, sin advertencias.
- `npm run typecheck`: correcto.
- `npm run build`: correcto después del ajuste final de proporciones de imágenes; índice estático y tres artículos prerenderizados.
- `node scripts/verificar-blog.mjs`: cuatro páginas HTTP 200, títulos/descripciones únicos, canonical propio, Open Graph/Twitter de cada publicación, BlogPosting/BreadcrumbList, autor y fechas de origen, sitemap con artículos e imágenes, tres redirecciones 308 con query conservada, slug desconocido 404 y health 200. Contrato de diseño persistente en build.
- Navegador: navegación por título, lecturas relacionadas, retorno al índice a través del menú móvil, cierre automático del menú. Sin errores ni advertencias de consola.
- Índice y plantilla de artículo revisados en 320, 375, 768, 1024 y 1440 px: un H1 por página y sin desbordamiento horizontal. Capturas de los tres artículos en escritorio y móvil.
- Imágenes cargadas. El ajuste de revisión eliminó el límite de altura que recortaba las fotos de detalle; conservan proporción natural. Logo completo con contain.
- Revisión independiente: foco superior para las previews de Juventud, que evita cortar los rostros en «Sigue leyendo»; capturas de Iglesia y Familia actualizadas.
- Una ejecución del detector: dos avisos orientativos tipográficos. La regla móvil duplicada se eliminó; el máximo local de 3.5 rem para titulares largos queda documentado. No se repitió el detector.

La comprobación HTTP usa el servidor local existente. No se ha desplegado ni solicitado indexación; local y previews permanecen noindex. No se han medido Core Web Vitals de usuarios reales ni se presenta esta revisión como certificación WCAG completa.
