import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/config/site";
import { isIndexable, siteUrl } from "@/lib/site-url";
import "./globals.css";

export const runtime = "nodejs";

const manrope = localFont({
  src: "../../public/fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | Una comunidad de fe`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: { index: isIndexable, follow: isIndexable },
  openGraph: { title: site.name, description: site.description, url: "/", siteName: site.name, locale: "es_CO", type: "website" },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
};

export const viewport: Viewport = { themeColor: "#0b2d48", width: "device-width", initialScale: 1 };

const designContract = `THESIS: Una comunidad real, con dos recorridos claros para visitantes y miembros. OWN-WORLD: Azul institucional profundo, blanco y fotografía documental; Manrope, enlaces claros y superficies abiertas. STORY: Conocer la fe compartida, encontrar una congregación y acceder a recursos. FIRST VIEWPORT: Barra institucional y cabecera clara; bienvenida y acciones sobre azul a la izquierda, fotografía real de formación a la derecha; accesos para ambos públicos y mapa interactivo a continuación. FORM: Refinamiento global solicitado por el usuario: institucional, formal, sofisticado y moderno. Evoluciona la identidad existente sin sustituir logo, tipografía, contenido ni funciones; sin comp generada aprobada. EXTENSION /iglesias: directorio operativo de diez congregaciones; búsqueda, departamento, ciudad y filas abiertas con contactos. EXTENSION /biblioteca: catálogo de tres carpetas públicas, búsqueda y acceso externo identificado; archivos sujetos a permisos de miembro. EXTENSION /blog: lectura de tres artículos originales; juventud abre el índice con su foto, dos lecturas complementarias; texto continuo, fechas verificadas y SEO por artículo. EXTENSION /quienes-somos: lectura institucional; siete destinos agrupados, fotografías reales, cronología, declaración íntegra, organización, misión, ruta y calendario mensual con originales consultables. SHARED: Encabezados, controles, navegación local y pie institucional comparten escala, color y ritmo; responsive desde 320px y teclado. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>
        <script type="application/json" id="design-contract" dangerouslySetInnerHTML={{ __html: JSON.stringify({ contract: designContract }) }} />
        <a className="skip-link" href="#contenido">Ir al contenido principal</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
