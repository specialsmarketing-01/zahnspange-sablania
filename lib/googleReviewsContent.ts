/**
 * Manually managed Google review section content.
 * Update rating, reviewCount and reviews here — no API required.
 */

export type StaticGoogleReview = {
  name: string;
  text: string;
  rating: number;
  date?: string;
  /** e.g. Local Guide */
  badge?: string;
  /** Optional visible label such as "Google Review" */
  sourceLabel?: string;
};

export type LocaleReviews = {
  rating: number;
  reviewCount: number;
  reviews: StaticGoogleReview[];
};

/** Write-a-review URL (existing g.page link) */
export const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/Cd19fH_VsH0WEBM/review";

/** View reviews on Google (practice Google profile) */
export const GOOGLE_VIEW_REVIEWS_URL = "https://g.page/r/Cd19fH_VsH0WEBM";

/**
 * Manual aggregate rating and sample reviews shown on the homepage.
 * Values are configured here, not fetched from any API.
 */
export const GOOGLE_REVIEWS_CONTENT: Record<"de" | "en", LocaleReviews> = {
  de: {
    rating: 4.8,
    reviewCount: 91,
    reviews: [
      {
        name: "Nikol Rastoka",
        text: "Sie haben mir vollständig alles über die Zahnspange erklärt und was gemacht wird, Schritt für Schritt. Sehr vorsichtig im Umgang mit Patienten. Ich kann es nur weiterempfehlen.",
        date: "vor 1 Monat",
        rating: 5,
        sourceLabel: "Google-Bewertung",
      },
      {
        name: "Momina Khurshid",
        text: "I had a very pleasant experience. I was quite scared, but the doctor was very patient and explained everything clearly. Highly recommended.",
        date: "vor 6 Monaten",
        rating: 5,
        badge: "Local Guide",
        sourceLabel: "Google-Bewertung",
      },
      {
        name: "Christian GE.",
        text: "Super Arzt, sehr freundlich und kompetent. Schmerzlose Behandlung. So ein Arzt macht mich glücklich.",
        date: "vor 2 Tagen",
        rating: 5,
        sourceLabel: "Google-Bewertung",
      },
    ],
  },
  en: {
    rating: 4.8,
    reviewCount: 91,
    reviews: [
      {
        name: "Nikol Rastoka",
        text: "They explained absolutely everything about the braces and what would be done, step by step. Very considerate with patients. I can only recommend.",
        date: "1 month ago",
        rating: 5,
        sourceLabel: "Google Review",
      },
      {
        name: "Momina Khurshid",
        text: "I had a very pleasant experience. I was quite scared, but the doctor was very patient and explained everything clearly. Highly recommended.",
        date: "6 months ago",
        rating: 5,
        badge: "Local Guide",
        sourceLabel: "Google Review",
      },
      {
        name: "Christian GE.",
        text: "Excellent dentist, very friendly and competent. Painless treatment. A doctor like this makes me happy.",
        date: "2 days ago",
        rating: 5,
        sourceLabel: "Google Review",
      },
    ],
  },
};

export function formatManualScore(score: number): string {
  return Number.isInteger(score) ? `${score} / 5` : `${score.toFixed(1)} / 5`;
}

export function formatManualReviewCount(locale: "de" | "en", count: number): string {
  return locale === "de"
    ? `Basierend auf ${count} Google-Bewertungen`
    : `Based on ${count} Google reviews`;
}
