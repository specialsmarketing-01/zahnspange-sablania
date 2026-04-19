import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

const MYOFUNKTION_IMAGES = [
  {
    src: "/myofunktionelle-therapie/myofunktion-appliance-hand.png",
    altDe: "Herausnehmbares myofunktionelles Therapiegerät aus blauem Kunststoff mit Metallbögen",
    altEn: "Removable myofunctional therapy appliance in blue acrylic with metal components",
  },
  {
    src: "/myofunktionelle-therapie/myofunktion-plates-pair.png",
    altDe: "Zwei blaue herausnehmbare Platten mit Expansionsschraube und Halteklammern",
    altEn: "Two blue removable plates with expansion screw and retaining clasps",
  },
] as const;

type Lang = "de" | "en";

const COPY: Record<
  Lang,
  {
    galleryTitle: string;
    intro: { h2: string; p: string[] };
    timing: { h2: string; p: string[] };
    merke: { h3: string; p: string };
    funktion: { h2: string; p: string };
    details: { h3: string; items: string[] };
    platte: { h3: string; p: string };
    wear: { h2: string; p: string; cta: string };
    ablauf: { h2: string; steps: string[]; link: string };
  }
> = {
  de: {
    galleryTitle: "Beispiele: herausnehmbare Therapiegeräte",
    intro: {
      h2: "Myofunktionelle Therapie bei Zahnfehlstellungen",
      p: [
        "Die myofunktionelle Therapie arbeitet mit herausnehmbaren Geräten, die die Kau-Muskulatur und die übrige orofaziale Muskulatur aktiv und passiv beeinflussen. Diese Muskeln sind mitverantwortlich für die Zahnstellung und die Entwicklung des Kiefers.",
        "Sie dient der Vorbeugung von Fehlstellungen in der Frühphase und ist auch eine Behandlungsoption, wenn bereits eine Fehlstellung besteht.",
      ],
    },
    timing: {
      h2: "Zeitpunkt, Ziele und Details",
      p: [
        "Die Therapie kommt frühzeitig im Milchgebiss, im Frühwechselgebiss oder im Wechselgebiss zum Einsatz.",
        "Ziel ist es, ungünstige Gewohnheiten wie Zungenpressen, falsches Schluckmuster oder Mundatmung zu verbessern – und so spätere Zahn- und Kieferfehlstellungen zu vermeiden.",
        "Je jünger die Patientinnen und Patienten sind und je mehr Wachstum noch möglich ist, desto günstiger ist die Prognose, Fehlstellungen frühzeitig zu beeinflussen.",
      ],
    },
    merke: {
      h3: "Merke",
      p: "Nicht nur die Steuerung des Wachstums ist ein zentrales Ziel: Die Therapie beseitigt früh störende Faktoren und unterstützt einen harmonischen Wachstumsverlauf mit Kieferregulation.",
    },
    funktion: {
      h2: "Funktionskieferorthopädie und myofunktionelle Therapie",
      p: "Funktionskieferorthopädische Geräte binden die orofaziale Muskulatur ein und sollen die Muskeltätigkeit normalisieren. Myofunktionelle Therapie zielt darauf ab, Fehlfunktionen dauerhaft zu verbessern. Die Geräte lenken Kräfte im Wachstum; über Hemmung und Förderung kann eine skelettale Fehlstellung mitbeeinflusst werden.",
    },
    details: {
      h3: "Typische Schwerpunkte der Behandlung",
      items: [
        "Bei den verwendeten Geräten wird großer Wert auf Mund- und Lippenschluss gelegt.",
        "Die Zunge erhält ausreichend Funktionsraum.",
        "Die Geräte werden in der Wachstumsphase eingesetzt.",
        "Verbesserung der Nasenatmung wird angestrebt.",
        "Einsatz auch in der Phase der Stabilisierung (Retention) nach kieferorthopädischer Korrektur – grundsätzlich in jedem Alter möglich.",
      ],
    },
    platte: {
      h3: "Myofunktionelle Zahnspange (herausnehmbar)",
      p: "Zur Therapie werden individuell angepasste, herausnehmbare Platten oder Trainer verwendet – z. B. mit Klammern, Schrauben oder Federn, je nach Befund. Sie unterstützen die Muskel- und Zungenführung und werden nach Plan tagsüber und nachts getragen.",
    },
    wear: {
      h2: "Tragedauer",
      p: "Bei herausnehmbaren Geräten ist Ihre Mitarbeit entscheidend: In der Regel sollten sie mindestens 12–14 Stunden pro Tag getragen werden – typischerweise die ganze Nacht plus einige Stunden am Tag.",
      cta: "Termin zur kostenlosen Erstbesprechung",
    },
    ablauf: {
      h2: "Ablauf in unserer Kieferorthopädie",
      steps: [
        "Kostenlose Erstberatung zur Zahnfehlstellung – nur nach Vereinbarung.",
        "Diagnostik und Behandlungsunterlagen: Röntgen, Fotos und digitale Scans – ohne klassische Abdrücke.",
        "Planbesprechung: Auswertung und Empfehlung, welche Geräte oder Zahnspangen für Ihren Fall sinnvoll sind.",
        "Behandlungsbeginn: Einsetzen des Geräts, Aufklärung zu Reinigung und Tragezeiten.",
        "Regelmäßige Kontrollen etwa alle 6–8 Wochen.",
        "Behandlungsende: Entfernen der Apparatur und Besprechung des Ergebnisses.",
        "Retention – Stabilisierung des Behandlungserfolgs.",
      ],
      link: "Gesamten Ablauf im Detail lesen",
    },
  },
  en: {
    galleryTitle: "Examples: removable appliances",
    intro: {
      h2: "Myofunctional therapy for misalignment",
      p: [
        "Myofunctional therapy uses removable appliances to influence the muscles of chewing and the rest of the orofacial system, actively and passively. These muscles play a part in tooth position and jaw development.",
        "It helps prevent misalignment in the early phase and is also an option when misalignment is already present.",
      ],
    },
    timing: {
      h2: "Timing, aims and details",
      p: [
        "Therapy is used early in the primary dentition, early mixed dentition or mixed dentition.",
        "The aim is to improve habits such as tongue thrusting, incorrect swallowing or mouth breathing – and to reduce the risk of later tooth and jaw misalignment.",
        "The younger the patient and the more growth potential remains, the better the chance of influencing development early.",
      ],
    },
    merke: {
      h3: "Key point",
      p: "Growth guidance is a central aim, but therapy also addresses disruptive factors early and supports harmonious jaw development.",
    },
    funktion: {
      h2: "Functional orthodontics and myofunctional therapy",
      p: "Functional appliances involve the orofacial muscles and aim to normalise muscle activity. Myofunctional therapy targets long-term improvement of dysfunctions. Appliances guide forces during growth; inhibition and stimulation can help address skeletal discrepancies.",
    },
    details: {
      h3: "Typical treatment focus",
      items: [
        "Emphasis on lip seal and mouth closure with the appliances used.",
        "Adequate functional space for the tongue.",
        "Use during the growth phase.",
        "Aim to improve nasal breathing.",
        "Also used in the retention phase after orthodontic correction – at any age where appropriate.",
      ],
    },
    platte: {
      h3: "Myofunctional brace (removable)",
      p: "Treatment uses individually fitted removable plates or trainers – with clasps, screws or springs as needed. They support muscle and tongue function and are worn by day and night according to your plan.",
    },
    wear: {
      h2: "Wear time",
      p: "With removable appliances, your cooperation is essential: they usually need to be worn at least 12–14 hours per day – typically all night plus several hours during the day.",
      cta: "Book a free initial consultation",
    },
    ablauf: {
      h2: "The process at our practice",
      steps: [
        "Free initial consultation for misalignment – by appointment only.",
        "Diagnostics and records: X-rays, photos and digital scans – without conventional impressions.",
        "Planning session: findings and recommendation on suitable appliances or braces.",
        "Start of treatment: fitting the appliance, advice on cleaning and wear.",
        "Regular check-ups about every 6–8 weeks.",
        "End of treatment: removal and review of the result.",
        "Retention – stabilising the outcome.",
      ],
      link: "Full treatment process in detail",
    },
  },
};

