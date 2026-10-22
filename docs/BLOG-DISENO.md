---
name: Iglesia de Dios en Colombia — Blog
description: Extensión de lectura que conserva la identidad institucional y cercana del sitio.
colors:
  blue: "#153e6f"
  blue-hover: "#0c2c54"
  ink: "#152c43"
  muted: "#53677a"
  white: "#fff"
  pale: "#edf3f8"
  line: "#d7e1ea"
  focus: "#327cbf"
typography:
  article-heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.035em"
  featured-heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2rem, 3.2vw, 2.9rem)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.035em"
  preview-heading:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.3rem, 2.1vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  metadata:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.87rem"
    fontWeight: 400
    lineHeight: 1.7
  action:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 700
    lineHeight: 1.5
rounded:
  focus: "3px"
  control: "7px"
  image: "14px"
spacing:
  "18": "18px"
  "20": "20px"
  "24": "24px"
  "26": "26px"
  "30": "30px"
  "32": "32px"
  "36": "36px"
  "40": "40px"
  "48": "48px"
  "56": "56px"
  "76": "76px"
components:
  community-action:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.control}"
    padding: "14px 23px"
  community-action-hover:
    backgroundColor: "{colors.blue-hover}"
  community-panel:
    backgroundColor: "{colors.pale}"
    rounded: "{rounded.image}"
    padding: "36px 40px"
  image-frame:
    backgroundColor: "{colors.pale}"
    rounded: "{rounded.image}"
  reading-link:
    textColor: "{colors.blue}"
---

# Design System: extensión Blog

## Overview

**Creative North Star: "Institucional y cercana"**

El Blog prolonga la identidad documentada en `DESIGN.md`: azul institucional, blanco, Manrope, superficies abiertas y enlaces directos. El modo de esta superficie es Read. La jerarquía conduce desde una lectura principal hacia dos publicaciones complementarias, y desde cada artículo hacia su texto y otras lecturas.

El contrato `EXTENSION /blog` de `src/app/layout.tsx` y `docs/BLOG-BRIEF.md` delimitan esta extensión. La petición precisa consiste en reproducir las tres publicaciones del sitio original y optimizar su presentación para SEO. La continuidad visual ya está resuelta por el sistema existente; no se creó una identidad nueva ni una comp generada aprobada. Los valores de marca conservan el carácter provisional frente al manual institucional registrado en `DESIGN.md`.

**Key Characteristics:**

- Composición abierta que prioriza la lectura y utiliza divisores discretos.
- Juventud encabeza el índice con su fotografía original; esta selección editorial no afirma que sea el artículo más reciente.
- Texto continuo, títulos descriptivos, autoría y fechas procedentes del registro de migración.
- Logotipo completo con ajuste `contain` y fotografías con ajuste `cover`.
- Reflujo a una columna y estados de teclado heredados del sitio.

Esta es una extracción estática de `src/app/blog/blog.css`, las páginas de índice y artículo, `src/components/blog/post-preview.tsx` y `src/data/blog.ts`, contrastada con `src/app/globals.css`, el layout raíz y la documentación existente. No acredita una nueva inspección visual en navegador. La procedencia editorial y los cuatro borradores conservados se consultan en `docs/BLOG-CONTENIDO.md`; la implementación de metadatos se documenta en `docs/BLOG-SEO.md`. Este archivo describe únicamente la extensión y no sustituye el sistema global ni genera un sidecar nuevo.

## Colors

El Blog reutiliza los colores existentes. El frontmatter recoge el subconjunto observado; no introduce colores de marca.

### Primary

- **Azul institucional (`blue`):** enlaces de lectura y retorno, botón del directorio, marcadores de listas y títulos de previews durante hover.
- **Azul profundo (`blue-hover`):** respuesta del botón principal al pasar el puntero.
- **Azul de foco (`focus`):** contorno heredado para identificar el elemento activo al navegar por teclado.

