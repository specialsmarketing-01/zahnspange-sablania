import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const IMG = {
  hero: "/asethetic-dental-services/Zaehne-Sportschutz.png",
  airflow: "/sportschutz-mouthguards/ems-airflow-prophylaxis-master.png",
} as const;

/** Page copy — verbatim from source (spelling unchanged). */
const COPY = {
  headline: "Genießen Sie Ihren Sport mit Zahnspangen",
  definition:
    "Mundschutz ist eine individuell angefertigte, selbstentfernbare Vorrichtung aus Gummimaterial, die Ihre Zähne schützt.",
  sportsEn:
    "While playing your favourite games like Hockey, Rugby, Football, Skating, Wrestling and other many sports with physical contact.",
  fit: "Passt als Maßanfertigung perfekt zwischen Zähne und Lippen.",
  colors: "Erhältlich in Ihren Lieblingsfarben.",
} as const;

export default function SportschutzMouthguardsContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/sportschutz-mouthguards";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Sportschutz Mouthguards";
  const lead = leads[dePath];
  const isDe = locale === "de";
  const u = (path: string) => getHref(path, locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-primary/[0.06] to-gray-50 shadow-soft-lg">
          <div className="relative aspect-[2/1] min-h-[200px] w-full sm:aspect-[21/9]">
            <Image
              src={IMG.hero}
              alt=""
              fill
              className="object-cover object-center sm:object-[center_40%]"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-white/10"
              aria-hidden
            />
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-3xl space-y-6 sm:mt-16">
          <h2 className="text-2xl font-bold leading-tight text-primary sm:text-3xl">{COPY.headline}</h2>
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{COPY.definition}</p>
          <p className="rounded-2xl border border-gray-100 bg-white/90 p-5 text-base leading-relaxed text-gray-800 shadow-soft sm:p-6">
            {COPY.sportsEn}
          </p>
        </section>

        <section className="mx-auto mt-10 max-w-5xl sm:mt-12">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 shadow-soft">
              <p className="leading-relaxed text-gray-800">{COPY.fit}</p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 shadow-soft">
              <p className="leading-relaxed text-gray-800">{COPY.colors}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-3xl sm:mt-14" aria-labelledby="airflow-heading">
          <h3
            id="airflow-heading"
            className="text-center text-xl font-bold leading-snug text-primary sm:text-2xl"
          >
            {isDe ? "AIRFLOW® Prophylaxe" : "AIRFLOW® prophylaxis"}
          </h3>
          <figure className="mt-6">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl border border-gray-100 bg-[#f5f6f8] shadow-soft">
              <Image
                src={IMG.airflow}
                alt={
                  isDe
                    ? "EMS AIRFLOW Prophylaxis Master — Gerät für professionelle Prophylaxe"
                    : "EMS AIRFLOW Prophylaxis Master — professional prophylaxis device"
                }
                fill
                className="object-contain object-center p-6 sm:p-8"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
            <figcaption className="mx-auto mt-4 max-w-prose text-center text-sm leading-relaxed text-gray-600 sm:text-base">
              {isDe
                ? "EMS AIRFLOW Prophylaxis Master – modernes System für eine schonende, effektive professionelle Mundhygiene und Prophylaxe."
                : "EMS AIRFLOW Prophylaxis Master – advanced system for gentle, effective professional oral hygiene and preventive care."}
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-16">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
          >
            {isDe ? "Termin vereinbaren" : "Book an appointment"}
          </a>
          <Link
            href={u("/online-termin")}
            className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
          >
            {isDe ? "Online terminieren" : "Book online"}
          </Link>
          <Link
            href={u("/kontakt")}
            className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            {isDe ? "Kontakt" : "Contact"}
          </Link>
        </section>
      </div>
    </PageContent>
  );
}
