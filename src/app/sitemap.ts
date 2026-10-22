import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { aboutPages } from "@/data/about-navigation";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/iglesias`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/biblioteca`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/quienes-somos`, changeFrequency: "monthly", priority: 0.8 },
    ...aboutPages.map((page) => ({
      url: `${siteUrl}${page.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.modifiedAt ?? post.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: [`${siteUrl}${post.image.src}`],
    })),
  ];
}