### Neutral

- **Tinta azul (`ink`):** títulos y cuerpo de los artículos sobre blanco.
- **Gris azulado (`muted`):** introducción, extractos, fechas, temas, tiempo de lectura, autoría y migas de navegación.
- **Blanco (`white`):** superficie general y texto del botón principal.
- **Azul pálido (`pale`):** soporte de imágenes y fondo del bloque que enlaza al directorio.
- **Línea fría (`line`):** separación bajo el artículo principal, antes del retorno y al comenzar las lecturas relacionadas.

El tema de una publicación se representa como texto secundario dentro de sus metadatos. No funciona como una etiqueta de color ni como un filtro.

## Typography

**Display Font / Body Font:** Manrope local, con respaldo `sans-serif`, heredada del layout. Los títulos usan peso alto y ajuste equilibrado de líneas; la prosa conserva la interlínea del cuerpo global.

### Hierarchy

- **Título del índice:** «Blog» utiliza el H1 global. No recibe una escala local ni el tratamiento móvil específico del hero de la Home.
- **Título del artículo:** usa `article-heading`, centrado en escritorio. Su máximo local de 3.5 rem es deliberado para títulos de lectura extensos; no redefine el H1 de todo el sitio.
- **Título principal del índice:** usa `featured-heading`. «Sigue leyendo» comparte el tamaño fluido de esta jerarquía.
- **Títulos secundarios y H2 del cuerpo:** usan la escala `preview-heading`. Los H2 del cuerpo separan secciones mediante espacio superior e inferior, sin panel de fondo. Los H3 disponibles en el modelo heredan la escala global de título; las tres publicaciones actuales contienen subsecciones H2.
- **Cuerpo:** usa `body`, con una columna máxima de 68 caracteres. Los extractos tienen un máximo de 53 caracteres y la introducción del índice de 47.
- **Metadatos:** usan `metadata`, con tema, fecha y tiempo separados por puntos decorativos. La autoría ocupa una línea propia en el artículo y permite partir palabras extensas.
- **Acciones:** el botón reutiliza `action`. Los enlaces de lectura y retorno usan el mismo tamaño y peso, con la interlínea global.

Hasta 767 px, los títulos secundarios de previews se fijan en 1.3 rem; el título de la preview principal y el H1 de artículo se fijan en 2 rem. El H2 del cuerpo conserva su declaración fluida local y «Sigue leyendo» conserva la suya. No hay una segunda escala móvil local superpuesta para esos elementos.

## Layout

El Blog comparte el contenedor global: máximo de 1280 px y ancho `calc(100% - 80px)`. Hasta 767 px, su ancho es `calc(100% - 40px)`; hasta 359 px, `calc(100% - 32px)`. El brief requiere funcionamiento desde 320 px; estas reglas describen la implementación, no una comprobación nueva de desbordamientos.

### Índice

La ruta de navegación precede a una introducción en fila con título y texto, separados por 60 px. La introducción usa 32 px arriba y 48 px abajo. La preview principal combina imagen y texto en columnas de `1.15fr 1fr`, con 56 px de separación, alineación vertical central y 52 px antes del divisor inferior.

Las dos publicaciones restantes forman una cuadrícula de columnas iguales, con 56 px entre ellas y 48 px de separación superior. La imagen precede al título y los metadatos de cada preview. El bloque del directorio dispone texto y botón en fila, con 40 px de separación, padding de 36 px por 40 px y márgenes verticales de 64 px y 76 px.

### Artículo

La cabecera tiene un máximo de 900 px, se centra en el contenedor y utiliza padding vertical de 36 px y 40 px. El marco fotográfico alcanza 1040 px; el del logo se limita a 760 px. El texto se centra debajo, con padding de 44 px y 56 px. Los párrafos terminan con 24 px de separación; los H2 comienzan tras 40 px y dejan 20 px antes del contenido.

