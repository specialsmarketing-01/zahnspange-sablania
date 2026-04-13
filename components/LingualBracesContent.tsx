import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const IMG = {
  hero: "/asethetic-dental-services/Lingualtechnik-640-×-500-px-e1670235670602.png",
} as const;

type Copy = {
  introTitle: string;
  introParas: string[];
  compareTitle: string;
  compareParas: string[];
  consultLinkLabel: string;
  kontrollNote: string;
  prosTitle: string;
  pros: string[];
  consTitle: string;
  cons: string[];
  processTitle: string;
  steps: string[];
  detailLinkLabel: string;
  ctaBook: string;
  ctaOnline: string;
  ctaContact: string;
};

const COPY: Record<"de" | "en", Copy> = {
  de: {
    introTitle: "Lingual Braces - Innenliegende Zahnspange",
    introParas: [
      "Lingual Zahnspange bezeichnen unsichtbare Zahnspangen bei denen die Brackets nicht außen, sondern auf der Innenseite der Zähne aufgebracht werden (Zungenseite-Gaumenseite). Im Vergleich zu der klassischen Zahnspange, die sichtbar und auf der Außenseite beklebt wird. Die unsichtbare, innenliegende Zahnspange ist vor allem für PatientInnen geeignet, die eine Zahnregulierung benötigen, diese aber verstecken möchten.",
      "Durch moderne Technik und die Fortschritte in der Kieferorthopädie ist es heute möglich, Zahnfehlstellungen mit innenliegenden Brackets ebenso erfolgreich zu behandeln wie mit Brackets auf der Außenseite.",
      "Die innenliegende Zahnspange, die Brackets und Drähte, werden individuell in hochmodernen Fachlabors hergestellt. Jeder Zahn, jede Zahnfläche, -größe und -form ist verschieden. Auch die Biomechanik ist im Vergleich zu außenliegenden Brackets unterschiedlich.",
    ],
    compareTitle: "Innenliegende Zahnspange (lingual) und die Vor- und Nachteile",
    compareParas: [
      "Die Behandlungsdauer hängt natürlich von der Fehlstellung, den Behandlungsmethoden und der angewendeten Technik ab. Kleine Fehlstellung brauchen z.B. ein paar Wochen / Monate. Schwere Fehlstellung ein paar Monate / Jahre. Die Kosten einer innenliegenden Zahnspange sind, auf Grund des hohen Aufwands, auch deutlich höher als z.B. Aligners oder die außenliegende Zahnspange.",
      "Alle Details erfahren Sie hier:",
    ],
    consultLinkLabel: "Kostenlosen Erstberatung",
    kontrollNote:
      "Die wichtigen Kontrolltermine (innenliegende Zahnspange) finden alle 6-8 Wochen statt!",
    prosTitle: "Lingual Zahnspange Vorteile:",
    pros: [
      "Von außen ist diese festsitzende, innenliegende Zahnspange nicht zu sehen – gut geeignet für Patienten die wirklich unbemerkt ihre Zahnfehlstellung korrigieren möchten. Politiker/in, Sänger/in, Models. PendlerInnen mit viel Kundenkontakt.",
      "Fast alle Fehlstellungen können mit der innenliegenden Zahnspange behoben werden. Sowohl bei Jugendlichen als auch bei Erwachsen. Geringes Karies-Risiko weil sich die innenliegende Zahnspange in der Nähe der Speicheldrüsen befinden: regelmäßig Spülung und Re-Mineralisierung der Zahnfläche.",
    ],
    consTitle: "Lingual Zahnspange Nachteile:",
    cons: [
      "Beim Sprechen muss man sich zu Beginn daran gewöhnen – gerade S- und C-Lauten können zu Anfang schwer zu sprechen sein.",
      "Essen und Kauen ist am Anfang nicht sehr komfortabel",
      "Eine festsitzende, innenliegende Zahnspange die nicht abnehmbar ist. Im Gegensatz zu z.B. Aligners Schienen.",
    ],
    processTitle: "Lingual Zahnspange und der Ablauf in meiner Kieferorthopädie",
    steps: [
      "Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
      "Behandlungsunterlagen für individuellen Behandlungsverlauf erstellen. Diagnose mit Röntgen, Fotos und digitalen Scans. Immer ohne Abdrücke.",
      "Planbesprechung und Erklärung. Röntgenauswertung und die Analyse-Besprechung, welche Art von Zahnspange und/oder Brackets für den individuellen Fall notwendig sind.",
      "Behandlungsbeginn. Einsetzen des Gerätes und Aufklärung über Reinigung und die Tragezeiten.",
      "Wichtige und notwendige Kontrolltermine alle 6-8 Wochen.",
      "Behandlungsende. Entfernen der Spange und Besprechung des Behandlungsergebnisses.",
      "Retention – der Beginn der Stabilisierung des Behandlungsergebnisses.",
    ],
    detailLinkLabel: "Hier finden Sie den gesamten Ablauf in meiner Kieferorthopädie im Detail erklärt.",
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online terminieren",
    ctaContact: "Kontakt",
  },
  en: {
    introTitle: "Lingual Braces – Inner (Lingual) Braces",
    introParas: [
      "Lingual braces are invisible braces where the brackets are placed on the inside of the teeth (tongue/palate side) rather than on the outside. Unlike the classic visible brace fixed to the outer surface, the invisible inner brace is especially suitable for patients who need orthodontic treatment but want to keep it discreet.",
      "Thanks to modern technology and advances in orthodontics, it is now possible to treat misalignments with inner brackets as successfully as with outer brackets.",
      "The inner brace, brackets and wires are made individually in state-of-the-art specialist laboratories. Every tooth, every surface, size and shape is different. The biomechanics also differ from outer brackets.",
    ],
    compareTitle: "Inner (lingual) braces – advantages and disadvantages",
    compareParas: [
      "Treatment duration depends on the type of misalignment, the methods used and the technique. Minor cases may need a few weeks or months; more severe cases, several months or years. Because of the higher effort involved, the cost of inner braces is also significantly higher than aligners or outer braces.",
      "Find out more here:",
    ],
    consultLinkLabel: "Book a free initial consultation",
    kontrollNote: "Important check-up appointments (inner braces) take place every 6–8 weeks!",
    prosTitle: "Advantages of lingual braces",
    pros: [
      "This fixed inner brace is not visible from the outside – ideal for patients who want to correct their misalignment unnoticed (e.g. politicians, singers, models, commuters with a lot of customer contact).",
      "Almost all misalignments can be corrected with inner braces, in both teenagers and adults. Lower caries risk because the inner brace is near the salivary glands: regular rinsing and remineralisation of the tooth surface.",
    ],
    consTitle: "Disadvantages of lingual braces",
    cons: [
      "You need to get used to speaking at first – S and C sounds can be harder to pronounce initially.",
      "Eating and chewing can be uncomfortable at first.",
      "A fixed inner brace that is not removable, unlike aligner trays.",
    ],
    processTitle: "Lingual braces and the process at our practice",
    steps: [
      "Free initial consultation for misalignment at our orthodontic practice. By appointment only!",
      "Create treatment records for your individual plan. Diagnosis with X-rays, photos and digital scans. Always without impressions.",
      "Planning discussion and explanation. X-ray review and analysis of which type of brace and/or brackets are needed for your case.",
      "Start of treatment. Fitting the appliance and advice on cleaning and wear times.",
      "Important check-up appointments every 6–8 weeks.",
      "End of treatment. Removal of the brace and discussion of the result.",
      "Retention – the start of stabilising the treatment result.",
    ],
    detailLinkLabel: "Full details of the treatment process at our practice",
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaContact: "Contact",
  },
};

