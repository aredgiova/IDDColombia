# Refinamiento visual institucional

Solicitud del usuario: mejorar todo el sitio con Impeccable para expresar el carácter formal, moderno y sofisticado de una organización nacional e internacional. Se mantienen las decisiones confirmadas de atender a visitantes y miembros por igual y usar fotografías reales de la comunidad.

## Sistema implementado

- Azul profundo `#0b2d48`, blanco y superficies pálidas; Manrope local y logo original. Se conserva la familia visual existente y se refuerzan jerarquía, contraste, espacio y consistencia.
- Cabecera con barra de accesos institucionales; navegación de escritorio y móvil con submenú agrupado de Quiénes somos.
- Portada con bienvenida y acciones sobre azul junto a fotografía documental de formación. El mapa interactivo sigue en la Home, después de los accesos para los dos públicos.
- Pie azul con invitación, marca sobre blanco, datos de contacto y enlaces institucionales agrupados.
- Directorio, biblioteca, blog, artículos, páginas institucionales y calendario comparten escala de títulos, colores y controles. Las listas permanecen abiertas; los artículos mantienen ancho de lectura y fuentes.
- Controles con bordes visibles, estados activos distinguibles y focos adaptados a fondos claros y oscuros. Menú móvil con desplazamiento interno que considera ambas franjas de la cabecera.

El sistema durable está en `DESIGN.md` y `.impeccable/design.json`. El contrato de composición está incluido en el HTML mediante `src/app/layout.tsx`. No se atribuye aprobación a una maqueta generada ni se declara un manual de marca definitivo.

## Alcance

Quince páginas de contenido: Home, directorio, biblioteca, blog, sus tres artículos, Quiénes somos, sus seis páginas y calendario. La pantalla 404 hereda los estilos compartidos.

La presentación reutiliza los textos, imágenes, datos y SEO migrados. Las cifras del mapa siguen identificadas como datos parciales del directorio público. No se añadieron afirmaciones de tamaño, cobertura, membresía ni cargos para reforzar la apariencia institucional. Los archivos protegidos y servicios aún externos conservan sus destinos.

## Verificación

- `npm run lint`, `npm run typecheck` y `npm run build`: correctos. El build final incluye el ajuste de la fotografía a `next/image` con `fill` y el color de navegador actualizado.
- HTTP: las 15 páginas responden 200, contienen un H1 y el contrato de diseño. Registro: `verificacion/institucional-visual/http.json`.
- Reflujo: 46 comprobaciones de 13 rutas representativas entre 320, 375, 768, 1024 y 1440 px, sin desbordamientos horizontales, con un H1 y sin imágenes cargadas rotas. Las otras dos publicaciones comparten la plantilla del artículo revisado. Registro: `responsive.json` en la misma carpeta.
- Interacciones: selección de mapa y teclas Inicio/Fin; filtros y estados vacíos del directorio y biblioteca; recuperación de los tres recursos; menú institucional con flecha abajo/Escape; menú móvil que cabe en 844 px y restaura el foco; selección mensual, anterior y siguiente deshabilitado en diciembre.
- SEO del blog: `node scripts/verificar-blog.mjs` correcto para cuatro páginas, tres redirecciones, datos estructurados, sitemap, health y 404.
- El script institucional antiguo no se ejecutó por falta de su dependencia opcional Playwright. La revisión de navegador de esta entrega se hizo con CUA y quedó registrada en `verificacion-interacciones.json`, sin instalar dependencias adicionales.
- Detector Impeccable ejecutado una vez sobre los once archivos de interfaz cambiados: 67 avisos informativos de documentación (60 de escala tipográfica, seis de color y uno de radio), ningún hallazgo de severidad distinta de `advisory`. No se añadieron excepciones generales. `detector.json` conserva la salida anterior a finalizar la sincronización de documentación.

Las capturas de escritorio y móvil están en `docs/verificacion/institucional-visual/`; los archivos `*-viewport.jpg` permiten revisar tipografía y controles a tamaño legible. La revisión independiente se registra en `revision-independiente.md`. Estas comprobaciones no constituyen una certificación integral de accesibilidad ni mediciones de usuarios reales.

## Estado de entrega

Implementación local en `http://127.0.0.1:3000/`. No se publicó ni se sustituyó el sitio existente. Se mantienen los pendientes editoriales y de activos de la migración documentados en `PRODUCT.md`.
