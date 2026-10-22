/**
 * Public institutional material transcribed from the source site's original images.
 * Checked visually on 2026-10-16. Provenance and editorial notes:
 * docs/QUIENES-SOMOS-FUENTES-GRAFICAS.md.
 */
export type InstitutionalAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceUrl: string;
};

export const institutionalSourceUrls = {
  mission: "https://www.iglesiadedioscolombia.com/misi%C3%B3n-y-visi%C3%B3n",
  organization: "https://www.iglesiadedioscolombia.com/organigrama",
  strategy: "https://www.iglesiadedioscolombia.com/copia-de-organigrama",
  calendar: "https://www.iglesiadedioscolombia.com/copia-de-historia",
} as const;

const asset = (
  file: string,
  alt: string,
  width: number,
  height: number,
  original: string,
): InstitutionalAsset => ({
  src: `/images/institucional/${file}`,
  alt,
  width,
  height,
  sourceUrl: `https://static.wixstatic.com/media/${original}`,
});

export const institutionalAssets = {
  mission: asset("mision.png", "Misión: equipar, empoderar y facilitar el trabajo de la iglesia local para el cumplimiento de la Gran Comisión", 2999, 1687, "bb8a41_4cf1674d71794047aa33fc9e428a5bbf~mv2.png"),
  vision: asset("vision.png", "Visión: iglesias saludables que se multiplican con líderes preparados, creativos, innovadores y comprometidos", 2999, 1687, "bb8a41_8c0b2beabb554df0bf54be9fe88e5879~mv2.png"),
  organization: asset("organigrama.jpg", "Organigrama publicado de la Iglesia de Dios en Colombia: supervisión nacional, consejo, regiones, ejes y administración", 2999, 1687, "bb8a41_b8f4cd2e9036457dbb783e1a85bc2ac0~mv2.jpg"),
  internationalOverview: asset("organizacion-complemento.jpg", "Pieza histórica de Church of God con sus cifras publicadas y su identidad misional y pentecostal", 2999, 1687, "bb8a41_adc7847806024684963e28ece985cd17~mv2.jpg"),
  strategyOverview: asset("ruta-estrategica-1.jpg", "Ruta de multiplicación: evangelizar, discipular y multiplicar", 1011, 581, "bb8a41_f46e6c812e114ba2b94b377a7182814b~mv2.jpg"),
  strategyDetail: asset("ruta-estrategica-2.jpg", "Etapas de evangelización, formación integral y plantación y revitalización de iglesias", 1024, 709, "bb8a41_fc652a995bbb41a99dc1b9ef119385b0~mv2.jpg"),
  strategyTimeline: asset("ruta-estrategica.png", "Recorrido de la ruta de multiplicación desde el primer contacto hasta la plantación de iglesias hijas", 1024, 768, "bb8a41_ce7bed5599ed47c192fc8c4def6fe52e~mv2.png"),
  calendarCover: asset("calendario-2026-portada.png", "Portada del calendario institucional 2026 de la Iglesia de Dios en Colombia", 2000, 1414, "bb8a41_401935384f4746b5b6b6b294908aa112~mv2.png"),
} as const;

export const institutionalMission =
  "Equipar, empoderar y facilitar el trabajo de la iglesia local para el cumplimiento de la Gran Comisión.";

export const institutionalVision =
  "Iglesias saludables que se multiplican con líderes altamente preparados, creativos, innovadores y comprometidos.";

export const institutionalAxes = [
  "La Gran Comisión",
  "Formación integral",
  "Desarrollo integral de la familia",
  "Incidencia pública y social",
  "Cuidado y desarrollo ministerial",
] as const;

export type OrganizationMember = { name: string; role: string; note?: string };
export type OrganizationGroup = {
  id: string;
  title: string;
  members: readonly OrganizationMember[];
};

