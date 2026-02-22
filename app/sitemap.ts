import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { DE_PATHS, EN_PATHS } from "@/lib/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL.replace(/\/$/, "");
  const entries: MetadataRoute.Sitemap = [];

  for (const path of DE_PATHS) {
    const urlPath = path === "/" ? "" : path;
    entries.push({
      url: `${baseUrl}${urlPath}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? "weekly" : ("monthly" as const),
      priority: path === "/" ? 1 : 0.8,
    });
  }

  for (const path of EN_PATHS) {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "/en" ? "weekly" : ("monthly" as const),
      priority: path === "/en" ? 1 : 0.8,
    });
  }

  return entries;
}
