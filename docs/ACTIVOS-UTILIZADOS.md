# Activos del sitio inicial

Selección realizada el 16 de octubre de 2026 (America/Bogota). Fuentes: `investigacion/inventario-recursos.json` y `investigacion/captura-publica.json`, correspondientes al sitio institucional existente. Los archivos seleccionados se descargaron mediante GET público del CDN de Wix y se comprobaron visualmente.

## Imágenes seleccionadas

| Archivo servido | Fuente del inventario | Original | Versión web | Peso web | Uso previsto |
| --- | --- | --- | --- | --- | --- |
| `/images/logo-iglesia.png` | ASSET-001 | 1446 × 366, PNG con transparencia | 696 × 176, PNG con transparencia | 26 541 bytes | Cabecera y pie |
| `/images/comunidad-formacion.webp` | ASSET-089 | 2558 × 1024, JPG | 1400 × 560, WebP | 82 594 bytes | Fotografía principal |
| `/images/comunidad-bogota.webp` | ASSET-075 | 4608 × 3456, JPG | 1400 × 1050, WebP | 107 084 bytes | Comunidad / quiénes somos |
| `/images/comunidad-piendamo.webp` | ASSET-080 | 715 × 712, JPG | 715 × 712, WebP | 63 958 bytes | Comunidad |
| `/images/iglesia-cucuta.webp` | ASSET-077 | 1599 × 899, JPG | 1400 × 787, WebP | 96 360 bytes | Directorio de iglesias |

Se conservaron los cinco originales correspondientes en `docs/activos/originales/`. Las versiones web conservan la proporción y el contenido de cada imagen; solo se optimizaron tamaño, formato y compresión. No se generaron personas, se alteraron rostros ni se recreó el logo. Las fotografías se exportaron con calidad WebP 84 y ancho máximo de 1400 píxeles, sin ampliar las de menor tamaño. La metadata técnica breve está en `docs/activos/metadata.json`.

### Logo institucional

