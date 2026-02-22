import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { BOOKING_URL } from "@/lib/site";

const PRIMARY = "#0f2e5c";

type HomepageHero = {
  heroBadge?: string;
  heroHeadlineMain?: string;
  heroHeadlineAccent?: string;
  heroDescription?: string;
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
  heroInfo?: string;
  heroTitle?: string;
  heroSubline?: string;
  heroCta?: string;
  heroContact?: string;
};

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage as unknown as HomepageHero;
  const badge = h.heroBadge ?? "";
  const headlineMain = h.heroHeadlineMain ?? h.heroTitle ?? "";
  const headlineAccent = h.heroHeadlineAccent ?? "";
  const description = h.heroDescription ?? h.heroSubline ?? "";
  const ctaPrimary = h.heroCtaPrimary ?? h.heroCta ?? "";
  const ctaSecondary = h.heroCtaSecondary ?? h.heroContact ?? "";
  const info = h.heroInfo ?? "";

  return (
    <section className="bg-[#f8f9fb] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* LEFT COLUMN */}
          <div className="text-center lg:text-left">
            {badge && (
              <span
                className="inline-block rounded-full bg-[#0f2e5c]/10 px-4 py-2 text-sm font-medium text-[#0f2e5c]"
              >
                {badge}
              </span>
            )}

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#1e293b] lg:text-5xl">
              {headlineMain}
              {headlineAccent && (
                <span className="block text-[#0f2e5c] lg:inline">
                  {" "}{headlineAccent}
                </span>
              )}
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[#163d78]"
                style={{ backgroundColor: PRIMARY }}
              >
                {ctaPrimary}
              </a>
              <a
                href="tel:+4313306090"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-[#1e293b] transition-colors hover:bg-gray-100"
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

            {info && (
              <p className="mt-4 text-sm text-gray-500">
                {info}
              </p>
            )}
          </div>

          {/* RIGHT COLUMN: Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="/herobg.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
