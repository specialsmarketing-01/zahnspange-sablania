import type { Dictionary } from "@/lib/dictionaries";

const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/Cd19fH_VsH0WEBM/review";

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

type ReviewItem = {
  name: string;
  text: string;
  date: string;
  rating?: number;
  badge?: string;
};

type HomepageGoogle = {
  googleRatingTrust: string;
  googleRatingScore: string;
  googleRatingReviews: string;
  googleRatingCta: string;
  googleRatingCtaSub?: string;
  googleRatingReviewsBlockTitle: string;
  googleRatingReviewsBlockSub: string;
  googleRatingExampleReviews: ReviewItem[];
};

export default function GoogleRating({ dict }: { dict: Dictionary }) {
  const h = dict.homepage as typeof dict.homepage & HomepageGoogle;
  const reviews = h.googleRatingExampleReviews ?? [];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#f4f7fb] via-white to-[#f8fafc] py-16 sm:py-20"
      aria-labelledby="google-rating-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(15,46,92,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-100/80 bg-white p-8 shadow-[0_22px_50px_-12px_rgba(15,46,92,0.12)] ring-1 ring-gray-100 sm:rounded-xl sm:p-10">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:text-xs">
            {h.googleRatingTrust}
          </p>

          <div className="mt-6 flex justify-center gap-1 sm:gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className="h-7 w-7 text-amber-400 drop-shadow-sm sm:h-8 sm:w-8"
              />
            ))}
          </div>

          <h2
            id="google-rating-heading"
            className="mt-5 text-center text-5xl font-bold tabular-nums tracking-tight text-gray-900 sm:text-6xl"
          >
            {h.googleRatingScore}
          </h2>

          <p className="mt-3 text-center text-base text-gray-600 sm:text-lg">
            {h.googleRatingReviews}
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
            {h.googleRatingCtaSub ? (
              <p className="max-w-sm text-center text-xs leading-relaxed text-gray-500 sm:text-sm">
                {h.googleRatingCtaSub}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl text-center">
          <h3
            id="google-reviews-block-heading"
            className="text-2xl font-bold tracking-tight text-primary sm:text-3xl"
          >
            {h.googleRatingReviewsBlockTitle}
          </h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-500 sm:text-base">
            {h.googleRatingReviewsBlockSub}
          </p>
        </div>

        <ul
          className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3"
          aria-labelledby="google-reviews-block-heading"
        >
          {reviews.map((review, index) => {
            const stars = review.rating ?? 5;
            return (
              <li key={`${review.name}-${index}`}>
                <article className="group flex h-full flex-col rounded-xl border border-gray-100/90 bg-white p-6 text-left shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <div className="flex gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0f2e5c]/8 text-base font-bold text-[#0f2e5c]"
                      aria-hidden
                    >
                      {avatarLetter(review.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold leading-snug text-gray-900">{review.name}</p>
                      {review.badge ? (
                        <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-orange-600">
                          {review.badge}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-3 flex gap-0.5 text-[#f59e0b]">
                    {Array.from({ length: stars }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-gray-400">{review.date}</p>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">{review.text}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
