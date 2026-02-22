/**
 * Path mapping: German (default, root) <-> English (/en with English slugs).
 * No /de in URLs. German = root paths, English = /en/... with translated slugs.
 */

export type Locale = "de" | "en";

/** German path (root) -> English path (under /en) */
export const DE_TO_EN: Record<string, string> = {
  "/": "/en",
  "/leistungen": "/en/services",
  "/kieferorthopaedie": "/en/orthodontics",
  "/zahnspange-fuer-kinder": "/en/braces-for-children",
  "/zahnspange-fuer-jugendliche": "/en/braces-for-teens",
  "/zahnspange-fuer-erwachsene": "/en/braces-for-adults",
  "/unsichtbare-zahnspange-wien": "/en/invisible-braces",
  "/myofunktionelle-therapie": "/en/myofunctional-therapy",
  "/kfo-retainer": "/en/retainers",
  "/mundhygiene-wien": "/en/oral-hygiene",
  "/zahnbleaching": "/en/teeth-whitening",
  "/zahnersatz": "/en/dental-prosthetics",
  "/ueber-mich": "/en/about",
  "/ueber-uns": "/en/about-practice",
  "/unsere-ordination": "/en/practice",
  "/unser-team": "/en/team",
  "/vorher-nachher": "/en/before-after",
  "/vorher-nachher-fotos": "/en/before-after",
  "/kontakt": "/en/contact",
  "/online-termin": "/en/book-appointment",
  "/faqs": "/en/faqs",
  "/impressum": "/en/imprint",
  "/datenschutz": "/en/privacy-policy",
  "/ablauf-zahnspange-kieferorthopaedie": "/en/treatment-process",
  "/gratis-zahnspange": "/en/free-braces",
  "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange": "/en/lingual-braces",
  "/durchsichtige-zahnspange": "/en/clear-aligners",
  "/komposit-zahnfuellung": "/en/composite-fillings",
  "/krone-bruecke": "/en/crown-bridge",
  "/sportschutz-mouthguards": "/en/sports-mouthguards",
};

/** English path -> German path (root) */
export const EN_TO_DE: Record<string, string> = Object.fromEntries(
  Object.entries(DE_TO_EN).map(([de, en]) => [en, de])
);

/** All German paths for sitemap/nav (root) */
export const DE_PATHS = Object.keys(DE_TO_EN) as string[];

/** All English paths for sitemap/nav */
export const EN_PATHS = Object.values(DE_TO_EN);

/**
 * Get the equivalent URL for the other locale.
 * pathname: current pathname (e.g. /leistungen or /en/services)
 * targetLocale: 'de' | 'en'
 */
export function getPathForLocale(pathname: string, targetLocale: Locale): string {
  const normalized = pathname?.replace(/\/$/, "") || "/";
  const path = normalized === "" ? "/" : normalized;
  if (targetLocale === "de") {
    return EN_TO_DE[path] ?? "/";
  }
  // Already on English path: keep it; else convert German path to English
  if (path.startsWith("/en")) return path;
  return DE_TO_EN[path] ?? "/en";
}

/**
 * True if pathname is an English route (under /en).
 */
export function isEnglishPath(pathname: string): boolean {
  return pathname?.startsWith("/en") ?? false;
}

/**
 * Current locale from pathname: 'de' (root) or 'en' (/en/...).
 */
export function getLocaleFromPathname(pathname: string): Locale {
  return isEnglishPath(pathname) ? "en" : "de";
}

/**
 * Href for a given German path and locale. Use for nav/footer links.
 */
export function getHref(dePath: string, locale: Locale): string {
  return locale === "de" ? dePath : (DE_TO_EN[dePath] ?? "/en");
}