const sectionClass = "mx-auto mt-12 max-w-3xl sm:mt-14";
const cardClass =
  "rounded-2xl border border-gray-100 bg-white/80 p-6 shadow-soft sm:p-8";
const h2Class = "text-xl font-bold text-primary sm:text-2xl";
const h3Class = "text-lg font-semibold text-primary sm:text-xl";
const bodyClass = "mt-4 space-y-4 text-base leading-relaxed text-gray-800";

export default function MyofunktionelleTherapieContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/myofunktionelle-therapie";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Myofunktionelle Therapie";
  const lead = leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const terminHref = getHref("/online-termin", locale);
  const lang: Lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        <section className={`${sectionClass} scroll-mt-8`}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.intro.h2}</h2>
            <div className={bodyClass}>
              {c.intro.p.map((para, i) => (
                <p key={`intro-${i}`}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.timing.h2}</h2>
            <div className={bodyClass}>
              {c.timing.p.map((para, i) => (
                <p key={`timing-${i}`}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className="rounded-2xl border border-primary/15 bg-primary/[0.06] px-5 py-6 sm:px-8 sm:py-7">
            <h3 className={`${h3Class} text-primary`}>{c.merke.h3}</h3>
            <p className="mt-3 text-base leading-relaxed text-gray-800">{c.merke.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.funktion.h2}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-800">{c.funktion.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h3 className={h3Class}>{c.details.h3}</h3>
            <ul className="mt-5 space-y-3">
              {c.details.items.map((item, i) => (
                <li key={`detail-${i}`} className="flex gap-3 text-base leading-relaxed text-gray-800">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h3 className={h3Class}>{c.platte.h3}</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-800">{c.platte.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <h3 className={`${h3Class} mb-5`}>{c.galleryTitle}</h3>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {MYOFUNKTION_IMAGES.map((img, i) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={img.src}
                    alt={lang === "de" ? img.altDe : img.altEn}
                    fill
                    className="object-contain object-center p-3 sm:p-4"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>

        <section className={sectionClass}>
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 shadow-soft sm:p-8">
            <h2 className={h2Class}>{c.wear.h2}</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-800">{c.wear.p}</p>
            <p className="mt-6">
              <Link
                href={terminHref}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 sm:text-base"
              >
                {c.wear.cta}
              </Link>
            </p>
          </div>
        </section>

        <section className={`${sectionClass} pb-4`}>
          <h2 className={`${h2Class} text-center`}>{c.ablauf.h2}</h2>
          <ol className="mx-auto mt-8 max-w-3xl space-y-4">
            {c.ablauf.steps.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5"
              >
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="pt-1 text-base leading-relaxed text-gray-800">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center">
            <Link href={ablaufHref} className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent">
              {c.ablauf.link}
            </Link>
          </p>
        </section>
      </div>
    </PageContent>
  );
}
