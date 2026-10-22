export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "list"; items: readonly string[] };

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  topic: string;
  author: string;
  authorProfileUrl: string;
  publishedAt: string;
  modifiedAt?: string;
  readingMinutes: number;
  sourceUrl: string;
  legacyPath: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
    kind: "logo" | "photo";
    fit: "contain" | "cover";
    previewPosition?: string;
    sourceUrl: string;
  };
  blocks: readonly BlogBlock[];
  // Incomplete editorial prompts in the source are retained for traceability,
  // but are not published as actual testimonies or available resources.
  editorialNotes: readonly { heading: string; text: string }[];
};

export const blogSourceUrl = "https://www.iglesiadedioscolombia.com/blog";

// Public articles verified against their original pages and JSON-LD metadata.
// Migration decisions and image provenance: docs/BLOG-CONTENIDO.md.
export const blogPosts: readonly BlogPost[] = [
  {
    slug: "iglesia-de-dios-encuentro-transformacion",
    title: "La Iglesia de Dios: un espacio de encuentro y transformación",
    seoTitle: "Iglesia de Dios: encuentro, fe y transformación",
    description:
      "Conoce la misión de la Iglesia de Dios y sus ministerios de evangelización, discipulado, servicio social y educación cristiana al servicio de la comunidad.",
    excerpt:
      "Una comunidad de fe donde encontrar esperanza, apoyo y transformación a través del Evangelio y el servicio a los demás.",
    topic: "Vida de iglesia",
    author: "iglesiadediosonlie",
    authorProfileUrl:
      "https://www.iglesiadedioscolombia.com/profile/iglesiadediosonlie/perfil",
    publishedAt: "2024-02-13T20:16:56.046Z",
    readingMinutes: 1,
    sourceUrl:
      "https://www.iglesiadedioscolombia.com/post/la-iglesia-de-dios-un-espacio-de-encuentro-y-transformaci%C3%B3n",
    legacyPath:
      "/post/la-iglesia-de-dios-un-espacio-de-encuentro-y-transformación",
    image: {
      src: "/images/blog/iglesia-de-dios-colombia-logo.png",
      width: 1446,
      height: 366,
      alt: "Logotipo de la Iglesia de Dios en Colombia",
      kind: "logo",
      fit: "contain",
      sourceUrl:
        "https://static.wixstatic.com/media/bb8a41_a93f1eb1af8145e2950486330f28c113~mv2.png",
    },
    blocks: [
      {
        type: "paragraph",
        text: "La Iglesia de Dios es más que un edificio; es una comunidad de fe donde las personas pueden encontrar esperanza, apoyo y transformación. La Iglesia tiene la misión de compartir el mensaje del Evangelio y de llevar a cabo la obra de Dios en el mundo.",
      },
      {
        type: "heading",
        level: 2,
        id: "ministerios",
        text: "Ministerios de la Iglesia de Dios",
      },
      {
        type: "paragraph",
        text: "La Iglesia de Dios ofrece una variedad de ministerios para atender las necesidades de la comunidad. Algunos de estos ministerios son:",
      },
      {
        type: "list",
        items: [
          "Evangelización: El objetivo de este ministerio es compartir el mensaje del Evangelio con las personas que aún no lo conocen.",
          "Discipulado: Este ministerio ayuda a los cristianos a crecer en su fe y a vivir de acuerdo a los principios bíblicos.",
          "Servicio social: La Iglesia de Dios ayuda a los necesitados a través de programas de asistencia social, como comedores comunitarios, atención médica y apoyo a familias en crisis.",
          "Educación cristiana: La Iglesia ofrece programas de educación cristiana para niños, jóvenes y adultos.",
        ],
      },
    ],
    editorialNotes: [
      {
        heading: "Testimonios",
        text: "Se pueden incluir historias de personas que han encontrado esperanza, apoyo y transformación en la Iglesia de Dios.",
      },
    ],
  },
  {
    slug: "juventud-colombiana-esperanza",
    title: "La juventud: un futuro lleno de esperanza",
    seoTitle: "Juventud colombiana: valores, liderazgo y esperanza",
    description:
      "Una reflexión sobre la juventud colombiana, los valores cristianos y el liderazgo juvenil, con espacios de fe, servicio y apoyo para construir un futuro mejor.",
    excerpt:
      "Valores cristianos y oportunidades de liderazgo para acompañar a los jóvenes en la construcción de un futuro con esperanza.",
    topic: "Juventud",
    author: "iglesiadediosonlie",
    authorProfileUrl:
      "https://www.iglesiadedioscolombia.com/profile/iglesiadediosonlie/perfil",
    publishedAt: "2024-02-13T20:14:42.113Z",
    modifiedAt: "2024-02-19T21:35:00.756Z",
    readingMinutes: 2,
    sourceUrl:
      "https://www.iglesiadedioscolombia.com/post/la-juventud-un-futuro-lleno-de-esperanza",
    legacyPath: "/post/la-juventud-un-futuro-lleno-de-esperanza",
    image: {
      src: "/images/blog/juventud-esperanza.jpg",
      width: 1600,
      height: 1127,
      alt: "Cuatro jóvenes conversan al aire libre mientras llevan cuadernos y mochilas",
      kind: "photo",
      fit: "cover",
      previewPosition: "center top",
      sourceUrl:
        "https://static.wixstatic.com/media/11062b_2a04c76e256b49a284225d622bfc5f08~mv2.jpg",
    },
    blocks: [
      {
        type: "paragraph",
        text: "La juventud colombiana es un sector vibrante y lleno de potencial. Sin embargo, también enfrenta una serie de desafíos, como la pobreza, la violencia y la falta de oportunidades. La Iglesia de Dios tiene la responsabilidad de brindar a los jóvenes la esperanza y el apoyo que necesitan para construir un futuro mejor.",
      },
      {
        type: "heading",
        level: 2,
        id: "valores-cristianos",
        text: "Valores cristianos para los jóvenes",
      },
      {
        type: "paragraph",
        text: "La Iglesia de Dios puede ayudar a los jóvenes a desarrollar una identidad firme en Cristo y a vivir con integridad. Algunos de los valores que se pueden promover son:",
      },
      {
        type: "list",
        items: [
          "El amor a Dios y al prójimo: Este es el fundamento de la vida cristiana.",
          "La honestidad: Los jóvenes deben ser honestos en sus palabras y acciones.",
          "La responsabilidad: Los jóvenes deben ser responsables de sus decisiones y acciones.",
          "El respeto: Los jóvenes deben respetar a sus padres, a sus autoridades y a sus semejantes.",
          "La pureza: Los jóvenes deben vivir una vida sexualmente pura, de acuerdo a los principios bíblicos.",
        ],
      },
      {
        type: "heading",
        level: 2,
        id: "liderazgo-juvenil",
        text: "Liderazgo juvenil en la comunidad",
      },
      {
        type: "paragraph",
        text: "La Iglesia de Dios puede ofrecer programas y actividades que empoderen a los jóvenes para ser líderes transformadores en su comunidad. Algunos ejemplos de estos programas son:",
      },
      {
        type: "list",
        items: [
          "Grupos de jóvenes: Estos grupos ofrecen un espacio para que los jóvenes se reúnan, estudien la Biblia, compartan experiencias y participen en actividades sociales.",
          "Misiones: Los jóvenes pueden participar en misiones locales o internacionales para servir a los demás y compartir el mensaje del Evangelio.",
          "Liderazgo: La Iglesia puede ofrecer entrenamiento a los jóvenes para que desarrollen sus habilidades de liderazgo y puedan servir a la comunidad.",
        ],
      },
    ],
    editorialNotes: [
      {
        heading: "Testimonios",
        text: "Se pueden incluir historias de jóvenes colombianos que han impactado positivamente su entorno a través de su fe. Estas historias pueden mostrar cómo la participación en los programas de la Iglesia de Dios ha transformado sus vidas y les ha dado la oportunidad de ser líderes en su comunidad.",
      },
    ],
  },
  {
    slug: "familia-sociedad-colombiana",
    title: "La familia: un pilar fundamental en la sociedad colombiana",
    seoTitle: "La familia en Colombia: principios bíblicos para el hogar",
    description:
      "Descubre el papel de la familia en la sociedad colombiana y los principios bíblicos de amor, respeto, comunicación y perdón que fortalecen las relaciones.",
    excerpt:
      "El amor, el respeto, la comunicación y el perdón como principios para fortalecer las relaciones familiares.",
    topic: "Familia",
    author: "iglesiadediosonlie",
    authorProfileUrl:
      "https://www.iglesiadedioscolombia.com/profile/iglesiadediosonlie/perfil",
    publishedAt: "2024-02-13T20:13:27.114Z",
    modifiedAt: "2024-02-13T20:13:47.370Z",
    readingMinutes: 1,
    sourceUrl:
      "https://www.iglesiadedioscolombia.com/post/1-la-familia-un-pilar-fundamental-en-la-sociedad-colombiana",
    legacyPath:
      "/post/1-la-familia-un-pilar-fundamental-en-la-sociedad-colombiana",
    image: {
      src: "/images/blog/familia-colombiana.jpg",
      width: 1600,
      height: 1200,
      alt: "Familia reunida en una celebración con una piñata",
      kind: "photo",
      fit: "cover",
      sourceUrl:
        "https://static.wixstatic.com/media/11062b_cfe8f95b326d48148ba14cfb8ef7bbf0~mv2.jpg",
    },
    blocks: [
      {
        type: "paragraph",
        text: "La familia es la base de la sociedad colombiana. Es donde se transmiten valores, se aprende a amar y se construyen relaciones que duran toda la vida. En un contexto donde la sociedad se transforma constantemente, la familia sigue siendo un pilar fundamental para la estabilidad y el bienestar del país.",
      },
      {
        type: "heading",
        level: 2,
        id: "principios-biblicos",
        text: "Principios bíblicos para fortalecer la familia",
      },
      {
        type: "paragraph",
        text: "La Biblia ofrece una gran cantidad de principios para fortalecer las relaciones familiares. Algunos de estos principios son:",
      },
      {
        type: "list",
        items: [
          "El amor: El amor es el fundamento de toda familia cristiana. Debe ser un amor sacrificial, que se demuestra en acciones y palabras.",
          "El respeto: Cada miembro de la familia debe ser tratado con respeto, independientemente de su edad, sexo o posición.",
          "La comunicación: La comunicación abierta y honesta es esencial para resolver conflictos y construir relaciones sanas.",
          "El perdón: El perdón es fundamental para superar las heridas y restaurar las relaciones.",
          "La disciplina: La disciplina debe ser justa, amorosa y consistente.",
        ],
      },
    ],
    editorialNotes: [
      {
        heading: "Testimonios",
        text: "En esta sección se pueden incluir historias inspiradoras de familias colombianas que han experimentado transformación a través de la fe. Estas historias pueden mostrar cómo la aplicación de los principios bíblicos ha fortalecido sus relaciones familiares y ha traído bendición a sus hogares.",
      },
      {
        heading: "Recursos",
        text: "Se pueden ofrecer recursos como artículos, videos y consejos prácticos para la crianza de los hijos, la comunicación efectiva y la resolución de conflictos. Estos recursos pueden ser de gran ayuda para las familias que buscan fortalecer sus relaciones.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
