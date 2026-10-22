const configuredUrl = new URL(
  process.env.SITE_URL || "https://www.iglesiadedioscolombia.com",
);

if (
  !["http:", "https:"].includes(configuredUrl.protocol) ||
  configuredUrl.username ||
  configuredUrl.password ||
  configuredUrl.pathname !== "/" ||
  configuredUrl.search ||
  configuredUrl.hash
) {
  throw new Error("SITE_URL must be an HTTP(S) origin without a path or credentials.");
}

export const siteUrl = configuredUrl.origin;

// Never infer production from NODE_ENV: Vercel preview builds also use production.
export const isIndexable = process.env.VERCEL_ENV === "production";
