import Link from "next/link";
import { aboutNavigation } from "@/data/about-navigation";
import { siteUrl } from "@/lib/site-url";
import { serializeJsonLd } from "@/lib/blog";
import { Icon } from "@/components/ui/icon";

export function AboutBreadcrumb({ title, root = false }: { title: string; root?: boolean }) {
  return <nav className="institutional-breadcrumb" aria-label="Ruta de navegación">
    <Link href="/">Inicio</Link><span aria-hidden="true">/</span>
    {!root && <><Link href="/quienes-somos">Quiénes somos</Link><span aria-hidden="true">/</span></>}
    <span aria-current="page">{title}</span>
  </nav>;
}

export function AboutSchema({ title, description, path }: { title: string; description: string; path: string }) {
  const root = path === "/quienes-somos";
  const crumbs = [{ name: "Inicio", item: siteUrl }, { name: "Quiénes somos", item: `${siteUrl}/quienes-somos` }];
  if (!root) crumbs.push({ name: title, item: `${siteUrl}${path}` });
  const schema = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "AboutPage", "@id": `${siteUrl}${path}#page`, url: `${siteUrl}${path}`, name: title, description, inLanguage: "es-CO" },
      { "@type": "BreadcrumbList", itemListElement: crumbs.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })) },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }} />;
}

export function AboutShell({ title, introduction, description, path, children }: {
  title: string; introduction: string; description: string; path: string; children: React.ReactNode;
}) {
  return <main id="contenido" className="institutional-page">
    <AboutSchema title={title} description={description} path={path} />
    <div className="container">
      <AboutBreadcrumb title={title} />
      <header className="institutional-heading"><h1>{title}</h1><p>{introduction}</p></header>
      <div className="institutional-layout">
        <article className="institutional-article">{children}</article>
        <aside className="institutional-sidebar">
          <nav aria-label="Páginas de Quiénes somos">
            <Link className="institutional-overview-link" href="/quienes-somos">Conoce nuestra iglesia <Icon name="arrow-right" /></Link>
            {aboutNavigation.map((group) => <div className="institutional-nav-group" key={group.title}>
              <p>{group.title}</p>
              <ul>{group.items.map((item) => <li key={item.href}><Link href={item.href} aria-current={path === item.href ? "page" : undefined}>{item.label}</Link></li>)}</ul>
            </div>)}
          </nav>
        </aside>
      </div>
      <aside className="institutional-invitation" aria-labelledby="invitation-title">
        <div><h2 id="invitation-title">Conozcámonos en comunidad.</h2><p>Encuentra una congregación de la Iglesia de Dios cerca de ti.</p></div>
        <Link className="button button-primary" href="/iglesias">Encontrar una iglesia <Icon name="arrow-right" /></Link>
      </aside>
    </div>
  </main>;
}
