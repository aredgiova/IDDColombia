# Assessment B — Evidencia técnica del sitio público

Fecha: 2026-10-16 America/Bogota / 2026-10-17 UTC. Target: https://www.iglesiadedioscolombia.com/. Slug obtenido con `critique-storage.mjs`: `www-iglesiadedioscolombia-com`.

Evaluación independiente B, realizada sin leer Assessment A. Se inspeccionaron seis rutas en una pestaña propia del navegador IAB: inicio, Iglesias, Contáctanos, Reportes, Credencialización y Biblioteca. Se leyeron DOM, árbol accesible, metadatos y capturas. No se enviaron formularios, se inició sesión ni se ejecutaron transacciones. No se cambió el viewport; las capturas de B son de escritorio. La prueba móvil pertenece a A.

## Hallazgos confirmados prioritarios

| Prioridad | Hallazgo | Evidencia concreta | Implicación para renovación |
|---|---|---|---|
| P1 | Las redes sociales del pie conducen a Wix | En inicio y todas las interiores inspeccionadas: Facebook `https://www.facebook.com/WixEspanol`; Instagram `https://instagram.com/wix`. En la sección de bienvenida sí están las redes institucionales correctas. | Corregir destinos y centralizar datos de contacto/redes para evitar divergencia entre componentes. |
| P1 | Cuatro accesos diferentes se anuncian como «Chat» | Inicio, sección «Nuestra Iglesia Online»: enlaces a `/account/mi-cuenta`, `/biblioteca`, `/contáctanos` y `/reportes` tienen texto/aria-label «Chat», aunque visualmente acompañan Comunidad, Biblioteca, Escríbenos y Reportes. | Dar a cada enlace un nombre accesible que describa su destino. |
| P1 | Directorio sin filtros ni acciones de ubicación/teléfono | `/iglesiasdedios`: diez registros visibles; en `main` solamente se detectaron diez enlaces `mailto:`. Sin campos de filtro, selector de ciudad, búsqueda de iglesias, enlaces `tel:` ni enlaces de mapas en ese contenido. Cada ficha presenta ciudad, dirección, pastor, email, teléfono, horario y reseña. | La tarea de encontrar una iglesia requiere recorrer una lista larga; convertir registros en datos estructurados con filtros y acciones útiles, tras validar exactitud. No se afirma que diez sea el total nacional. |
| P2 | Jerarquía de encabezados inadecuada | Inicio: 0 H1, 6 H2, 3 H3. Directorio: 1 H1 y 80 H2; direcciones, teléfonos, correos, horarios y reseñas completas son H2. | Definir un H1 por página y encabezados solo para títulos; usar texto, listas y fichas para los datos. |
| P2 | Textos alternativos basados en archivos o datos ajenos a la imagen | Inicio: `logo-iglesia.png`, `Lanzamiento Latin Fest.webp`, `Sin título (Post de Facebook) (1).png`. Directorio: diez imágenes con un número de teléfono como alt y diez logos con `logo-iglesia.png`. Credencialización: `campaña examen segundo ciclo (9).png`, `Diseño sin título (20)_edited.jpg` y otros nombres de archivo. | Redactar alternativas según función de cada imagen; las piezas con texto necesitan contenido equivalente accesible. |
| P2 | Mezcla de idiomas y etiquetas genéricas | Inicio: Login, All Videos, Search videos y Play Video conviven con español. Biblioteca: nombres accesibles `select all checkbox`, `sort by menu`, `more actions`, pese a títulos españoles. Credencialización: cuatro enlaces «Inscribete Aqui» para cuatro niveles distintos. | Localizar interfaz y describir acciones por su objeto: inscripción de Obrero Nacional, Exhortador, etc. |
| P2 | Metadatos de interiores incompletos | En DOM de `/iglesiasdedios`, `/contáctanos` y `/about-1` no se encontró `meta[name=description]`. Inicio sí tiene título, descripción y canonical; no se encontró `og:image` ni `twitter:image` en su lista de metadatos. | Preparar títulos/descripciones/social image por página y conservar redirecciones para URLs existentes. |
| P2 | Contacto móvil poco directo | En inicio no existen enlaces `tel:` ni `mailto:`; el pie presenta los datos como texto. Contacto tiene dos `mailto:`, pero el teléfono y WhatsApp son texto. | Añadir acciones llamar, escribir por WhatsApp y correo, confirmando números/destinos con el responsable. |
| P2 | Formularios con autocompletado desactivado | Contacto: nombre `type=text`, email `type=email` y teléfono `type=tel` tienen `required` y `autocomplete=off`; mensaje también obligatorio. Todos poseen etiqueta accesible. | Conservar validación y etiquetas y habilitar autocomplete semántico. Confirmar necesidad de teléfono obligatorio. |
| P2 | Slugs heredados no describen el contenido | Credencialización usa `/about-1`; menú enlaza Ruta Estratégica a `/copia-de-organigrama` y Calendario 2026 a `/copia-de-historia`. | Mantener mapa URL antigua → nueva con redirecciones permanentes; no perder enlaces existentes. |

