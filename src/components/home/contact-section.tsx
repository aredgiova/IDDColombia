import { ExternalLink } from "@/components/ui/external-link";
import { Icon } from "@/components/ui/icon";
import { site, socialLinks } from "@/config/site";

export function ContactSection() {
  return (
    <section id="contacto" className="container section-space contact-section" aria-labelledby="contact-title">
      <div><h2 id="contact-title">Conversemos.<br /><span className="text-muted">Estamos para escucharte.</span></h2><p>Si quieres conocer más sobre la iglesia o necesitas orientación, ponte en contacto con nosotros.</p><a className="button button-primary" href={`mailto:${site.email}`}>Escríbenos <Icon name="mail" /></a></div>
      <div className="contact-details">
        <a className="contact-phone" href={site.phoneHref}><Icon name="phone" />{site.phone}</a>
        <p>{site.address}</p>
        <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
        <div className="social-links" aria-label="Redes sociales institucionales">{socialLinks.map((link) => <ExternalLink key={link.name} href={link.href}>{link.name}<Icon name="arrow-up-right" /></ExternalLink>)}</div>
      </div>
    </section>
  );
}
