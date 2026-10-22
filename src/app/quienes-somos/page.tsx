import Image from "next/image";
import Link from "next/link";
import { AboutBreadcrumb, AboutSchema } from "@/components/about/about-shell";
import { Icon } from "@/components/ui/icon";
import { aboutNavigation } from "@/data/about-navigation";
import { institutionalMetadata } from "@/lib/about";

const description = "Conoce la Iglesia de Dios en Colombia: nuestra historia, misión, declaración de fe, organización, ruta estratégica y comunidad internacional.";
export const metadata = institutionalMetadata("Quiénes somos", description, "/quienes-somos");

const questions = [
  { title: "¿Qué nos une?", description: "Una fe compartida, una historia que continúa y un propósito que nos invita a servir." },
  { title: "¿Cómo caminamos juntos?", description: "Conoce los equipos que acompañan a las congregaciones y la ruta que orienta nuestra misión." },
  { title: "¿Dónde nos encontramos?", description: "Participa en la vida de la iglesia y conoce nuestra comunidad más allá de Colombia." },
];

export default function AboutPage() {
  return <main id="contenido" className="institutional-page">
    <AboutSchema title="Quiénes somos" description={description} path="/quienes-somos" />
    <div className="container">
      <AboutBreadcrumb title="Quiénes somos" root />
      <header className="institutional-cover">
        <div><h1>Quiénes somos</h1><p className="institutional-cover-lead">Una fe que nos une.<br /><span>Una comunidad para compartirla.</span></p>
          <p>Somos la Iglesia de Dios en Colombia. Seguimos a Jesús y compartimos su mensaje de amor y esperanza a través de la oración, la adoración y el servicio.</p>
          <Link className="text-link" href="/quienes-somos/mision-y-vision">Conoce nuestro propósito <Icon name="arrow-right" /></Link>
        </div>
        <figure><Image src="/images/comunidad-bogota.webp" alt="Miembros de una congregación de la Iglesia de Dios reunidos en Bogotá" width={1400} height={1050} sizes="(max-width: 767px) calc(100vw - 40px), 48vw" preload /><figcaption>La fe se vive al encontrarnos.</figcaption></figure>
      </header>
      <div className="institutional-explore">
        {aboutNavigation.map((group, i) => <section className="institutional-topic" aria-labelledby={`topic-${i}`} key={group.title}>
          <div className="institutional-topic-intro"><h2 id={`topic-${i}`}>{questions[i].title}</h2><p>{questions[i].description}</p></div>
          <ul className="institutional-topic-links">{group.items.map((item) => <li key={item.href}>
            <Link href={item.href}><div><h3>{item.label}</h3><p>{item.description}</p></div><Icon name="arrow-right" /></Link>
          </li>)}</ul>
        </section>)}
      </div>
      <aside className="institutional-home-invitation"><h2>También hay un lugar para ti.</h2><p>Conoce nuestras congregaciones y encuentra una comunidad donde crecer en la fe.</p><Link href="/iglesias" className="button button-light">Encontrar una iglesia <Icon name="arrow-right" /></Link></aside>
    </div>
  </main>;
}
