import type { DepartmentCode } from "@/data/colombia-departments";

export type Church = {
  id: string;
  departmentCode: DepartmentCode;
  city: string;
  name: string;
  address: string;
  pastors: string;
  email: string;
  phone: string;
  schedule: string;
  history: string;
  sourceUrl: string;
  emailNeedsConfirmation?: boolean;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const sourceUrl = "https://www.iglesiadedioscolombia.com/iglesiasdedios";

// Public directory snapshot. Editorial decisions and unresolved source issues
// are recorded in docs/DIRECTORIO-CONTENIDO.md.
export const churches: readonly Church[] = [
  {
    id: "bogota-tintal",
    departmentCode: "11",
    city: "Bogotá",
    name: "Iglesia de Dios Tintal",
    address: "Calle 66 Sur # 81-59",
    pastors: "Miguel Angel Ruano O y Stella Cárdenas Agudelo",
    email: "stellitacardenas08@hotmail.com",
    phone: "+573124322467",
    schedule: "Miércoles 7:00 p. m. y domingos 9:00 a. m. Grupo familiar.",
    history:
      "Nació a partir de la necesidad de una familia. La comunidad se formó como grupo y comparte la palabra en los hogares.",
    sourceUrl,
    image: {
      src: "/images/comunidad-bogota.webp",
      alt: "Comunidad reunida en el interior de la iglesia publicada en la ficha de Bogotá",
      width: 1400,
      height: 1050,
    },
  },
  {
    id: "barranquilla-origen",
    departmentCode: "08",
    city: "Barranquilla",
    name: "Iglesia Origen",
    address: "Calle 51 # 8-12, Santuario",
    pastors: "Jaciel Millet y Erlinda Martinez",
    email: "erlyjak@gmail.com",
    phone: "+573114804418",
    schedule:
      "Martes: estudios bíblicos 7:00 p. m.; jueves: 7:00 p. m.; sábado: ayuno 10:00 a. m. y culto juvenil 6:00 p. m.; domingos: escuela dominical 9:00 a. m.",
    history:
      "Inició el 14 de junio de 2015. Se presenta como una familia en Cristo dedicada a la restauración mediante el amor y la palabra.",
    sourceUrl,
  },
  {
    id: "cucuta-apasionados",
    departmentCode: "54",
    city: "Cúcuta",
    name: "Iglesia de Dios Apasionados por su presencia",
    address: "Calle 36 No. 2e-04",
    pastors: "Cristina Sanchez Parra",
    email: "cris84sanchez@hotmail.com",
    phone: "+573114949130",
    schedule:
      "Domingos: culto familiar 10:00 a. m.; martes: culto de oración 7:00 p. m.; viernes: ensayo de danzas 6:00 p. m.; sábados: ensayo de alabanza 10:00 a. m. y escuela dominical 4:00 p. m.",
    history:
      "Se formó tras la llegada de los pastores Dariel Zorro y Cristina Sanchez a Cúcuta el 15 de abril de 2012.",
    sourceUrl,
    image: {
      src: "/images/iglesia-cucuta.webp",
      alt: "Fachada de la iglesia publicada en la ficha de Cúcuta",
      width: 1400,
      height: 787,
    },
  },
  {
    id: "medellin-manrique",
    departmentCode: "05",
    city: "Medellín",
    name: "Iglesia de Dios",
    address: "Cra. 45 # 84-39, Manrique",
    pastors: "Wilson Rafael Cano y Elian P. Vásquez",
    email: "wilson_cano04@hotmail.com",
    phone: "+573002788136",
    schedule:
      "Domingo 10:00 a. m.; miércoles 7:00 p. m.; sábado 9:30 a. m.",
    history:
      "Nació como grupo familiar en 1994. Su historia reconoce el servicio de varios pastores en la formación de la congregación.",
    sourceUrl,
  },
  {
    id: "piendamo-loma-corta",
    departmentCode: "19",
    city: "Piendamó",
    name: "Iglesia de Dios Monte Hored",
    address: "Vereda Loma Corta, Piendamó (Cauca)",
    pastors: "Dagoberto Causaya y Helen Damay Camayo",
    email: "causayasuarezdagoberto@gmail.com",
    phone: "+573206776051",
    schedule: "Domingo 10:00 a. m. y miércoles 7:00 p. m.",
    history:
      "La congregación nació en la vereda Loma Corta, en Piendamó. Su reseña también menciona una iglesia hija en Santa Helena.",
    sourceUrl,
  },
  {
    id: "piendamo-san-pedro",
    departmentCode: "19",
    city: "Piendamó",
    name: "Iglesia de Dios Nueva Vida San Pedro",
    address: "Vereda San Pedro",
    pastors: "Alida Zambrano Chaguendo",
    email: "azambranochaguendo@gmail.com",
    phone: "+573117165988",
    schedule:
      "Domingos 10:00 a. m.; miércoles 7:00 p. m.; viernes 8:00 a. m.; sábado 7:00 p. m.",
    history:
      "Nació a principios de 2020 con participación de familias Misak. Después de reuniones en hogares, inauguró su templo en septiembre de 2023.",
    sourceUrl,
  },
  {
    id: "planeta-rica-restauracion",
    departmentCode: "23",
    city: "Planeta Rica",
    name: "Iglesia de Dios Restauración",
    address: "Calle 23a # 5a-50",
    pastors: "Camilo Vargas y Yoelis Luna",
    email: "camilovargas47@gmail.com",
    phone: "+573114376887",
    schedule: "Domingos 9:00 a. m. y martes 7:00 p. m.",
    history:
      "Comenzó en 1983 en el barrio San Martín con una visión de restauración. Su reseña destaca el acompañamiento a las familias.",
    sourceUrl,
  },
  {
    id: "santa-marta-mamatoco",
    departmentCode: "47",
    city: "Santa Marta",
    name: "Iglesia de Dios",
    address: "Diagonal 33 # 7: 26: Mamatoco",
    pastors: "Eduardo Díaz y Angélica María Cantero",
    email: "diazeduardocaba@gomeil.com",
    emailNeedsConfirmation: true,
    phone: "+573045600225",
    schedule:
      "Miércoles: capacitación para toda la congregación a las 7:00 p. m.",
    history:
      "La comunidad destaca su disposición de servicio y la bienvenida a sus visitantes, a quienes ofrece compañía, palabra de Dios y amor.",
    sourceUrl,
  },
  {
    id: "soledad-carrera-13",
    departmentCode: "08",
    city: "Soledad",
    name: "Iglesia de Dios",
    address: "Carrera 13 # 53-27",
    pastors: "Rafael de Jesús Polo Igirio y Claudia Inés Pérez Mendoza",
    email: "lunanegra0212@gmail.com",
    phone: "+573114052838",
    schedule: "Miércoles, sábados y domingos.",
    history:
      "La congregación se presenta como una comunidad llamada a la restauración de las familias en Soledad.",
    sourceUrl,
  },
  {
    id: "soledad-calle-53a1",
    departmentCode: "08",
    city: "Soledad",
    name: "Iglesia de Dios",
    address: "Calle 53A1 No. 15D-09",
    pastors: "Mario Jiménez y Rosiris Noriega",
    email: "choperena2013@gmail.com",
    phone: "+573226816539",
    schedule:
      "Miércoles: servicio de oración 7:00–8:00 p. m.; sábados: ayunos 8:30 a. m.–12:00 m.; domingo: escuela dominical 8:30–10:00 a. m.",
    history:
      "La reseña de esta congregación expresa que Cristo Jesús es el centro de todo lo que hace.",
    sourceUrl,
  },
];
