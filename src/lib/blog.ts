export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric", month: "long", year: "numeric", timeZone: "America/Bogota",
  }).format(new Date(value));
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
