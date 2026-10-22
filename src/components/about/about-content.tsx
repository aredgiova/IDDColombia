import Link from "next/link";
import { ExternalLink } from "@/components/ui/external-link";
import { Icon } from "@/components/ui/icon";
import { InstitutionalDocument } from "./institutional-document";
import { faithStatements, globalHistoryMilestones, historyAttribution, historyMilestones, historySocialWork, internationalLinks, type HistoryMilestone } from "@/data/about-narrative";
import { institutionalAssets, institutionalAxes, institutionalMission, institutionalVision, organizationGroups, strategyPillars } from "@/data/institutional-resources";
import type { AboutSlug } from "@/lib/about";

function Timeline({ milestones }: { milestones: readonly HistoryMilestone[] }) {
  return <ol className="institutional-timeline">{milestones.map((milestone) => <li key={milestone.year}>
    <p className="timeline-year">{milestone.year}</p><div><h3>{milestone.title}</h3>{milestone.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
  </li>)}</ol>;
}

function HistoryContent() {
  return <>
    <section aria-labelledby="colombia-history"><h2 id="colombia-history">Nuestra historia en Colombia</h2><Timeline milestones={historyMilestones} /></section>
    <section aria-labelledby="social-history"><h2 id="social-history">Servir también es parte de nuestra historia</h2>{historySocialWork.map((p) => <p key={p}>{p}</p>)}</section>
    <section aria-labelledby="global-history"><h2 id="global-history">Nuestras raíces en el mundo</h2><Timeline milestones={globalHistoryMilestones} /><Link className="text-link" href="/quienes-somos/iglesia-internacional">Conocer la iglesia internacional <Icon name="arrow-right" /></Link></section>
    <div className="institutional-source"><p>{historyAttribution}</p></div>
  </>;
}

function MissionContent() {
  return <>
    <div className="institutional-statement"><h2>Nuestra misión</h2><p>{institutionalMission}</p></div>
    <div className="institutional-statement"><h2>Nuestra visión</h2><p>{institutionalVision}</p></div>
    <section aria-labelledby="mission-ejes" style={{ marginTop: 48 }}><h2 id="mission-ejes">Ejes de nuestra visión</h2><ul className="institutional-axes">{institutionalAxes.map((axis) => <li key={axis}>{axis}</li>)}</ul><Link className="text-link" href="/quienes-somos/ruta-estrategica">Explorar la ruta estratégica <Icon name="arrow-right" /></Link></section>
    <InstitutionalDocument image={institutionalAssets.mission} caption="Ver la misión en su documento original" />
    <InstitutionalDocument image={institutionalAssets.vision} caption="Ver la visión en su documento original" />
  </>;
}

function FaithContent() {
  return <>
    <nav aria-label="Índice de la declaración de fe"><ol className="institutional-faith-index">{faithStatements.map((statement, i) => <li key={statement.title}><a href={`#creencia-${i + 1}`}>{statement.title}</a></li>)}</ol></nav>
    <section aria-labelledby="faith-creemos"><h2 id="faith-creemos">Creemos</h2><ol className="institutional-faith-list">{faithStatements.map((statement, i) => <li id={`creencia-${i + 1}`} key={statement.title}><h3>{statement.title}</h3><p>{statement.text}</p></li>)}</ol></section>
  </>;
}

function OrganizationContent() {
  return <>
    {organizationGroups.map((group) => <section key={group.id} aria-labelledby={`group-${group.id}`}><h2 id={`group-${group.id}`}>{group.title}</h2>
      <dl className="institutional-people">{group.members.map((person) => <div className="institutional-person" key={`${person.name}-${person.role}`}><dt>{person.name}</dt><dd>{person.role}</dd>{"note" in person && person.note && <dd className="person-note">{person.note}</dd>}</div>)}</dl>
    </section>)}
    <p className="institutional-editorial-note">La asignación de la Región 2 aparece repetida en el organigrama publicado. Se conserva la información del documento mientras se confirma con la oficina nacional.</p>
    <InstitutionalDocument image={institutionalAssets.organization} caption="Consultar el organigrama completo" expanded />
    <p className="institutional-source">Cargos y nombres según el organigrama institucional publicado. Para confirmar una asignación, <Link href="/#contacto">contacta con la oficina nacional</Link>.</p>
  </>;
}

function StrategyContent() {
  return <>
    {strategyPillars.map((pillar) => <section className="institutional-strategy" key={pillar.id} aria-labelledby={`strategy-${pillar.id}`}><h2 id={`strategy-${pillar.id}`}>{pillar.title}</h2><h3>{pillar.subtitle}</h3><p>{pillar.description}</p><ol>{pillar.steps.map((step) => <li key={step}>{step}</li>)}</ol></section>)}
    <section aria-labelledby="strategy-documents"><h2 id="strategy-documents">La ruta en sus documentos</h2><p>Consulta los esquemas completos para conocer la relación entre los ejes, los procesos y las etapas de la ruta.</p>
      <InstitutionalDocument image={institutionalAssets.strategyOverview} caption="Ver el panorama de la ruta estratégica" expanded />
      <InstitutionalDocument image={institutionalAssets.strategyDetail} caption="Ver los ejes y procesos de la ruta" />
      <InstitutionalDocument image={institutionalAssets.strategyTimeline} caption="Ver el recorrido de implementación" />
    </section>
    <Link className="text-link" href="/calendario">Consultar el calendario institucional <Icon name="arrow-right" /></Link>
  </>;
}

function InternationalContent() {
  return <>
    <section aria-labelledby="international-websites"><h2 id="international-websites">Conecta con nuestra familia de fe</h2><p>Encuentra información y recursos en los sitios de la Iglesia de Dios internacional y de Latinoamérica.</p>
      <div style={{ marginTop: 28 }}>{internationalLinks.map((link) => <ExternalLink className="institutional-international-link" href={link.href} key={link.href}>
        <div><h3>{link.title}</h3><p>{link.description}</p><p className="international-language">{link.language} · {new URL(link.href).hostname}</p></div><Icon name="arrow-up-right" />
      </ExternalLink>)}</div>
    </section>
    <section aria-labelledby="international-roots"><h2 id="international-roots">Una historia que compartimos</h2><p>Nuestros orígenes se remontan a 1886, en Tennessee, Estados Unidos. Aquella comunidad dio paso a un movimiento de evangelización, formación y servicio del que somos parte en Colombia.</p><Link className="text-link" href="/quienes-somos/historia#global-history">Explorar nuestras raíces <Icon name="arrow-right" /></Link></section>
    <section aria-labelledby="international-document"><h2 id="international-document">Panorama institucional</h2><p>Esta pieza conmemora 139 años desde 1886 y presenta las cifras de ese momento. Es una referencia histórica de la comunidad internacional.</p><InstitutionalDocument image={institutionalAssets.internationalOverview} caption="Ver el panorama internacional conmemorativo" /></section>
  </>;
}

export function AboutContent({ slug }: { slug: AboutSlug }) {
  switch (slug) {
    case "historia": return <HistoryContent />;
    case "mision-y-vision": return <MissionContent />;
    case "declaracion-de-fe": return <FaithContent />;
    case "organizacion": return <OrganizationContent />;
    case "ruta-estrategica": return <StrategyContent />;
    case "iglesia-internacional": return <InternationalContent />;
  }
}
