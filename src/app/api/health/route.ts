export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { success: true, status: "ok", service: "web-api" },
    { headers: { "Cache-Control": "no-store" } },
  );
}