export const organizationGroups: readonly OrganizationGroup[] = [
  {
    id: "supervision-nacional",
    title: "Supervisión nacional",
    members: [{ name: "Ob. Freddy Palomino", role: "Supervisor nacional" }],
  },
  {
    id: "consejo-nacional",
    title: "Consejo nacional",
    members: [
      { name: "María Cristina Bermeo", role: "Pastora" },
      { name: "Gregorio Rincón", role: "Pastor" },
      { name: "Moises Ruano", role: "Pastor" },
      { name: "Marleny Rodriguez", role: "Pastora" },
      { name: "Martha Diaz Castillo", role: "Pastora" },
      { name: "Dawin Mendoza", role: "Pastor" },
      { name: "Samuel Montes", role: "Pastor" },
      { name: "Hermelinda Tomasto", role: "Pastora" },
      { name: "Wilson Cano", role: "Pastor" },
    ],
  },
  {
    id: "supervisores-regionales",
    title: "Supervisores regionales",
    members: [
      { name: "Ricardo Montoya", role: "Región 1" },
      { name: "Francisco Anaya", role: "Región 2" },
      { name: "Carolina Suarez", role: "Región 3" },
      { name: "Eduardo Diaz", role: "Región 4" },
      { name: "Dalmiro Blanco", role: "Región 5" },
      { name: "Wilson Cano", role: "Región 6" },
      { name: "Milton Barbosa", role: "Región 7" },
      { name: "Jose Cruz", role: "Región 2", note: "El organigrama original también indica Región 2 para este cargo." },
      { name: "Ma. Cristina Mantilla", role: "Región 9" },
    ],
  },
  {
    id: "directores-de-ejes",
    title: "Directores de ejes Conexión 20/30",
    members: [
      { name: "Kane Mebarak", role: "Evangelismo y discipulado" },
      { name: "Roberth Muñoz", role: "Plantación y revitalización" },
      { name: "Sergio y Damaris", role: "Misiones transculturales" },
      { name: "Rosalba Pérez", role: "Formación integral" },
      { name: "Fabián Preciado", role: "Director SEBIBE" },
      { name: "Kellys Mebarak", role: "Ministerio infantil" },
      { name: "Diego e Iveth", role: "Generación emergente" },
      { name: "Carolina Suarez", role: "Conectadas" },
      { name: "Juan Sanchez", role: "ICM — Colombia" },
      { name: "David y Michelle", role: "Multimedia" },
      { name: "Giovanni y Elvira", role: "Incidencia pública y social" },
      { name: "Ibeth Pulido", role: "Capellanía" },
      { name: "Luisa y Cristina", role: "Hijos de pastores (H+)" },
      { name: "Jorge Murillo", role: "Credencialización" },
      { name: "Sindy Diaz", role: "Salud mental pastoral" },
    ],
  },
  {
    id: "administracion",
    title: "Área administrativa",
    members: [
      { name: "Luis Eduardo Amezquita", role: "Secretario nacional" },
      { name: "Nelly Molina", role: "Mensajería y archivo" },
      { name: "Myriam Camargo Fiquitiva", role: "Contadora" },
      { name: "Johana Moncada", role: "Abogada" },
      { name: "Roberh Andres Muñoz", role: "Líder estratégico", note: "Nombre transcrito tal como aparece en el área administrativa del gráfico original." },
    ],
  },
];

export type StrategyPillar = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  steps: readonly string[];
};

export const strategyPillars: readonly StrategyPillar[] = [
  {
    id: "evangelizar",
    title: "Evangelizar",
    subtitle: "La Gran Comisión",
    description: "Acompañar a las personas desde el primer contacto con el evangelio hasta su integración a la vida de la iglesia.",
    steps: [
      "Personas alcanzadas en la iglesia, la calle y los grupos de conexión.",
      "Asignar un líder y acompañar la oración de fe.",
      "Dar seguimiento mediante una llamada y una visita.",
      "Asistir a un grupo de conexión y a la iglesia.",
      "Bautizar.",
    ],
  },
  {
    id: "discipular",
    title: "Discipular",
    subtitle: "Formación integral",
    description: "Desarrollar la fe y el servicio mediante la Escuela Dominical, la educación cristiana y una formación progresiva.",
    steps: [
      "Nivel 1: Discipulado.",
      "Retiro espiritual Peniel.",
      "Nivel 2: Identidad IDD.",
      "Abrir un grupo de conexión propio.",
      "Nivel 3: Sirviendo.",
      "Nivel 4: Liderazgo.",
    ],
  },
  {
    id: "multiplicar",
    title: "Multiplicar",
    subtitle: "Plantación y revitalización",
    description: "Formar líderes que discipulen a otros y acompañar la revitalización y la plantación de iglesias hijas.",
    steps: [
      "Continuar la formación: credenciales, bachillerato, licenciatura, maestría y doctorado.",
      "Cada persona discipula a otra.",
      "Los líderes abren grupos de conexión.",
      "Los líderes participan en la ruta de mentoreo.",
      "Plantar iglesias hijas a través de los grupos de conexión.",
    ],
  },
];

export type InstitutionalCalendarEvent = {
  title: string;
  dateLabel: string;
  startDate?: string;
  endDate?: string;
  format: "Virtual" | "Presencial";
  details?: string;
};

export type InstitutionalCalendarMonth = {
  month: number;
  name: string;
  slug: string;
  image: InstitutionalAsset;
  events: readonly InstitutionalCalendarEvent[];
};

