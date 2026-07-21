import type { Metadata } from "next";
import type { Locale } from "@/lib/paths";
import { DE_TO_EN } from "@/lib/paths";
import { SITE_URL } from "@/lib/site";
import { DEFAULT_OG_IMAGE } from "@/lib/practiceInfo";

const base = SITE_URL.replace(/\/$/, "");

/**
 * Absolute URL for a German path in the given locale.
 */
export function absoluteUrl(dePath: string, locale: Locale): string {
  if (dePath === "/") {
    return locale === "de" ? `${base}/` : `${base}/en`;
  }
  if (locale === "de") return `${base}${dePath}`;
  const en = DE_TO_EN[dePath] ?? "/en";
  return `${base}${en}`;
}

/**
 * Reciprocal hreflang: de-AT, en, x-default (German URL).
 */
export function languageAlternates(dePath: string): Metadata["alternates"] {
  const deUrl = absoluteUrl(dePath, "de");
  const enUrl = absoluteUrl(dePath, "en");
  return {
    canonical: undefined, // set by caller
    languages: {
      "de-AT": deUrl,
      en: enUrl,
      "x-default": deUrl,
    },
  };
}

type BuildMetadataOptions = {
  title: string;
  description: string;
  dePath: string;
  locale: Locale;
  /** Override canonical absolute URL when it differs from dePath mapping */
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
  /** When true, bypass the root layout title template */
  absoluteTitle?: boolean;
  /**
   * When true, only emit de-AT + x-default (no English alternate).
   * Use for German-only articles without an EN equivalent.
   */
  deOnly?: boolean;
  openGraphType?: "website" | "article";
};

/**
 * Unique page metadata with canonical, hreflang, Open Graph and Twitter cards.
 */
export function buildPageMetadata({
  title,
  description,
  dePath,
  locale,
  canonicalPath,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
  absoluteTitle = false,
  deOnly = false,
  openGraphType = "website",
}: BuildMetadataOptions): Metadata {
  const canonicalDePath = canonicalPath ?? dePath;
  const canonical =
    locale === "de"
      ? absoluteUrl(canonicalDePath, "de")
      : absoluteUrl(canonicalDePath, "en");

  const deUrl = absoluteUrl(dePath === "/" ? "/" : canonicalDePath, "de");
  const languages = deOnly
    ? { "de-AT": deUrl, "x-default": deUrl }
    : languageAlternates(dePath)?.languages;

  const descriptionTrimmed = description.slice(0, 160);
  const ogImageAbs = ogImage.startsWith("http") ? ogImage : `${base}${ogImage}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: descriptionTrimmed,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description: descriptionTrimmed,
      url: canonical,
      siteName: "Zahnspange Sablania",
      locale: locale === "de" ? "de_AT" : "en",
      type: openGraphType,
      images: [{ url: ogImageAbs }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: descriptionTrimmed,
      images: [ogImageAbs],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
