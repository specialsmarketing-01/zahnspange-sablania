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
        <div className="mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-soft-lg hover:bg-white/95 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
          >
            {h.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
