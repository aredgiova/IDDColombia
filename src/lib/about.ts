import type { Metadata } from "next";
import { site } from "@/config/site";

export const aboutDetails = {
  historia: {
    title: "Nuestra historia",
    description: "De Sogamoso a las comunidades de Colombia: conoce los orígenes, las personas y los momentos que han formado nuestra historia desde 1956.",
    introduction: "Una historia de fe que comenzó en un hogar y siguió creciendo al encontrarse con nuevas comunidades.",
    source: "/historia",
  },
  "mision-y-vision": {
    title: "Misión y visión",
    description: "Conoce la misión y la visión de la Iglesia de Dios en Colombia: equipar a la iglesia local y promover iglesias saludables que se multiplican.",
    introduction: "Nuestro propósito orienta la manera en que acompañamos a las iglesias locales, formamos líderes y compartimos el evangelio.",
    source: "/misi%C3%B3n-y-visi%C3%B3n",
  },
  "declaracion-de-fe": {
    title: "Declaración de fe",
    description: "Lee las catorce declaraciones de fe de la Iglesia de Dios: nuestras convicciones acerca de la Biblia, Jesucristo y la vida cristiana.",
    introduction: "Estas catorce declaraciones expresan las convicciones que compartimos como Iglesia de Dios.",
    source: "/declaraci%C3%B3n-de-fe",
  },
  organizacion: {
    title: "Organización y liderazgo",
    description: "Conoce el organigrama de la Iglesia de Dios en Colombia: supervisión nacional, coordinación, regiones y ejes ministeriales.",
    introduction: "Personas y equipos que acompañan la misión de las iglesias locales en Colombia.",
    source: "/organigrama",
  },
  "ruta-estrategica": {
    title: "Ruta estratégica",
    description: "Explora la ruta estratégica de la Iglesia de Dios en Colombia y sus orientaciones para la salud, el desarrollo y la multiplicación de las iglesias.",
    introduction: "Una orientación compartida para llevar nuestra misión a la vida de cada iglesia local.",
    source: "/copia-de-organigrama",
  },
  "iglesia-internacional": {
    title: "Una iglesia internacional",
    description: "Conecta con la Iglesia de Dios internacional y latinoamericana. Accede a sus sitios institucionales en español y en inglés.",
    introduction: "La Iglesia de Dios en Colombia forma parte de una comunidad de fe que también se encuentra más allá de nuestras fronteras.",
    source: "/iglesia-internacional",
  },
} as const;

export type AboutSlug = keyof typeof aboutDetails;

export function institutionalMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle, description, url: path, type: "website", locale: "es_CO", siteName: site.name,
      images: [{ url: "/images/comunidad-bogota.webp", width: 1400, height: 1050, alt: "Comunidad de la Iglesia de Dios en Bogotá" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/images/comunidad-bogota.webp"] },
  };
}
