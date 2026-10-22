import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChurchDirectory } from "@/components/churches/church-directory";
import { ExternalLink } from "@/components/ui/external-link";
import { churches } from "@/data/churches";
import { colombiaDepartments } from "@/data/colombia-departments";
import { site } from "@/config/site";
import "./directory.css";

const description = "Encuentra una congregación de la Iglesia de Dios en Colombia. Consulta ciudades, direcciones, horarios de reunión y contactos pastorales.";

export const metadata: Metadata = {
  title: "Directorio de iglesias",
  description,
  alternates: { canonical: "/iglesias" },
  openGraph: { title: "Directorio de iglesias | Iglesia de Dios en Colombia", description, url: "/iglesias", siteName: site.name, locale: "es_CO", type: "website" },
  twitter: { card: "summary_large_image", title: "Directorio de iglesias", description },
};

export default async function ChurchesPage({ searchParams }: { searchParams: Promise<{ departamento?: string | string[] }> }) {
  const { departamento } = await searchParams;
  const initialDepartment = colombiaDepartments.find((department) => department.id === departamento)?.id ?? "";

  return (
    <main id="contenido" className="directory-page">
      <section className="directory-intro" aria-labelledby="directory-title">
        <div className="container">
          <nav aria-label="Ruta de navegación" className="directory-breadcrumb">
            <Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Iglesias</span>
          </nav>
          <div className="directory-intro-layout">
            <div>
              <h1 id="directory-title">Encuentra una iglesia</h1>
              <p>Una comunidad para compartir la fe y caminar juntos. Consulta dónde nos reunimos y ponte en contacto con una congregación.</p>
            </div>
            <figure>
              <Image src="/images/iglesia-cucuta.webp" width={1400} height={787} sizes="(max-width: 767px) 100vw, 340px" alt="Fachada de la Iglesia de Dios en Cúcuta." preload />
              <figcaption>Iglesia de Dios en Cúcuta</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <div className="container directory-content">
        <ChurchDirectory key={initialDepartment} churches={churches} initialDepartment={initialDepartment} />
        <aside className="directory-help" aria-labelledby="directory-help-title">
          <div>
            <h2 id="directory-help-title">¿Necesitas orientación?</h2>
            <p>Si no encuentras una congregación en tu ciudad, comunícate con la oficina nacional.</p>
          </div>
          <Link href="/#contacto" className="button button-outline">Contactar a la iglesia</Link>
        </aside>
        <p className="directory-source">Información del <ExternalLink href={`${site.legacyUrl}/iglesiasdedios`}>directorio institucional</ExternalLink>. Confirma los horarios con la congregación antes de tu visita.</p>
      </div>
    </main>
  );
}
