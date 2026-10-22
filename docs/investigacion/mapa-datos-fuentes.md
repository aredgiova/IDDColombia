# Fuentes y criterios para el mapa de Colombia

Consulta: **16 de octubre de 2026, America/Bogota**. Alcance: sitio público y documentos de investigación existentes. Sin iniciar sesión ni consultar reportes privados.

## Directorio público

Fuente: [Iglesias de Dios en Colombia](https://www.iglesiadedioscolombia.com/iglesiasdedios). Contiene diez fichas en ocho ciudades; coincide con `src/data/churches.ts`. **No constituye un censo nacional**.

| Departamento o distrito | Fichas | Ciudades |
| --- | ---: | --- |
| Antioquia | 1 | Medellín |
| Atlántico | 3 | Barranquilla; Soledad (2) |
| Bogotá D. C. | 1 | Bogotá |
| Cauca | 2 | Piendamó |
| Córdoba | 1 | Planeta Rica |
| Magdalena | 1 | Santa Marta |
| Norte de Santander | 1 | Cúcuta |

Reseñas con cifras: Origen, Barranquilla, declara 23 miembros activos y 34 asistentes. Soledad, Calle 53A1, declara aproximadamente 40 miembros. Ambas carecen de fecha de corte. Cúcuta describe asistencia de 70 niños, 34 adultos y 15 jóvenes al 31/01/2024. Loma Corta, Piendamó, describe 70 asistentes dominicales; además menciona una iglesia hija en Santa Helena.

## Decisiones de implementación

- Contar **fichas publicadas**, por identificador de congregación. Las sedes de una misma ciudad permanecen separadas.
- Rotular la cifra de iglesias como “Iglesias en el directorio”. No presentar diez como total nacional.
- El acumulado aritmético de membresía publicada en Atlántico es **aproximadamente 63**, con cobertura de solo dos de las tres fichas. Si se muestra, acompañarlo de “Miembros publicados”, “Dato parcial de 2 iglesias” y “Sin fecha de corte”. No describirlo como membresía total departamental ni como cifra vigente de 2026.
- La asistencia no equivale a membresía. No sumar las cifras de Cúcuta, Piendamó ni los 34 asistentes de Origen al campo de miembros.
- Usar `null` para membresía desconocida. La ausencia de fichas en un territorio significa “Sin registros publicados”, nunca prueba de ausencia de congregaciones.
- No crear una ficha adicional para Santa Helena ni contar menciones históricas como sedes vigentes sin información que permita identificar y deduplicar la congregación.
- Incluir Bogotá D. C. como territorio separado de Cundinamarca. La fuente rotula la ficha “BOGOTÁ CUNDINAMARCA”, pero su ciudad y dirección corresponden a Bogotá. La clasificación DANE separa los códigos 11 y 25: [DIVIPOLA](https://www.dane.gov.co/index.php/sistema-estadistico-nacional-sen/normas-y-estandares/nomenclaturas-y-clasificaciones/nomenclaturas/codificacion-de-la-division-politica-administrativa-de-colombia-divipola).

## Otras fuentes revisadas y límites

- [Historia institucional](https://www.iglesiadedioscolombia.com/historia): menciona presencia en más lugares que el directorio. Sus cifras de 8,6 millones de miembros y más de 37.000 congregaciones son mundiales; no sirven para Colombia ni para departamentos.
- [Plantación de iglesias](https://www.iglesiadedioscolombia.com/plantaci%C3%B3n-de-iglesias): las 200 iglesias en cuatro años son una meta, no una medición de sedes existentes.
- [Conexión 20/30](https://www.iglesiadedioscolombia.com/conexi%C3%B3n-20-30): plantea duplicar membresía, pero no publica una base departamental.
- El inventario local identifica `/estadisticas-iglesia`, `/copia-de-estadisticas-iglesia`, `/iglesias-datos` y `/miembros` como área operativa, sin bloques de contenido público extraídos. No se utilizaron para obtener estadísticas.

No se encontró una tabla pública con totales completos y vigentes de iglesias y miembros por departamento. Para convertir el mapa en un censo se necesita una exportación institucional agregada con territorio, iglesias, miembros, fecha de corte y responsable de validación.
