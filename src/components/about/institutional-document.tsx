import Image from "next/image";

type DocumentImage = { src: string; alt: string; width: number; height: number };

export function InstitutionalDocument({ image, caption, expanded = false }: { image: DocumentImage; caption: string; expanded?: boolean }) {
  return <div className="institutional-document">
    <details open={expanded || undefined}>
      <summary>{caption}</summary>
      <figure>
        <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`${caption}: abrir imagen completa en otra pestaña`}>
          <Image src={image.src} width={image.width} height={image.height} alt={image.alt} sizes="(max-width: 767px) calc(100vw - 40px), 860px" />
        </a>
        <figcaption><span>Documento institucional original</span><a href={image.src} download>Descargar imagen</a></figcaption>
      </figure>
    </details>
  </div>;
}
