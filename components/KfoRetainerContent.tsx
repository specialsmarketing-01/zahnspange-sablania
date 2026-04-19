import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";

const IMG = {
  hawleyRemovable: "/kfo-retainer/hawley-retainer-green.png",
  removableBlue: "/kfo-retainer/removable-appliance-blue.png",
  fixedLingual: "/kfo-retainer/fixed-retainer-lingual.png",
  clearPair: "/kfo-retainer/clear-retainers-pair.png",
} as const;

type Lang = "de" | "en";

type ImgAlts = { hawley: string; blue: string; fixed: string; clear: string };

const COPY: Record<
  Lang,
  {
    img: ImgAlts;
    intro: { h2: string; p: string[] };
    costs: { h2: string; p: string };
    why: {
      h2: string;
      h3What: string;
      p: string[];
      bullets: string[];
      merke: string;
    };
    removable: {
      h2: string;
      lead: string;
      p: string;
      advH: string;
      adv: string[];
      disH: string;
      dis: string[];
      myoH: string;
      myoP: string;
    };
    fixed: {
      h2: string;
      p: string[];
      advH: string;
      adv: string[];
      disH: string;
      dis: string[];
      p2: string;
    };
    aligners: { h2: string; p: string };
    duration: { h2: string; p: string[] };
    process: { h2: string; steps: string[]; link: string };
  }
