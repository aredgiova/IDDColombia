import type { Metadata } from "next";
import Link from "next/link";
import { LibraryCatalog } from "@/components/library/library-catalog";
import { libraryFolders } from "@/data/library";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/icon";
import "./library.css";

const description = "Consulta las carpetas de Logos, Credencialización y Educación (FETP) de la biblioteca de la Iglesia de Dios en Colombia.";

export const metadata: Metadata = {
  title: "Biblioteca",
  description,
  alternates: { canonical: "/biblioteca" },
  openGraph: { title: "Biblioteca | Iglesia de Dios en Colombia", description, url: "/biblioteca", siteName: site.name, locale: "es_CO", type: "website" },
  twitter: { card: "summary_large_image", title: "Biblioteca", description },
};

export default function LibraryPage() {
  return (
    <main id="contenido" className="library-page">
      <section className="library-intro" aria-labelledby="library-title">
        <div className="container">
          <nav aria-label="Ruta de navegación" className="library-breadcrumb">
            <Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Biblioteca</span>
          </nav>
          <div className="library-intro-layout">
            <div>
              <h1 id="library-title">Biblioteca</h1>
              <p>Recursos para servir, aprender y compartir. Encuentra las carpetas de identidad, credencialización y educación de nuestra comunidad.</p>
            </div>
            <aside className="library-access" aria-labelledby="library-access-title">
              <Icon name="lock" />
              <div>
                <h2 id="library-access-title">Acceso con tu cuenta</h2>
                <p>Los archivos se consultan en la biblioteca actual. Para abrirlos, necesitas iniciar sesión allí y tener permisos de acceso.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="container library-content">
        <LibraryCatalog folders={libraryFolders} />
        <p className="library-source-note">Las cantidades y fechas corresponden a lo publicado en la biblioteca original. Los elementos dentro de cada carpeta se muestran después de acceder con una cuenta autorizada.</p>
        <aside className="library-help" aria-labelledby="library-help-title">
          <div>
            <h2 id="library-help-title">¿Necesitas ayuda para acceder?</h2>
            <p>Comunícate con la oficina nacional para recibir orientación.</p>
          </div>
          <Link className="button button-outline" href="/#contacto">Contactar a la iglesia <Icon name="arrow-right" /></Link>
        </aside>
      </div>
    </main>
  );
}
