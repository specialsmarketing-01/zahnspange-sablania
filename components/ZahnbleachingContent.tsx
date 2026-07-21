import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const IMG = {
  hero: "/zahnbleaching/bleaching-smile-hero.png",
  home: "/zahnbleaching/home-bleaching-trays.png",
} as const;

/** Page copy — verbatim from source (spelling unchanged). */
const COPY = {
  pIntro: "Zahnbleaching bedeutet aufhellen der Zähne. Es gibt 2 methoden.",
  pEn: "Teeth whitening: Professionally teeth whitening in our office. There two methods for whitening.",
  officeH: "1-In Office Zahnbleaching",
  officeLead:
    "Bedeutet aufhellung der Zähne in Ordination unter Ärztliche Anweisung und kontrolle.",
  ablauf: "Ablauf:",
  officeSteps: [
    "Das konzentriert Bleichmittel oder Bleichgel werden auf Zähne aufgetragen.",
    "Dann wird der Wirkstoff entweder chemisch oder mit Blaulicht mit eine bestimmte Wellenlänge aktiviert.",
    "Innerhalb von 1-1,5 stunden, die Zähne werden aufgehellt.",
    "Das grad der Aufhellung des Zähnes hängt auf konzentration von Bleichmaterial.",
  ],
  homeH: "2-Home Zahnbleaching",
  homeLead:
    "wie der Name sagt, kann man diese Prozess zu hause statt Ordination durchführen.",
  homeSteps: [
    "In dieser Technik Patienten individuellen gefertige und angepasste Kunststoff-Plastikschienen mit Bleichgel ausgefüllt von uns bekommen.",
    "Patienten erhalten die genaue Anweisungen.",
    "Es ist eine selbst kontrolle unter Arzt Aufsicht aber nicht in der Ordination.",
    "Die Schiene wir über Nacht und einpaar Stunden am Tag getragen.",
  ],
  wienH: "Zahnbleaching Wien-Teeth whitening",
  wienP:
    "Kostenlose Erstberatung. Nach der Untersuchung prüfen wir, ob Aligner für Sie geeignet sind. Reservieren Sie Ihren Termin. Heute bei uns im Büro!",
  processParas: [
    "Unterlagen zur Behandlung & Planung wie Röntgenbilder, digitale Scans oder Abdrücke.",
    "Detaillierte Behandlungsplanbesprechung mit verschiedenen Optionen für Ihre Behandlung je nach Wunsch und Zahnfehlstellung sowie Einblick in die digitale Simulation Ihres Behandlungsplans.",
    "Behandlungsbeginn. An diesem Termin erhalten Sie Ihre Aligner.",
    "Regelmäßige Kontrolluntersuchung alle 6–10 Wochen.",
    "Behandlungsende. Nach der Ausrichtung Ihrer Zähne und dem Erreichen unserer Behandlungsziele ist die aktive Behandlung abgeschlossen.",
    "Retention Nach Abschluss des aktiven Teils der Behandlung müssen wir die Zähne stabilisieren. Bitte klicken Sie im Detail auf den Abschnitt „Aufbewahrung“.",
  ],
  ablaufLinkLine:
    "Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.",
  officeCol: [
    "Ablauf in Ordination",
    "unmittelbar Arzt Kontrolle",
    "Preis etwas Höher",
    "Professionnelle Zahnaufhellung",
    "mehr Sicherheit, Effective",
  ],
  homeCol: [
    "Bleichen zu Hause",
    "erfolgt Zu Hause",
    "selbst kontrollieren",
    "Preis günstig",
    "weniger sicher",
    "weniger effektiv",
  ],
} as const;

