# Verificación de Quiénes somos

## Alcance

Portada `/quienes-somos`, seis páginas internas y `/calendario`. No se ha desplegado el sitio público. Fuentes: `docs/QUIENES-SOMOS-CONTENIDO.md` y `docs/QUIENES-SOMOS-FUENTES-GRAFICAS.md`.

## Comprobaciones

- `npm run lint`: correcto, sin advertencias.
- `npm run typecheck`: correcto.
- `npm run build`: correcto, ocho páginas institucionales generadas; contrato `915b9570` conservado en el HTML de producción.
- Siete rutas antiguas devuelven 308 hacia la página correspondiente y conservan parámetros de consulta, incluidas las rutas con tildes.
- Las ocho páginas responden 200, tienen un único H1 y main, título único, descripción propia, canonical y datos estructurados. Todas figuran en el sitemap; una subpágina desconocida devuelve 404.
- Cuarenta verificaciones de ancho: ocho páginas en 320, 390, 768, 1024 y 1440 px, sin desbordamiento horizontal ni imágenes rotas detectadas.
- Menús de escritorio y móvil: apertura, cierre con Escape, retorno de foco y navegación hasta misión y calendario. El contenido precede a la navegación lateral en DOM; en móvil también coincide con el orden visual.
- Selector de los doce meses, consulta de sus imágenes originales, anterior/siguiente y límites de navegación. 95 entradas mensuales, incluidas continuaciones entre meses.
- Catorce enunciados de fe completos, numerados y con índice funcional. La revisión independiente contrastó además cada enunciado con el inventario de la fuente.
- No se registraron excepciones del navegador durante las pruebas.

## Evidencia y repetición

`verification.json`, `responsive.json`, capturas de escritorio/móvil y `REVISION-FINAL.md` guardan el resultado. `detector.json` contiene 23 avisos de tamaños tipográficos del sistema, todos orientativos; no detectó infracciones materiales. La revisión documenta su alcance: capturas completas de portada/misión y primer viewport de páginas largas, complementadas con inspección de código y pruebas funcionales.

`scripts/verificar-quienes-somos.mjs` comprueba la versión de producción. Requiere Playwright disponible en el entorno. `ABOUT_TEST_ORIGIN` permite elegir el servidor; `PLAYWRIGHT_PACKAGE` permite resolver el paquete desde un runtime externo y `PLAYWRIGHT_CHANNEL` usar un navegador instalado. Esta sesión usó Edge sin interfaz y un servidor de pruebas independiente en el puerto 3197, sin detener los servidores existentes del usuario.

## Límites de contenido

La asignación duplicada de Región 2 y las variantes de nombres del organigrama se conservaron con notas; requieren una corrección institucional para modificarse. El enlace a Latinoamérica se mantiene porque está publicado por la fuente nacional, pero no se pudo verificar su disponibilidad por tiempos de espera. Las imágenes internacionales son documentos históricos; sus cifras no se presentan como estadísticas vigentes. La programación de 2026 no confirma que cada evento haya ocurrido ni que sus inscripciones sigan abiertas.
