import { AboutShell } from "@/components/about/about-shell";
import { InstitutionalCalendar } from "@/components/about/institutional-calendar";
import { InstitutionalDocument } from "@/components/about/institutional-document";
import { calendar2026Theme, institutionalAssets } from "@/data/institutional-resources";
import { institutionalMetadata } from "@/lib/about";
import "../quienes-somos/quienes-somos.css";

const title = "Calendario 2026";
const description = "Consulta por mes las actividades, encuentros y espacios de formación del calendario 2026 de la Iglesia de Dios en Colombia.";
export const metadata = institutionalMetadata(title, description, "/calendario");

export default function CalendarPage() {
  return <AboutShell title={title} description={description} path="/calendario" introduction="Encuentros, formación y espacios para servir juntos. Explora las actividades de nuestra agenda institucional de 2026.">
    <InstitutionalCalendar />
    <section className="institutional-calendar-theme"><h2>El propósito que nos reúne en 2026</h2><p>{calendar2026Theme}</p><InstitutionalDocument image={institutionalAssets.calendarCover} caption="Ver la portada del calendario 2026" /></section>
    <p className="institutional-source">Programación según el calendario institucional publicado para 2026. Antes de planear tu participación, confirma los detalles con la iglesia o el ministerio organizador.</p>
  </AboutShell>;
}
