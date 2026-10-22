"use client";

import { useRef, useState } from "react";
import type { Church } from "@/data/churches";
import { colombiaDepartments, type DepartmentCode } from "@/data/colombia-departments";
import { Icon } from "@/components/ui/icon";
import { ExternalLink } from "@/components/ui/external-link";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();
}

function formatPhone(phone: string) {
  return phone.replace(/^(\+57)(\d{3})(\d{3})(\d{4})$/, "$1 $2 $3 $4");
}

export function ChurchDirectory({ churches, initialDepartment = "" }: { churches: readonly Church[]; initialDepartment?: DepartmentCode | "" }) {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState<string>(initialDepartment);
  const [city, setCity] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const departmentChurches = churches.filter((church) => !department || church.departmentCode === department);
  const cities = [...new Set(departmentChurches.map((church) => church.city))].sort((a, b) => a.localeCompare(b, "es"));
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const hasFilters = terms.length > 0 || department !== "" || city !== "";
  const results = departmentChurches.filter((church) => {
    const searchable = normalize([church.city, church.name, church.address, church.pastors].join(" "));
    return (!city || church.city === city) && terms.every((term) => searchable.includes(term));
  });

  function resetFilters() {
    setQuery("");
    setDepartment("");
    setCity("");
    searchRef.current?.focus();
  }

  return (
    <section aria-label="Buscar congregaciones">
      <form role="search" className="directory-filters" onSubmit={(event) => event.preventDefault()}>
        <div className="directory-search-field">
          <label htmlFor="church-search">Busca una congregación</label>
          <div className="directory-search-input">
            <Icon name="search" />
            <input ref={searchRef} id="church-search" name="q" type="search" placeholder="Ciudad, iglesia, dirección o pastor" value={query} onChange={(event) => setQuery(event.target.value)} aria-controls="church-results" autoComplete="off" />
          </div>
        </div>
        <div className="directory-department-field">
          <label htmlFor="church-department">Departamento</label>
          <select id="church-department" name="departamento" value={department} onChange={(event) => { setDepartment(event.target.value); setCity(""); }} aria-controls="church-results">
            <option value="">Todos los departamentos</option>
            {colombiaDepartments.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
          </select>
        </div>
        <div className="directory-city-field">
          <label htmlFor="church-city">Ciudad o municipio</label>
          <select id="church-city" name="city" value={city} onChange={(event) => setCity(event.target.value)} aria-controls="church-results">
            <option value="">Todas las ciudades</option>
            {cities.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </div>
      </form>
      <div className="directory-results-heading">
        <h2 className="sr-only">Congregaciones</h2>
        <p role="status" aria-live="polite" aria-atomic="true">
          <strong>{results.length}</strong> {results.length === 1 ? "congregación" : "congregaciones"}{hasFilters ? (results.length === 1 ? " encontrada" : " encontradas") : " en este directorio"}
        </p>
        {hasFilters && <button type="button" className="directory-reset" onClick={resetFilters}>Limpiar filtros</button>}
      </div>
      <div id="church-results">
        {results.length === 0 ? (
          <div className="directory-empty">
            <h3>No encontramos coincidencias</h3>
            <p>{department && departmentChurches.length === 0 ? "El directorio institucional aún no publica congregaciones en este departamento. Puedes consultar otro departamento o contactar a la oficina nacional." : "Prueba con otro departamento, otra ciudad, el nombre de la iglesia o uno de sus pastores."}</p>
            <button className="button button-primary" type="button" onClick={resetFilters}>Ver todas las congregaciones</button>
          </div>
        ) : (
          <ul className="directory-list">
            {results.map((church) => (
              <li key={church.id}>
                <article className="church-entry" aria-labelledby={`${church.id}-title`}>
                  <div className="church-location">
                    <h3 id={`${church.id}-title`}>{church.city}</h3>
                    <p className="church-name">{church.name}</p>
                    <address>{church.address}</address>
                    <ExternalLink className="text-link church-map" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${church.address}, ${church.city}, Colombia`)}`}>
                      Ver dirección <Icon name="arrow-up-right" />
                    </ExternalLink>
                  </div>
                  <div className="church-information">
                    <dl className="church-facts">
                      <div><dt>Contacto pastoral</dt><dd>{church.pastors}</dd></div>
                      <div><dt>Reuniones</dt><dd>{church.schedule}</dd></div>
                    </dl>
                    <details className="church-story">
                      <summary>Conoce esta congregación</summary>
                      <p>{church.history}</p>
                    </details>
                  </div>
                  <div className="church-contact">
                    <a className="church-phone" href={`tel:${church.phone}`} aria-label={`Llamar a ${church.name} en ${church.city}: ${formatPhone(church.phone)}`}><Icon name="phone" />{formatPhone(church.phone)}</a>
                    {church.emailNeedsConfirmation ? (
                      <div className="church-email-unconfirmed"><span>{church.email}</span><p>Confirma este correo por teléfono.</p></div>
                    ) : (
                      <a className="church-email" href={`mailto:${church.email}`}><Icon name="mail" /><span>{church.email}</span></a>
                    )}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
