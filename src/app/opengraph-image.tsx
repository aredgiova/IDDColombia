import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Iglesia de Dios en Colombia. Una fe que nos une. Un lugar para ti.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#153e6f", color: "white", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 80px", fontFamily: "sans-serif" }}><div style={{ fontSize: 30, display: "flex" }}>Iglesia de Dios en Colombia</div><div style={{ display: "flex", flexDirection: "column", fontSize: 78, lineHeight: 1.12, letterSpacing: "-3px" }}><div>Una fe que nos une.</div><div style={{ color: "#9cc7ed" }}>Un lugar para ti.</div></div><div style={{ display: "flex", fontSize: 22, color: "#d5e4f3" }}>iglesiadedioscolombia.com</div></div>, size);
}
