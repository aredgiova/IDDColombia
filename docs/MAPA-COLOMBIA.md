# Geometría del mapa interactivo de Colombia

El mapa usa fronteras geográficas reales de las 32 entidades departamentales y Bogotá D.C. No representa la ubicación de cada congregación ni permite inferir estadísticas de membresía.

## Fuente y licencia

- Fuente cartográfica: **© OpenStreetMap contributors**, procesada por Wambacher y distribuida por **geoBoundaries**.
- Dataset: `COL-ADM1-13589884`, datos representados en **2017**, compilación de geoBoundaries de diciembre de 2023.
- [Metadatos de geoBoundaries](https://www.geoboundaries.org/api/current/gbOpen/COL/ADM1/).
- [TopoJSON fijado al commit `9469f09`](https://media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/COL/ADM1/geoBoundaries-COL-ADM1.topojson).
- SHA-256 del archivo de origen: `77c32f7d9b0f31bb510e0c03f83f79be0331db4cd3ea833b6ed7c84b4c55fad2`.
- Licencia de los datos de origen y de esta adaptación cartográfica: [Open Database License 1.0 (ODbL)](https://opendatacommons.org/licenses/odbl/1-0/). [Atribución de OpenStreetMap](https://www.openstreetmap.org/copyright).

La atribución visible junto al mapa debe enlazar a la página de copyright: **© OpenStreetMap contributors · geoBoundaries**. La base cartográfica adaptada se distribuye públicamente en `/data/colombia-map.json` bajo ODbL 1.0, con sus metadatos de licencia. Esta licencia corresponde a los datos cartográficos, no a las estadísticas de iglesias ni a toda la aplicación.

## Transformaciones

1. Decodificación de los arcos TopoJSON y asignación de códigos DANE departamentales de dos dígitos.
2. Proyección equirectangular ajustada a 4° de latitud para el lienzo SVG `0 0 660 640`.
3. Simplificación Douglas–Peucker de cada arco compartido una sola vez, con tolerancia de 0,34 unidades de SVG; ambos lados de cada frontera conservan exactamente el mismo trazado.
4. Redondeo de coordenadas a una cifra decimal. Los puntos de etiqueta se buscan dentro del polígono de mayor superficie y se comprueba esa inclusión.
5. San Andrés, Providencia y Santa Catalina conservan sus siluetas geográficas reales en un recuadro esquemático ampliado al noroeste. San Andrés se amplía individualmente al suroeste del recuadro; Providencia y Santa Catalina se amplían juntas al noreste, preservando la relación entre esas dos islas. Los dos grupos usan escalas propias para que los contornos se puedan seleccionar y no representan su distancia entre sí ni al continente. La simplificación de sus contornos utiliza una tolerancia de 0,15 unidades de SVG.

No es cartografía oficial ni un mapa para medición. Su propósito es la selección visual de departamentos.

## Regeneración

```powershell
node scripts/generate-colombia-map.mjs
```

Si el archivo TopoJSON ya está descargado, puede regenerarse sin conexión:

```powershell
node scripts/generate-colombia-map.mjs C:/ruta/geoBoundaries-COL-ADM1.topojson
```

No requiere paquetes adicionales ni servicios cartográficos en tiempo de ejecución. El script verifica el hash de origen, los 33 códigos únicos y que los puntos de etiqueta estén dentro de sus regiones. Genera `public/data/colombia-map.json` y el adaptador tipado `src/data/colombia-map-paths.ts`.
