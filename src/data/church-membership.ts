export type MembershipReport = {
  churchId: string;
  count: number;
  approximate: boolean;
  sourceUrl: string;
  sourceQuote: string;
  reportedAt: string | null;
};

// This is the date the public source was checked, not a membership census date.
export const dataVerificationDate = "2026-10-16";

const sourceUrl = "https://www.iglesiadedioscolombia.com/iglesiasdedios";

// Only explicitly identified membership is included. Attendance figures and
// historical references are excluded. These reports do not establish totals
// for a department; see docs/investigacion/mapa-datos-fuentes.md.
export const membershipReports: readonly MembershipReport[] = [
  {
    churchId: "barranquilla-origen",
    count: 23,
    approximate: false,
    sourceUrl,
    sourceQuote: "membresía de 23 personas activos",
    reportedAt: null,
  },
  {
    churchId: "soledad-calle-53a1",
    count: 40,
    approximate: true,
    sourceUrl,
    sourceQuote: "con un total de 40 miembros aproximadamente",
    reportedAt: null,
  },
];
