import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";

export default function AboutSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {h.aboutTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {h.aboutText}
          </p>
          <div className="mt-10">
            <Link
              href={getHref("/ueber-mich", locale)}
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-soft hover:bg-primary/90 transition-colors"
            >
              {h.aboutLink}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
