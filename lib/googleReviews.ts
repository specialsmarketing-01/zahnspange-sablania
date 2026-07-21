import type { Locale } from "@/lib/i18n";

const REVALIDATE_SECONDS = 60 * 60 * 6; // 6 hours

export type GoogleReview = {
  name: string;
  text: string;
  date: string;
  rating: number;
  badge?: string;
};

export type GoogleReviewsData = {
  rating: number;
  total: number;
  reviews: GoogleReview[];
};

type PlacesReview = {
  author_name?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

type PlacesDetailsResult = {
  rating?: number;
  user_ratings_total?: number;
  reviews?: PlacesReview[];
};

type PlacesDetailsResponse = {
  status: string;
  result?: PlacesDetailsResult;
  error_message?: string;
};

function mapReviews(reviews: PlacesReview[] | undefined): GoogleReview[] {
  if (!reviews?.length) return [];
  return reviews
    .filter((r) => r.author_name && r.text)
    .slice(0, 5)
    .map((r) => ({
      name: r.author_name as string,
      text: (r.text as string).trim(),
      date: r.relative_time_description ?? "",
      rating: typeof r.rating === "number" ? Math.round(r.rating) : 5,
    }));
}

/**
 * Fetches live rating + up to 5 reviews from Google Places (Place Details).
 * Returns null when credentials are missing or the request fails (caller uses static fallback).
 */
export async function getGoogleReviews(locale: Locale): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  const language = locale === "en" ? "en" : "de";
  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total,reviews");
  url.searchParams.set("language", language);
  url.searchParams.set("reviews_sort", "most_relevant");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.error("[googleReviews] HTTP error", res.status);
      return null;
    }

    const data = (await res.json()) as PlacesDetailsResponse;

    if (data.status !== "OK" || !data.result) {
      console.error("[googleReviews] Places API error", data.status, data.error_message);
      return null;
    }

    const rating = data.result.rating;
    const total = data.result.user_ratings_total;

    if (typeof rating !== "number" || typeof total !== "number") {
      return null;
    }

    return {
      rating,
      total,
      reviews: mapReviews(data.result.reviews),
    };
  } catch (err) {
    console.error("[googleReviews] fetch failed", err);
    return null;
  }
}

export function formatGoogleScore(template: string, score: number): string {
  const formatted = Number.isInteger(score) ? String(score) : score.toFixed(1);
  return template.replace("{score}", formatted);
}

export function formatGoogleReviewCount(template: string, count: number): string {
  return template.replace("{count}", String(count));
}
