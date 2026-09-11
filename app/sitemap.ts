import type { MetadataRoute } from "next";
import { getApplications, getProducts } from "@/lib/data/repository";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.jyothivermiculite.com";
  const [{ data: applications }, { data: products }] = await Promise.all([getApplications(), getProducts()]);

  const staticRoutes = ["/", "/about", "/applications", "/products", "/research", "/technical", "/technical/coa", "/technical/particle-sizes", "/technical/safety", "/technical/specifications", "/technical/testing", "/contact"];

  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...applications.map((item) => ({ url: `${base}/applications/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...products.map((item) => ({ url: `${base}/products/${item.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