- Página de origen: [Inicio](https://www.iglesiadedioscolombia.com/).
- Archivo fuente: [PNG institucional](https://static.wixstatic.com/media/bb8a41_a93f1eb1af8145e2950486330f28c113~mv2.png).
- Original conservado: `docs/activos/originales/logo-iglesia.png`.
- Comprobación visual: símbolo de cruz y globo, nombre «IGLESIA DE DIOS», indicación «En Colombia» y «Church of God». Negro sobre transparencia; utilizar en un fondo claro. No es un logo vectorial.
- Texto alternativo sugerido: `Iglesia de Dios en Colombia`.

### Encuentro de formación

- Página de origen: [Ministerio infantil](https://www.iglesiadedioscolombia.com/ministerio-infantil).
- Archivo fuente: [Fotografía publicada en Ministerio infantil](https://static.wixstatic.com/media/bb8a41_dcc83e8dce3e4413b6b20d0141db57e2~mv2.jpg).
- Original conservado: `docs/activos/originales/comunidad-infantil.jpg`.
- Descripción visible: personas adultas sentadas alrededor de mesas, mientras una mujer se dirige al grupo. La página permite asociar la imagen al Ministerio infantil, pero no establece la ciudad, fecha, nombre del evento ni identidad de las personas.
- Texto alternativo sugerido: `Participantes reunidos alrededor de mesas durante un encuentro de formación`.
- El nombre del archivo final es descriptivo; no afirma un evento específico.

### Bogotá

- Página de origen: [Ficha Bogotá Cundinamarca](https://www.iglesiadedioscolombia.com/items/bogot%C3%A1-cundinamarca), también presente en el directorio.
- Archivo fuente: [Fotografía de la ficha Bogotá](https://static.wixstatic.com/media/bb8a41_b912d934ca3a4e06b8c2a5daeca34eca~mv2.jpg).
- Original conservado: `docs/activos/originales/congregacion-bogota.jpg`.
- Descripción visible: una mujer se dirige a una comunidad reunida dentro de un salón. La atribución geográfica procede de la ficha del sitio anterior, no de una verificación independiente del lugar.
- Texto alternativo sugerido: `Comunidad reunida en el interior de una iglesia, en la fotografía de la ficha de Bogotá`.
- Limitación: fotografía con iluminación interior desigual; conviene conservar una composición que muestre a las personas.

### Piendamó

- Página de origen: [Ficha Piendamó](https://www.iglesiadedioscolombia.com/items/piendam%C3%B3-), también presente en el directorio.
- Archivo fuente: [Fotografía de la ficha Piendamó](https://static.wixstatic.com/media/bb8a41_db49bd25ab57484f8288734945da040c~mv2.jpg).
- Original conservado: `docs/activos/originales/congregacion-piendamo.jpg`.
- Descripción visible: grupo de personas ante una entrada con el rótulo «Iglesia de Dios — Monte Horeb». No se asignan nombres ni roles.
- Texto alternativo sugerido: `Grupo de personas frente a la entrada de la Iglesia de Dios Monte Horeb`.
- Limitación: original de 715 × 712 píxeles; no usar como imagen de pantalla completa ni ampliar de forma significativa.

### Cúcuta

- Página de origen: [Ficha Cúcuta](https://www.iglesiadedioscolombia.com/items/cuc%C3%BAta), también presente en el directorio.
- Archivo fuente: [Fotografía de la ficha Cúcuta](https://static.wixstatic.com/media/bb8a41_8113460f4aaf4c02b58eac47b8918abd~mv2.jpg).
- Original conservado: `docs/activos/originales/congregacion-cucuta.jpg`.
- Descripción visible: fachada blanca con escaleras de entrada y rótulo de la Iglesia de Dios. La atribución geográfica procede de la ficha del sitio anterior.
- Texto alternativo sugerido: `Fachada de la iglesia publicada en la ficha de Cúcuta`.

## Fuente tipográfica local

Manrope, normal, variable con pesos 400–800, obtenida de la API pública de Google Fonts. Se sirve desde el proyecto y no requiere peticiones del visitante a Google Fonts.

| Archivo | Subconjunto | Peso |
| --- | --- | --- |
| `/fonts/manrope-latin.woff2` | Latin, incluye caracteres españoles habituales | 24 836 bytes |
| `docs/activos/originales/manrope-latin-ext.woff2` | Latin Extended, conservado como original; no se sirve ni se carga | 15 120 bytes |
| `/fonts/Manrope-OFL.txt` | Licencia SIL Open Font License 1.1 | 4 387 bytes |

- [Solicitud CSS usada para resolver las URLs](https://fonts.googleapis.com/css2?family=Manrope:wght@400..800&display=swap).
- [WOFF2 Latin](https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggexSg.woff2).
- [WOFF2 Latin Extended](https://fonts.gstatic.com/s/manrope/v20/xn7gYHE41ni1AdIRggmxSuXd.woff2).
- [Licencia original de Google Fonts](https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/OFL.txt).
- Copyright 2018 The Manrope Project Authors.
- La declaración CSS del subconjunto Latin incluye `U+0000-00FF`, que cubre `á é í ó ú ü ñ Á É Í Ó Ú Ü Ñ ¿ ¡`; puede usarse el archivo Latin para el contenido español previsto. La licencia conservada permite el uso, la incrustación y la redistribución junto con el software, incluyendo su aviso de copyright y licencia.

## Criterio editorial y pendientes

Las fotografías proceden de páginas de la propia organización y se reutilizan para esta propuesta de renovación. La publicación previa no acredita por sí sola los derechos de autor ni los consentimientos de imagen para cualquier uso posterior; su vigencia y reutilización definitiva deben ratificarse con la organización antes del lanzamiento público.

La revisión visual descartó como portada las fotografías de auditorio casi vacío de la convención, las campañas y una imagen de paternidad cuya pertenencia a la comunidad no se pudo verificar. No se incorporaron fotografías de stock ni imágenes generadas. Deben evitarse pies de foto que inventen fechas, ciudades, nombres o roles de los participantes.