function StepText({ step }: { step: string }) {
  if (/^Retention\b/i.test(step)) {
    return (
      <>
        <strong>Retention</strong>
        {step.replace(/^Retention\s*/i, "")}
      </>
    );
  }
  return <>{step}</>;
}

export default function LingualBracesContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Lingual Braces - Innenliegende Zahnspange";
  const lead = leads[dePath];
  const lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];

  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termin", locale);
  const kontaktHref = getHref("/kontakt", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:py-14">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {lang === "de" ? "Unsichtbare Kieferorthopädie" : "Discreet orthodontics"}
              </p>
              <h2 className="mt-2 text-2xl font-bold leading-tight text-primary sm:text-3xl">
                {c.introTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">{c.introParas[0]}</p>
            </div>
            <div className="relative min-h-[220px] lg:min-h-[280px]">
              <Image
                src={IMG.hero}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/95 via-white/30 to-transparent lg:from-white/90"
                aria-hidden
              />
            </div>
          </div>
        </section>

        {/* Intro — remaining paragraphs */}
        <section className="mx-auto mt-10 max-w-3xl space-y-5 sm:mt-12">
          {c.introParas.slice(1).map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-800">
              {p}
            </p>
          ))}
        </section>

        {/* Duration, cost, consultation */}
        <section className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <h2 className="text-xl font-bold leading-snug text-primary sm:text-2xl">{c.compareTitle}</h2>
          <div className="mt-6 space-y-5 rounded-2xl border border-gray-100 bg-gradient-to-br from-primary/[0.04] to-white p-6 shadow-soft sm:p-8">
            <p className="leading-relaxed text-gray-800">{c.compareParas[0]}</p>
            <p className="leading-relaxed text-gray-800">
              {c.compareParas[1]}{" "}
              <Link
                href={terminHref}
                className="font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:text-primary"
              >
                {c.consultLinkLabel}
              </Link>
            </p>
            <p className="rounded-xl border border-primary/15 bg-primary/[0.06] px-4 py-3 text-sm font-medium text-primary">
              {c.kontrollNote}
            </p>
          </div>
        </section>

        {/* Pros & cons */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-14">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-b from-emerald-50/90 to-white p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold text-emerald-950 sm:text-xl">{c.prosTitle}</h3>
              <ul className="mt-5 space-y-4">
                {c.pros.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-800">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-b from-amber-50/90 to-white p-6 shadow-soft sm:p-8">
              <h3 className="text-lg font-bold text-amber-950 sm:text-xl">{c.consTitle}</h3>
              <ul className="mt-5 space-y-4">
                {c.cons.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-800">
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500"
                      aria-hidden
                    />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.processTitle}</h2>
          <ol className="mt-8 space-y-0">
            {c.steps.map((step, i) => {
              const isRetention = /^Retention\b/i.test(step);
              return (
                <li key={i} className="relative flex gap-4 pb-8 last:pb-0">
                  {i < c.steps.length - 1 && (
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
                  <div className="min-w-0 pt-0.5">
                    <p className="leading-relaxed text-gray-800">
                      <StepText step={step} />
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50/90 p-5 sm:p-6">
            <Link
              href={ablaufHref}
              className="text-base font-medium text-accent underline decoration-accent/30 underline-offset-4 transition hover:text-primary hover:decoration-primary"
            >
              {c.detailLinkLabel}
            </Link>
          </div>
        </section>

        {/* CTAs */}
        <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-14">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
          >
            {c.ctaBook}
          </a>
          <Link
            href={terminHref}
            className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
          >
            {c.ctaOnline}
          </Link>
          <Link
            href={kontaktHref}
            className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            {c.ctaContact}
          </Link>
        </section>
      </div>
    </PageContent>
  );
}
