/**
 * Rebuild the public SVG geometry, without third-party/runtime dependencies.
 * Run: node scripts/generate-colombia-map.mjs [local-source.topojson]
 * Source and derivative data: OpenStreetMap contributors, ODbL 1.0.
 * See docs/MAPA-COLOMBIA.md for provenance, attribution and transformations.
 */
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceUrl = "https://media.githubusercontent.com/media/wmgeolab/geoBoundaries/9469f09/releaseData/gbOpen/COL/ADM1/geoBoundaries-COL-ADM1.topojson";
const sourceSha256 = "77c32f7d9b0f31bb510e0c03f83f79be0331db4cd3ea833b6ed7c84b4c55fad2";
const source = process.argv[2]
  ? await readFile(resolve(process.argv[2]))
  : await (async () => {
    const response = await fetch(sourceUrl);
    if (!response.ok) throw new Error(`Download failed: ${response.status}`);
    return Buffer.from(await response.arrayBuffer());
  })();
if (createHash("sha256").update(source).digest("hex") !== sourceSha256) {
  throw new Error("The geographic source does not match the pinned version.");
}
const topology = JSON.parse(source.toString("utf8"));
const geometries = topology.objects.COLADM1gbOpen.geometries;
const codes = {
  "CO-ANT": "05", "CO-ATL": "08", "CO-DC": "11", "CO-BOL": "13",
  "CO-BOY": "15", "CO-CAL": "17", "CO-CAQ": "18", "CO-CAU": "19",
  "CO-CES": "20", "CO-COR": "23", "CO-CUN": "25", "CO-CHO": "27",
  "CO-HUI": "41", "CO-LAG": "44", "CO-MAG": "47", "CO-MET": "50",
  "CO-NAR": "52", "CO-NSA": "54", "CO-QUI": "63", "CO-RIS": "66",
  "CO-SAN": "68", "CO-SUC": "70", "CO-TOL": "73", "CO-VAC": "76",
  "CO-ARA": "81", "CO-CAS": "85", "CO-PUT": "86", "CO-SAP": "88",
  "CO-AMA": "91", "CO-GUA": "94", "CO-GUV": "95", "CO-VAU": "97",
  "CO-VID": "99",
};
const inset = { x: 24, y: 44, width: 124, height: 142 };
const rawArcs = topology.arcs.map((arc) => {
  let x = 0;
  let y = 0;
  return arc.map(([dx, dy]) => {
    x += dx;
    y += dy;
    return [
      x * topology.transform.scale[0] + topology.transform.translate[0],
      y * topology.transform.scale[1] + topology.transform.translate[1],
    ];
  });
});
const polygonRefs = (geometry) => geometry.type === "Polygon" ? [geometry.arcs] : geometry.arcs;
const decodeRing = (indices, arcs) => indices.flatMap((index, i) => {
  const arc = index < 0 ? [...arcs[~index]].reverse() : arcs[index];
  return i ? arc.slice(1) : arc;
});
const coordinates = (geometry, arcs) => polygonRefs(geometry).map((rings) => rings.map((ring) => decodeRing(ring, arcs)));
const bounds = (points) => points.reduce((box, [x, y]) => [
  Math.min(box[0], x), Math.min(box[1], y), Math.max(box[2], x), Math.max(box[3], y),
], [Infinity, Infinity, -Infinity, -Infinity]);
const projection = (box, viewport) => {
  // Equirectangular projection, adjusted at Colombia's central latitude.
  const longitudeScale = Math.cos(4 * Math.PI / 180);
  const width = (box[2] - box[0]) * longitudeScale;
  const height = box[3] - box[1];
  const scale = Math.min(viewport.width / width, viewport.height / height);
  const x0 = viewport.x + (viewport.width - width * scale) / 2;
  const y0 = viewport.y + (viewport.height - height * scale) / 2;
  return ([x, y]) => [x0 + (x - box[0]) * longitudeScale * scale, y0 + (box[3] - y) * scale];
};
const mainland = geometries.filter((geometry) => geometry.properties.shapeISO !== "CO-SAP");
const islands = geometries.find((geometry) => geometry.properties.shapeISO === "CO-SAP");
const mainlandPoints = mainland.flatMap((geometry) => coordinates(geometry, rawArcs).flat(2));
const project = projection(bounds(mainlandPoints), { x: 75, y: 14, width: 560, height: 612 });
const islandPolygons = coordinates(islands, rawArcs);
// Separate scales make the real land outlines legible. Providencia and Santa
// Catalina remain together; San Andrés stays southwest of that group.
// This schematic inset intentionally does not preserve the distance between them.
const sanAndresPolygons = islandPolygons.filter((polygon) => bounds(polygon.flat())[3] < 13);
const providenciaPolygons = islandPolygons.filter((polygon) => bounds(polygon.flat())[3] >= 13);
const projectSanAndres = projection(bounds(sanAndresPolygons.flat(2)), { x: inset.x + 21, y: inset.y + 91, width: 24, height: 38 });
const projectProvidencia = projection(bounds(providenciaPolygons.flat(2)), { x: inset.x + 72, y: inset.y + 43, width: 24, height: 38 });

