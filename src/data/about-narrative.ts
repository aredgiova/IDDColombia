export type HistoryMilestone = {
  year: string;
  title: string;
  paragraphs: readonly string[];
};

export type FaithStatement = {
  title: string;
  text: string;
};

export type InternationalLink = {
  title: string;
  language: string;
  description: string;
  href: string;
};

// Editorial sources, historical ambiguities and migration decisions:
// docs/QUIENES-SOMOS-CONTENIDO.md.
export const historyMilestones: readonly HistoryMilestone[] = [
  {
    year: "1955",
    title: "Los primeros encuentros",
    paragraphs: [
      "En medio de la violencia partidista y de las dificultades que enfrentaban las comunidades evangélicas, Ricardo Moreno, natural de Sogamoso, viajó por el Huila como evangelista junto a Mesías Jiménez.",
      "A su regreso a Bogotá conoció a Pablo Childers y a su esposa Candita, miembros de la Iglesia de Dios en Estados Unidos que habían llegado al país por motivos laborales. Juntos oraron con el propósito de establecer la Iglesia de Dios en Colombia.",
    ],
  },
  {
    year: "18 de noviembre de 1956",
    title: "Una iglesia comienza en Sogamoso",
    paragraphs: [
      "Ricardo Moreno inició los cultos y la escuela dominical en su casa, en la calle 11 n.º 11-75 de Sogamoso, Boyacá. Su familia y otras personas conformaron el primer grupo, de entre ocho y diez integrantes.",
      "Durante los primeros cuatro años, la obra se concentró en Sogamoso. Después se estableció una segunda congregación en Pajarito y, al año siguiente, nacieron iglesias en Tauramena y Puerto López.",
    ],
  },
  {
    year: "1965",
    title: "Bogotá y la expansión de la misión",
    paragraphs: [
      "El pastor Ricardo Moreno se trasladó a Bogotá y comenzó una iglesia en el barrio Santander. En los años siguientes se establecieron la iglesia central y la oficina nacional en la calle 68. Moreno ejerció como pastor, primer supervisor nacional y representante legal. El relato histórico registra la primera personería jurídica con el número 1635.",
      "La misión se extendió a Cali, Villavicencio y otros municipios del Meta y Casanare; a Apulo y Nariño, en Cundinamarca; y a Guateque y Garagoa, en Boyacá. En Bogotá surgieron congregaciones en San Fernando, Tabora y Santa María del Lago. En esta etapa, el pastor César Rodríguez Zambrano, autor de este recuento, se convirtió al Señor.",
    ],
  },
  {
    year: "1975–1978",
    title: "Formación bíblica y nuevas congregaciones",
    paragraphs: [
      "En 1975, Ricardo Moreno fue nombrado supervisor en Paraguay. El reverendo Roberto Rodríguez llegó desde Puerto Rico como misionero y nuevo supervisor en Colombia. Al año siguiente, Luis Alfonso Gutiérrez asumió el pastorado de la iglesia de la calle 68, que vivió una etapa de avivamiento y crecimiento.",
      "También en 1976 llegaron estudiantes del seminario de Puerto Rico. Entre ellos estaba el pastor Alejandro Castillo, quien impulsó un Instituto Bíblico en la sede de la calle 68. Con docentes provenientes de Puerto Rico, se graduaron 25 personas, entre ellas el autor del recuento. Los egresados comenzaron nuevas iglesias o asumieron el pastorado de congregaciones existentes.",
      "De este impulso surgieron obras en Chía, Bosa, Ciudad Jardín y el punto conocido como La 31. En 1978, Luis Alfonso Gutiérrez se trasladó a Estados Unidos y Fernando Rojas lo sucedió en el pastorado.",
    ],
  },
  {
    year: "1981–1989",
    title: "La obra llega a nuevas regiones",
    paragraphs: [
      "En 1981, el Departamento de Misiones Mundiales nombró al reverendo Raúl Anchique como supervisor temporal, tras su llegada del seminario de Panamá. En 1982 fue nombrado supervisor el reverendo Osvaldo Orellana, de Chile.",
      "Durante esta etapa se establecieron más iglesias en Cali, Cauca, Casanare y Meta. El pastor Eustiquio Mosquera se trasladó a Barranquilla y, bajo la dirección de Orellana, desarrolló contactos para plantar iglesias en la costa. El recuento sitúa el cierre de la supervisión de Orellana en 1989.",
    ],
  },
  {
    year: "1989–1995",
    title: "Continuidad en el liderazgo nacional",
    paragraphs: [
      "Tras su regreso de Estados Unidos, la asamblea de pastores eligió al reverendo Luis Alfonso Gutiérrez como supervisor. Su segundo periodo terminó en 1995, cuando fue elegido el reverendo Raúl Anchique.",
      "La plantación de iglesias continuó en Duitama, Bogotá, Cundinamarca y Cali. El relato registra también el posterior otorgamiento de la personería jurídica especial n.º 953, sin precisar la fecha de la resolución.",
    ],
  },
  {
    year: "1999",
    title: "Un nuevo impulso en la costa",
    paragraphs: [
      "Misiones nombró al reverendo Arturo Mendieta como supervisor para la costa. En esos años se establecieron iglesias en Medellín, Santa Marta, Sincelejo, el departamento de Córdoba y otros lugares de la región Caribe.",
    ],
  },
  {
    year: "2006–2010",
    title: "Preparación de nuevas generaciones",
    paragraphs: [
      "En 2006 concluyó el periodo de Raúl Anchique y fue elegido supervisor el reverendo Efraín Vega. En esta etapa, la llegada de los misioneros Wozniak, de Estados Unidos, acompañó el inicio del seminario en Fusagasugá. Posteriormente se adquirió un terreno para su construcción.",
      "El recuento destaca el servicio de sus egresados en el pastorado y la plantación de iglesias en lugares como Leticia, La Guajira, Putumayo y Quindío. En 2010 fue elegido supervisor nacional el reverendo Arturo Mendieta.",
    ],
  },
  {
    year: "2015",
    title: "La misión continúa creciendo",
    paragraphs: [
      "El reverendo Esmeragdo Moreno fue elegido supervisor nacional. En esta etapa se plantaron más iglesias en Cúcuta, Bucaramanga, Casanare y Meta.",
    ],
  },
  {
    year: "2023",
    title: "Una nueva etapa de servicio",
    paragraphs: [
      "El obispo Freddy Palomino fue elegido supervisor nacional de la Iglesia de Dios en Colombia.",
    ],
  },
];

