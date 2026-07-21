/**
 * German article / blog registry.
 * English equivalents are optional — omit `enPath` for DE-only articles.
 */

export type ArticleMeta = {
  /** German URL path including leading slash */
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  ogTitle: string;
  ogDescription: string;
  image: string;
  imageAlt: string;
  datePublished: string; // ISO date YYYY-MM-DD
  dateModified: string;
  articleSection: string;
};

/** Published German articles (newest first). */
export const ARTICLES_DE: ArticleMeta[] = [
  {
    slug: "/wahlkieferorthopaede-vertragskieferorthopaede-oegk",
    title: "Wahlkieferorthopäde oder Vertragskieferorthopäde: Was bezahlt die ÖGK?",
    excerpt:
      "Einfach erklärt: der Unterschied zwischen Kassen- und Wahlkieferorthopädie, IOTN 4–5 und möglicher ÖGK-Kostenerstattung.",
    seoTitle: "Wahl- oder Vertragskieferorthopäde: Was zahlt die ÖGK?",
    seoDescription:
      "Was ist der Unterschied zwischen Wahl- und Vertragskieferorthopäden? Erfahren Sie, wann die ÖGK eine Zahnspange bezahlt oder Kosten rückerstattet.",
    ogTitle: "Wahl- oder Vertragskieferorthopäde: Was zahlt die ÖGK?",
    ogDescription:
      "Einfach erklärt: Kassenbehandlung, Wahlkieferorthopädie, Gratis Zahnspange und mögliche ÖGK-Kostenerstattung.",
    image: "/gratis-zahnspange/Zahnarzt-1-e1671695799854.png",
    imageAlt:
      "Beratung zur Zahnspange und ÖGK-Kostenerstattung beim Kieferorthopäden in Wien",
    datePublished: "2026-07-21",
    dateModified: "2026-07-21",
    articleSection: "Kieferorthopädie und Krankenversicherung",
  },
];

/** German-only article paths for the sitemap (no English twin). */
export const ARTICLE_DE_ONLY_PATHS: string[] = ARTICLES_DE.map((a) => a.slug);

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ARTICLES_DE.find((a) => a.slug === slug);
}
