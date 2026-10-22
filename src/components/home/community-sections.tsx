import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { Icon } from "@/components/ui/icon";
import { currentPages } from "@/config/site";

export function AboutSection() {
  return (
    <section id="nosotros" className="about-section container section-space" aria-labelledby="about-title">
      <div className="about-copy">
        <h2 id="about-title">Creemos en Jesús.<br /><span className="text-muted">Caminamos en comunidad.</span></h2>
        <p>Nuestra fe está fundamentada en la Biblia. Nos reunimos para adorar, aprender y acompañarnos en la vida, con el compromiso de compartir el mensaje de amor y esperanza.</p>
        <p>Como Iglesia de Dios, trabajamos para equipar y acompañar a las iglesias locales en el cumplimiento de la Gran Comisión.</p>
        <div className="inline-links">
          <Link href={currentPages.about} className="text-link">Quiénes somos <Icon name="arrow-right" /></Link>
          <Link href={currentPages.faith} className="text-link">En qué creemos <Icon name="arrow-right" /></Link>
        </div>
      </div>
      <figure className="about-image">
        <Image src="/images/comunidad-bogota.webp" alt="Integrantes de una congregación de la Iglesia de Dios reunidos en Bogotá." width={1400} height={1050} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1359px) 44vw, 540px" />
        <figcaption>La iglesia también es encontrarnos.</figcaption>
      </figure>
    </section>
  );
}

export function ChurchesSection() {
  return (
    <section id="iglesias" className="churches-section" aria-labelledby="churches-title">
      <div className="container churches-layout">
        <figure className="churches-image">
          <Image src="/images/iglesia-cucuta.webp" alt="Fachada de una congregación de la Iglesia de Dios en Cúcuta." width={1400} height={787} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1359px) 44vw, 540px" />
          <figcaption><Icon name="location" /> Iglesia de Dios en Cúcuta</figcaption>
        </figure>
        <div className="churches-copy">
          <h2 id="churches-title">El próximo encuentro<br />puede ser cerca de ti.</h2>
          <p>Conoce las congregaciones de nuestra comunidad. En el directorio puedes consultar sus ubicaciones, horarios y datos de contacto para planear tu visita.</p>
          <Link href={currentPages.churches} className="button button-light">Ver directorio de iglesias <Icon name="arrow-right" /></Link>
          <p className="churches-note">Cada congregación tiene su propia historia.<br />Nos une una misma fe.</p>
        </div>
      </div>
    </section>
  );
}

const ministries = [
  { title: "Infancia y juventud", description: "Conoce nuestros espacios de ministerio infantil y Generación Emergente.", links: [{ name: "Ministerio infantil", href: currentPages.children }, { name: "Generación Emergente", href: currentPages.youth }] },
  { title: "Matrimonio y familia", description: "Descubre el ministerio dedicado al matrimonio y a la vida en familia.", links: [{ name: "Conocer el ministerio", href: currentPages.family }] },
  { title: "Educación y formación", description: "Consulta nuestras áreas de formación, discipulado y desarrollo del liderazgo.", links: [{ name: "Explorar educación", href: currentPages.education }] },
];

export function MinistriesSection() {
  return (
    <section id="comunidad" className="container section-space ministries-section" aria-labelledby="ministries-title">
      <div className="section-introduction">
        <h2 id="ministries-title">La fe se vive.<br /><span className="text-muted">Y se comparte.</span></h2>
        <p>Nuestra comunidad reúne distintas generaciones y formas de servir. Conoce algunos de los ministerios de la Iglesia de Dios en Colombia.</p>
      </div>
      <div className="ministry-columns">
        {ministries.map((ministry) => (
          <article className="ministry" key={ministry.title}>
            <h3>{ministry.title}</h3>
            <p>{ministry.description}</p>
            <div className="ministry-links">{ministry.links.map((link) => <ExternalLink className="text-link" href={link.href} key={link.href}>{link.name}<Icon name="arrow-up-right" /></ExternalLink>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
