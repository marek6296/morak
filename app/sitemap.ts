import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://morak.sk";
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now, priority: 1 },
    { url: `${base}/kontakt`, lastModified: now, priority: 0.8 },
    ...SERVICES.map((s) => ({
      url: `${base}/${s.slug}`,
      lastModified: now,
      priority: 0.9
    }))
  ];
}
