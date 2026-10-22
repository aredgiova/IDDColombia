# Diseño de la superficie /biblioteca

## Overview

Registro de la extensión implementada de la biblioteca, en modo Operate / Read. Conserva la dirección «institucional y cercana» de [DESIGN.md](../DESIGN.md) y los compromisos de [PRODUCT.md](../PRODUCT.md). No sustituye esos documentos ni propone una nueva identidad o una comp generada. Los colores y Manrope siguen sujetos a la ratificación del manual de marca ya indicada en el sistema global.

La página permite localizar una carpeta y continuar hacia el servicio que controla su acceso. La composición usa superficies abiertas, texto directo e iconos funcionales de carpeta, búsqueda y candado. No incorpora fotografías decorativas ni portadas que sugieran haber inspeccionado documentos protegidos.

La extracción se acota a `src/app/biblioteca/page.tsx`, `src/app/biblioteca/library.css`, `src/components/library/library-catalog.tsx` y `src/data/library.ts`, con herencia comprobada en `src/app/globals.css` y `src/components/ui/external-link.tsx`. Alcance y evidencia editorial: [BIBLIOTECA-BRIEF.md](BIBLIOTECA-BRIEF.md) y [BIBLIOTECA-CONTENIDO.md](BIBLIOTECA-CONTENIDO.md). Este registro describe código existente; no constituye una nueva validación visual en navegador.

## Colors

La superficie conserva la paleta compartida, con un ajuste local de contraste para el buscador:

- **Azul institucional (`--blue`):** iconos y acciones; `--blue-hover` refuerza el hover de limpiar búsqueda y del botón primario.
- **Tinta (`--ink`) y gris azulado (`--muted`):** títulos y contenido principal frente a descripciones, etiquetas y notas de alcance.
- **Blanco y azul pálido (`--pale`):** fondo principal y campo de búsqueda frente a introducción, ayuda y estado vacío.
- **Divisores (`--line`):** límites horizontales de las filas y separación del aviso de acceso en móvil.

El campo usa un borde de contorno local (`#7191a9`, contraste 3.32:1 sobre blanco), ajustado en la revisión final para distinguir su límite en reposo. Todos los controles heredan el foco global (`#327cbf`). Los valores compartidos y sus roles completos permanecen en DESIGN.md; no se establece una paleta exclusiva de biblioteca.

## Typography

Hereda Manrope, cuerpo de 16 px, peso normal 400 e interlínea base 1.7. Los títulos conservan peso 700. El H1 usa el estilo global `clamp(2.55rem, 4.5vw, 4.1rem)`, interlínea 1.13 y tracking −0.04 em; las excepciones del hero de la Home no se aplican a este título.

| Uso local | Escritorio | Hasta 767 px |
| --- | --- | --- |
| «Carpetas disponibles» | 1.7 rem; interlínea heredada 1.22; tracking −0.025 em | 1.5 rem |
| «Acceso con tu cuenta» | 1.3 rem; interlínea 1.4; tracking −0.025 em | 1.1 rem |
| Nombre de carpeta | 1.3 rem; interlínea 1.4; tracking −0.025 em | 1.25 rem |
| Título de ayuda | 1.3 rem; interlínea heredada 1.22 | Igual |
| Título del vacío | 1.3 rem; interlínea heredada 1.4 | Igual |
| Etiqueta de búsqueda / limpiar / valores de metadatos | 0.9 rem; peso 600 | Igual |
| Campo de búsqueda | 1 rem | Igual |
| Descripciones y párrafos de acceso y ayuda | 0.9 rem | Igual |
| Breadcrumb, contador, etiquetas de metadatos y notas | 0.87 rem | Igual |

La introducción limita la lectura a 52 ch; el aviso de acceso, a 48 ch; las descripciones de carpeta, a 40 ch; la nota de fuente, a 82 ch; y la explicación del vacío, a 50 ch. Los enlaces de acción y botones mantienen la tipografía de los componentes compartidos.

El detector ejecutado en esta sesión emitió cuatro avisos orientativos `design-system-font-size`, por 1.7, 1.1, 1.5 y 1.25 rem. Son variantes locales observadas, registradas en la tabla; no se normalizaron ni se promovieron a la escala global. Este documento no requiere repetir el detector.

## Layout

Reutiliza el contenedor global: máximo 1280 px, ancho `calc(100% - 80px)`, márgenes laterales de 20 px hasta 767 px y de 16 px hasta 359 px. La ruta de navegación precede al título dentro de la superficie pálida.

En escritorio, introducción y aviso de acceso forman dos columnas (`1.3fr / 1fr`) con separación de 100 px. El bloque deja 48 px al pie. El contenido usa 42 px arriba y 56 px abajo. La barra del catálogo alinea título y búsqueda al pie; el formulario ocupa `min(440px, 50%)`. El contador y la acción de limpiar comparten una franja flexible de altura mínima 76 px.

Cada carpeta distribuye descripción, metadatos y acción en tres columnas (`1.2fr / 1fr / 0.7fr`), separadas 42 px, con 32 px de espacio vertical. Los metadatos conservan dos columnas (`1fr / 1.4fr`) para cantidad y fecha. La nota de fuente queda a 24 px del catálogo. La ayuda se separa 44 px y usa 30 × 32 px de espacio interior.

