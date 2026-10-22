"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { ExternalLink } from "@/components/ui/external-link";
import { colombiaMapPaths, COLOMBIA_MAP_VIEW_BOX, COLOMBIA_MAP_SOURCE, COLOMBIA_MAP_INSET } from "@/data/colombia-map-paths";
import type { DepartmentChurchData } from "@/lib/church-map-data";

const numberFormat = new Intl.NumberFormat("es-CO");
const sourceUrl = "https://www.iglesiadedioscolombia.com/iglesiasdedios";

export function ColombiaChurchMap({ departments }: { departments: readonly DepartmentChurchData[] }) {
  const [selectedId, setSelectedId] = useState("08");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const pathsRef = useRef(new Map<string, SVGPathElement>());
  const selected = departments.find((department) => department.id === selectedId)!;
  const highlightedId = hoveredId ?? selectedId;
  const highlighted = departments.find((department) => department.id === highlightedId)!;
  const highlightedShape = colombiaMapPaths.find((department) => department.id === highlightedId)!;
  const labelX = Math.min(525, Math.max(135, highlightedShape.labelPoint[0]));
  const labelY = highlightedShape.inset ? COLOMBIA_MAP_INSET.y + COLOMBIA_MAP_INSET.height + 48 : Math.max(32, highlightedShape.labelPoint[1] - 26);
  const mapLabel = highlightedId === "88" ? "San Andrés y Providencia" : highlighted.name;

  function handleMapKey(event: KeyboardEvent<SVGPathElement>, id: string) {
    const index = departments.findIndex((department) => department.id === id);
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % departments.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + departments.length) % departments.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = departments.length - 1;
    else if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
    const next = departments[nextIndex].id;
    setHoveredId(null);
    setSelectedId(next);
    pathsRef.current.get(next)?.focus();
  }

  return (
    <section className="home-church-map" aria-labelledby="church-map-title">
      <div className="church-map-heading">
        <h2 id="church-map-title">Una comunidad, muchos lugares.</h2>
        <p>Elige un departamento y conoce sus iglesias y los datos de miembros publicados.</p>
      </div>
      <div className="church-map-layout">
        <figure className="church-map-figure">
          <p id="map-instructions" className="sr-only">Selecciona un departamento en el mapa o en la lista. En el mapa, usa las flechas para recorrer la lista alfabética, Inicio para el primero y Fin para el último.</p>
          <svg className="colombia-map" viewBox={COLOMBIA_MAP_VIEW_BOX} role="group" aria-label="Mapa interactivo de Colombia" aria-describedby="map-instructions" onPointerLeave={() => setHoveredId(null)}>
            <g className="map-inset" aria-hidden="true">
              <rect x={COLOMBIA_MAP_INSET.x} y={COLOMBIA_MAP_INSET.y} width={COLOMBIA_MAP_INSET.width} height={COLOMBIA_MAP_INSET.height} rx="6" />
              <text x={COLOMBIA_MAP_INSET.x + 12} y={COLOMBIA_MAP_INSET.y + 18}>San Andrés y</text>
              <text x={COLOMBIA_MAP_INSET.x + 12} y={COLOMBIA_MAP_INSET.y + 34}>Providencia</text>
              <text className="map-inset-note" x={COLOMBIA_MAP_INSET.x + 12} y={COLOMBIA_MAP_INSET.y + COLOMBIA_MAP_INSET.height + 15}>Islas ampliadas</text>
            </g>
            <g role="radiogroup" aria-label="Departamentos y Bogotá D. C.">
              {departments.map((department) => {
                const shape = colombiaMapPaths.find((item) => item.id === department.id)!;
                return <path key={department.id} ref={(element) => { if (element) pathsRef.current.set(department.id, element); else pathsRef.current.delete(department.id); }}
                  d={shape.path} className={`map-department${department.churchCount ? " has-churches" : ""}${selectedId === department.id ? " is-selected" : ""}`}
                  role="radio" aria-label={department.name} aria-checked={selectedId === department.id} aria-controls="department-information"
                  tabIndex={selectedId === department.id ? 0 : -1}
                  onClick={() => { setSelectedId(department.id); setHoveredId(null); }}
                  onPointerEnter={(event) => { if (event.pointerType !== "touch") setHoveredId(department.id); }}
                  onKeyDown={(event) => handleMapKey(event, department.id)}>
                  <title>{department.name}</title>
                </path>;
              })}
            </g>
            <g className="map-location-label" aria-hidden="true" pointerEvents="none">
              <circle cx={highlightedShape.labelPoint[0]} cy={highlightedShape.labelPoint[1]} r="4" />
              <text x={labelX} y={labelY} textAnchor="middle">{mapLabel}</text>
            </g>
          </svg>
          <figcaption className="map-caption">
            <div className="map-legend" aria-label="Leyenda del mapa">
              <span><i className="legend-published" aria-hidden="true" />Con iglesias publicadas</span>
              <span><i className="legend-selected" aria-hidden="true" />Tu selección</span>
            </div>
            <p className="map-islands-caption">San Andrés y Providencia se muestran ampliadas en el recuadro.</p>
            <p className="map-geography-source">Cartografía: <a href={COLOMBIA_MAP_SOURCE.url}>geoBoundaries</a> · © <a href="https://www.openstreetmap.org/copyright">colaboradores de OpenStreetMap</a> · <a href="https://opendatacommons.org/licenses/odbl/1-0/">ODbL</a> · <a href={COLOMBIA_MAP_SOURCE.dataUrl}>Datos</a></p>
          </figcaption>
        </figure>
        <div className="map-picker">
          <label htmlFor="department-picker">Elige un departamento</label>
          <select id="department-picker" value={selectedId} onChange={(event) => { setSelectedId(event.target.value); setHoveredId(null); }} aria-controls="department-information">
            {departments.map((department) => <option key={department.id} value={department.id}>{department.name}</option>)}
          </select>
          <span className="map-picker-hint">También puedes seleccionarlo en el mapa.</span>
        </div>
        <div className="map-information-column">
          <div id="department-information" className="department-information">
            <h3>{selected.name}</h3>
            <dl className="department-stats">
              <div>
                <dt>Iglesias publicadas</dt>
                <dd className={selected.churchCount ? "" : "stat-unavailable"}>{selected.churchCount ? numberFormat.format(selected.churchCount) : "Sin registro"}</dd>
              </div>
              <div>
                <dt>Miembros reportados</dt>
                <dd className={selected.memberCount === null ? "stat-unavailable" : ""}>{selected.memberCount === null ? "No publicado" : `${selected.approximate ? "≈ " : ""}${numberFormat.format(selected.memberCount)}`}</dd>
              </div>
            </dl>
            {selected.memberCount !== null && <p className="membership-coverage">Membresía parcial: {selected.memberReports.length} de {selected.churchCount} iglesias. Las reseñas no indican fecha de corte.</p>}
            {selected.churchCount ? <>
              <p className="department-cities">Encuéntranos en <strong>{selected.cities.join(" y ")}</strong>.</p>
              <Link className="button button-light department-link" href={`/iglesias?departamento=${selectedId}`}>Ver {selected.churchCount === 1 ? "iglesia" : "iglesias"} <Icon name="arrow-right" /></Link>
            </> : <>
              <p className="department-empty">El directorio público aún no incluye fichas aquí. Esto no indica que no existan iglesias en {selected.name}.</p>
              <Link className="button button-light department-link" href="/#contacto">Consultar con la oficina <Icon name="arrow-right" /></Link>
            </>}
          </div>
          <p className="map-data-note">Datos parciales del directorio público; no representan un censo nacional.</p>
          <details className="map-data-details" key={selectedId}>
            <summary>Sobre estas cifras</summary>
            <p>Las iglesias se cuentan a partir de las fichas publicadas. La ausencia de una cifra de miembros no equivale a cero.</p>
            {selected.memberReports.length > 0 ? <ul>{selected.memberReports.map((report) => <li key={`${report.city}-${report.churchName}`}>{report.churchName}, {report.city}: {report.approximate ? "aproximadamente " : ""}{report.count} miembros.</li>)}</ul> : <p>No hay cifras de membresía publicadas para este territorio en las fichas consultadas.</p>}
            <p>No se suman asistentes como miembros. Las reseñas sin fecha de corte no permiten confirmar la membresía actual.</p>
            <ExternalLink href={sourceUrl}>Consultar el directorio institucional <Icon name="arrow-up-right" /></ExternalLink>
          </details>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{selected.name}. {selected.churchCount ? `${selected.churchCount} iglesias publicadas.` : "Sin fichas en el directorio público."} {selected.memberCount === null ? "Membresía no publicada." : `Aproximadamente ${selected.memberCount} miembros reportados en ${selected.memberReports.length} de ${selected.churchCount} iglesias, sin fecha de corte. Dato parcial.`}</p>
    </section>
  );
}
