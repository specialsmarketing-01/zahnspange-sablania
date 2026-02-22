import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";

const SERVICE_KEYS = [
  "orthodontics",
  "invisibleBraces",
  "bracesChildren",
  "bracesAdults",
  "retainers",
  "oralHygieneMore",
] as const;

const SERVICE_HREFS = [
  "/kieferorthopaedie",
  "/unsichtbare-zahnspange-wien",
  "/zahnspange-fuer-kinder",
  "/zahnspange-fuer-erwachsene",
  "/kfo-retainer",
  "/leistungen",
];

const ICONS = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
  <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  <path key="6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
];

export default function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  const nd = dict.navDropdown;
  const descs = h.serviceCardDescriptions;
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {h.servicesTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {h.servicesSub}
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_KEYS.map((key, i) => (
            <article
              key={key}
              className="flex flex-col rounded-xl bg-white p-8 shadow-soft hover:shadow-soft-lg transition-shadow border border-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {ICONS[i]}
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-primary">
                {nd[key]}
              </h3>
              <p className="mt-2 flex-1 text-gray-600">{descs[i]}</p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <Link
                  href={getHref("/online-termin", locale)}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 sm:px-4 sm:text-sm whitespace-nowrap"
                >
                  {dict.common.ctaBook}
                </Link>
                <Link
                  href={getHref(SERVICE_HREFS[i], locale)}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-primary/20 px-3 py-2.5 text-xs font-semibold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 sm:px-4 sm:text-sm whitespace-nowrap"
                >
                  {dict.common.learnMore}
                  <svg className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href={getHref("/leistungen", locale)}
            className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
          >
            {dict.common.allServices}
          </Link>
        </div>
      </div>
    </section>
  );
}