export const globalHistoryMilestones: readonly HistoryMilestone[] = [
  {
    year: "1886",
    title: "El comienzo en Barney Creek",
    paragraphs: [
      "El 19 de agosto, Richard Green Spurling predicó en un molino del condado de Monroe, Tennessee, cerca de Carolina del Norte. Ocho personas formaron la Unión Cristiana, con el Nuevo Testamento como regla de fe y práctica.",
    ],
  },
  {
    year: "1896",
    title: "Avivamiento y santificación",
    paragraphs: [
      "Diez años después, el avivamiento de la Escuela Shearer, cerca de Camp Creek, difundió la doctrina de la santificación. Pese a la persecución, los creyentes experimentaron el derramamiento del Espíritu Santo, hablar en lenguas y sanidad divina.",
    ],
  },
  {
    year: "1906–1907",
    title: "Una identidad compartida",
    paragraphs: [
      "Bajo el liderazgo de A. J. Tomlinson, primer supervisor general, se estableció la Asamblea General Internacional en 1906. En 1907, veintiún años después del inicio, el movimiento adoptó el nombre Iglesia de Dios.",
    ],
  },
  {
    year: "1909–1918",
    title: "Misiones, comunicación y educación",
    paragraphs: [
      "El esfuerzo de evangelización mundial comenzó en las Bahamas en 1909. En 1910 nació la revista Evangel y, en 1918, se establecieron oportunidades educativas para ministros y miembros.",
    ],
  },
];

