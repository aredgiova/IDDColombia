import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { Icon } from "@/components/ui/icon";
import { currentPages } from "@/config/site";

const resources = [
  { title: "Biblioteca", description: "Materiales, documentos y recursos compartidos.", href: currentPages.library, external: false },
  { title: "Credencialización", description: "Información y acceso a los procesos ministeriales.", href: currentPages.credentials, external: true },
  { title: "Calendario institucional", description: "Consulta la programación publicada por la iglesia.", href: currentPages.calendar, external: false },
];

export function ResourcesSection() {
  return (
    <section id="recursos" className="resources-section" aria-labelledby="resources-title">
      <div className="container resources-layout">
        <div className="resources-introduction">
          <h2 id="resources-title">Seguimos creciendo.<br />También juntos.</h2>
          <p>Un punto de encuentro para miembros, líderes y quienes sirven a nuestra comunidad.</p>
          <Image className="resources-image" src="/images/comunidad-piendamo.webp" alt="Miembros de una congregación de la Iglesia de Dios en Piendamó." width={715} height={712} sizes="(max-width: 767px) 180px, 240px" />
        </div>
        <div className="resource-list">
          {resources.map((resource) => {
            const ResourceLink = resource.external ? ExternalLink : Link;

            return (
              <ResourceLink className="resource-link" href={resource.href} key={resource.title}>
                <div><h3>{resource.title}</h3><p>{resource.description}</p></div>
                <Icon name={resource.external ? "arrow-up-right" : "arrow-right"} />
              </ResourceLink>
            );
          })}
          <div className="reports-link"><p>¿Necesitas presentar tus reportes?</p><ExternalLink href={currentPages.reports} className="text-link">Acceder a reportes <Icon name="arrow-up-right" /></ExternalLink></div>
        </div>
      </div>
    </section>
  );
}
