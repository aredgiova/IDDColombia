import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { currentPages, site } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-introduction">
        <p>Una comunidad de fe.<br /><span>Un lugar para todos.</span></p>
        <Link href={currentPages.churches} className="button button-light">Encuentra una iglesia</Link>
      </div>
      <div className="container footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label={`${site.name}, inicio`}>
            <Image
              src="/images/logo-iglesia.png"
              width={204}
              height={52}
              alt={site.name}
            />
          </Link>
          <address className="footer-contact">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p>{site.address}</p>
          </address>
        </div>

        <nav className="footer-column" aria-labelledby="footer-about-heading">
          <h2 id="footer-about-heading">Quiénes somos</h2>
          <ul className="footer-links">
            <li><Link href={currentPages.about}>Conoce la iglesia</Link></li>
            <li><Link href={currentPages.history}>Nuestra historia</Link></li>
            <li><Link href={currentPages.mission}>Misión y visión</Link></li>
            <li><Link href={currentPages.faith}>Declaración de fe</Link></li>
            <li><Link href={currentPages.organization}>Nuestra organización</Link></li>
            <li><Link href={currentPages.strategy}>Ruta estratégica</Link></li>
            <li><Link href={currentPages.international}>Iglesia internacional</Link></li>
          </ul>
        </nav>

        <nav className="footer-column" aria-labelledby="footer-ministries-heading">
          <h2 id="footer-ministries-heading">Ministerios</h2>
          <ul className="footer-links">
            <li><ExternalLink href={currentPages.children}>Infantil</ExternalLink></li>
            <li><ExternalLink href={currentPages.youth}>Jóvenes</ExternalLink></li>
            <li><ExternalLink href={currentPages.family}>Matrimonio y familia</ExternalLink></li>
            <li><ExternalLink href={currentPages.education}>Educación</ExternalLink></li>
          </ul>
        </nav>

        <nav className="footer-column" aria-labelledby="footer-resources-heading">
          <h2 id="footer-resources-heading">Recursos</h2>
          <ul className="footer-links">
            <li><Link href={currentPages.library}>Biblioteca</Link></li>
            <li><Link href={currentPages.blog}>Blog</Link></li>
            <li><ExternalLink href={currentPages.credentials}>Credencialización</ExternalLink></li>
            <li><Link href={currentPages.calendar}>Calendario 2026</Link></li>
            <li><Link href={currentPages.churches}>Directorio de iglesias</Link></li>
            <li><ExternalLink href={currentPages.reports}>Reportes</ExternalLink></li>
          </ul>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 {site.name}. Todos los derechos reservados.</p>
        <ExternalLink href={currentPages.privacy}>Política de tratamiento de datos personales</ExternalLink>
      </div>
    </footer>
  );
}
