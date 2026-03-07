import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

/** Anchor on homepage: DE = /#id, EN = /en#id */
function homeAnchor(hash: string, locale: Locale): string {
  const base = locale === "en" ? "/en" : "";
  return `${base}#${hash}`;
}

const OVERLAY_BLUE = "bg-[#0f2e5c]/75";

export default function HeroSpecialtiesSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.homepage as Record<string, unknown>;
  const orthoTitle = (h.heroSpecialtyOrthoTitle as string) ?? (locale === "en" ? "Orthodontics" : "Kieferorthopädie");
  const orthoDesc = (h.heroSpecialtyOrthoDescription as string) ?? "";
  const orthoLinkText = (h.heroSpecialtyOrthoLinkText as string) ?? (locale === "en" ? "Learn more" : "Mehr erfahren");
  const generalTitle = (h.heroSpecialtyGeneralTitle as string) ?? (locale === "en" ? "General Dentistry" : "Allgemeine Zahnheilkunde");
  const generalDesc = (h.heroSpecialtyGeneralDescription as string) ?? "";
  const generalLinkText = (h.heroSpecialtyGeneralLinkText as string) ?? (locale === "en" ? "Learn more" : "Mehr erfahren");

  const cards = [
    {
      title: orthoTitle,
      description: orthoDesc,
      linkText: orthoLinkText,
      href: homeAnchor("kieferorthopaedie", locale),
      image: "/hero-orthodontics.jpg",
      imageAlt: locale === "en" ? "Orthodontics and braces" : "Kieferorthopädie und Zahnspangen",
    },
    {
      title: generalTitle,
      description: generalDesc,
      linkText: generalLinkText,
      href: homeAnchor("leistungen", locale),
      image: "/hero-general-dentistry.jpg",
      imageAlt: locale === "en" ? "General dentistry" : "Allgemeine Zahnheilkunde",
    },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-10">
          {cards.map((card) => (
            <article
              key={card.href}
              className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border-2 border-gray-200/80 min-h-[280px] sm:min-h-[360px] sm:rounded-2xl md:min-h-[420px]"
            >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 639px) 100vw, 50vw"
            />
            {/* Blue overlay (replacing purple) - site default #0f2e5c */}
            <div className={`absolute inset-0 ${OVERLAY_BLUE}`} aria-hidden />
            {/* Content: title + description + button, all white, centered */}
            <div className="relative flex flex-col items-center justify-center p-4 text-center sm:p-6 md:p-8 lg:p-10">
              <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                {card.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/95 sm:mt-4 sm:text-base md:leading-loose">
                {card.description}
              </p>
              <div className="mt-5 sm:mt-6">
                <Link
                  href={card.href}
                  className="inline-flex items-center rounded-lg border-2 border-white bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0f2e5c] sm:rounded-xl sm:px-6 sm:py-3 sm:text-base"
                >
                  {card.linkText}
                  <svg
                    className="ml-2 h-4 w-4 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}