export const historySocialWork: readonly string[] = [
  "El servicio a las comunidades también forma parte de esta historia. El recuento del pastor César Rodríguez Zambrano destaca hogares de niños y colegios, entre ellos Rosa de Sarón, dirigido por Mariela Bernal en Bogotá, y el hogar Jiret, en Cota, bajo la dirección de la pastora Rosalba Pérez.",
  "También reconoce iniciativas en Yopal y Piendamó, Cauca, y el trabajo del pastor Ever Zambrano con comunidades del Amazonas. Estos testimonios expresan una vocación de acompañamiento, educación y cuidado que ha caminado junto a la evangelización.",
];

export const historyAttribution =
  "Historia de la Iglesia de Dios en Colombia basada en el recuento elaborado y presentado por el pastor César Rodríguez Zambrano. Edición y organización del texto para este sitio; se conserva el reconocimiento de su autoría.";

// The doctrinal statements retain the original wording and sequence.
// Titles are editorial reading aids, not replacements for the declaration.
export const faithStatements: readonly FaithStatement[] = [
  {
    title: "La Biblia",
    text: "En la inspiración verbal de la Biblia.",
  },
  {
    title: "Un Dios en tres personas",
    text: "En un Dios que existe eternamente en tres personas, a saber: el Padre, el Hijo y el Espíritu Santo.",
  },
  {
    title: "Jesucristo",
    text: "Que Jesucristo es el unigénito del Padre, concebido del Espíritu Santo y nacido de la virgen María. Que fue crucificado, sepultado y resucitó de entre los muertos. Que ascendió al cielo y está hoy a la diestra del Padre como nuestro Intercesor.",
  },
  {
    title: "El arrepentimiento",
    text: "Que todos han pecado y han sido destituidos de la gloria de Dios, y que el arrepentimiento es ordenado por Dios para todos y necesario para el perdón de los pecados.",
  },
  {
    title: "El nuevo nacimiento",
    text: "Que la justificación, la regeneración y el nuevo nacimiento se efectúan por fe en la sangre de Jesucristo.",
  },
  {
    title: "La santificación",
    text: "En la santificación, siguiente al nuevo nacimiento, por fe en la sangre de Jesucristo, por medio de la Palabra y por el Espíritu Santo.",
  },
  {
    title: "Una vida en santidad",
    text: "Que la santidad es la norma de vida, de Dios, para su pueblo.",
  },
  {
    title: "El bautismo con el Espíritu Santo",
    text: "En el bautismo con el Espíritu Santo, subsecuente a la limpieza del corazón.",
  },
  {
    title: "La evidencia del bautismo en el Espíritu",
    text: "En hablar en otras lenguas, como el Espíritu dirija a la persona, lo cual es la evidencia inicial del bautismo en el Espíritu Santo.",
  },
  {
    title: "El bautismo en agua",
    text: "En el bautismo en agua por inmersión, y que todos los que se arrepienten deben ser bautizados en el nombre del Padre, del Hijo y del Espíritu Santo.",
  },
  {
    title: "La sanidad divina",
    text: "Que la sanidad divina es provista para todos en la expiación.",
  },
  {
    title: "La cena del Señor y el lavatorio de los pies",
    text: "En la cena del Señor y el lavatorio de los pies de los santos.",
  },
  {
    title: "La segunda venida de Jesús",
    text: "En la segunda venida de Jesús antes del milenio. Primero, a resucitar a los justos muertos y arrebatar a los santos vivos hacia Él en el aire. Segundo, a reinar en la tierra por mil años.",
  },
  {
    title: "La resurrección y la eternidad",
    text: "En la resurrección corporal; vida eterna para los justos y castigo eterno para los inicuos.",
  },
];

export const internationalLinks: readonly InternationalLink[] = [
  {
    title: "Iglesia de Dios internacional",
    language: "Español",
    description:
      "Conoce nuestra historia, declaración de fe, liderazgo y recursos internacionales en español.",
    href: "https://churchofgodes.org/",
  },
  {
    title: "Church of God",
    language: "Inglés",
    description:
      "Accede al sitio internacional en inglés para consultar ministerios, noticias y recursos de la Iglesia de Dios.",
    href: "https://churchofgod.org/",
  },
  {
    title: "Iglesia de Dios Latinoamérica",
    language: "Latinoamérica",
    description:
      "Conoce el sitio de la Iglesia de Dios para nuestra región latinoamericana.",
    href: "https://iddla.org/",
  },
];
