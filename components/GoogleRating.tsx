import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  GOOGLE_REVIEWS_CONTENT,
  GOOGLE_VIEW_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
  formatManualReviewCount,
  formatManualScore,
} from "@/lib/googleReviewsContent";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function avatarLetter(name: string) {
  const trimmed = name.trim();
  for (let i = 0; i < trimmed.length; i++) {
    const c = trimmed[i];
    if (/[A-Za-zÀ-ÖØ-öø-ÿ]/.test(c)) return c.toUpperCase();
  }
  return trimmed.charAt(0).toUpperCase() || "?";
}

type HomepageGoogle = {
  googleRatingTrust: string;
  googleRatingCta: string;
  googleRatingCtaSub?: string;
  googleRatingReviewsBlockTitle: string;
  googleRatingReviewsBlockSub: string;
  googleRatingViewAll?: string;
};

export default function GoogleRating({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const h = dict.homepage as typeof dict.homepage & HomepageGoogle;
  const lang = locale === "en" ? "en" : "de";
  const content = GOOGLE_REVIEWS_CONTENT[lang];
  const scoreLabel = formatManualScore(content.rating);
  const reviewsLabel = formatManualReviewCount(lang, content.reviewCount);
  const viewAllLabel =
    h.googleRatingViewAll ??
    (lang === "de" ? "Bewertungen auf Google ansehen" : "View reviews on Google");

  return (
    <section className="bg-gray-50" aria-labelledby="google-rating-heading">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
            {h.googleRatingTrust}
          </p>

          <div className="mt-6 flex justify-center gap-1 sm:gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className="h-7 w-7 text-amber-400 sm:h-8 sm:w-8"
              />
            ))}
          </div>

          <h2
            id="google-rating-heading"
            className="mt-5 text-center text-5xl font-bold tabular-nums tracking-tight text-gray-900 sm:text-6xl"
          >
            {scoreLabel}
          </h2>

          <p className="mt-3 text-center text-base text-gray-600 sm:text-lg">
            {reviewsLabel}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#0f2e5c] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#163d78] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f2e5c] focus-visible:ring-offset-2 sm:text-base"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 shrink-0 opacity-90 transition-transform group-hover:scale-105"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                {h.googleRatingCta}
              </span>
            </a>
            <a
              href={GOOGLE_VIEW_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#0f2e5c] underline-offset-2 hover:underline"
            >
              {viewAllLabel}
            </a>
            {h.googleRatingCtaSub ? (
              <p className="max-w-sm text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
                {h.googleRatingCtaSub}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3
            id="google-reviews-block-heading"
            className="text-3xl font-bold tracking-tight text-gray-900"
          >
            {h.googleRatingReviewsBlockTitle}
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            {h.googleRatingReviewsBlockSub}
          </p>
        </div>

        <ul
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          aria-labelledby="google-reviews-block-heading"
        >
          {content.reviews.map((review, index) => {
            const stars = review.rating ?? 5;
            return (
              <li key={`${review.name}-${index}`}>
                <article className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f2e5c]/10 text-lg font-semibold text-[#0f2e5c]"
                      aria-hidden
                    >
                      {avatarLetter(review.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-lg font-semibold leading-snug text-gray-900">{review.name}</p>
                      {review.badge ? (
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-orange-600">
                          {review.badge}
                        </p>
                      ) : null}
                      {review.sourceLabel ? (
                        <p className="mt-1 text-xs font-medium text-gray-500">{review.sourceLabel}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-3 flex gap-1 text-lg text-yellow-500">
                    {Array.from({ length: stars }).map((_, i) => (
                      <StarIcon key={i} className="h-[1.125rem] w-[1.125rem] shrink-0" />
                    ))}
                  </div>

                  {review.date ? (
                    <p className="mt-2 text-sm text-gray-500">{review.date}</p>
                  ) : null}

                  <p className="mt-3 text-gray-700 leading-relaxed">{review.text}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
