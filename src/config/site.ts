export const site = {
  name: "Iglesia de Dios en Colombia",
  description:
    "Conoce la Iglesia de Dios en Colombia. Encuentra una congregación y descubre nuestra historia, ministerios y recursos para crecer en comunidad.",
  legacyUrl: "https://www.iglesiadedioscolombia.com",
  email: "asistentesupervisor@iglesiadedioscolombia.com",
  phone: "+57 317 598 4406",
  phoneHref: "tel:+573175984406",
  address: "Calle 68 # 17-33, Chapinero, Bogotá D. C.",
} as const;

export const currentPages = {
  about: "/quienes-somos",
  churches: "/iglesias",
  history: "/quienes-somos/historia",
  mission: "/quienes-somos/mision-y-vision",
  faith: "/quienes-somos/declaracion-de-fe",
  organization: "/quienes-somos/organizacion",
  strategy: "/quienes-somos/ruta-estrategica",
  international: "/quienes-somos/iglesia-internacional",
  children: `${site.legacyUrl}/ministerio-infantil`,
  youth: `${site.legacyUrl}/generaci%C3%B3n-emergente-jovenes`,
  family: `${site.legacyUrl}/ministerio-de-matrimonio-y-familia`,
  education: `${site.legacyUrl}/educaci%C3%B3n`,
  library: "/biblioteca",
  blog: "/blog",
  credentials: `${site.legacyUrl}/about-1`,
  calendar: "/calendario",
  reports: `${site.legacyUrl}/reportes`,
  privacy: `${site.legacyUrl}/datos-personales`,
} as const;

export const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/iglesiadedioscolombia/" },
  { name: "Facebook", href: "https://www.facebook.com/iglesiadedioscolombia" },
  { name: "YouTube", href: "https://www.youtube.com/@IglesiadeDioscolombia" },
] as const;
