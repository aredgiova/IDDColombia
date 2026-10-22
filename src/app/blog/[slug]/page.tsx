import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/data/blog";
import { site } from "@/config/site";
import { siteUrl } from "@/lib/site-url";
import { formatBlogDate, serializeJsonLd } from "@/lib/blog";
import { PostPreview } from "@/components/blog/post-preview";
import { Icon } from "@/components/ui/icon";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  return {
    title: { absolute: post.seoTitle }, description: post.description,
    authors: [{ name: post.author, url: post.authorProfileUrl }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article", title: post.seoTitle, description: post.description, url: `/blog/${post.slug}`,
      siteName: site.name, locale: "es_CO", publishedTime: post.publishedAt,
      ...(post.modifiedAt ? { modifiedTime: post.modifiedAt } : {}),
      authors: [post.author], section: post.topic,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }],
    },
    twitter: { card: "summary_large_image", title: post.seoTitle, description: post.description, images: [post.image.src] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const url = `${siteUrl}/blog/${post.slug}`;
  const showUpdated = post.modifiedAt && formatBlogDate(post.modifiedAt) !== formatBlogDate(post.publishedAt);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BlogPosting", "@id": `${url}#article`, url, mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: post.title, description: post.description, inLanguage: "es-CO", articleSection: post.topic,
        image: { "@type": "ImageObject", url: `${siteUrl}${post.image.src}`, width: post.image.width, height: post.image.height },
        datePublished: post.publishedAt, ...(post.modifiedAt ? { dateModified: post.modifiedAt } : {}),
        author: { "@type": "Person", name: post.author, url: post.authorProfileUrl },
        publisher: { "@type": "Organization", name: site.name, url: siteUrl },
        isPartOf: { "@type": "Blog", "@id": `${siteUrl}/blog#blog`, url: `${siteUrl}/blog` },
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ] },
    ],
  };

  return (
    <main id="contenido">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }} />
      <div className="container">
        <nav className="blog-breadcrumb" aria-label="Ruta de navegación"><Link href="/">Inicio</Link><span aria-hidden="true">/</span><Link href="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{post.topic}</span></nav>
        <article className="blog-article" aria-labelledby="article-title">
          <header className="article-header">
            <h1 id="article-title">{post.title}</h1>
            <p className="post-meta"><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time><span aria-hidden="true">·</span><span>{post.readingMinutes} min de lectura</span></p>
            <p className="article-byline">Por {post.author}{showUpdated && <> <span aria-hidden="true">·</span> Actualizado el <time dateTime={post.modifiedAt}>{formatBlogDate(post.modifiedAt!)}</time></>}</p>
          </header>
          <div className={`article-image${post.image.fit === "contain" ? " post-image-contain" : ""}`}>
            <Image src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} sizes="(max-width: 767px) 100vw, 1040px" preload />
          </div>
          <div className="article-body">
            {post.blocks.map((block, index) => {
              if (block.type === "heading") {
                const Heading = block.level === 3 ? "h3" : "h2";
                return <Heading key={block.id} id={block.id}>{block.text}</Heading>;
              }
              if (block.type === "list") return <ul key={index}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
              return <p key={index}>{block.text}</p>;
            })}
            <div className="article-return"><Link href="/blog" className="text-link">Ver todos los artículos<Icon name="arrow-right" /></Link></div>
          </div>
        </article>
        <section className="blog-related" aria-labelledby="related-title">
          <h2 id="related-title">Sigue leyendo</h2>
          <div className="blog-secondary-stories">{blogPosts.filter((other) => other.slug !== post.slug).map((other) => <PostPreview key={other.slug} post={other} />)}</div>
        </section>
      </div>
    </main>
  );
}
