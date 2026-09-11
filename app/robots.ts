import type { MetadataRoute } from "next";

const base = "https://www.jyothivermiculite.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/admin/" },
      { userAgent: "OAI-SearchBot", allow: "/", disallow: "/admin/" },
      { userAgent: "ClaudeBot", allow: "/", disallow: "/admin/" },
      { userAgent: "PerplexityBot", allow: "/", disallow: "/admin/" },
      { userAgent: "Googlebot", allow: "/", disallow: "/admin/" },
      { userAgent: "Google-Extended", allow: "/", disallow: "/admin/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