Las listas conservan viñetas, sangría de 24 px y espacio entre elementos. El retorno al índice se separa por una línea superior. Las lecturas relacionadas comienzan tras otro divisor, con 40 px de padding superior, 76 px inferior y 30 px entre su título y las previews.

### Responsive

- **Hasta 1100 px:** las separaciones de columnas de la preview principal y de las dos previews secundarias bajan a 36 px.
- **Hasta 767 px:** la introducción, la preview principal y las secundarias pasan a una columna. La introducción queda alineada a la izquierda con 20 px entre título y texto. La preview principal usa 26 px entre imagen y texto; las secundarias usan 36 px entre artículos.
- **Bloque del directorio en móvil:** texto y acción se apilan; el botón ocupa todo el ancho disponible, con padding del bloque de 26 px por 24 px.
- **Artículo en móvil:** título y metadatos se alinean a la izquierda; la cabecera usa padding de 24 px y 30 px. La prosa usa 30 px y 40 px; los H2 reducen su separación superior a 32 px. Las lecturas relacionadas usan padding de 32 px y 56 px.
- **Datos extensos:** las migas y los metadatos permiten varias líneas. La autoría permite corte de palabra. La cabecera y el pie continúan usando los puntos de cambio del sistema global.

## Elevation & Depth

Los componentes propios del Blog no añaden sombras. La jerarquía se construye con tamaño tipográfico, espacio, imágenes y líneas. El bloque del directorio se distingue mediante una superficie pálida; las previews permanecen abiertas sobre blanco. El menú móvil compartido conserva su sombra global cuando se abre.

El Blog no declara animaciones de entrada ni transformaciones en hover. Los botones y enlaces de texto conservan las transiciones globales de 0.2 s. El cambio de color y subrayado de los títulos, y el subrayado de las migas, no tienen una transición local. La preferencia global de movimiento reducido elimina animaciones, transiciones y desplazamiento suave.

## Shapes

Los marcos de imagen y el bloque del directorio reutilizan el radio `image`; el botón utiliza `control`. Los divisores son rectos, de 1 px. Las previews no tienen caja, borde envolvente ni superficie elevada. El foco utiliza su contorno global y radio `focus`.

Las fotografías de previews secundarias usan proporción 1.85; la principal usa 1.35 en escritorio y 1.5 en móvil. Estas previews utilizan `cover` para llenar el encuadre. Juventud declara `previewPosition: "center top"` para conservar los rostros en sus recomendaciones; las demás mantienen su foco predeterminado. En el detalle, las fotografías conservan ancho completo y altura automática, sin máximo de altura ni proporción forzada, de modo que la imagen se presenta completa a su proporción natural. Aunque la regla conserva `object-fit: cover`, no impone un marco que recorte la fotografía.

El logo horizontal del artículo Iglesia utiliza `contain` sobre fondo pálido y conserva su imagen completa. En las previews recibe padding de 36 px, reducido a 24 px en móvil; en el artículo recibe 48 px, reducidos a 26 px. El tratamiento diferente está expresado en los datos de la imagen y se aplica tanto al índice como al artículo. No se sustituye el logo por una fotografía para uniformar las proporciones.

## Components

### Previews de publicaciones

Cada preview es un artículo abierto con imagen, título enlazado, tema, fecha, tiempo de lectura, extracto y acción «Leer artículo». Juventud usa la variante principal; Iglesia y Familia conservan el orden de los datos al excluir la publicación destacada.

- **Hover del título:** cambia a azul institucional y añade subrayado de 1 px, separado 5 px del texto.
- **Hover de la acción:** hace visible el subrayado del enlace global. La flecha conserva su posición.
- **Foco:** título y acción mantienen el contorno global de 3 px con separación de 5 px. El enlace de la imagen está fuera del orden de tabulación y oculto a tecnologías de asistencia; la imagen tiene texto alternativo vacío en esta preview para evitar repetir el destino.
- **Nombre accesible:** «Leer artículo» incluye el título como texto exclusivo para tecnologías de asistencia. La preview está identificada por su encabezado.

