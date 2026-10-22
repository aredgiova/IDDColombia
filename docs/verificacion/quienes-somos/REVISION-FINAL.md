# Revisión final independiente · Quiénes somos

Fecha: 16–17 de octubre de 2026 (Colombia). Revisión de los archivos implementados y de las capturas existentes, sin modificar código de la aplicación ni abrir una nueva sesión de navegador. Referencias: `DESIGN.md`, `PRODUCT.md`, contrato de lectura y `craft-floor.md` de Impeccable.

## 1. Fidelidad a la dirección

La portada cumple la dirección institucional y cercana: Manrope, azul y blanco, fotografía real de la congregación y superficies abiertas. Las tres preguntas organizan los siete destinos con una progresión comprensible: identidad, organización y vida de la iglesia. No se introduce otra paleta ni se sustituye el sistema existente por tarjetas repetitivas. Las imágenes documentales conservan su identidad original dentro de controles de consulta.

La navegación compartida y el pie integran los destinos nuevos. Los nombres canónicos describen el contenido y eliminan de la experiencia las rutas heredadas «copia-de-…».

## 2. Jerarquía visual y legibilidad

Las capturas de escritorio y móvil muestran títulos claros, separación suficiente entre etapas y lectura continua. La historia distingue fechas, títulos y párrafos; la organización separa funciones y nombres; la ruta agrupa sus tres etapas; el calendario diferencia fecha, actividad y modalidad. Misión y visión reciben énfasis sin competir con el encabezado.

La columna de texto limita los párrafos a 72ch. Los contrastes calculados a partir de los colores declarados son 5,85:1 para texto secundario sobre blanco, 5,23:1 sobre azul pálido y 8,53:1 para texto secundario sobre azul institucional. No se observan solapamientos ni recortes en las capturas examinadas. Los 23 avisos del detector son recomendaciones sobre tamaños fuera de la escala documentada; no evidencian por sí mismos un defecto material de lectura.

## 3. Responsive y accesibilidad

`responsive.json` registra 40 comprobaciones: ocho rutas a 320, 390, 768, 1024 y 1440 px, sin desbordamiento horizontal ni imágenes rotas. `verification.json` registra navegación de menús por teclado satisfactoria. El código conserva nombres accesibles, `aria-expanded`, página activa, foco visible, Escape y retorno de foco; el calendario utiliza un selector nativo y anuncia los cambios de mes.

Se identificó y corrigió un hallazgo material en `AboutShell`: el menú de páginas hermanas precedía al artículo en el DOM, aunque CSS lo situaba al final en móvil. Esto hacía que Tab alcanzara primero enlaces visualmente inferiores y después regresara a los controles o al índice del contenido. La lectura final del código confirma el artículo antes del menú en el DOM, la eliminación del cambio de orden móvil y las áreas de grid que conservan la barra lateral a la izquierda en escritorio. La corrección alinea lectura y navegación móvil sin alterar la composición.

Segunda pasada de cierre: se revisaron las capturas recapturadas de misión a 1440 y 390 px. Confirman la barra lateral a la izquierda en escritorio y los enlaces hermanos después de todo el artículo en móvil. La ejecución posterior al build de `scripts/verificar-quienes-somos.mjs`, reportada satisfactoria por el implementador y registrada en `verification.json`, incorpora aserciones explícitas del artículo primero en el DOM y del menú debajo de su borde inferior en móvil. Conserva ocho rutas, siete redirecciones, 40 comprobaciones responsive, doce meses, catorce declaraciones y cero errores de navegador. Esta pasada cierra el hallazgo; no reabre una ronda de mejoras.

Alcance de evidencia: portada y misión cuentan con capturas completas; las demás páginas largas muestran el primer viewport. La revisión de contenido inferior se apoya en los componentes y datos, no en una inspección visual completa de cada documento expandido. No constituye una certificación integral de accesibilidad.

## 4. Contenido y completitud

Los siete contenidos están presentes y enlazados. La historia conserva la atribución a César Rodríguez Zambrano y separa cronología nacional, obra social y raíces internacionales. Una comparación exacta de `faithStatements` con los bloques del registro `IDD-021` de `inventario-paginas.json` confirma los 14 enunciados doctrinales completos, en el mismo orden y sin cambios de redacción.

Misión, visión y ejes coinciden con los originales examinados. La organización conserva los grupos y señala la duplicación de Región 2 del original; la ruta dispone de texto y esquemas fuente. Los datos del calendario incluyen los doce meses y 95 entradas mensuales, con lámina original y fechas ausentes expresadas como «Día no indicado». Ese conteo incluye continuaciones entre meses y no se presenta como 95 eventos únicos.

Los cargos se atribuyen al organigrama publicado. La elección nacional de 2023 se relata como hecho histórico, sin convertirla en confirmación de vigencia en 2026. La pieza de 139 años y cifras internacionales se identifica como histórica. Los límites de disponibilidad del enlace latinoamericano y de actualización institucional están documentados.

## 5. Dictamen final

La dirección visual y el contenido están listos. El único hallazgo material de esta revisión fue corregido; no quedan cambios de aplicación requeridos por este dictamen.

| Hallazgo material | Estado | Evidencia o acción |
| --- | --- | --- |
| Orden de lectura y Tab en móvil | Resuelto | Código, aserciones de orden y segunda pasada de capturas confirman el artículo antes del menú en móvil y la barra lateral de escritorio. |
| Cobertura de las siete páginas y fidelidad doctrinal | Resuelto | Siete destinos, doce meses y comparación exacta de los 14 enunciados. |
| Reflujo, carga de imágenes y navegación compartida | Resuelto | 40 comprobaciones responsive sin errores y verificación de menús por teclado. |
| Otros defectos materiales | Ninguno sin resolver | Las capturas y archivos revisados no justifican nuevos cambios de dirección o preferencias estéticas. |
