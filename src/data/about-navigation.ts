export type AboutNavigationItem = {
  href: string;
  label: string;
  description: string;
};

export const aboutNavigation = [
  {
    title: "Nuestra identidad",
    items: [
      {
        href: "/quienes-somos/historia",
        label: "Nuestra historia",
        description: "El camino de la Iglesia de Dios en Colombia desde 1956.",
      },
      {
        href: "/quienes-somos/mision-y-vision",
        label: "Misión y visión",
        description: "El propósito que nos reúne y orienta nuestro servicio.",
      },
      {
        href: "/quienes-somos/declaracion-de-fe",
        label: "Declaración de fe",
        description: "Las convicciones bíblicas que compartimos.",
      },
    ],
  },
  {
    title: "Organización y dirección",
    items: [
      {
        href: "/quienes-somos/organizacion",
        label: "Nuestra organización",
        description: "Cómo se articula el liderazgo y el servicio de la iglesia.",
      },
      {
        href: "/quienes-somos/ruta-estrategica",
        label: "Ruta estratégica",
        description: "Las prioridades que guían nuestro trabajo en Colombia.",
      },
    ],
  },
  {
    title: "Vida de la iglesia",
    items: [
      {
        href: "/quienes-somos/iglesia-internacional",
        label: "Iglesia internacional",
        description: "Nuestra relación con una comunidad de fe en el mundo.",
      },
      {
        href: "/calendario",
        label: "Calendario 2026",
        description: "La programación institucional para este año.",
      },
    ],
  },
] as const;

export const aboutPages = aboutNavigation.flatMap<AboutNavigationItem>((group) => group.items);