> = {
  de: {
    img: {
      hawley:
        "Herausnehmbarer Retainer (Hawley-Typ) aus grünem Kunststoff mit Labialbogen und Klammern",
      blue: "Herausnehmbares Retentionsgerät aus blauem Kunststoff mit Drahtelementen in der Hand",
      fixed: "Festsitzende Retainer: dünner Draht lingual an Ober- und Unterfrontzähnen geklebt",
      clear: "Transparente Kunststoff-Retainer (Schienen) für Ober- und Unterkiefer",
    },
    intro: {
      h2: "Retention – Stabilisierung nach der Zahnregulierung",
      p: [
        "Zähne können sich ein Leben lang leicht verschieben. Wenn die aktive kieferorthopädische Behandlung einer Zahnfehlstellung endet, beginnt die wichtige Phase der Stabilisierung.",
        "Unter „Retainer“ versteht man Oberbegriffe für Retentionsgeräte – abnehmbar oder festsitzend – die helfen, das Behandlungsergebnis zu sichern. Die intensive Stabilisierungsphase dauert häufig etwa 2–3 Jahre; in Einzelfällen kann eine dauerhafte Retention sinnvoll sein.",
      ],
    },
    costs: {
      h2: "Kosten der Retainer",
      p: "Die erstmalige Anfertigung ist in der Behandlungspauschale mit abgedeckt.",
    },
    why: {
      h2: "Warum Retention so wichtig ist",
      h3What: "Was ist ein Retainer?",
      p: [
        "Ein festsitzendes oder abnehmbares Gerät, das die optimierte Zahn- und Kieferstellung nach der kieferorthopädischen Behandlung erhält und stabilisiert.",
        "Medizinisch ist Retention unverzichtbar. Kurz die wichtigsten Punkte:",
      ],
      bullets: [
        "Durch Zahnspange, Aligner oder Brackets wurden die Zähne bewegt; im neuen Lager sind Knochen und Faserstrukturen noch nicht vollständig stabil – es besteht Rückfallneigung.",
        "Ohne Retention droht ein schneller Rückfall der Fehlstellung.",
        "Unerwünschte Veränderungen nach der Therapie gehören zu den häufigsten Problemen in der Kieferorthopädie. Ohne Retention gehen Funktion und Ästhetik des Ergebnisses verloren.",
      ],
      merke:
        "Am Ende jeder kieferorthopädischen Behandlung muss das Ergebnis mit festsitzendem Retainer oder herausnehmbaren Schienen stabilisiert werden.",
    },
    removable: {
      h2: "Abnehmbare Retention – Vor- und Nachteile",
      lead: "Die Wahl des Retentionsgeräts richtet sich nach Ihrem Befund und der ursprünglichen Fehlstellung.",
      p: "Abnehmbare Retainer (z. B. Hawley oder klare Schienen) sind flexibel im Alltag – setzen aber Ihre Mitarbeit voraus.",
      advH: "Vorteile",
      adv: ["Einfache Handhabung.", "Jederzeit abnehmbar zum Essen und Putzen."],
      disH: "Nachteile",
      dis: [
        "Erfolg hängt vom konsequenten Tragen ab – auch tagsüber.",
        "Langfristige Motivation kann nachlassen; wir empfehlen dennoch eine dauerhafte Nutzung nach ärztlicher Empfehlung.",
      ],
      myoH: "Myofunktionelle Retention / Platten",
      myoP:
        "In ausgewählten Fällen können herausnehmbare Platten oder Trainer auch die Muskulatur und Zungenführung unterstützen – das besprechen wir individuell mit Ihnen.",
    },
    fixed: {
      h2: "Festsitzender Retainer (geklebter Draht)",
      p: [
        "Der festsitzende Retainer ist ein dünner Draht, der mit spezieller Klebetechnik hinter den Frontzähnen von Ober- und/oder Unterkiefer fixiert wird – häufig vom Eckzahn zum Eckzahn.",
      ],
      advH: "Vorteile",
      adv: [
        "Von außen unsichtbar (lingual).",
        "Stabilisiert rund um die Uhr – Sie können ihn nicht „vergessen“.",
        "Kein Verlust wie bei herausnehmbaren Schienen.",
      ],
      disH: "Nachteile",
      dis: [
        "Gründliche Reinigung der Zahnzwischenräume ist nötig.",
        "Regelmäßige Anwendung von Zahnseide / Interdentalpflege.",
      ],
      p2:
        "Weil der Draht dauerhaft sitzt, ist die Stabilisierung oft sehr effizient. Dennoch können z. B. Brüche am Kleber oder Draht zu Bewegungen einzelner Zähne führen – deshalb sind Kontrollen wichtig.",
    },
    aligners: {
      h2: "Klare Aligner als Retention",
      p: "Transparente Overlay-Aligner eignen sich in der Stabilisierungsphase als herausnehmbare Alternative und sind nahezu unsichtbar im Alltag.",
    },
    duration: {
      h2: "Wie lange tragen?",
      p: [
        "Nicht jeder Fall neigt gleich stark zum Rückfall – Kieferfehlstellungen mit Rücklage oder Engstand im Frontzahnbereich sind jedoch besonders anfällig.",
        "Ob festsitzend oder herausnehmbar: eine langjährige Nutzung kann nötig sein, um das Ergebnis zu halten.",
        "Nach Abschluss der aktiven Therapie empfehle ich etwa zweimal pro Jahr eine Kontrolle.",
        "Beim Zähneputzen sollten Sie Retainer und Zähne regelmäßig selbst prüfen.",
      ],
    },
    process: {
      h2: "Ablauf in unserer Kieferorthopädie",
      steps: [
        "Kostenlose Erstberatung – nur nach Vereinbarung.",
        "Diagnostik: Röntgen, Fotos, digitale Scans ohne klassische Abdrücke.",
        "Planbesprechung und Empfehlung der passenden Apparatur.",
        "Behandlungsbeginn mit Einweisung zu Reinigung und Tragezeiten.",
        "Kontrolltermine etwa alle 6–8 Wochen.",
        "Behandlungsende und Besprechung des Ergebnisses.",
        "Retention – Start der Stabilisierungsphase.",
      ],
      link: "Gesamten Ablauf im Detail lesen",
    },
  },
  en: {
    img: {
      hawley: "Removable Hawley-type retainer in green acrylic with labial bow and clasps",
      blue: "Removable blue acrylic retention appliance with wire elements, held in hand",
      fixed: "Fixed retainers: thin wire bonded lingually to upper and lower front teeth",
      clear: "Transparent plastic retainers (trays) for upper and lower arches",
    },
    intro: {
      h2: "Retention – stabilising your result after braces",
      p: [
        "Teeth can shift slightly throughout life. When active orthodontic treatment ends, the stabilisation phase begins.",
        "“Retainer” is a general term for retention appliances – removable or fixed – that help maintain the treatment outcome. Intensive retention often lasts about 2–3 years; in some cases long-term retention is advisable.",
      ],
    },
    costs: {
      h2: "Cost of retainers",
      p: "The initial appliance is included in the treatment package.",
    },
    why: {
      h2: "Why retention matters",
      h3What: "What is a retainer?",
      p: [
        "A fixed or removable appliance that maintains and stabilises the corrected tooth and jaw position after orthodontic treatment.",
        "Medically, retention is essential. Key points:",
      ],
      bullets: [
        "Braces or aligners have moved the teeth; bone and fibres are not yet fully stable – relapse is possible.",
        "Without retention, misalignment can return quickly.",
        "Relapse is one of the most common issues in orthodontics. Without retention, both function and aesthetics of the result can be lost.",
      ],
      merke:
        "At the end of every orthodontic treatment the result must be stabilised with fixed retainers or removable trays.",
    },
    removable: {
      h2: "Removable retention – pros and cons",
      lead: "The choice of appliance depends on your findings and original misalignment.",
      p: "Removable retainers (e.g. Hawley or clear trays) are flexible day-to-day – but they require your cooperation.",
      advH: "Advantages",
      adv: ["Easy to use.", "Removable for eating and brushing."],
      disH: "Disadvantages",
      dis: [
        "Success depends on consistent wear, including during the day.",
        "Long-term motivation can drop; we still recommend ongoing use as advised.",
      ],
      myoH: "Myofunctional plates",
      myoP:
        "In selected cases removable plates or trainers can also support muscle and tongue function – we discuss this individually.",
    },
    fixed: {
      h2: "Fixed retainer (bonded wire)",
      p: [
        "A fixed retainer is a thin wire bonded behind the front teeth of the upper and/or lower jaw – often from canine to canine.",
      ],
      advH: "Advantages",
      adv: [
        "Invisible from the outside (lingual).",
        "Stabilises 24/7 – nothing to forget.",
        "Cannot be lost like a removable tray.",
      ],
      disH: "Disadvantages",
      dis: [
        "You must clean thoroughly between teeth.",
        "Regular flossing / interdental cleaning.",
      ],
      p2:
        "Because the wire is always in place, stabilisation is often very effective. Still, broken bonds or wire fractures can allow teeth to move – so check-ups matter.",
    },
    aligners: {
      h2: "Clear aligners for retention",
      p: "Transparent overlay aligners can be used during stabilisation as a removable, discreet option.",
    },
    duration: {
      h2: "How long to wear retainers?",
      p: [
        "Relapse risk varies; cases with retrusion or lower anterior crowding are more prone.",
        "Long-term wear (fixed or removable) may be needed to maintain the result.",
        "After active treatment I recommend check-ups about twice a year.",
        "Inspect your retainers and teeth regularly when you brush.",
      ],
    },
    process: {
      h2: "The process at our practice",
      steps: [
        "Free initial consultation – by appointment only.",
        "Diagnostics: X-rays, photos, digital scans without conventional impressions.",
        "Planning session and recommendation of suitable appliances.",
        "Start of treatment with instructions on cleaning and wear.",
        "Check-ups about every 6–8 weeks.",
        "End of treatment and review of the result.",
        "Retention – beginning stabilisation.",
      ],
      link: "Full treatment process in detail",
    },
  },
};

