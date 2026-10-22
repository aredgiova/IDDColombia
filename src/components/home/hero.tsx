import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { currentPages } from "@/config/site";
import { ColombiaChurchMap } from "@/components/home/colombia-church-map";
import { churchMapData } from "@/lib/church-map-data";
import "./colombia-church-map.css";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="welcome-title">
      <div className="hero-stage">
        <div className="hero-introduction container">
          <div className="hero-statement">
            <h1 id="welcome-title">Una fe que nos une.<br /><span>Un lugar para ti.</span></h1>
            <div className="hero-copy">
              <p>Somos Iglesia de Dios en Colombia. Una comunidad que comparte la fe en Jesús y el deseo de servir a los demás.</p>
              <Link href={currentPages.churches} className="button button-light">Encuentra una iglesia <Icon name="arrow-right" /></Link>
              <Link href={currentPages.about} className="hero-about-link">Conoce nuestra iglesia <Icon name="arrow-right" /></Link>
            </div>
          </div>
          <figure className="hero-portrait">
            <Image src="/images/comunidad-formacion.webp" alt="Participantes reunidos alrededor de mesas durante un encuentro de formación." fill sizes="(max-width: 767px) calc(100vw - 40px), 55vw" preload />
            <figcaption>Formación y vida en comunidad.</figcaption>
          </figure>
        </div>
      </div>
      <div className="container">
        <div className="welcome-paths">
          <a href="#nosotros"><span>Quiero conocer la iglesia</span><Icon name="arrow-right" /></a>
          <a href="#recursos"><span>Busco recursos para mi comunidad</span><Icon name="arrow-right" /></a>
        </div>
        <ColombiaChurchMap departments={churchMapData} />
      </div>
    </section>
  );
}
