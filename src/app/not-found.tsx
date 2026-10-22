import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  return <main id="contenido" className="container not-found"><h1>No encontramos esta página.</h1><p>Puedes volver al inicio para conocer la iglesia, encontrar una congregación o consultar nuestros recursos.</p><Link href="/" className="button button-primary">Volver al inicio <Icon name="arrow-right" /></Link></main>;
}