const sectionClass = "mx-auto mt-12 max-w-3xl sm:mt-14";
const cardClass =
  "rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-soft sm:p-8";
const h2Class = "text-xl font-bold text-primary sm:text-2xl";
const h3Class = "text-lg font-semibold text-primary sm:text-xl";

function SectionFigure({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="mb-6 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm sm:mb-8">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-center p-3 sm:p-5"
          sizes="(max-width: 768px) 100vw, min(768px, 50vw)"
          priority={priority}
        />
      </div>
    </figure>
  );
}

export default function KfoRetainerContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/kfo-retainer";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "KFO Retainer";
  const lead = leads[dePath];
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const lang: Lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];
  const alt = c.img;

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0 text-gray-800">
        <section className={`${sectionClass} scroll-mt-8`}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.intro.h2}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed">
              {c.intro.p.map((para, i) => (
                <p key={`intro-${i}`}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.costs.h2}</h2>
            <p className="mt-4 text-base leading-relaxed">{c.costs.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.why.h2}</h2>
            <h3 className={`${h3Class} mt-6`}>{c.why.h3What}</h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed">
              {c.why.p.map((para, i) => (
                <p key={`why-p-${i}`}>{para}</p>
              ))}
            </div>
            <ul className="mt-5 space-y-3">
              {c.why.bullets.map((item, i) => (
                <li key={`why-li-${i}`} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-4 sm:px-5">
              <p className="text-base font-medium leading-relaxed text-primary">{c.why.merke}</p>
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <SectionFigure src={IMG.hawleyRemovable} alt={alt.hawley} priority />
          <div className={cardClass}>
            <h2 className={h2Class}>{c.removable.h2}</h2>
            <p className="mt-2 text-sm font-medium text-primary/90">{c.removable.lead}</p>
            <p className="mt-4 text-base leading-relaxed">{c.removable.p}</p>
            <h3 className={`${h3Class} mt-8`}>{c.removable.advH}</h3>
            <ul className="mt-3 space-y-2">
              {c.removable.adv.map((item, i) => (
                <li key={`adv-${i}`} className="flex gap-2 text-base leading-relaxed">
                  <span className="text-accent" aria-hidden>
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <h3 className={`${h3Class} mt-8`}>{c.removable.disH}</h3>
            <ul className="mt-3 space-y-2">
              {c.removable.dis.map((item, i) => (
                <li key={`dis-${i}`} className="flex gap-2 text-base leading-relaxed">
                  <span className="text-amber-700" aria-hidden>
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={sectionClass}>
          <SectionFigure src={IMG.removableBlue} alt={alt.blue} />
          <div className={cardClass}>
            <h3 className={h3Class}>{c.removable.myoH}</h3>
            <p className="mt-4 text-base leading-relaxed">{c.removable.myoP}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <SectionFigure src={IMG.fixedLingual} alt={alt.fixed} />
          <div className={cardClass}>
            <h2 className={h2Class}>{c.fixed.h2}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed">
              {c.fixed.p.map((para, i) => (
                <p key={`fix-${i}`}>{para}</p>
              ))}
            </div>
            <h3 className={`${h3Class} mt-8`}>{c.fixed.advH}</h3>
            <ul className="mt-3 space-y-2">
              {c.fixed.adv.map((item, i) => (
                <li key={`fa-${i}`} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <h3 className={`${h3Class} mt-8`}>{c.fixed.disH}</h3>
            <ul className="mt-3 space-y-2">
              {c.fixed.dis.map((item, i) => (
                <li key={`fd-${i}`} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed">{c.fixed.p2}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <SectionFigure src={IMG.clearPair} alt={alt.clear} />
          <div className={cardClass}>
            <h2 className={h2Class}>{c.aligners.h2}</h2>
            <p className="mt-4 text-base leading-relaxed">{c.aligners.p}</p>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className={h2Class}>{c.duration.h2}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed">
              {c.duration.p.map((para, i) => (
                <p key={`dur-${i}`}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pb-4`}>
          <h2 className={`${h2Class} text-center`}>{c.process.h2}</h2>
          <ol className="mx-auto mt-8 max-w-3xl space-y-4">
            {c.process.steps.map((step, i) => (
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
                <span className="pt-1 text-base leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-8 max-w-3xl text-center">
            <Link
              href={ablaufHref}
              className="font-medium text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
            >
              {c.process.link}
            </Link>
          </p>
        </section>
      </div>
    </PageContent>
  );
}
