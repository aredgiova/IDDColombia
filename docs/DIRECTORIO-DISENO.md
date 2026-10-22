# Diseño de la superficie /iglesias

## Overview

Registro de la extensión implementada del directorio. Conserva la dirección «institucional y cercana» de [DESIGN.md](../DESIGN.md); no reemplaza ese documento ni amplía su identidad global. Fuentes: `src/app/iglesias/page.tsx`, `src/app/iglesias/directory.css`, `src/components/churches/church-directory.tsx` y los estilos heredados de `src/app/globals.css`. El encargo autoriza extender la identidad existente; no hubo una nueva comp generada/aprobada.

## Colors

Hereda `--ink` para títulos, `--muted` para información secundaria, `--blue` para acciones y nombre de congregación, `--blue-hover` para limpiar filtros, `--pale` para introducción y vacío, y `--line` para divisores. El fondo es blanco. Los controles reutilizan el borde `#b4c7d9` y el foco global `#327cbf`; no se incorpora una paleta propia. La ratificación de marca sigue pendiente según DESIGN.md.

## Typography

Hereda Manrope, peso normal 400, títulos 700 e interlínea base 1.7. Estas variantes están declaradas localmente; no son nuevos tokens globales:

| Uso | Escritorio | Hasta 767 px |
| --- | --- | --- |
| Título principal | `clamp(2.35rem, 4vw, 3.6rem)`, interlínea 1.13, tracking −0.035 em | `clamp(2.25rem, 7vw, 3.3rem)` |
| Ciudad | 1.55 rem, interlínea 1.3, tracking −0.025 em | 1.5 rem |
| Nombre de congregación | 0.95 rem, peso 600 | Igual |
| Introducción | 1 rem, máximo 55 ch | 0.94 rem |
| Etiquetas de filtros / controles | 0.9 rem y peso 600 / 1 rem | 0.86 rem / 1 rem |
| Etiquetas de datos / contenido | 0.79 rem y peso 600 / 0.87 rem | 0.79 rem / 0.9 rem |
| Dirección / resultados / limpiar | 0.88 / 0.88 / 0.87 rem | Igual |
| Teléfono / correo enlazado | 0.86 / 0.79 rem | 0.9 / 0.84 rem |
| Resumen desplegable / reseña | 0.8 rem y peso 600 / 0.85 rem, máximo 65 ch | 0.84 / 0.85 rem |
| Ruta de navegación / enlace de mapa | 0.82 rem | Igual |
| Pie de foto y aviso de correo / fuente | 0.75 / 0.78 rem | Igual; foto oculta |

El correo pendiente permanece en 0.79 rem. El título del vacío usa 1.5 rem; el de orientación, 1.55 rem, y su párrafo, 0.9 rem. El detector emitió el aviso `design-system-font-size`: este registro captura la diversidad existente, sin afirmar que los tamaños se hayan normalizado o aprobado como escala global.

## Layout

Reutiliza el contenedor global: máximo 1280 px y márgenes de 40 px; 20 px hasta 767 px y 16 px hasta 359 px. La introducción combina texto y foto real de Cúcuta de 340 px, con separación de 70 px. Los filtros forman tres columnas `1.35fr / 1fr / 1fr`, separadas 24 px. Cada fila distribuye ubicación, información y contacto en `0.85fr / 1.15fr / 0.9fr`, con separación de 44 px y padding vertical de 34 px.

Hasta 1100 px, la foto pasa a 280 px; búsqueda ocupa una fila completa y los selectores comparten la siguiente. Las congregaciones usan dos columnas y el contacto queda debajo de la información. Hasta 767 px se oculta la foto, filtros y filas se apilan, las filas usan padding vertical de 29 px y separación de 20 px, y la orientación final se dispone verticalmente. Direcciones, datos y correos permiten corte de palabras largas.

## Elevation & Depth

Las filas abiertas se separan con líneas de 1 px, sin sombra local. Introducción y vacío usan la superficie pálida. No se añade animación; botones y enlaces reutilizan las transiciones globales y la preferencia de movimiento reducido.

## Shapes

Foto y vacío heredan el radio `--radius` de 14 px. Input y selectores usan radio de 7 px y borde de 1 px. La foto se recorta a proporción 2:1 con `object-fit: cover`.

## Components

- **Búsqueda y selectores:** formulario con `role="search"`, etiquetas visibles, input de búsqueda y selects nativos de departamento y ciudad; altura mínima de 56 px. El icono de búsqueda no captura eventos. Comparten el contorno de foco global de 3 px separado 5 px. No hay estados propios de error, carga o deshabilitado.
- **Filtrado:** actualización inmediata; búsqueda por ciudad, iglesia, dirección o pastor, sin distinguir tildes/mayúsculas y exigiendo todos los términos. Departamento y ciudad se combinan; cambiar departamento restablece ciudad y actualiza sus opciones. Un `?departamento=` válido preselecciona el departamento al entrar.
- **Resultados:** contador anunciado mediante estado `polite`; «Limpiar filtros» aparece con filtros activos, restablece los tres campos y enfoca búsqueda. El vacío distingue ausencia de registros publicados en un departamento de una búsqueda sin coincidencias; su botón reutiliza la variante primaria.
- **Fila:** artículo con título de ciudad, dirección, enlace a búsqueda en Maps, datos pastorales y reuniones. Teléfono usa `tel:` y correo confirmado `mailto:`. El correo pendiente es texto acompañado de aviso, sin enlace. La reseña usa `details`/`summary` nativos, cerrados inicialmente y con marcador del navegador; el resumen ofrece una altura mínima de 44 px.
- **Interacción:** ruta de navegación, resumen y contactos muestran subrayado en hover; limpiar filtros cambia a azul profundo. Los enlaces de mapa y fuente reutilizan el componente externo. El botón final de orientación conserva la variante global de contorno.

## Do's and Don'ts

- Conservar controles nativos, foco visible, contador accesible y el orden ubicación → información → contacto en móvil.
- Mantener los tamaños y patrones documentados como variantes locales; consultar DESIGN.md para la identidad compartida.
- Preservar los avisos sobre horarios y correo pendiente. La dirección buscada en Maps procede del listado publicado y no representa coordenadas verificadas.

El archivo [directorio-design.json](directorio-design.json) contiene una extracción compacta de esta superficie; no sustituye el sidecar global de Impeccable.
