import { churches } from "@/data/churches";
import { colombiaDepartments } from "@/data/colombia-departments";
import { membershipReports } from "@/data/church-membership";

export type DepartmentChurchData = {
  id: string;
  name: string;
  churchCount: number;
  cities: string[];
  memberCount: number | null;
  approximate: boolean;
  memberReports: { churchName: string; city: string; count: number; approximate: boolean }[];
};

// Count published directory entries, never infer a national census or turn
// attendance into membership. Missing membership remains null, not zero.
export const churchMapData: DepartmentChurchData[] = colombiaDepartments.map((department) => {
  const entries = churches.filter((church) => church.departmentCode === department.id);
  const memberReports = entries.flatMap((church) => {
    const report = membershipReports.find((item) => item.churchId === church.id);
    return report ? [{ churchName: church.name, city: church.city, count: report.count, approximate: report.approximate }] : [];
  });

  return {
    ...department,
    churchCount: entries.length,
    cities: [...new Set(entries.map((church) => church.city))].sort((a, b) => a.localeCompare(b, "es")),
    memberCount: memberReports.length ? memberReports.reduce((total, report) => total + report.count, 0) : null,
    approximate: memberReports.some((report) => report.approximate),
    memberReports,
  };
});
