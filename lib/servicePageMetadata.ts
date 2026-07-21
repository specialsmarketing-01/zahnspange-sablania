import type { Metadata } from "next";
import type { Locale } from "@/lib/paths";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

export function getServicePageMetadata(dePath: string, locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const title = (dict.routeTitles as Record<string, string>)[dePath] ?? dePath;
  const lead = (dict.pageLeads as Record<string, string>)[dePath] ?? "";
  return buildPageMetadata({
    title,
    description: lead || title,
    dePath,
    locale,
  });
}
