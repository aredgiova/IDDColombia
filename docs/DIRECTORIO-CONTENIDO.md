# Contenido del directorio de iglesias

Fuente principal: [Iglesias de Dios en Colombia](https://www.iglesiadedioscolombia.com/iglesiasdedios). La extracción de `investigacion/captura-publica.json` se realizó el 16 de octubre de 2026, hora de Colombia (17 de octubre en UTC). El listado público se volvió a consultar durante esta implementación y conserva los mismos diez registros. Los datos describen lo publicado; no se ha confirmado su vigencia por teléfono ni por correo.

El módulo `src/data/churches.ts` contiene **10 congregaciones en 8 ciudades**. No es un censo nacional ni permite afirmar que estas sean todas las iglesias de la organización.

## Correspondencia de registros

Se conserva el orden de la fuente. Las dos congregaciones de Piendamó y las dos de Soledad son registros diferentes por sus direcciones y responsables. La ciudad normalizada se utiliza para filtrar; nunca para identificar de manera única un registro.

| ID estable | Ciudad | Dirección publicada | Nombre usado |
| --- | --- | --- | --- |
| `bogota-tintal` | Bogotá | Calle 66 sur # 81-59 | Iglesia de Dios Tintal |
| `barranquilla-origen` | Barranquilla | Calle 51 #8-12 Santuario | Iglesia Origen |
| `cucuta-apasionados` | Cúcuta | Calle 36 No 2e-04 | Iglesia de Dios Apasionados por su presencia |
| `medellin-manrique` | Medellín | Cra. 45 # 84-39 Manrique | Iglesia de Dios |
| `piendamo-loma-corta` | Piendamó | Vereda Loma corta - piendamo (cauca) | Iglesia de Dios Monte Hored |
| `piendamo-san-pedro` | Piendamó | Vereda San Pedro | Iglesia de Dios Nueva Vida San Pedro |
| `planeta-rica-restauracion` | Planeta Rica | Calle 23a #5a-50 | Iglesia de Dios Restauración |
| `santa-marta-mamatoco` | Santa Marta | Diagonal 33 # 7: 26: mamatoco | Iglesia de Dios |
| `soledad-carrera-13` | Soledad | KR 13 #53-27 | Iglesia de Dios |
| `soledad-calle-53a1` | Soledad | Calle 53A1 No 15D-09 | Iglesia de Dios |

Los nombres específicos proceden de la reseña de cada registro. Donde el listado no aporta un nombre local, se utiliza el nombre institucional «Iglesia de Dios». No se han inventado nombres de congregaciones a partir del barrio o de los pastores.

## Normalizaciones editoriales

- Ciudades: «BOGOTÁ CUNDINAMARCA» pasa a «Bogotá»; «Cucúta» a «Cúcuta»; «Medellin» a «Medellín»; «Piendamo» y «Piendamó» a «Piendamó»; «Planeta rica» a «Planeta Rica». Esto no fusiona registros ni cambia su dirección.
- Direcciones: mayúsculas y espacios consistentes, comas entre dirección y barrio y expansión de «KR» a «Carrera». Se conservan numeraciones y letras. La puntuación ambigua de Santa Marta permanece como está publicada; no se transforma por conjetura en otra dirección.
- Responsables: se ajustan mayúsculas y los separadores `&`, `/` y comas a «y». No se corrigen nombres por intuición. Por ejemplo, se conserva «Elian P. Vásquez» en el contacto de Medellín aunque su reseña use «Eliana Vásquez».
- Teléfonos: se añade el indicativo colombiano `+57` a los diez números nacionales de diez dígitos. Se guardan sin espacios para `tel:`. No se asume que los números tengan WhatsApp.
- Horarios: se normalizan puntuación, «a. m.» y «p. m.», conservando todos los días, horas y actividades publicados. «12M» en Soledad se interpreta en su notación original como mediodía y se presenta «12:00 m.». No se añaden horas donde no existen.
- Historias: se redactan resúmenes breves de lo publicado, conservando fechas absolutas cuando corresponden. Se omiten cantidades de asistentes y antigüedades relativas como «hace 19», «tenemos 3 años» o «después de 40 años», que no pueden presentarse como actuales. No se convierten esos textos en años de fundación calculados.
- `sourceUrl` apunta al listado para los diez registros, porque esa página reúne sus datos completos. No se asigna a la segunda congregación de Soledad una ficha de detalle que corresponde a la primera.

## Datos que requieren confirmación

1. **Santa Marta:** el correo publicado es `diazeduardocaba@gomeil.com`. Se conserva exactamente y se marca `emailNeedsConfirmation: true`; no se cambia a Gmail por adivinación. También conviene confirmar la puntuación de la dirección y el horario dominical, que no figura en el campo de horarios aunque la reseña mencione visitas los domingos.
2. **Soledad, Carrera 13:** solo se publican días de reunión: miércoles, sábados y domingos. No se inventan horas.
3. **Piendamó, Loma Corta:** la reseña escribe «Monte Hored». Se conserva esa grafía. La foto local muestra «Monte Horeb», pero está asociada a la otra ficha de Piendamó; esta discrepancia impide utilizarla como prueba del nombre o asignarla con seguridad.
4. **Medellín:** el contacto y la reseña tienen variantes del nombre de una responsable. Se conserva el texto del campo de contacto, «Elian P. Vásquez».

## Fotografías y atribución

Solo se adjuntan al modelo fotografías locales con correspondencia sustentada por la ficha, según `ACTIVOS-UTILIZADOS.md`:

- Bogotá: `/images/comunidad-bogota.webp` (1400 × 1050), publicada en [Bogotá Cundinamarca](https://www.iglesiadedioscolombia.com/items/bogot%C3%A1-cundinamarca).
- Cúcuta: `/images/iglesia-cucuta.webp` (1400 × 787), publicada en [Cúcuta](https://www.iglesiadedioscolombia.com/items/cuc%C3%BAta).

No se asigna `/images/comunidad-piendamo.webp` a ninguno de los dos registros. La [ficha con tilde](https://www.iglesiadedioscolombia.com/items/piendam%C3%B3-) identifica Vereda San Pedro y Alida Zambrano Chaguendo, pero la fotografía muestra un letrero «Monte Horeb». La [ficha sin tilde](https://www.iglesiadedioscolombia.com/items/piendamo-) corresponde a Loma Corta, Dagoberto Causaya y Helen Damay Camayo. El nombre de archivo o una imagen visualmente parecida no resuelven esa atribución.

Tampoco se utiliza la imagen genérica repetida por Wix para simular fotografías propias de las congregaciones que no tienen un activo local verificado.

## Límites funcionales del contenido

El directorio puede ofrecer llamadas, los correos publicados y búsquedas de dirección en un proveedor de mapas. No existen coordenadas geográficas verificadas en estos datos; una búsqueda en mapas no equivale a una ubicación exacta confirmada. Los horarios y contactos deben validarse con cada congregación antes de sustituir el directorio público actual.
