"use client";

import { useRef, useState } from "react";
import type { LibraryFolder } from "@/data/library";
import { ExternalLink } from "@/components/ui/external-link";
import { Icon } from "@/components/ui/icon";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("es").trim();
}

export function LibraryCatalog({ folders }: { folders: readonly LibraryFolder[] }) {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  const results = folders.filter((folder) => terms.every((term) => normalize(`${folder.name} ${folder.description}`).includes(term)));

  function resetSearch() {
    setQuery("");
    searchRef.current?.focus();
  }

  return (
    <section aria-labelledby="library-folders-title">
      <div className="library-toolbar">
        <h2 id="library-folders-title">Carpetas disponibles</h2>
        <form role="search" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="library-search">Buscar una carpeta</label>
          <div className="library-search-input">
            <Icon name="search" />
            <input ref={searchRef} id="library-search" name="q" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre o tema de la carpeta" aria-controls="library-results" autoComplete="off" />
          </div>
        </form>
      </div>
      <div className="library-results-heading">
        <p role="status" aria-live="polite" aria-atomic="true">{results.length} {results.length === 1 ? "carpeta" : "carpetas"}{terms.length ? (results.length === 1 ? " encontrada" : " encontradas") : " disponibles"}</p>
        {terms.length > 0 && <button type="button" className="library-reset" onClick={resetSearch}>Limpiar búsqueda</button>}
      </div>
      <div id="library-results">
        {results.length ? (
          <ul className="library-folders">
            {results.map((folder) => (
              <li key={folder.id}>
                <article className="library-folder" aria-labelledby={`${folder.id}-title`}>
                  <div className="library-folder-description">
                    <Icon name="folder" className="library-folder-icon" />
                    <div><h3 id={`${folder.id}-title`}>{folder.name}</h3><p>{folder.description}</p></div>
                  </div>
                  <dl className="library-folder-meta">
                    <div><dt>Contenido</dt><dd>{folder.itemCount} elementos</dd></div>
                    <div><dt>Última actualización</dt><dd><time dateTime={folder.updatedAt}>{folder.updatedLabel}</time></dd></div>
                  </dl>
                  <div className="library-folder-action">
                    <ExternalLink className="text-link" href={folder.sourceUrl} aria-describedby={`${folder.id}-access`}>
                      {folder.directFolderLink ? "Abrir carpeta" : "Abrir biblioteca"}<Icon name="arrow-up-right" />
                      <span className="sr-only">: {folder.name}</span>
                    </ExternalLink>
                    <p id={`${folder.id}-access`}>{folder.directFolderLink ? "Requiere acceso de miembro." : `Al entrar, selecciona «${folder.name}».`}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <div className="library-empty">
            <h3>No encontramos esa carpeta</h3>
            <p>Prueba con Logos, Credencialización o Educación.</p>
            <button type="button" className="button button-primary" onClick={resetSearch}>Ver todas las carpetas</button>
          </div>
        )}
      </div>
    </section>
  );
}
