import type { NextConfig } from "next";
import { blogPosts } from "./src/data/blog";

const aboutRedirects = [
  { source: "/historia", destination: "/quienes-somos/historia" },
  { source: "/misión-y-visión", destination: "/quienes-somos/mision-y-vision" },
  { source: "/organigrama", destination: "/quienes-somos/organizacion" },
  { source: "/copia-de-organigrama", destination: "/quienes-somos/ruta-estrategica" },
  { source: "/copia-de-historia", destination: "/calendario" },
  { source: "/declaración-de-fe", destination: "/quienes-somos/declaracion-de-fe" },
  { source: "/iglesia-internacional", destination: "/quienes-somos/iglesia-internacional" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: "/iglesiasdedios",
        destination: "/iglesias",
        permanent: true,
      },
      ...aboutRedirects.map((redirect) => ({
        source: encodeURI(redirect.source),
        destination: redirect.destination,
        permanent: true,
      })),
      ...blogPosts.map((post) => ({
        source: encodeURI(post.legacyPath),
        destination: `/blog/${post.slug}`,
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