## Inventario funcional observado

- **Inicio**: encabezado con logo, Reportes, Login y navegación; banner Latinfest Cartagena 2026; bienvenida/historia; redes institucionales; canal de video «All Videos» con anuncio de 03:35; accesos a iglesias, comunidad, biblioteca, contacto y reportes; texto sobre compartir y apoyar mediante donación; tres entradas de blog de febrero de 2024; pie con búsqueda, contactos y política de datos. En la lista de enlaces de inicio no aparece un enlace explícito para donar: no inventar una pasarela existente.
- **Iglesias** (`/iglesiasdedios`): listado público de diez registros cargados en la vista inspeccionada, con ciudad, dirección, responsables, correo, teléfono, horarios y reseña. Correos son enlaces. Se deben validar contenido y datos de contacto antes de republicar.
- **Contacto** (`/contáctanos`): formulario de nombre, email, teléfono y mensaje; botón Enviar mensaje; dirección física, teléfono/WhatsApp y dos correos institucionales. Se inspeccionó sin rellenar ni enviar.
- **Reportes** (`/reportes`): pantalla «Solo para invitados», entrada Contraseña, botón Listo y botón Cerrar. Es una dependencia de acceso restringido. No se accedió al contenido ni se ensayaron contraseñas. La protección no es un fallo funcional por sí misma.
- **Credencialización** (`/about-1`): explicación institucional, cuatro niveles de inscripción con Google Forms, testimonios y piezas gráficas. Los destinos observados son `https://forms.gle/qhanvKg4GFYa4wnSA` (Obrero Nacional), `https://forms.gle/wNQYkHqjN79h6FEe7` (Ministro Exhortador), `https://forms.gle/xWsjhm9bzmdqapZe8` (Ministro Ordenado), `https://forms.gle/wmmU2QpmZ6aS7XuP8` (Obispo Ordenado). No se abrieron ni enviaron los formularios.
- **Biblioteca** (`/biblioteca`): widget Archivos compartidos con búsqueda, ordenación, casillas, favoritos, vistas, colaboradores y acciones. Tras estado Cargando aparecen carpetas Logos (19 ítems), Credencialización (2 ítems) y Educación (FETP) (2 ítems), fechadas 17 dic 2024. Se confirma que la carga terminó; no catalogar el estado transitorio como fallo. No se descargaron archivos ni se modificaron favoritos.
- **Navegación ampliada del inicio**: Historia, Misión y Visión, Organigrama, Ruta Estratégica, Calendario 2026, Declaración de FE, Iglesia internacional; trece enlaces de Ejes; Biblioteca y Blog. Son rutas descubiertas mediante DOM, no una certificación de que todas funcionen.

## Semántica y SEO: datos de inicio

- `html lang=es`, viewport `width=device-width, initial-scale=1`, generador `Wix.com Website Builder`.
- Título: `Iglesia de Dios en Colombia | Comunidad Cristiana`.
- Descripción: «En Iglesia de Dios, queremos que te sientas como en casa. Aquí encontrarás una comunidad cristiana de hermanos que te apoyará en tu camino espiritual. ¡Ven a visitarnos!».
- Canonical: `https://www.iglesiadedioscolombia.com`.
- Open Graph: título, descripción, URL, site_name y type presentes. Twitter card `summary_large_image` con título/descripción. Sin `og:image`/`twitter:image` en DOM inspeccionado.
- JSON-LD: dos objetos WebSite (uno con SearchAction) y un VideoObject para el anuncio. No se concluye que la duplicidad sea un error; conviene consolidar durante migración.
- Landmarks presentes: header, nav con nombre «Sitio», main y footer. Existe botón «Ir al contenido principal». Desplegables tienen botones y nombres accesibles («Más páginas de Quiénes somos», «Más páginas de Ejes»). Son fortalezas a conservar.
- 19 elementos `img`: todos tienen atributo alt; 1 alt vacío y 3 claramente basados en nombres de archivo. No se considera el alt vacío un error sin conocer si la imagen es decorativa.
- DOM serializado de la página: 1.163.757 caracteres; 81 elementos script. Son indicadores de complejidad del documento, **no bytes transferidos ni una medición de rendimiento**. No se midieron Core Web Vitals, Lighthouse, TTFB, consumo de red, contraste o navegación completa por teclado.

