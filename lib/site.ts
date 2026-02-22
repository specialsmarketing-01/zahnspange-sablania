/**
 * Zentraler Konfiguration für Routen, Navigation und SEO.
 * Alle Slugs ausschließlich auf Deutsch.
 */

const DEFAULT_SITE_URL = "https://www.zahnspange-sablania.at";
const _raw = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
export const SITE_URL =
  typeof _raw === "string" && _raw.length > 0 ? _raw : DEFAULT_SITE_URL;

/** External booking system – all "Termin buchen" / "Book appointment" links open this URL */
export const BOOKING_URL = "http://zahnspange-sablania.termin365.at/";

/** Safe URL for metadataBase – never throws */
export function getMetadataBase(): URL {
  try {
    const url = new URL(SITE_URL);
    if (url.protocol === "http:" || url.protocol === "https:") return url;
  } catch {
    // ignore
  }
  return new URL(DEFAULT_SITE_URL);
}

export interface RouteItem {
  path: string;
  title: string;
  description?: string;
}

/** Alle Seiten für Sitemap und interne Verweise */
export const ALL_ROUTES: RouteItem[] = [
  { path: "/", title: "Startseite" },
  { path: "/leistungen", title: "Leistungen" },
  { path: "/ueber-mich", title: "Über mich" },
  { path: "/unsere-ordination", title: "Unsere Ordination" },
  { path: "/unser-team", title: "Unser Team" },
  { path: "/ablauf-zahnspange-kieferorthopaedie", title: "Ablauf Zahnspange & Kieferorthopädie" },
  { path: "/kieferorthopaedie", title: "Kieferorthopädie" },
  { path: "/gratis-zahnspange", title: "Gratis Zahnspange" },
  { path: "/unsichtbare-zahnspange-wien", title: "Unsichtbare Zahnspange Wien" },
  { path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange", title: "Unsichtbare Zahnspange Lingual" },
  { path: "/zahnspange-fuer-kinder", title: "Zahnspange für Kinder" },
  { path: "/zahnspange-fuer-jugendliche", title: "Zahnspange für Jugendliche" },
  { path: "/zahnspange-fuer-erwachsene", title: "Zahnspange für Erwachsene" },
  { path: "/myofunktionelle-therapie", title: "Myofunktionelle Therapie" },
  { path: "/kfo-retainer", title: "KFO Retainer" },
  { path: "/durchsichtige-zahnspange", title: "Durchsichtige Zahnspange" },
  { path: "/mundhygiene-wien", title: "Mundhygiene Wien" },
  { path: "/zahnbleaching", title: "Zahnbleaching" },
  { path: "/komposit-zahnfuellung", title: "Komposit-Zahnfüllung" },
  { path: "/krone-bruecke", title: "Krone & Brücke" },
  { path: "/zahnersatz", title: "Zahnersatz" },
  { path: "/sportschutz-mouthguards", title: "Sportschutz Mouthguards" },
  { path: "/vorher-nachher-fotos", title: "Vorher & Nachher Fotos" },
  { path: "/faqs", title: "FAQs" },
  { path: "/online-termin", title: "Online Termin" },
  { path: "/impressum", title: "Impressum" },
  { path: "/datenschutz", title: "Datenschutz" },
];

/** Navigation: Hauptmenü inkl. Leistungen-Dropdown */
export const NAV_MAIN = [
  { href: "/", label: "Startseite" },
  {
    label: "Leistungen",
    href: "/leistungen",
    children: [
      { href: "/kieferorthopaedie", label: "Kieferorthopädie" },
      { href: "/unsichtbare-zahnspange-wien", label: "Unsichtbare Zahnspange" },
      { href: "/zahnspange-fuer-kinder", label: "Zahnspange für Kinder" },
      { href: "/zahnspange-fuer-jugendliche", label: "Zahnspange für Jugendliche" },
      { href: "/zahnspange-fuer-erwachsene", label: "Zahnspange für Erwachsene" },
      { href: "/myofunktionelle-therapie", label: "Myofunktionelle Therapie" },
      { href: "/kfo-retainer", label: "Retainer" },
      { href: "/mundhygiene-wien", label: "Mundhygiene" },
      { href: "/zahnbleaching", label: "Zahnbleaching" },
      { href: "/zahnersatz", label: "Zahnersatz" },
    ],
  },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/unsere-ordination", label: "Unsere Ordination" },
  { href: "/unser-team", label: "Unser Team" },
  { href: "/vorher-nachher-fotos", label: "Vorher & Nachher" },
  { href: "/faqs", label: "FAQs" },
  { href: "/online-termin", label: "Online Termin" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

/** Footer: Hauptlinks (ohne alle Unterseiten) */
export const FOOTER_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/unsere-ordination", label: "Unsere Ordination" },
  { href: "/unser-team", label: "Unser Team" },
  { href: "/vorher-nachher-fotos", label: "Vorher & Nachher" },
  { href: "/faqs", label: "FAQs" },
  { href: "/online-termin", label: "Online Termin" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function getRouteByPath(path: string): RouteItem | undefined {
  return ALL_ROUTES.find((r) => r.path === path || (path !== "/" && r.path === path));
}

export function getBreadcrumbItems(pathname: string): { href: string; label: string }[] {
  if (pathname === "/") return [{ href: "/", label: "Startseite" }];
  const route = getRouteByPath(pathname);
  if (route) return [{ href: "/", label: "Startseite" }, { href: pathname, label: route.title }];
  const segments = pathname.split("/").filter(Boolean);
  const items = [{ href: "/", label: "Startseite" }];
  let acc = "";
  for (const seg of segments) {
    acc += `/${seg}`;
    const r = getRouteByPath(acc);
    items.push({ href: acc, label: r?.title ?? seg });
  }
  return items;
}
