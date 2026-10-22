import type { Metadata } from "next";
import Link from "next/link";
import { PostPreview } from "@/components/blog/post-preview";
import { blogPosts } from "@/data/blog";
import { site } from "@/config/site";
import { siteUrl } from "@/lib/site-url";
import { serializeJsonLd } from "@/lib/blog";

const title = "Blog cristiano: fe, juventud y familia | Iglesia de Dios";
const description = "Reflexiones de la Iglesia de Dios en Colombia sobre la fe, los valores cristianos, la juventud y la familia. Encuentra una lectura para tu vida en comunidad.";
const featured = blogPosts.find((post) => post.slug === "juventud-colombiana-esperanza") ?? blogPosts[0];

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: "/blog" },
  openGraph: { title, description, url: "/blog", type: "website", locale: "es_CO", siteName: site.name,
    images: [{ url: featured.image.src, width: featured.image.width, height: featured.image.height, alt: featured.image.alt }] },
  twitter: { card: "summary_large_image", title, description, images: [featured.image.src] },
};

export default function BlogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Blog", "@id": `${siteUrl}/blog#blog`, url: `${siteUrl}/blog`, name: `Blog de ${site.name}`, description, inLanguage: "es-CO",
        publisher: { "@type": "Organization", name: site.name, url: siteUrl },
        blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `${siteUrl}/blog/${post.slug}`, datePublished: post.publishedAt })) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      ] },
    ],
  };

  return (
    <main id="contenido">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }} />
      <div className="container">
        <nav className="blog-breadcrumb" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><span aria-current="page">Blog</span></nav>
        <header className="blog-introduction">
          <h1>Blog</h1>
          <p>Reflexiones sobre la fe, la familia y el lugar de cada generación en nuestra comunidad.</p>
        </header>
        <section className="blog-stories" aria-label="Artículos del blog">
          <PostPreview post={featured} featured />
          <div className="blog-secondary-stories">
            {blogPosts.filter((post) => post.slug !== featured.slug).map((post) => <PostPreview key={post.slug} post={post} />)}
          </div>
        </section>
        <aside className="blog-community" aria-labelledby="blog-community-title">
          <div><h2 id="blog-community-title">La fe también se comparte en persona.</h2><p>Encuentra una congregación y conoce a nuestra comunidad.</p></div>
          <Link href="/iglesias" className="button button-primary">Encontrar una iglesia</Link>
        </aside>
      </div>
    </main>
  );
}
