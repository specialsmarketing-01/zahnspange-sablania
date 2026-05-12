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
  airflow: "/mundhygiene-wien/ems-airflow-prophylaxis-master.png",
} as const;

/** Authoritative explainer + benefits (DE supplied; EN aligned). */
const PRO_EXPLAINER = {
  de: {
    sectionTitle: "Professionelle Mundhygiene",
    paragraphs: [
      "Die professionelle Mundhygiene ist ein wichtiger Bestandteil der modernen Zahnheilkunde und bildet die Grundlage für langfristig gesunde Zähne und gesundes Zahnfleisch. Selbst bei sorgfältiger täglicher Zahnpflege entstehen Bereiche, die mit der Zahnbürste nur schwer erreichbar sind. Dort können sich Beläge, Zahnstein und Bakterien ansammeln, die Karies, Mundgeruch oder Entzündungen verursachen.",
      "Im Rahmen der professionellen Zahnreinigung werden harte und weiche Beläge schonend entfernt. Verfärbungen durch Kaffee, Tee, Nikotin oder Rotwein können reduziert werden, sodass die Zähne wieder sauber und gepflegt wirken. Anschließend werden die Zahnoberflächen poliert, wodurch sich neue Beläge schwerer festsetzen können. Auf Wunsch erfolgt zusätzlich eine Fluoridierung zur Stärkung des Zahnschmelzes.",
      "Regelmäßige Mundhygiene unterstützt nicht nur die Zahngesundheit, sondern trägt auch zur allgemeinen Gesundheit bei. Besonders bei empfindlichem Zahnfleisch, Implantaten, Kronen oder festsitzenden Zahnspangen ist eine professionelle Reinigung empfehlenswert.",
      "Unser Ziel ist es, Ihre natürlichen Zähne langfristig gesund zu erhalten. Daher beraten wir Sie individuell über die optimale Mundhygiene und geben Ihnen wertvolle Tipps für die tägliche Zahnpflege zu Hause.",
    ],
    advantagesTitle: "Vorteile der professionellen Mundhygiene",
    advantages: [
      "Entfernung von Zahnstein und Belägen",
      "Vorbeugung von Karies und Parodontitis",
      "Schonende Entfernung von Verfärbungen",
      "Frischer Atem und sauberes Mundgefühl",
      "Unterstützung der langfristigen Zahngesundheit",
      "Individuelle Beratung zur optimalen Zahnpflege",
    ],
    closing:
      "Für ein gesundes Lächeln empfehlen wir regelmäßige Kontroll- und Mundhygiene-Termine.",
  },
  en: {
    sectionTitle: "Professional oral hygiene",
    paragraphs: [
      "Professional oral hygiene is a key part of modern dentistry and lays the foundation for long-term healthy teeth and gums. Even with careful daily brushing, there are areas that are hard to reach with a toothbrush alone. Plaque, tartar and bacteria can build up there — increasing the risk of tooth decay, bad breath or gum inflammation.",
      "During professional cleaning, hard and soft deposits are removed gently. Stains from coffee, tea, nicotine or red wine can often be reduced so teeth look clean and well cared for. Surfaces are then polished, making it harder for new deposits to cling. On request, fluoride can be applied to strengthen enamel.",
      "Regular hygiene appointments support not only oral health but overall wellbeing. Professional cleaning is especially recommended if you have sensitive gums, implants, crowns or fixed braces.",
      "Our goal is to keep your natural teeth healthy for the long term. We therefore advise you individually on optimal oral hygiene and share practical tips you can use every day at home.",
    ],
    advantagesTitle: "Benefits of professional oral hygiene",
    advantages: [
      "Removal of tartar and soft deposits",
      "Helps prevent tooth decay and periodontal disease",
      "Gentle reduction of surface stains",
      "Fresher breath and a cleaner-feeling mouth",
      "Supports long-term dental health",
      "Individual coaching for your home care routine",
    ],
    closing: "For a healthy smile we recommend regular check-up and hygiene appointments.",
  },
} as const;

/** German source text — verbatim (incl. spelling as supplied). */
const DE = {
  intro:
    "Die Professionelle Mundhygiene Wien wird durch eine erfahrenene, gelernete Assistentin in unserer Ordination durchgeführt.",
  nutritionH: "Mundhygiene Wien-Gesunde Ernährung-Gesunde Zähne",
  nutritionP:
    "mit regelmäßiger Mundhygiene und gesunder Ernährung beugen wir Parodontitis (eine Erkrankung von Zahnfleisch und Zahnknochen) vor.",
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

        <ProfessionalHygieneExplainer isDe={isDe} />

        {isDe ? (
          <>
            <section className="mx-auto mt-12 max-w-3xl space-y-6 sm:mt-16">
              <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{DE.intro}</p>
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{DE.nutritionH}</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-800">{DE.nutritionP}</p>
              </div>
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
              isDe={isDe}
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
              isDe={isDe}
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

function HygieneBenefitCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function ProfessionalHygieneExplainer({ isDe }: { isDe: boolean }) {
  const c = isDe ? PRO_EXPLAINER.de : PRO_EXPLAINER.en;

  return (
    <section
      className="mx-auto mt-12 max-w-4xl sm:mt-16"
      aria-labelledby="professional-hygiene-explainer-title"
    >
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-soft-lg">
        <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-accent" aria-hidden />

        <div className="space-y-5 px-6 py-8 text-gray-800 sm:space-y-6 sm:p-10">
          <h2
            id="professional-hygiene-explainer-title"
            className="text-2xl font-bold tracking-tight text-primary sm:text-3xl sm:leading-snug"
          >
            {c.sectionTitle}
          </h2>
          <div className="max-w-prose space-y-5 border-l-[3px] border-primary/20 pl-5 sm:pl-6">
            {c.paragraphs.map((p) => (
              <p key={p} className="text-base leading-relaxed text-gray-800 text-pretty sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 bg-[#fafbfc] px-6 py-8 sm:px-10 sm:py-10">
          <h3 className="text-xl font-bold text-primary sm:text-2xl">{c.advantagesTitle}</h3>
          <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 sm:gap-5">
            {c.advantages.map((item) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-soft transition-all duration-200 hover:border-primary/20 hover:shadow-soft-lg"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                  <HygieneBenefitCheckIcon className="h-[22px] w-[22px] stroke-[2.25]" />
                </span>
                <p className="min-w-0 pt-2 text-sm font-medium leading-relaxed text-gray-800 text-pretty sm:pt-1.5 sm:text-base">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.07] via-white to-accent/[0.05] px-5 py-6 text-center sm:px-8 sm:py-7">
            <p className="font-serif text-base font-semibold leading-relaxed text-primary sm:text-lg sm:leading-snug">
              {c.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AirFlowBlock({
  airH,
  airSubH,
  airIntro,
  airBullets,
  isDe,
}: {
  airH: string;
  airSubH: string;
  airIntro: string;
  airBullets: readonly string[];
  isDe: boolean;
}) {
  return (
    <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-16 sm:p-8">
      <h2 className="text-xl font-bold text-primary sm:text-2xl">{airH}</h2>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{airSubH}</h3>
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
      <p className="mt-6 whitespace-pre-line text-base leading-relaxed text-gray-800">{airIntro}</p>
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