function CheckBullet({ className }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 h-5 w-5 shrink-0 ${className ?? ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DotBullet({ className }: { className?: string }) {
  return (
    <span
      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${className ?? ""}`}
      aria-hidden
    />
  );
}

export default function ZahnbleachingContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/zahnbleaching";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Zahnbleaching";
  const lead = leads[dePath];
  const isDe = locale === "de";
  const u = (path: string) => getHref(path, locale);
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg ring-1 ring-black/[0.04]">
          <div className="relative aspect-[5/4] min-h-[220px] w-full sm:aspect-[21/9] sm:min-h-[200px]">
            <Image
              src={IMG.hero}
              alt=""
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent sm:from-primary/45"
              aria-hidden
            />
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto mt-10 max-w-2xl space-y-4 sm:mt-14 sm:space-y-5">
          <p className="text-base font-medium leading-relaxed text-gray-900 sm:text-lg">
            {COPY.pIntro}
          </p>
          <p className="border-l-2 border-primary/25 pl-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {COPY.pEn}
          </p>
        </section>

        {/* In-office + Home */}
        <section className="mx-auto mt-12 max-w-6xl sm:mt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <article className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white p-6 shadow-soft-lg sm:p-8">
              <span
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-sm"
                aria-hidden
              >
                1
              </span>
              <h2 className="text-xl font-bold leading-snug text-primary sm:text-2xl">{COPY.officeH}</h2>
              <p className="mt-3 leading-relaxed text-gray-800 sm:mt-4">{COPY.officeLead}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-primary/90 sm:mt-6">
                {COPY.ablauf}
              </p>
              <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-gray-800 sm:mt-4 sm:space-y-3">
                {COPY.officeSteps.map((line) => (
                  <li key={line} className="leading-relaxed text-pretty">
                    {line}
                  </li>
                ))}
              </ol>
            </article>

            <article className="min-w-0 overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-soft-lg sm:p-8">
              <span
                className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.08] text-sm font-bold text-primary shadow-sm"
                aria-hidden
              >
                2
              </span>
              <h2 className="text-xl font-bold leading-snug text-primary sm:text-2xl">{COPY.homeH}</h2>
              <p className="mt-3 leading-relaxed text-gray-800 sm:mt-4">{COPY.homeLead}</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-primary/90 sm:mt-6">
                {COPY.ablauf}
              </p>
              <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-gray-800 sm:mt-4 sm:space-y-3">
                {COPY.homeSteps.map((line) => (
                  <li key={line} className="leading-relaxed text-pretty">
                    {line}
                  </li>
                ))}
              </ol>
            </article>
          </div>
          <div className="mt-8 flex w-full justify-center sm:mt-10">
            <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-2xl border border-gray-100 bg-[#f8fafc] shadow-soft">
              <Image
                src={IMG.home}
                alt=""
                fill
                className="object-contain object-center p-4 sm:p-5"
                sizes="(max-width: 1024px) 100vw, 576px"
              />
            </div>
          </div>
        </section>

        {/* Wien / process block */}
        <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-soft-lg sm:p-8 lg:p-10">
            <h2 className="text-xl font-bold leading-snug text-primary sm:text-2xl">{COPY.wienH}</h2>
            <p className="mt-4 max-w-prose leading-relaxed text-gray-800 sm:mt-5">{COPY.wienP}</p>
            <div className="mt-10">
              <ol className="space-y-0">
                {COPY.processParas.map((line, i) => {
                  const isRetention = /^Retention\b/i.test(line);
                  return (
                    <li key={line} className="relative flex gap-4 pb-8 last:pb-0">
                      {i < COPY.processParas.length - 1 && (
                        <span
                          className="absolute bottom-0 left-[15px] top-10 w-px bg-primary/20"
                          aria-hidden
                        />
                      )}
                      <span
                        className={`relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ${
                          isRetention ? "bg-accent" : "bg-primary"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <div className="min-w-0 max-w-prose pt-0.5">
                        <p className="leading-relaxed text-gray-800 text-pretty">{line}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50/90 p-5 sm:p-6">
              <Link
                href={ablaufHref}
                className="text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:text-primary hover:decoration-primary"
              >
                {COPY.ablaufLinkLine}
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="flex flex-col rounded-3xl border border-primary/20 bg-primary/[0.04] p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold leading-snug text-primary sm:text-xl">{COPY.officeH}</h3>
              <ul className="mt-6 flex flex-1 flex-col gap-3.5 text-gray-800">
                {COPY.officeCol.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed">
                    <CheckBullet className="text-primary" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50/90 p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold leading-snug text-primary sm:text-xl">{COPY.homeH}</h3>
              <ul className="mt-6 flex flex-1 flex-col gap-3.5 text-gray-800">
                {COPY.homeCol.map((line) => (
                  <li key={line} className="flex gap-3 leading-relaxed">
                    <DotBullet className="bg-gray-400" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto mt-[10%] max-w-3xl">
          <div className="flex flex-col gap-6 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] via-white to-gray-50 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <p className="text-center text-base font-semibold leading-snug text-primary sm:max-w-sm sm:text-left sm:text-lg">
              {COPY.wienH.split("-")[0]?.trim() ?? COPY.wienH}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-muted sm:w-auto"
              >
                {isDe ? "Termin vereinbaren" : "Book an appointment"}
              </a>
              <Link
                href={u("/online-termine")}
                className="inline-flex w-full items-center justify-center rounded-full border border-primary/35 bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary/[0.06] sm:w-auto"
              >
                {isDe ? "Online terminieren" : "Book online"}
              </Link>
              <Link
                href={u("/kontakt")}
                className="inline-flex w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 sm:w-auto"
              >
                {isDe ? "Kontakt" : "Contact"}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