## Detector Impeccable: alcance y resultado

Para el URL remoto se omitió el CLI directo según el playbook. Como señal alternativa, se ejecutó realmente el detector sobre la copia HTML de **inicio** obtenida por la recolección pública del agente principal:

`node C:\Users\User\.agents\skills\impeccable\scripts\detect.mjs --json .\docs\investigacion\fuentes-html\99c56c1e7358.html`

Salida completa: `docs/investigacion/detector-home.json`. Código de salida del detector: **2**. Un archivo analizado. **25 advertencias**, ninguna severidad error en esta salida.

| Regla | Cantidad | Líneas de la copia HTML |
|---|---:|---|
| border-accent-on-rounded | 2 | 279 |
| overused-font | 16 | 109, 111, 178, 179, 182, 278, 288, 292, 293, 297, 803, 807, 808, 812, 1562, 2159 |
| layout-transition | 5 | 278 (4), 279 (1) |
| dark-glow | 1 | 278 |
| marquee | 1 | 0 (sin ubicación precisa) |

**Interpretación y falsos positivos:** estos son matches estáticos, no 25 defectos visuales confirmados. Varias líneas pertenecen a CSS empaquetado de Wix: 109/111 a `wix-thunderbolt`, 178 a `editor-elements-library`, 279 a `communities-blog-ooi/.../PostListViewerWidget.min.css`; 803 es una declaración `@font-face`. La presencia de una definición de fuente, una animación o un estilo en una librería no demuestra que se use de forma visible en el sitio. Las 16 alertas de fuentes incluyen Arial, Helvetica y Open Sans; no justifican por sí solas sustituir la identidad tipográfica. Los bordes/glow/marquee no se confirmaron en DOM ejecutado y deben quedar como señales no verificadas. Las transiciones de dimensiones son candidatos a revisión de rendimiento, no un diagnóstico de jank.

## Notas de ejecución y límites

- Independencia: B no leyó la evaluación A. Se comunicó únicamente estado de progreso hasta recibir confirmación de que A había concluido.
- Ignore list: no existía `.impeccable/critique/ignore.md` cuando B lo verificó.
- Browser: pestaña propia IAB, mantenida en segundo plano; inspección por lectura DOM, árbol accesible y capturas.
- Overlay: **no se inyectó ni existe overlay visible**. La API documenta `playwright.evaluate` como exclusivamente de lectura. No se intentó mutar `document.title` ni añadir scripts por un canal alternativo.
- Servidor local: no se inició, por lo que no quedó proceso que detener.
- CLI: ejecutado sobre copia local de inicio, como fallback de alcance limitado. No equivale al detector ejecutándose sobre el sitio renderizado y sus estilos calculados.
- Descarga independiente de B: el primer intento quedó bloqueado por el sandbox de red; el intento autorizado recibió «Checking Your Request» y no guardó HTML. Se usó posteriormente la copia pública facilitada por el agente principal.
- Limpieza: un escaneo inicial de la carpeta se completó mientras el principal acotaba la recolección. Su salida fue eliminada **sin leer hallazgos** y se repitió únicamente para inicio. Solo se conserva `detector-home.json`. No se incluyen perfiles de usuarios en este informe.
- Consola: se observó una advertencia de `react-i18next` en la biblioteca. No se utiliza como prueba de fallo funcional; la biblioteca completó la carga.
- No probado: envío/entrega de contacto, autenticación, contenido protegido de reportes, reproducción íntegra de video, respuestas de formularios externos, descargas de la biblioteca, resultados de búsqueda y exhaustividad del directorio. Estas dependencias requieren decisiones y pruebas posteriores durante la migración.
