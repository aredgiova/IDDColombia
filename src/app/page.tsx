import { Hero } from "@/components/home/hero";
import { AboutSection, ChurchesSection, MinistriesSection } from "@/components/home/community-sections";
import { ResourcesSection } from "@/components/home/resources-section";
import { ContactSection } from "@/components/home/contact-section";

export default function Home() {
  return <main id="contenido"><Hero /><AboutSection /><ChurchesSection /><MinistriesSection /><ResourcesSection /><ContactSection /></main>;
}
