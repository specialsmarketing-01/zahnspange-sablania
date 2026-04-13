import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const IMG = {
  products: "/mundhygiene-wien/hygiene-products-illustration.png",
  smileCare: "/mundhygiene-wien/hygiene-smile-toothbrush.png",
} as const;

/** German source text — verbatim (incl. spelling as supplied). */
const DE = {
  intro:
    "Die Professionelle Mundhygiene Wien wird durch eine erfahrenene, gelernete Assistentin in unserer Ordination durchgeführt.",
  nutritionH: "Mundhygiene Wien-Gesunde Ernährung-Gesunde Zähne",
  nutritionP:
    "mit regelmäßiger Mundhygiene und gesunder Ernährung beugen wir Parodontitis (eine Erkrankung von Zahnfleisch und Zahnknochen) vor.",
  jugendP:
    "Die vielfältigen Behandlungsmöglichkeiten für Jugendliche mit einer Zahnspange finden Sie gleich nachstehend. Alle Behandlungsdetails erhalten Sie durch Klick auf die gewünschte Behandlungsart!",
  bracketLines: ["Metallbrackets", "Erwachsen-Metal brackets", "Junge Frau mit Zahnspangen in grauer Farbe"],
  benefitLines: [
    "Man kann Karies und Parodontitis deutlich reduzieren.",
    "hilft uns die Zähne länger in guten Zustand zu erhalten.",
    "durch Mundhygiene entfernnen wir oberflächliche Verfärbungen, die können durch Kaffee oder Wein oder Nikotin entstehen.",
  ],
  importantH: "Wichtig!",
  important: [
    "regelmäßig Zahnarztbesuch, mindestens 2x im Jahr.",
    "2 x im Jahr Professionelle Mundhygiene in Ordination.",
    "2x Pro Tag-Zähneputzen, Zahnseide und Mundspüllung.",
  ],
  airH: "Mundhygiene bei Zahnspange",
  airSubH: "Mundhygiene Wien: Professional Oral hygiene with Air flow",
  airIntro: "This treatment uses sprecial processed powder with concentrated water and air pressure.",
  airBullets: [
    "-cleans not only superfacial Plaque and stains (Coffee, Wein and Nicotin ) from the teeth,",
    "-but also penetrate deep into particular targeted areas as well.",
    "-so we can minimise the gums and bone problems such as caries and periodontal issues.",
    "-maintain healthy teeth for a longer period of time.",
  ],
  cta: "Termin für Mundhygiene vereinbaren",
  ctaOnline: "Online terminieren",
} as const;

/** English source text — verbatim (incl. spelling as supplied). */
const EN = {
  intro:
    "The Professional Oral Hygiene is carried out by a trained and experienced Assistant in our office.",
  importantH: "Important:",
  important: [
    "visit a dentist 2x a year.",
    "Professional Oralhygiene minimum 2x a year.",
  ],
  /** Third “bullet” split exactly as in source (use 2 / newline / x a day…) */
  importantLastLine1: "use 2",
  importantLastLine2: "x a day mouthwash+Dental floss and brush your teeth.",
  airH: "Mundhygiene bei Zahnspange",
  airSubH: "Mundhygiene Wien: Professional Oral hygiene with Air flow",
  airIntro: "This treatment uses sprecial processed powder with concentrated water and air pressure.",
  airBullets: DE.airBullets,
  cta: "Book a hygiene appointment",
  ctaOnline: "Book online",
} as const;

export default function MundhygieneWienContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/mundhygiene-wien";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Mundhygiene Wien";
  const lead = leads[dePath];
  const isDe = locale === "de";
  const u = (path: string) => getHref(path, locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        <section className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 shadow-soft-lg">
          <div className="relative aspect-[21/9] min-h-[200px] w-full sm:aspect-[2/1] lg:aspect-[21/9]">
            <Image
              src={IMG.smileCare}
              alt={isDe ? "Zähne putzen" : "Brushing teeth"}
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 80vw"
              priority
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent"
              aria-hidden
            />
          </div>
        </section>

        {isDe ? (
          <>
            <section className="mx-auto mt-12 max-w-3xl space-y-6 sm:mt-16">
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{DE.intro}</p>
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{DE.nutritionH}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-800">{DE.nutritionP}</p>
              </div>
              <p className="text-base leading-relaxed text-gray-800">{DE.jugendP}</p>
              <ul className="list-none space-y-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-soft">
                {DE.bracketLines.map((line) => (
                  <li key={line} className="text-center font-medium text-primary">
                    {line}
                  </li>
                ))}
              </ul>
              <div className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50/80 p-6 text-gray-800">
                {DE.benefitLines.map((line) => (
                  <p key={line} className="leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </section>

            <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
              <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white shadow-soft-lg">
                <div className="grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-10">
                  <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm">
                    <Image
                      src={IMG.products}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 85vw, 400px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{DE.importantH}</h2>
                    <ul className="mt-5 list-none space-y-4">
                      {DE.important.map((line) => (
                        <li key={line} className="flex gap-3 text-gray-800">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <AirFlowBlock
              airH={DE.airH}
              airSubH={DE.airSubH}
              airIntro={DE.airIntro}
              airBullets={DE.airBullets}
            />
          </>
        ) : (
          <>
            <section className="mx-auto mt-12 max-w-3xl sm:mt-16">
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{EN.intro}</p>
            </section>

            <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
              <div className="overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/[0.06] to-white shadow-soft-lg">
                <div className="grid gap-8 p-6 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:items-center lg:p-10">
                  <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-sm">
                    <Image
                      src={IMG.products}
                      alt=""
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 85vw, 400px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{EN.importantH}</h2>
                    <ul className="mt-5 list-none space-y-4">
                      {EN.important.map((line) => (
                        <li key={line} className="flex gap-3 text-gray-800">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                          <span className="leading-relaxed">{line}</span>
                        </li>
                      ))}
                      <li className="flex gap-3 text-gray-800">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span className="leading-relaxed">
                          {EN.importantLastLine1}
                          <br />
                          {EN.importantLastLine2}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <AirFlowBlock
              airH={EN.airH}
              airSubH={EN.airSubH}
              airIntro={EN.airIntro}
              airBullets={EN.airBullets}
            />
          </>
        )}

        <section className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3 sm:mt-16">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
          >
            {isDe ? DE.cta : EN.cta}
          </a>
          <Link
            href={u("/online-termin")}
            className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
          >
            {isDe ? DE.ctaOnline : EN.ctaOnline}
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

function AirFlowBlock({
  airH,
  airSubH,
  airIntro,
  airBullets,
}: {
  airH: string;
  airSubH: string;
  airIntro: string;
  airBullets: readonly string[];
}) {
  return (
    <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{airH}</h2>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{airSubH}</h3>
      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-gray-800">{airIntro}</p>
      <ul className="mt-5 list-none space-y-2 pl-0 text-gray-800">
        {airBullets.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