const squareDistanceToSegment = ([x, y], [ax, ay], [bx, by]) => {
  const dx = bx - ax;
  const dy = by - ay;
  const t = dx || dy ? Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy))) : 0;
  return (x - ax - t * dx) ** 2 + (y - ay - t * dy) ** 2;
};
const simplify = (points, tolerance = 0.34) => {
  if (points.length <= 2) return points;
  const keep = new Set([0, points.length - 1]);
  const stack = [[0, points.length - 1]];
  while (stack.length) {
    const [first, last] = stack.pop();
    let maxDistance = tolerance ** 2;
    let farthest = -1;
    for (let i = first + 1; i < last; i += 1) {
      const distance = squareDistanceToSegment(points[i], points[first], points[last]);
      if (distance > maxDistance) { maxDistance = distance; farthest = i; }
    }
    if (farthest !== -1) {
      keep.add(farthest);
      stack.push([first, farthest], [farthest, last]);
    }
  }
  return [...keep].sort((a, b) => a - b).map((index) => points[index]);
};
// Simplifying shared TopoJSON arcs once keeps both sides of every boundary equal.
const projectedArcs = rawArcs.map((arc) => simplify(arc.map(project)));
const projectedIslandPolygons = islandPolygons.map((polygon) => {
  const projectIsland = bounds(polygon.flat())[3] < 13 ? projectSanAndres : projectProvidencia;
  return polygon.map((ring) => simplify(ring.map(projectIsland), 0.15));
});
const signedArea = (ring) => ring.reduce((area, [x, y], i) => {
  const [previousX, previousY] = ring[(i + ring.length - 1) % ring.length];
  return area + previousX * y - x * previousY;
}, 0) / 2;
const ringContains = ([x, y], ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const contains = (point, polygon) => ringContains(point, polygon[0]) && !polygon.slice(1).some((ring) => ringContains(point, ring));
const distanceFromEdges = (point, polygon) => {
  let distance = Infinity;
  for (const ring of polygon) {
    for (let i = 1; i < ring.length; i += 1) distance = Math.min(distance, squareDistanceToSegment(point, ring[i - 1], ring[i]));
  }
  return contains(point, polygon) ? Math.sqrt(distance) : -Math.sqrt(distance);
};
const labelPoint = (polygons) => {
  const polygon = [...polygons].sort((a, b) => Math.abs(signedArea(b[0])) - Math.abs(signedArea(a[0])))[0];
  const box = bounds(polygon[0]);
  let best = polygon[0][0];
  let bestDistance = -Infinity;
  let searchBox = box;
  for (let pass = 0; pass < 4; pass += 1) {
    const dx = (searchBox[2] - searchBox[0]) / 24;
    const dy = (searchBox[3] - searchBox[1]) / 24;
    for (let x = 0; x <= 24; x += 1) {
      for (let y = 0; y <= 24; y += 1) {
        const point = [searchBox[0] + dx * x, searchBox[1] + dy * y];
        const distance = distanceFromEdges(point, polygon);
        if (distance > bestDistance) { best = point; bestDistance = distance; }
      }
    }
    searchBox = [best[0] - dx, best[1] - dy, best[0] + dx, best[1] + dy];
  }
  const rounded = best.map((value) => Math.round(value * 10) / 10);
  if (!contains(rounded, polygon)) throw new Error("Label point must be inside its department.");
  return rounded;
};
const format = (number) => String(Math.round(number * 10) / 10);
const mapPaths = geometries.map((geometry) => {
  const id = codes[geometry.properties.shapeISO];
  if (!id) throw new Error(`Missing DANE code: ${geometry.properties.shapeISO}`);
  const polygons = id === "88" ? projectedIslandPolygons : coordinates(geometry, projectedArcs);
  const path = polygons.flatMap((polygon) => polygon.map((ring) => `${ring.map(([x, y], i) => `${i ? "L" : "M"}${format(x)},${format(y)}`).join("")}Z`)).join("");
  return {
    id,
    name: id === "11" ? "Bogotá D.C." : id === "88" ? "San Andrés y Providencia" : geometry.properties.shapeName,
    path,
    labelPoint: labelPoint(polygons),
    ...(id === "88" ? { inset: true } : {}),
  };
}).sort((a, b) => a.id.localeCompare(b.id));
if (mapPaths.length !== 33 || new Set(mapPaths.map(({ id }) => id)).size !== 33) throw new Error("Expected 32 departments and Bogotá D.C.");
const metadata = {
  name: "© OpenStreetMap contributors · geoBoundaries",
  url: "https://www.geoboundaries.org/api/current/gbOpen/COL/ADM1/",
  license: "ODbL 1.0",
  licenseUrl: "https://www.openstreetmap.org/copyright",
  dataUrl: "/data/colombia-map.json",
};
const publicData = { source: metadata, viewBox: "0 0 660 640", inset, departments: mapPaths };
await mkdir(resolve(root, "public/data"), { recursive: true });
await writeFile(resolve(root, "public/data/colombia-map.json"), `${JSON.stringify(publicData)}\n`);
await writeFile(resolve(root, "src/data/colombia-map-paths.ts"), `// Generated by scripts/generate-colombia-map.mjs. Do not hand-edit.\n// Geographic data © OpenStreetMap contributors, ODbL 1.0; see docs/MAPA-COLOMBIA.md.\nimport mapData from "../../public/data/colombia-map.json";\n\nexport type ColombiaMapDepartment = {\n  id: string;\n  name: string;\n  path: string;\n  labelPoint: readonly [number, number];\n  inset?: boolean;\n};\n\nexport const COLOMBIA_MAP_VIEW_BOX = mapData.viewBox;\nexport const COLOMBIA_MAP_INSET = mapData.inset;\nexport const COLOMBIA_MAP_SOURCE = mapData.source;\nexport const colombiaMapPaths: readonly ColombiaMapDepartment[] = mapData.departments.map((department) => ({\n  ...department,\n  labelPoint: [department.labelPoint[0], department.labelPoint[1]],\n}));\n`);
console.log(`Generated ${mapPaths.length} regions; ${Buffer.byteLength(JSON.stringify(publicData))} bytes of geometry and metadata.`);
