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
  compareIntro: "Im Büro Bleaching",
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
  footerLines: ["Zahn Bleaching 1", "Zahn Bleaching 1", "Zahnbleaching"],
} as const;

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

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="relative aspect-[2/1] min-h-[200px] w-full sm:aspect-[21/9]">
            <Image
              src={IMG.hero}
              alt=""
              fill
              className="object-cover object-[center_40%]"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto mt-12 max-w-3xl space-y-5 sm:mt-16">
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{COPY.pIntro}</p>
          <p className="text-base leading-relaxed text-gray-800">{COPY.pEn}</p>
        </section>

        {/* In-office */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.05] to-white p-6 shadow-soft sm:p-8">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">{COPY.officeH}</h2>
            <p className="mt-3 leading-relaxed text-gray-800">{COPY.officeLead}</p>
            <p className="mt-6 font-semibold text-gray-900">{COPY.ablauf}</p>
            <ol className="mt-3 list-decimal space-y-3 pl-5 text-gray-800">
              {COPY.officeSteps.map((line) => (
                <li key={line} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Home + image */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="order-2 lg:order-1">
              <h2 className="text-xl font-bold text-primary sm:text-2xl">{COPY.homeH}</h2>
              <p className="mt-3 leading-relaxed text-gray-800">{COPY.homeLead}</p>
              <p className="mt-6 font-semibold text-gray-900">{COPY.ablauf}</p>
              <ol className="mt-3 list-decimal space-y-3 pl-5 text-gray-800">
                {COPY.homeSteps.map((line) => (
                  <li key={line} className="leading-relaxed">
                    {line}
                  </li>
                ))}
              </ol>
            </div>
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft-lg lg:order-2">
              <Image
                src={IMG.home}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>

        {/* Wien / process block */}
        <section className="mx-auto mt-12 max-w-3xl space-y-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
          <h2 className="text-lg font-bold text-primary sm:text-xl">{COPY.wienH}</h2>
          <p className="leading-relaxed text-gray-800">{COPY.wienP}</p>
          <div className="space-y-4 border-l-2 border-accent/40 pl-4">
            {COPY.processParas.map((line) => (
              <p key={line} className="leading-relaxed text-gray-800">
                {line}
              </p>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{COPY.ablaufLinkLine}</p>
        </section>

        {/* Comparison */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <h2 className="text-center text-lg font-bold text-primary sm:text-xl">{COPY.compareIntro}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 shadow-soft">
              <ul className="space-y-3 text-gray-800">
                {COPY.officeCol.map((line) => (
                  <li key={line} className="flex gap-2 leading-relaxed">
                    <span className="text-accent" aria-hidden>
                      ●
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-soft">
              <ul className="space-y-3 text-gray-800">
                {COPY.homeCol.map((line) => (
                  <li key={line} className="flex gap-2 leading-relaxed">
                    <span className="text-gray-400" aria-hidden>
                      ●
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer lines */}
        <section className="mx-auto mt-10 max-w-3xl text-center text-sm text-gray-600 sm:mt-12">
          {COPY.footerLines.map((line, i) => (
            <p key={`${i}-${line}`} className="leading-relaxed">
              {line}
            </p>
          ))}
        </section>

        {/* CTA */}
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
