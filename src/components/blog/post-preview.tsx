import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { BlogPost } from "@/data/blog";
import { formatBlogDate } from "@/lib/blog";

export function PostPreview({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const href = `/blog/${post.slug}`;

  return (
    <article className={`post-preview${featured ? " post-preview-featured" : ""}`} aria-labelledby={`preview-${post.slug}`}>
      <Link href={href} className={`post-preview-image${post.image.fit === "contain" ? " post-image-contain" : ""}`} tabIndex={-1} aria-hidden="true">
        <Image src={post.image.src} alt="" width={post.image.width} height={post.image.height}
          style={{ objectPosition: post.image.previewPosition }}
          sizes={featured ? "(max-width: 767px) 100vw, 55vw" : "(max-width: 767px) 100vw, 50vw"}
          preload={featured} />
      </Link>
      <div className="post-preview-copy">
        <h2 id={`preview-${post.slug}`}><Link href={href}>{post.title}</Link></h2>
        <p className="post-meta"><span>{post.topic}</span><span aria-hidden="true">·</span><time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time><span aria-hidden="true">·</span><span>{post.readingMinutes} min de lectura</span></p>
        <p className="post-excerpt">{post.excerpt}</p>
        <Link href={href} className="text-link">Leer artículo<span className="sr-only">: {post.title}</span><Icon name="arrow-right" /></Link>
      </div>
    </article>
  );
}
