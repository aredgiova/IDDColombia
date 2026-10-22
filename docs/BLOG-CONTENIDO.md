# Blog: contenido, procedencia y decisiones de migración

Consulta: 16 de octubre de 2026 (America/Bogota). Fuente principal: [Blog de la Iglesia de Dios en Colombia](https://www.iglesiadedioscolombia.com/blog). El índice público contiene tres artículos. Se consultaron también sus páginas individuales y su JSON-LD público; no se utilizaron cuentas, contenido privado ni APIs administrativas.

El contenido estructurado vive en `src/data/blog.ts`. Las afirmaciones y los párrafos sustantivos se conservaron; la optimización organiza la lectura, mejora metadatos y retira del cuerpo público las indicaciones editoriales inconclusas que ya estaban publicadas en la fuente. Estas últimas se conservan completas en `editorialNotes` para mantener trazabilidad.

## Inventario y rutas

| Artículo original | Nueva ruta | Fuente |
| --- | --- | --- |
| La Iglesia de Dios Un espacio de encuentro y transformación | `/blog/iglesia-de-dios-encuentro-transformacion` | [Artículo original](https://www.iglesiadedioscolombia.com/post/la-iglesia-de-dios-un-espacio-de-encuentro-y-transformaci%C3%B3n) |
| La Juventud: Un futuro lleno de esperanza | `/blog/juventud-colombiana-esperanza` | [Artículo original](https://www.iglesiadedioscolombia.com/post/la-juventud-un-futuro-lleno-de-esperanza) |
| La Familia: Un pilar fundamental en la sociedad colombiana | `/blog/familia-sociedad-colombiana` | [Artículo original](https://www.iglesiadedioscolombia.com/post/1-la-familia-un-pilar-fundamental-en-la-sociedad-colombiana) |

Los tres artículos se atribuyen al alias publicado **iglesiadediosonlie**, con perfil fuente `https://www.iglesiadedioscolombia.com/profile/iglesiadediosonlie/perfil`. No se corrigió la grafía del alias ni se le asignó un nombre personal inventado.

Las rutas antiguas se conservan en `legacyPath`, incluida la tilde de `transformación`. Los slugs nuevos son ASCII, breves y descriptivos. La configuración de redirecciones debe llevar cada ruta anterior a su equivalente nuevo, sin enviar todas al índice.

## Fechas comprobadas

Todas las páginas muestran **13 feb 2024** como publicación. El artículo de juventud muestra además **Actualizado: 19 feb 2024**. Las horas siguientes proceden del JSON-LD `BlogPosting` de cada página, consultado directamente:

| Artículo | `datePublished` de la fuente | `dateModified` de la fuente | Tratamiento |
| --- | --- | --- | --- |
| Iglesia | `2024-02-13T20:16:56.046Z` | `2024-02-13T20:16:56.046Z` | Se conserva `publishedAt`; `modifiedAt` omitido por ser idéntico. |
| Juventud | `2024-02-13T20:14:42.113Z` | `2024-02-19T21:35:00.756Z` | Se conservan ambos valores. |
| Familia | `2024-02-13T20:13:27.114Z` | `2024-02-13T20:13:47.370Z` | Se conservan ambos valores; la diferencia de 20 segundos no requiere una segunda fecha visible. |

No se sustituyeron estas fechas por la fecha de migración ni se fabricó una actualización reciente.

## Optimización editorial y SEO

- Un título visible por artículo, con mayúsculas de oración. En Iglesia se añadió el signo de dos puntos que faltaba entre el nombre y el subtítulo.
- Se eliminó el subtítulo interno de Iglesia que repetía el título principal. Las etiquetas «Introducción» se integran en el primer párrafo, sin crear un encabezado vacío o redundante.
- La palabra «Introducción» del artículo Familia estaba partida como «I» + imagen + «ntroducción». Se corrigió su estructura retirando esa etiqueta, sin cambiar el párrafo introductorio.
- Los encabezados descriptivos H2 sustituyen las etiquetas en negrita: «Ministerios de la Iglesia de Dios», «Valores cristianos para los jóvenes», «Liderazgo juvenil en la comunidad» y «Principios bíblicos para fortalecer la familia».
- Las listas de ministerios, valores, actividades y principios permanecen como listas semánticas. No se añadieron prestaciones, estadísticas, promesas ni versículos que no estuvieran en el original.
- Se prepararon extractos y descripciones únicos, basados en el contenido. Los temas editoriales nuevos —Vida de iglesia, Juventud y Familia— ayudan a orientar la lectura; no se presentan como categorías históricas de Wix.
- Los textos alternativos describen lo que aparece en cada imagen. No atribuyen a las personas retratadas una ubicación, identidad o pertenencia a una congregación no verificadas.
- Los tiempos de lectura se recalcularon sobre el cuerpo público a aproximadamente 200 palabras por minuto, redondeando hacia arriba y con mínimo de un minuto.

| Artículo | `seoTitle` | Caracteres | Caracteres de descripción | Palabras públicas con encabezados | Lectura |
| --- | --- | ---: | ---: | ---: | ---: |
| Iglesia | Iglesia de Dios: encuentro, fe y transformación | 47 | 155 | 156 | 1 min |
| Juventud | Juventud colombiana: valores, liderazgo y esperanza | 51 | 159 | 258 | 2 min |
| Familia | La familia en Colombia: principios bíblicos para el hogar | 57 | 154 | 157 | 1 min |

Estos metadatos son propuestas de presentación de resultados y redes sociales; no garantizan posiciones ni el fragmento que elegirá un buscador.

## Notas editoriales conservadas fuera del cuerpo público

Las fuentes no contienen testimonios reales en estas secciones. Contienen instrucciones sobre testimonios que podrían añadirse. Publicarlas como testimonios completados resultaría engañoso; inventarlos también. Se conserva su texto íntegro en el modelo y aquí:

**Iglesia — Testimonios**

> Se pueden incluir historias de personas que han encontrado esperanza, apoyo y transformación en la Iglesia de Dios.

**Juventud — Testimonios**

> Se pueden incluir historias de jóvenes colombianos que han impactado positivamente su entorno a través de su fe. Estas historias pueden mostrar cómo la participación en los programas de la Iglesia de Dios ha transformado sus vidas y les ha dado la oportunidad de ser líderes en su comunidad.

**Familia — Testimonios**

> En esta sección se pueden incluir historias inspiradoras de familias colombianas que han experimentado transformación a través de la fe. Estas historias pueden mostrar cómo la aplicación de los principios bíblicos ha fortalecido sus relaciones familiares y ha traído bendición a sus hogares.

**Familia — Recursos**

> Se pueden ofrecer recursos como artículos, videos y consejos prácticos para la crianza de los hijos, la comunicación efectiva y la resolución de conflictos. Estos recursos pueden ser de gran ayuda para las familias que buscan fortalecer sus relaciones.

Estas notas pueden servir a una futura ampliación editorial con material aprobado por la iglesia. La nueva página no anuncia esos testimonios ni materiales como disponibles.

## Imágenes originales

Las tres imágenes son las vinculadas por los artículos originales. No se migró el banner de campaña general del sitio. Ninguna de estas imágenes tenía un pie de foto o un crédito específico visible en la página pública; no se inventaron.

| Archivo local | Imagen comprobada | Dimensiones locales | Tamaño | Presentación |
| --- | --- | --- | ---: | --- |
| `public/images/blog/iglesia-de-dios-colombia-logo.png` | Logotipo horizontal negro con transparencia, Iglesia de Dios en Colombia | 1446 × 366 | 31.434 bytes | `contain`, fondo claro, sin recortar el logotipo. |
| `public/images/blog/juventud-esperanza.jpg` | Cuatro jóvenes con cuadernos y mochilas | 1600 × 1127 | 455.353 bytes | Fotografía; admite `cover`. |
| `public/images/blog/familia-colombiana.jpg` | Familia reunida en una celebración con piñata | 1600 × 1200 | 429.163 bytes | Fotografía; admite `cover`. |

Fuentes exactas:

- [Logotipo del artículo Iglesia](https://static.wixstatic.com/media/bb8a41_a93f1eb1af8145e2950486330f28c113~mv2.png). Se conservó el PNG original.
- [Imagen original de Juventud](https://static.wixstatic.com/media/11062b_2a04c76e256b49a284225d622bfc5f08~mv2.jpg). El original declarado mide 5067 × 3571. Se descargó su derivado público de Wix con ajuste proporcional a 1600 px y calidad 85: `.../v1/fit/w_1600,h_1600,q_85/11062b_2a04c76e256b49a284225d622bfc5f08~mv2.jpg`.
- [Imagen original de Familia](https://static.wixstatic.com/media/11062b_cfe8f95b326d48148ba14cfb8ef7bbf0~mv2.jpg). El original declarado mide 5000 × 3750. Se descargó su derivado público de Wix con ajuste proporcional a 1600 px y calidad 85: `.../v1/fit/w_1600,h_1600,q_85/11062b_cfe8f95b326d48148ba14cfb8ef7bbf0~mv2.jpg`.

Los JPG se guardaron localmente para evitar dependencia de Wix en la nueva página. El campo `image.sourceUrl` conserva la procedencia. El nombre del archivo Familia describe el tema del artículo; no implica haber verificado el país de la fotografía.

## Verificación de contenido

Se compararon automáticamente todos los párrafos, elementos de lista y notas editoriales del modelo con los párrafos `data-ricos-paragraph` de las tres páginas fuente. La comparación solo elimina etiquetas HTML y normaliza entidades y espacios; no reescribe texto.

| Artículo | Fragmentos comprobados | Coincidencias exactas normalizadas | Faltantes |
| --- | ---: | ---: | ---: |
| Iglesia | 7 | 7 | 0 |
| Juventud | 12 | 12 | 0 |
| Familia | 9 | 9 | 0 |

Los encabezados reformulados se excluyeron deliberadamente de esta comprobación textual y se documentaron arriba. También se verificó que las tres rutas locales de imagen existen y que las dimensiones declaradas coinciden con los archivos. El modelo no usa HTML crudo ni carga contenido remoto en tiempo de ejecución.

Los contadores de visitas, «me gusta», comentarios, formularios de comentar y datos de sesión no forman parte del contenido editorial migrado. No se han simulado cifras ni comentarios.
