import { notFound } from "next/navigation";
import { AboutShell } from "@/components/about/about-shell";
import { AboutContent } from "@/components/about/about-content";
import { aboutDetails, institutionalMetadata, type AboutSlug } from "@/lib/about";

type Props = { params: Promise<{ slug: string }> };

function getSlug(slug: string): AboutSlug {
  if (!Object.hasOwn(aboutDetails, slug)) notFound();
  return slug as AboutSlug;
}

export function generateStaticParams() {
  return Object.keys(aboutDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const slug = getSlug((await params).slug);
  const page = aboutDetails[slug];
  return institutionalMetadata(page.title, page.description, `/quienes-somos/${slug}`);
}

export default async function InstitutionalPage({ params }: Props) {
  const slug = getSlug((await params).slug);
  return <AboutShell {...aboutDetails[slug]} path={`/quienes-somos/${slug}`}><AboutContent slug={slug} /></AboutShell>;
}
