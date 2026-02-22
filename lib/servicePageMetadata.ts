import type { Metadata } from "next";
import type { Locale } from "@/lib/paths";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { DE_TO_EN } from "@/lib/paths";

export function getServicePageMetadata(dePath: string, locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const title = (dict.routeTitles as Record<string, string>)[dePath] ?? dePath;
  const lead = (dict.pageLeads as Record<string, string>)[dePath] ?? "";
  const enPath = DE_TO_EN[dePath];
  const canonical = locale === "de" ? `${SITE_URL}${dePath}` : `${SITE_URL}${enPath}`;
  return {
    title,
    description: lead.slice(0, 160),
    alternates: {
      canonical,
      languages: { de: `${SITE_URL}${dePath}`, en: `${SITE_URL}${enPath ?? "/en"}` },
    },
  };
}