No existe estado de selección, expansión, carga ni interacción de la superficie completa. El índice con tres artículos no añade buscador, filtros ni paginación.

### Cabecera y cuerpo del artículo

Cada artículo presenta un H1, fecha y tiempo de lectura, seguido de la autoría. La fecha de actualización solo aparece si corresponde a un día distinto del publicado: Juventud muestra la actualización; la diferencia de segundos de Familia se conserva en los datos sin añadir otra fecha visible.

La imagen principal usa el texto alternativo del registro. El cuerpo renderiza únicamente párrafos, encabezados y listas de `blocks`, con un enlace final «Ver todos los artículos». Las cuatro notas de borrador —Testimonios en Iglesia, Juventud y Familia, y Recursos en Familia— permanecen en `editorialNotes` y en `docs/BLOG-CONTENIDO.md`, fuera de este cuerpo y de la interfaz. No se presentan como testimonios existentes ni recursos disponibles.

Las imágenes se sirven desde archivos locales con dimensiones explícitas mediante `next/image`. La preview principal y la imagen del artículo solicitan precarga; las previews restantes conservan la carga diferida del componente. Los tamaños declarados distinguen el ancho móvil del de escritorio.

### Navegación y lecturas relacionadas

Las migas permiten volver a Inicio y, dentro de un artículo, al Blog. Los enlaces tienen altura mínima de 44 px, subrayado en hover separado 4 px y foco global. El último elemento señala la página actual mediante `aria-current`; dentro del artículo muestra el tema, mientras que el H1 identifica la publicación.

«Sigue leyendo» reutiliza dos previews, excluyendo el artículo abierto. El encabezado identifica la sección y el retorno al índice conserva la acción de texto con flecha. Cabecera, pie y salto al contenido se heredan del layout compartido; esta extensión no crea otro menú.

### Acción hacia la comunidad

El bloque final del índice enlaza al directorio mediante «Encontrar una iglesia». El botón principal tiene altura mínima de 54 px, relleno azul y texto blanco. Hover usa el azul profundo; el foco conserva el contorno global. Hasta 359 px hereda la reducción global de padding horizontal y tamaño de texto. No hay estados propios de envío, error o desactivación porque es un enlace de navegación.

## Do's and Don'ts

### Do:

- **Do** conservar la dirección institucional y cercana, la tipografía, los colores y los controles heredados.
- **Do** mantener la columna de lectura de 68 caracteres y las previews abiertas, con jerarquía y divisores.
- **Do** preservar las imágenes originales de cada publicación y aplicar `contain` al logo y `cover` a las fotografías.
- **Do** conservar autoría, fechas y procedencia mediante el registro de migración; mantener los cuatro borradores fuera de la interfaz.
- **Do** mantener la navegación por teclado, los nombres accesibles, los metadatos que permiten varias líneas y el reflujo móvil.
- **Do** tratar el tamaño de título del artículo como una variante local, sin extenderlo a las otras superficies.

### Don't:

- **Don't** presentar esta extensión como una nueva identidad o como aprobación de una comp generada.
- **Don't** afirmar actualidad por la posición destacada de Juventud ni sustituir las fechas originales por la fecha de migración.
- **Don't** recortar el logo, recrearlo o inventar una fotografía para reemplazarlo.
- **Don't** atribuir identidad, ubicación o pertenencia a una congregación a las personas fotografiadas sin evidencia.
- **Don't** completar la composición con testimonios, cifras, comentarios, recursos o funciones simuladas.
- **Don't** añadir sombras, animaciones, filtros o estados que no estén implementados al describir el diseño vigente.
- **Don't** presentar esta extracción de código como una revisión visual nueva, una prueba de indexación o una garantía de posicionamiento.
