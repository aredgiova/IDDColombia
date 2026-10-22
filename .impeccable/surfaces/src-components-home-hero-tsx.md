---
version: 1
slug: "src-components-home-hero-tsx"
primary_target: "src/components/home/hero.tsx"
related_targets: ["src/app/globals.css","src/components/home/colombia-church-map.tsx","src/components/home/colombia-church-map.css","src/lib/church-map-data.ts","src/app/iglesias/page.tsx"]
---

# Hero · bienvenida institucional y mapa de iglesias

Modo: Persuade. La bienvenida invita a conocer la comunidad y encontrar una congregación; el mapa permite consultar por territorio. El refinamiento global solicitado presenta el titular y las acciones sobre azul profundo a la izquierda y fotografía real de formación a la derecha. Después aparecen los dos accesos de igual prioridad y el mapa sobre blanco. La etapa previa sustituyó la foto por el mapa; esa composición queda como antecedente, no como diseño vigente.

Identidad: dirección institucional, formal, sofisticada y moderna; Manrope, azul profundo, blanco, superficies abiertas y divisores definidos. El hero participa del sistema de todo el sitio documentado en DESIGN.md: radio de superficie de 12 px, controles de 6 px y foco adaptado a cada fondo. La fotografía rectangular conserva origen institucional y leyenda; no añade testimonios ni cifras. No hubo mockup generado aprobado ni ratificación del manual de marca. Los colores cartográficos son estados funcionales locales, no una paleta de marca adicional.

Composición: bienvenida y foto en columnas 1fr 1.06fr, con 60 px de separación y foto de al menos 560 px de alto en escritorio. «Encuentra una iglesia» usa botón blanco; «Conoce nuestra iglesia» es el enlace secundario. En móvil, texto antes de foto, proporción de imagen 1.6 y accesos apilados. Se usa la imagen existente `/images/comunidad-formacion.webp`; mantener encuadre y texto alternativo que describen formación en comunidad.

El mapa comienza tras 64 px de espacio, o 40 px en móvil, con H2 de escala compartida. En escritorio ocupa la columna flexible y el selector/ficha una de 360 px, separados 64 px; en el ajuste de 1100 px son 320 px y 22 px. En móvil, selector antes del mapa y ficha después, con 18 px de separación. Ambos medios de selección permanecen disponibles. Las islas conservan siluetas ampliadas en un recuadro con advertencia de escala. Mantener leyenda, atribución cartográfica y enlace a datos junto al SVG.

Interacción: 32 departamentos y Bogotá D. C., selección inicial de Atlántico, clic y selector nativo sincronizados. El SVG usa opciones de selección única con una sola parada de tabulación; flechas recorren la lista alfabética, Inicio/Fin llevan a los extremos y Enter/Espacio activan la opción. El hover identifica un territorio sin cambiar la ficha elegida. El estado accesible anuncia selección y cifras. El detalle «Sobre estas cifras» se cierra al cambiar de territorio.

Datos: diez fichas públicas en siete territorios; no equivalen al total nacional de congregaciones. Atlántico muestra aproximadamente 63 miembros reportados en dos de sus tres fichas y sin fecha de corte. No sumar asistentes como miembros, convertir ausencia de datos en cero ni crear congregaciones por referencias históricas. «Sin registro» informa de la ausencia de fichas y ofrece consultar con la oficina; «No publicado» expresa membresía desconocida. Mantener visible la nota de que los datos son parciales y no representan un censo nacional.

Continuidad: «Ver iglesia(s)» abre el directorio con el código de departamento. Allí búsqueda, departamento y ciudad se combinan; al cambiar de departamento se limpia la ciudad y al restablecer filtros se recuperan las diez fichas.

Fuentes: `docs/investigacion/mapa-datos-fuentes.md` para las cifras; `docs/MAPA-COLOMBIA.md` para origen, licencia y transformaciones de las fronteras. Cartografía de geoBoundaries derivada de OpenStreetMap, adaptada y publicada bajo ODbL; no es cartografía oficial, geolocalización de sedes ni una herramienta de medición.

Criterios de verificación: fotografía y leyenda cargadas, acciones y accesos del hero operativos; 33 opciones presentes y sincronizadas entre SVG y selector; estados con/sin fichas y membresía desconocida; cobertura y fecha visibles para Atlántico; navegación alfabética por teclado; llegada al directorio con tres fichas de Atlántico, cambio a las dos de Cauca y restablecimiento a diez; reflujo móvil sin desbordamiento y foco visible sobre azul y blanco. Son criterios de comprobación, no resultados de QA ni sustituto de validación institucional de los datos.