export const calendar2026Theme =
  "Proyectando regiones fuertes, líderes firmes y una iglesia en expansión.";

const monthImage = (month: number, name: string, original: string) =>
  asset(`calendario-2026-${String(month).padStart(2, "0")}.png`, `Calendario institucional de ${name.toLowerCase()} de 2026 con la programación publicada`, 2000, 1414, original);

/** Dates absent from the original remain absent; modes follow text or the image legend. */
export const calendar2026: readonly InstitutionalCalendarMonth[] = [
  {
    month: 1, name: "Enero", slug: "enero",
    image: monthImage(1, "Enero", "bb8a41_35f4e20d263b4bbf8a01d7d283d2adcc~mv2.png"),
    events: [
      { title: "Conformación de equipos regionales y distritales", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Ayuno Nacional Temático", dateLabel: "15 al 23 de enero", startDate: "2026-01-15", endDate: "2026-01-23", format: "Virtual" },
      { title: "Apertura de credencialización", dateLabel: "24 de enero", startDate: "2026-01-24", format: "Virtual", details: "Obrero nacional, exhortador, ordenado y obispo." },
      { title: "Cierre de la primera etapa de inscripción LatinFest", dateLabel: "25 de enero", startDate: "2026-01-25", format: "Virtual" },
      { title: "Encuentro Nacional AWANA", dateLabel: "30 de enero", startDate: "2026-01-30", format: "Virtual" },
      { title: "Cumbre de Gran Comisión / SAN", dateLabel: "31 de enero", startDate: "2026-01-31", format: "Virtual" },
      { title: "Lanzamiento Nacional de Educación (FETP 2026)", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Inscripciones LatinFest 2026", dateLabel: "Todo el mes", startDate: "2026-01-01", endDate: "2026-01-31", format: "Virtual" },
      { title: "Gira LatinFest — Regiones 3, 4 y 5", dateLabel: "Día no indicado", format: "Presencial" },
    ],
  },
  {
    month: 2, name: "Febrero", slug: "febrero",
    image: monthImage(2, "Febrero", "bb8a41_05a21c8129864ee3a3e68d3abc105994~mv2.png"),
    events: [
      { title: "Solicitud del proceso de inscripción, aprobación y pago / Credencialización", dateLabel: "1 al 28 de febrero", startDate: "2026-02-01", endDate: "2026-02-28", format: "Virtual" },
      { title: "Diplomado de Misiones Contemporáneas y Derechos Humanos", dateLabel: "3 de febrero", startDate: "2026-02-03", format: "Virtual", details: "Misiones y Plantación." },
      { title: "Entrenamiento Grupos de Conexión — Perfil y ABC", dateLabel: "5 de febrero", startDate: "2026-02-05", format: "Virtual", details: "Plantación." },
      { title: "Encuentro nacional Plantadores Emergente", dateLabel: "14 y 15 de febrero", startDate: "2026-02-14", endDate: "2026-02-15", format: "Presencial", details: "Plantación." },
      { title: "Conquista / IDD Latinoamérica", dateLabel: "21 de febrero", startDate: "2026-02-21", format: "Presencial" },
      { title: "Lanzamiento Nacional y Socialización de Materiales / Ministerio Infantil", dateLabel: "20 y 21 de febrero", startDate: "2026-02-20", endDate: "2026-02-21", format: "Virtual" },
      { title: "Ayuno Nacional / Ministerio Infantil de la iglesia local", dateLabel: "28 de febrero", startDate: "2026-02-28", format: "Presencial" },
      { title: "Lanzamiento Nacional del Plan de Oración", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Lanzamiento del Plan Nacional de Cuidado Pastoral", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Culto Misionero Nacional", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Gira LatinFest — Región 1", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Mentoría 1: Identidad y propósito / H+", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
  {
    month: 3, name: "Marzo", slug: "marzo",
    image: monthImage(3, "Marzo", "bb8a41_947f737d143f4a1cb84459f62063e82a~mv2.png"),
    events: [
      { title: "Envío de material de estudio para exámenes / Credencialización", dateLabel: "1 al 7 de marzo", startDate: "2026-03-01", endDate: "2026-03-07", format: "Virtual" },
      { title: "Líder Labs", dateLabel: "12 al 14 de marzo", startDate: "2026-03-12", endDate: "2026-03-14", format: "Presencial" },
      { title: "Taller Nacional de Política de Protección / Ministerio Infantil", dateLabel: "20 de marzo", startDate: "2026-03-20", format: "Virtual" },
      { title: "Inicio Nacional de Escuelas de Discipulado (cartillas)", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Jornada Nacional de Oración", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Salud emocional del liderazgo", dateLabel: "Día no indicado", format: "Virtual", details: "Capacitación." },
      { title: "Gira FETP Capacitación — Región 1", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Encuentro Sincrónico Nacional de Líderes Misioneros", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Primer Encuentro Nacional de Plantación", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
  {
    month: 4, name: "Abril", slug: "abril",
    image: monthImage(4, "Abril", "bb8a41_9974dbedb94f482dadc81b72c5ac4c9a~mv2.png"),
    events: [
      { title: "Entrenamiento Ministerial Global (EMG)", dateLabel: "11 de abril", startDate: "2026-04-11", format: "Virtual" },
      { title: "Capacitación en herramientas de evangelización infantil", dateLabel: "17 de abril", startDate: "2026-04-17", format: "Virtual" },
      { title: "Aviva Kids — Niños ganando niños para Cristo", dateLabel: "25 y 26 de abril", startDate: "2026-04-25", endDate: "2026-04-26", format: "Presencial" },
      { title: "Semana Nacional de Intercesión por Colombia", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Culto Misionero Nacional", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Taller regional: Prevención del agotamiento pastoral", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Gira FETP Capacitación — Región 3", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Taller Nacional de Educación / FETP", dateLabel: "Día no indicado", format: "Presencial" },
    ],
  },
  {
    month: 5, name: "Mayo", slug: "mayo",
    image: monthImage(5, "Mayo", "bb8a41_584ac01f9de540a695b0cea4f1293bc5~mv2.png"),
    events: [
      { title: "Día del Maestro", dateLabel: "15 de mayo", startDate: "2026-05-15", format: "Presencial" },
      { title: "GO-DAY / IDD Latinoamérica", dateLabel: "23 de mayo", startDate: "2026-05-23", format: "Presencial" },
      { title: "Jornadas de promoción de materiales y firmatón del compromiso de protección por la niñez", dateLabel: "22 y 23 de mayo", startDate: "2026-05-22", endDate: "2026-05-23", format: "Virtual", details: "Ministerio Infantil." },
      { title: "Cierre de la segunda etapa de inscripción LatinFest", dateLabel: "24 de mayo", startDate: "2026-05-24", format: "Virtual" },
      { title: "Semana de Espiritualidad Pentecostal / IDD Latinoamérica", dateLabel: "31 de mayo al 7 de junio", startDate: "2026-05-31", endDate: "2026-06-07", format: "Presencial" },
      { title: "Jornada nacional: Familias sanas, iglesias fuertes", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Ayuno regional dirigido por cada supervisor regional y distrital", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Escuela de intercesión", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Mentoría 2: Sanidad emocional y liderazgo sano / H+", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
  {
    month: 6, name: "Junio", slug: "junio",
    image: monthImage(6, "Junio", "bb8a41_07252ace058a49d6894d4cca5b417ec5~mv2.png"),
    events: [
      { title: "Semana de Espiritualidad Pentecostal / IDD Latinoamérica", dateLabel: "1 al 7 de junio", startDate: "2026-06-01", endDate: "2026-06-07", format: "Presencial", details: "Continuación de la actividad iniciada el 31 de mayo." },
      { title: "Entrenamiento Grupos de Conexión — Perfil y ABC", dateLabel: "4 de junio", startDate: "2026-06-04", format: "Virtual" },
      { title: "Encuentro nacional Plantadores Emergente", dateLabel: "13 y 14 de junio", startDate: "2026-06-13", endDate: "2026-06-14", format: "Presencial" },
      { title: "21 días de oración por la niñez", dateLabel: "22 de junio al 12 de julio", startDate: "2026-06-22", endDate: "2026-07-12", format: "Virtual" },
      { title: "Culto Misionero Nacional", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Formación de Consejeros y Mentores Pastorales", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Gira FETP Capacitación — Región 4", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Vigilias de intercesión simultáneas por regiones", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Convocatoria Nacional de Misiones", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Cumbre Nacional de Capellanía", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Exámenes / Credencialización", dateLabel: "20 de junio al 18 de julio", startDate: "2026-06-20", endDate: "2026-07-18", format: "Virtual" },
    ],
  },
  {
    month: 7, name: "Julio", slug: "julio",
    image: monthImage(7, "Julio", "bb8a41_f3468edc77214b89ba242950b24324b6~mv2.png"),
    events: [
      { title: "21 días de oración por la niñez", dateLabel: "22 de junio al 12 de julio", startDate: "2026-06-22", endDate: "2026-07-12", format: "Virtual" },
      { title: "Preasamblea Latinoamericana", dateLabel: "24 y 25 de julio", startDate: "2026-07-24", endDate: "2026-07-25", format: "Presencial" },
      { title: "Asamblea Mundial IDD", dateLabel: "27 al 31 de julio", startDate: "2026-07-27", endDate: "2026-07-31", format: "Presencial" },
      { title: "Gira FETP Capacitación — Región 5", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Retiro Nacional de Intercesión y Oración", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Formación de Consejeros y Mentores Pastorales", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Exámenes / Credencialización", dateLabel: "20 de junio al 18 de julio", startDate: "2026-06-20", endDate: "2026-07-18", format: "Virtual" },
    ],
  },
  {
    month: 8, name: "Agosto", slug: "agosto",
    image: monthImage(8, "Agosto", "bb8a41_b70716f997644eb3815005b2920fd630~mv2.png"),
    events: [
      { title: "Firma de compromiso por la niñez y Festival Nacional Infantil Generación del Reino", dateLabel: "15 de agosto", startDate: "2026-08-15", format: "Presencial" },
      { title: "GE DAY", dateLabel: "22 de agosto", startDate: "2026-08-22", format: "Presencial" },
      { title: "Culto Misionero Nacional", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Jornada de acompañamiento familiar en las regiones", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Jornada de Oración por Misiones y Jóvenes", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Gira FETP Capacitación — Región 8", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Jornada Nacional de Consolidación — Conexión 2033", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Mentoría 3: Influencia y servicio con propósito / H+", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
  {
    month: 9, name: "Septiembre", slug: "septiembre",
    image: monthImage(9, "Septiembre", "bb8a41_db73db77f43348aa97b126d28af5c311~mv2.png"),
    events: [
      { title: "Asamblea Nacional 2026", dateLabel: "4 de septiembre", startDate: "2026-09-04", format: "Presencial", details: "Cartagena." },
      { title: "LatinFest 2026", dateLabel: "4 al 6 de septiembre", startDate: "2026-09-04", endDate: "2026-09-06", format: "Presencial", details: "Cartagena." },
      { title: "Día Latinoamericano de la Familia / IDD Latinoamérica", dateLabel: "19 de septiembre", startDate: "2026-09-19", format: "Presencial" },
      { title: "Espacio de bienestar y cuidado pastoral en LatinFest", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Jornada Nacional de Oración / Ministerio Infantil", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Semana Nacional de Intercesión por Colombia", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
  {
    month: 10, name: "Octubre", slug: "octubre",
    image: monthImage(10, "Octubre", "bb8a41_a71c70aa39f64c00a6243521475218e7~mv2.png"),
    events: [
      { title: "Entrenamiento Grupos de Conexión — Perfil y ABC", dateLabel: "1 de octubre", startDate: "2026-10-01", format: "Virtual" },
      { title: "Congreso de Capellanes", dateLabel: "10 al 12 de octubre", startDate: "2026-10-10", endDate: "2026-10-12", format: "Presencial" },
      { title: "Un Día Un Millón de Personas / IDD Latinoamérica", dateLabel: "17 de octubre", startDate: "2026-10-17", format: "Presencial" },
      { title: "Culto Misionero Nacional y Convocatoria Nacional de Misiones", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Jornada de Oración por la Nación y Elecciones", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Mes de la Biblia: Somos luz, somos vida / Ministerio Infantil", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Campaña nacional de prevención y sanidad emocional", dateLabel: "Día no indicado", format: "Presencial" },
    ],
  },
  {
    month: 11, name: "Noviembre", slug: "noviembre",
    image: monthImage(11, "Noviembre", "bb8a41_049c59f530a9435ea0cf3b1393d5515c~mv2.png"),
    events: [
      { title: "Retiro Nacional de Líderes / Ministerio Infantil", dateLabel: "14 al 16 de noviembre", startDate: "2026-11-14", endDate: "2026-11-16", format: "Presencial" },
      { title: "Graduación Nacional FETP", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Escuela de intercesión", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
  {
    month: 12, name: "Diciembre", slug: "diciembre",
    image: monthImage(12, "Diciembre", "bb8a41_b4b5fabe344140a4b1efffaa08913f36~mv2.png"),
    events: [
      { title: "Informe Nacional Final de Supervisión", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Informe Nacional de Plantación", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Informe Nacional de Capellanía", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Culto Misionero Nacional", dateLabel: "Día no indicado", format: "Presencial" },
      { title: "Informe Nacional de Intercesión", dateLabel: "Día no indicado", format: "Virtual" },
      { title: "Acción de Gracias e Intercesión", dateLabel: "Día no indicado", format: "Virtual" },
    ],
  },
];
