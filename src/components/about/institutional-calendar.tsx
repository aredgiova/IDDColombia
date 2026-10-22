"use client";

import { useState } from "react";
import { calendar2026 } from "@/data/institutional-resources";
import { InstitutionalDocument } from "./institutional-document";

export function InstitutionalCalendar() {
  const [monthIndex, setMonthIndex] = useState(0);
  const month = calendar2026[monthIndex];

  return <div className="institutional-calendar">
    <div className="calendar-controls"><div><label htmlFor="calendar-month">Consultar un mes</label><select id="calendar-month" value={monthIndex} onChange={(event) => setMonthIndex(Number(event.target.value))}>{calendar2026.map((item, i) => <option key={item.month} value={i}>{item.name} de 2026</option>)}</select></div><p>Calendario institucional · 2026</p></div>
    <section aria-labelledby="calendar-month-title">
      <h2 id="calendar-month-title">{month.name} de 2026</h2>
      <p aria-live="polite" className="sr-only">{month.name}: {month.events.length} actividades publicadas.</p>
      {month.events.length > 0 ? <ul className="calendar-event-list">{month.events.map((event, i) => <li key={`${month.month}-${i}`}>
        <div className="calendar-event-date">{event.startDate ? <time dateTime={event.startDate}>{event.dateLabel}</time> : event.dateLabel}</div>
        <div><h3>{event.title}</h3>{event.details && <p>{event.details}</p>}<span className="calendar-event-format">{event.format}</span></div>
      </li>)}</ul> : <p>No hay actividades detalladas para este mes. Consulta la lámina institucional.</p>}
      <InstitutionalDocument key={month.month} image={month.image} caption={`Ver la lámina original de ${month.name.toLowerCase()}`} />
    </section>
    <div className="calendar-month-footer"><button type="button" disabled={monthIndex === 0} onClick={() => setMonthIndex((i) => i - 1)}>Mes anterior</button><button type="button" disabled={monthIndex === calendar2026.length - 1} onClick={() => setMonthIndex((i) => i + 1)}>Mes siguiente</button></div>
  </div>;
}
