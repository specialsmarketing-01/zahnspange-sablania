import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { BOOKING_URL } from "@/lib/site";

export default function CTASection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {h.ctaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {h.ctaSub}
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-soft-lg hover:bg-white/95 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            {h.ctaButton}
          </a>
          <a
            href="tel:+4313306090"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/90 bg-white/10 px-8 py-4 text-base font-semibold text-white shadow-soft transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            aria-label={
              locale === "de"
                ? "Anrufen: +43 1 3306090"
                : "Call +43 1 3306090"
            }
          >
            <svg
              className="h-5 w-5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z"
              />
            </svg>
            +43 1 3306090
          </a>
        </div>
      </div>
    </section>
  );
}
