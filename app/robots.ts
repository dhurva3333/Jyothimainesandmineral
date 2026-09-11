import type { MetadataRoute } from "next";

const base = "https://www.jyothivermiculite.com";
const publicRules = { allow: "/", disallow: "/admin/" };

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", ...publicRules },
      { userAgent: "OAI-SearchBot", ...publicRules },
      { userAgent: "OAI-AdsBot", ...publicRules },
      { userAgent: "ClaudeBot", ...publicRules },
      { userAgent: "Claude-User", ...publicRules },
      { userAgent: "PerplexityBot", ...publicRules },
      { userAgent: "Googlebot", ...publicRules },
      { userAgent: "Google-Extended", ...publicRules },
      { userAgent: "Bingbot", ...publicRules },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