- **Hasta 1100 px:** la introducción reduce su separación a 48 px; la fila pasa a dos columnas (`1.2fr / 1fr`). La descripción ocupa dos filas y la acción queda debajo de los metadatos.
- **Hasta 767 px:** introducción, barra de búsqueda, filas y ayuda se apilan. La introducción separa sus bloques 28 px y el aviso añade una línea superior. Búsqueda ocupa todo el ancho. Las filas usan 28 px de espacio vertical y 22 px entre bloques; sus metadatos siguen en dos columnas. La ayuda usa 24 × 20 px y su botón ocupa todo el ancho.

El orden móvil es nombre y descripción → cantidad y fecha → acceso. No se ocultan cantidades, fechas ni explicaciones de permisos al reducir el ancho.

## Elevation & Depth

La biblioteca no declara sombras locales. La jerarquía proviene de las superficies blanca y pálida, el espacio y los divisores de 1 px. Las filas permanecen abiertas y el área completa no se convierte en enlace. No hay animación propia: botones y enlaces reutilizan sus transiciones globales y el tratamiento compartido de movimiento reducido.

## Shapes

El input y los botones conservan radio de 7 px. Ayuda y vacío heredan `--radius` de 14 px. Las filas de carpetas no tienen caja envolvente, radio ni sombra. Los iconos de carpeta miden 30 px en escritorio y 25 px en móvil; el candado mide 24 px. Su función es orientar, sin reemplazar etiquetas de texto.

## Components

### Navegación y aviso de acceso

El breadcrumb enlaza «Inicio» y marca «Biblioteca» con `aria-current="page"`; su enlace ofrece una altura mínima de 44 px y subrayado en hover. El bloque lateral usa un encabezado propio y el texto visible «Los archivos se consultan en la biblioteca actual. Para abrirlos, necesitas iniciar sesión allí y tener permisos de acceso». La nota bajo el catálogo refuerza que los elementos se muestran con una cuenta autorizada. Estos mensajes acompañan la navegación hacia el servicio existente; no hay formulario de autenticación local.

### Búsqueda y resultados

Formulario con `role="search"`, etiqueta visible y campo nativo `type="search"`. Altura mínima de 56 px, fondo blanco, borde de 1 px e icono que no captura eventos. El campo relaciona sus resultados mediante `aria-controls`; conserva el contorno global de foco de 3 px separado 5 px.

El filtrado es inmediato y se limita al nombre y descripción públicos de cada carpeta. Normaliza tildes, mayúsculas y espacios, y exige coincidencia de todos los términos. Enviar el formulario no navega ni recarga. El contador ajusta singular/plural y anuncia cambios mediante `role="status"`, `aria-live="polite"` y `aria-atomic="true"`.

«Limpiar búsqueda» aparece cuando hay términos activos, tiene altura mínima de 44 px y cambia a azul profundo en hover. Restablece el texto y devuelve el foco al campo. Sin coincidencias, una superficie pálida presenta «No encontramos esa carpeta», sugiere los tres nombres existentes y ofrece «Ver todas las carpetas» con el botón primario compartido y el mismo comportamiento de restauración. No se implementan estados locales de carga, error de red o deshabilitado: el catálogo procede de datos estáticos.

### Filas de carpeta

Lista de tres artículos, cada uno identificado por su título. Los metadatos usan `dl` y la fecha visible incorpora `time` con fecha legible por máquina. Se conservan los nombres publicados: Logos (19 elementos), Credencialización (2) y Educación (FETP) (2), todos con fecha «17 dic 2024». Son cantidades anunciadas en la fuente pública; no acreditan descargas individuales verificadas.

Logos ofrece «Abrir carpeta» hacia el enlace observado y avisa «Requiere acceso de miembro». Las otras dos filas ofrecen «Abrir biblioteca» hacia el índice original y explican cuál seleccionar al entrar. No se inventan enlaces individuales. `ExternalLink` abre otra pestaña con `rel="noopener noreferrer"` y añade el aviso accesible correspondiente; el nombre accesible incluye la carpeta y `aria-describedby` enlaza la instrucción de acceso. El enlace de texto conserva subrayado en hover y altura mínima de 44 px, ampliada a 46 px en móvil.

### Ayuda

La superficie final presenta «¿Necesitas ayuda para acceder?» y una orientación breve hacia la oficina nacional. «Contactar a la iglesia» reutiliza el botón de contorno y dirige a `/#contacto`. No introduce un formulario ni simula una solicitud enviada.

## Do's and Don'ts

- **Do** conservar Manrope, paleta, controles compartidos, foco visible, etiquetas y orden de lectura al extender esta ruta.
- **Do** mantener las cuatro variantes de tamaño como decisiones locales; consultar DESIGN.md para la identidad y escala compartidas.
- **Do** conservar cantidades y fechas junto a su alcance público, así como las instrucciones de permisos antes de abandonar la página.
- **Do** mantener el restablecimiento con devolución de foco, el contador accesible y el aviso de nueva pestaña.
- **Don't** presentar esta entrega como migración de archivos protegidos o del sistema de permisos: únicamente reproduce el catálogo público y conserva el acceso existente.
- **Don't** añadir nombres de archivos, vistas previas, descargas, formatos, tamaños o enlaces individuales no verificados.
- **Don't** convertir estas filas abiertas en tarjetas elevadas ni añadir imágenes decorativas como si fueran portadas de contenido conocido.
- **Don't** trasladar a DESIGN.md las decisiones de composición y tamaño de esta superficie como normas globales.
