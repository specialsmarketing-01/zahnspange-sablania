import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const ICON_COMPOSITE =
  "/icons/" + encodeURIComponent("Aesthetic tooth-colored fillings.png");

const IMG = {
  hero: "/asethetic-dental-services/Aesthetik.jpg",
  composite: ICON_COMPOSITE,
  keramik: "/asethetic-dental-services/Keramikkrone-1.png",
} as const;

/** Page copy — verbatim from source (spelling unchanged). */
const COPY = {
  intro: "In unsere Ordination bieten wir 2 Arten von Ästhetische Zahnfüllungen.",
  compositeH: "1-Komposit Zahnfüllung",
  compositeLead:
    "Die Komposit füllungen sind hochwertige kunstoff Ästhetische Zahnfarbige Füllungen.",
  fillingsAre: "Die Füllungen sind",
  compositeBullets: [
    "fast wie Zahnfarbe.",
    "haben eine gute Haltbarkeit.",
    "haben gute Verträglichkeit.",
    "wegen weiße Farbe, Ästhetisch sehr gut ansprichst.",
  ],
  keramikH: "2-Keramik Zahnfüllung",
  keramikLead:
    "sind noch hochwertige Zahnfüllungen und sind anders im Vergleich zu der Klassischen Füllungen, die direkt am Zahn gefüllt.",
  ablauf: "Ablauf:",
  keramikSteps: [
    "In dieser Technik, Vorbereitung der Zähne leicht anders, wie bei normale Füllung.",
    "Digitale Scan oder Abdruck von vorbereitete Zahn",
    "Abschicken der Scan oder Abdruck im Fachlabour, wo keramik nach mass vorbereitet wird.",
    "zuerst probe, dann Einsetzen des Keramik Füllung (Inlay, Onlay, Overlay) mittels kunstoff klebers oder mit Komposit zement.",
  ],
} as const;

export default function KompositZahnfuellungContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/komposit-zahnfuellung";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Komposit-Zahnfüllung";
  const lead = leads[dePath];
  const isDe = locale === "de";
  const u = (path: string) => getHref(path, locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="relative aspect-[2/1] min-h-[220px] w-full sm:aspect-[21/9]">
            <Image
              src={IMG.hero}
              alt=""
              fill
              className="object-cover object-[center_45%]"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/5 to-transparent"
              aria-hidden
            />
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{COPY.intro}</p>
        </section>

        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-start">
            <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white p-6 shadow-soft sm:p-8">
              <h2 className="text-xl font-bold text-primary sm:text-2xl">{COPY.compositeH}</h2>
              <p className="mt-3 leading-relaxed text-gray-800">{COPY.compositeLead}</p>
              <p className="mt-6 font-semibold text-gray-900">{COPY.fillingsAre}</p>
              <ul className="mt-3 space-y-3 text-gray-800">
                {COPY.compositeBullets.map((line, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-soft-lg lg:mx-0 lg:max-w-none">
              <Image
                src={IMG.composite}
                alt=""
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 80vw, 280px"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft-lg lg:order-1">
              <Image
                src={IMG.keramik}
                alt=""
                fill
                className="object-contain object-center p-4"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="order-1 rounded-3xl border border-gray-200 bg-white p-6 shadow-soft sm:p-8 lg:order-2">
              <h2 className="text-xl font-bold text-primary sm:text-2xl">{COPY.keramikH}</h2>
              <p className="mt-3 leading-relaxed text-gray-800">{COPY.keramikLead}</p>
              <p className="mt-6 font-semibold text-gray-900">{COPY.ablauf}</p>
              <ol className="mt-3 list-decimal space-y-3 pl-5 text-gray-800">
                {COPY.keramikSteps.map((line, i) => (
                  <li key={i} className="leading-relaxed">
                    {line}
                  </li>
                ))}
              </ol>
            </div>
          </div>
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
