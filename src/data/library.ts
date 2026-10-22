export type LibraryFolder = {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  updatedAt: string;
  updatedLabel: string;
  sourceUrl: string;
  directFolderLink: boolean;
};

export const librarySourceUrl = "https://www.iglesiadedioscolombia.com/biblioteca";

// Public folder metadata only. File names and downloads require member access.
// Source evidence and scope: docs/BIBLIOTECA-CONTENIDO.md.
export const libraryFolders: readonly LibraryFolder[] = [
  {
    id: "logos",
    name: "Logos",
    description: "Logos compartidos por la iglesia.",
    itemCount: 19,
    updatedAt: "2024-12-17",
    updatedLabel: "17 dic 2024",
    sourceUrl: `${librarySourceUrl}/b3c2719b-7e69-4ed1-ab7b-d68e5b7ff650`,
    directFolderLink: true,
  },
  {
    id: "credencializacion",
    name: "Credencialización",
    description: "Recursos agrupados en la carpeta de credencialización.",
    itemCount: 2,
    updatedAt: "2024-12-17",
    updatedLabel: "17 dic 2024",
    sourceUrl: librarySourceUrl,
    directFolderLink: false,
  },
  {
    id: "educacion-fetp",
    name: "Educación (FETP)",
    description: "Recursos agrupados en la carpeta de educación FETP.",
    itemCount: 2,
    updatedAt: "2024-12-17",
    updatedLabel: "17 dic 2024",
    sourceUrl: librarySourceUrl,
    directFolderLink: false,
  },
];
