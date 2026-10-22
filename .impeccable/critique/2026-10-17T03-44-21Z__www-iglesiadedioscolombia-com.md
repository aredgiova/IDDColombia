---
target: Sitio actual Iglesia de Dios en Colombia
total_score: 18
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 4
timestamp: 2026-10-17T03-44-21Z
slug: www-iglesiadedioscolombia-com
---
# Revisión de diseño y experiencia

Método: dos evaluaciones independientes. A: `/root/revision_diseno` (diseño y recorridos). B: `/root/evidencia_tecnica` (DOM, accesibilidad observada y detector sobre copia HTML). La síntesis recibió A antes de consultar los resultados de B.

Sitio revisado: [Iglesia de Dios en Colombia](https://www.iglesiadedioscolombia.com/). Fecha: **16 de octubre de 2026, America/Bogota**. Páginas representativas: inicio, directorio y contacto; B añadió biblioteca, credencialización y acceso a reportes.

## Impresión y especificidad

El contenido aporta identidad real: historia institucional, marca, campaña Latinfest, personas y fotografías de congregaciones. La composición mezcla módulos de plantilla sin una jerarquía funcional común. La oportunidad consiste en presentar ese patrimonio mediante recorridos concretos para conocer la iglesia, encontrar una congregación y acceder a recursos.

La bienvenida transmite cercanía; las fotos del directorio ayudan a imaginar una visita. El recorrido pierde claridad cuando la campaña ocupa el encabezado de todas las páginas y cuando los destinos sociales del pie conducen a Wix. El nuevo diseño debería conservar la voz institucional y la humanidad de las fotografías, con una estructura diferente.

## Evaluación heurística orientativa

Escala 0–4, donde 4 representa un desempeño excelente. Resultado de la muestra: **18/36 (50 %)**. Es una valoración de UX, no una certificación de accesibilidad, SEO o rendimiento.

| Heurística | Puntuación | Evidencia o límite |
|---|---:|---|
| Visibilidad del estado | 2 | Títulos de ruta y estado de Inicio; estados de envío no probados. |
| Lenguaje del mundo real | 3 | Bienvenida y contactos comprensibles; jerga institucional y etiquetas en inglés. |
| Control y libertad | 3 | Navegación y retorno disponibles; el ancho reducido dificulta acceder. |
| Consistencia | 2 | Estructura compartida, pero diferencias en enlaces sociales, idiomas y contenidos. |
| Prevención de errores | 2 | Labels y obligatoriedad; comportamiento completo del formulario no probado. |
| Reconocimiento | 2 | Secciones visibles, accesos con nombre repetido y directorio difícil de escanear. |
| Eficiencia | 1 | Directorio sin filtro por ciudad ni acciones directas para llamar o llegar. |
| Estética y economía visual | 1 | Campaña dominante y repetida; fichas extensas y grandes vacíos en contacto. |
| Recuperación de errores | n/a | No se provocaron errores ni se enviaron formularios; no hay evidencia suficiente. |
| Ayuda | 2 | Contacto disponible, sin explicar próximos pasos o plazo de respuesta. |
| **Total** | **18/36** | Nueve heurísticas puntuadas; recuperación excluida. |

## Fortalezas a conservar

1. Bienvenida cercana y contenido institucional propio.
2. Fotografías reales y datos prácticos de congregaciones: dirección, responsables, contactos y horarios.
3. Estructura semántica básica de header/nav/main/footer, acceso a contenido principal, etiquetas de formulario y desplegables con nombres accesibles.

## Cinco prioridades

### 1. P1 · Confianza y coherencia editorial

El pie dirige a Facebook WixEspanol e Instagram Wix, mientras la bienvenida enlaza perfiles institucionales. La [política de datos](https://www.iglesiadedioscolombia.com/datos-personales) publica contactos contradictorios e instrucciones de redacción. La lectura de contenido añade eventos de ejemplo y artículos pendientes de completar.

**Efecto:** los visitantes pueden salir a cuentas ajenas o interpretar borradores como información institucional definitiva. **Acción:** centralizar datos oficiales y aplicar revisión editorial antes de migrar. Comandos útiles: `$impeccable harden` y `$impeccable clarify`.

### 2. P1 · Reflujo insuficiente en la ventana estrecha probada

Con viewport de 390 × 844 en navegador de escritorio, Inicio conserva un documento de aproximadamente 980 px de ancho. En Contacto, el botón Enviar mensaje estaba a x=812 px, fuera del área visible.

**Efecto:** navegación y formulario requieren desplazamiento horizontal. **Acción:** reconstruir navegación, piezas y formularios con reflujo real y verificar 320, 375, 768, 1024 y 1440 px. Comando: `$impeccable adapt`.

**Límite:** no se probó un teléfono físico ni se cambió el user agent. Wix puede servir una variante móvil diferente; no se extrapola el resultado a todos los dispositivos.

### 3. P1 · Encontrar una iglesia exige leer demasiado

El [directorio](https://www.iglesiadedioscolombia.com/iglesiasdedios) muestra diez fichas consecutivas con imágenes grandes e historias extensas. B no encontró filtros en `main`, enlaces `tel:` ni enlaces de mapas; sí encontró diez enlaces de correo.

**Efecto:** dificulta la tarea de ubicar ciudad, horario y contacto. **Acción:** resultados breves por ubicación con ficha detallada, llamadas y cómo llegar; primero reconciliar los datos. Comando: `$impeccable shape`.

### 4. P1 · La campaña desplaza la tarea de cada página

El banner Latinfest ocupa gran parte de la primera pantalla en inicio, directorio y contacto. Inicio suma otra gran pieza de la misma campaña inmediatamente después. No se identificó una acción asociada al banner principal.

**Efecto:** la comunicación promocional retrasa conocer la institución, buscar iglesia o contactar. **Acción:** asignar a la campaña un bloque definido con contexto y destino; comenzar interiores por su tarea. Comandos: `$impeccable distill` y `$impeccable layout`.

### 5. P2 · Nombres accesibles y jerarquía de lectura

Inicio tiene cuatro accesos distintos llamados Chat, carece de H1 y mezcla inglés/español. Directorio contiene 80 H2, incluyendo datos y reseñas que no deberían ser títulos. Hay imágenes con nombres de archivo o teléfonos como alternativa textual.

**Efecto:** complica comprender enlaces y recorrer contenido con lector de pantalla. **Acción:** dar nombres por destino, rehacer jerarquía, localizar widgets y redactar alternativas según función. Comandos: `$impeccable audit` y `$impeccable clarify`.

## Carga cognitiva y recorrido

La evaluación A encontró cinco fallos de ocho criterios: foco, división en grupos, jerarquía, secuencia de decisiones y número de opciones. Hay agrupación visual y divulgación parcial mediante submenús. La navegación presenta ocho entradas visibles contando Más, además de Reportes/Login; el bloque de accesos presenta cinco destinos. El número por sí solo no constituye un defecto: importa la competencia entre tareas que se observó en este contexto.

Recorrido emocional: bienvenida cercana → saturación por campaña y contenido mezclado → conexión con fotos reales → cierre menos confiable por destinos sociales ajenos. Una navegación para ambos públicos y un directorio práctico corrigen esos puntos sin sustituir la identidad institucional.

## Personas y riesgos concretos

- **Visitante primerizo (Jordan):** debe deducir por dónde empezar entre campaña, información y gestiones. Proponer las acciones Encontrar una iglesia y Miembros y líderes.
- **Persona en pantalla estrecha (Casey):** la prueba a 390 px deja navegación y formulario fuera del área visible; verificar la experiencia móvil real antes de publicar.
- **Usuario de lector de pantalla (Sam):** enlaces Chat y uso masivo de H2 oscurecen la estructura. No se ejecutó una prueba completa con NVDA ni navegación solo por teclado.

## Señal automatizada y límites

El detector ejecutado sobre la copia local de Inicio produjo **25 advertencias**: 16 de fuentes, 5 de transiciones, 2 de bordes, 1 glow y 1 marquee. No son 25 defectos visibles confirmados. Muchos resultados proceden de CSS empaquetado de Wix y declaraciones de bibliotecas. No justifican cambiar tipografía o identidad por sí solos. Ver [evidencia técnica](investigacion/evidencia-tecnica.md) y [salida completa](investigacion/detector-home.json).

La revisión no midió Core Web Vitals, contraste completo, entrega de contacto, autenticación ni descargas. La biblioteca sí completó su carga; no se clasificó el estado temporal Cargando como fallo. Reportes requiere contraseña; esa protección es un comportamiento legítimo, no un error.

Observaciones menores: título de video genérico, donación sin acción clara desde portada, copyright 2024 y formulario con gran espacio vacío. El año del pie no prueba abandono; los textos y destinos necesitan verificación independiente.

## Decisiones de continuidad

La prioridad de ambos públicos ya fue confirmada. Para el siguiente paso quedan dos decisiones concretas:

1. Tras observar el peso del banner y las piezas gráficas, definir dirección visual: **institucional y cercana**, **editorial y sobria** o **dinámica con énfasis en eventos**.
2. Para reducir primero la fricción del directorio, definir la primera entrega: **Inicio + directorio**, **Inicio + institucionales** o **base técnica con contenido mínimo revisado**.

El alcance actual es investigación: ninguna de esas alternativas se ha implementado. Después de escoger la primera superficie, la secuencia sugerida es definir estructura con `$impeccable shape`, construir con el stack acordado, revisar adaptación/accesibilidad y cerrar con `$impeccable polish`.
