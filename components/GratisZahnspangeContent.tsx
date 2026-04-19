import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

/** All imagery for this page lives under /public/gratis-zahnspange — each file used once. */
const IMG = {
  hero: "/gratis-zahnspange/1-2048x1365.jpg",
  intro: "/gratis-zahnspange/Teaser-Zahspange.png",
  voraussetzungen: "/gratis-zahnspange/Zahnspange-1-pzjfyo51j40kv49z4w8mofsr7omfkjws47rwkxmwx8.png",
  wer1: "/gratis-zahnspange/Kind-Laecheln.png",
  wer2: "/gratis-zahnspange/jugendliche-skaliert.png",
  wer3: "/gratis-zahnspange/Jugendliche.png",
  wer4: "/gratis-zahnspange/beautiful-young-woman-is-dentist-she-is-open-mouthed-shows-newly-fixed-aesthetic-self-aligning-lingual-locks-close-up-860x649.jpg",
  metall: "/gratis-zahnspange/Screenshot-5168.png",
  keramik: "/gratis-zahnspange/girl-eating-chocolate-with-ceramic-teeth-braces_10069-205.png",
  aligners: "/gratis-zahnspange/Aligners-35-q1ah25wbsc1ausmvjri1zvu9hxd6rvlh3ro9a6rxnw.jpg",
  lingualAlt: "/gratis-zahnspange/Screenshot-5329-860x649.png",
  interzeptiv: "/gratis-zahnspange/patientin-strahlendes-laecheln.png",
  hauptbehandlung: "/gratis-zahnspange/Zahnarzt-1-e1671695799854.png",
  ablauf: "/gratis-zahnspange/spiegle-etc-klein.png",
  arzt: "/gratis-zahnspange/dr.Mansi_-qtukjg7rpcrvhxt5faunya6jmdtn8zsfshb8qy7fgk.png",
} as const;

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-gray-100 bg-white shadow-soft open:shadow-soft-lg">
      <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-primary transition-colors hover:bg-primary/[0.04] [&::-webkit-details-marker]:hidden">
        <span className="flex items-start justify-between gap-3">
          <span>{question}</span>
          <span className="mt-0.5 shrink-0 text-primary-muted transition-transform group-open:rotate-180">▾</span>
        </span>
      </summary>
      <div className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-700">{answer}</div>
    </details>
  );
}

export default function GratisZahnspangeContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/gratis-zahnspange";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Gratis Zahnspange";
  const lead = leads[dePath];
  const terminHref = getHref("/online-termin", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const retentionHref = getHref("/kfo-retainer", locale);
  const unsichtbarHref = getHref("/unsichtbare-zahnspange-wien", locale);
  const durchsichtigHref = getHref("/durchsichtige-zahnspange", locale);
  const isDe = locale === "de";

  const copy = isDe
    ? {
        heroKicker: "Kieferorthopädie Wien",
        heroTitle: "Gratis Zahnspange",
        heroLead:
          "Gratis Zahnspange – Metal Brackets. Seit Juli 2015 gibt es neue Regeln für die Gratis-Zahnspange! Als Fachzahnarzt für Kieferorthopädie und qualifizierter Wahl-Kieferorthopäde der ÖGK biete ich auch die Gratiszahnspange an. Das bedeutet: PatientInnen bekommen 100% des Kassentarifs refundiert.",
        ctaPrimary: "Kostenlose Erstberatung vereinbaren",
        ctaSecondary: "Termin online buchen",
        introH2: "Gratis-Zahnspange Wien, Voraussetzungen und Ihr Anspruch auf Rückerstattung",
        introP1:
          "Anspruch haben Kinder und Jugendliche während und nach dem Zahnwechsel und bis zur Vollendung des 18. Lebensjahres.",
        introBoxTitle: "Das Wichtigste in Kürze",
        introBoxText:
          "Die Korrektur muss aus medizinischen Gründen erforderlich sein (IOTN 4 oder 5). Vor Behandlungsbeginn ist ein Antrag bei der Krankenkasse einzureichen. Bei positiver Prüfung werden 100% des Kassentarifs der festsitzenden Gratis Zahnspange rückerstattet. Durchführung ausschließlich mit Metall-Brackets; Aufzahlungen für z. B. Keramik-Brackets sind bei der Krankenkasse nicht zulässig.",
        vorausH2: "Zahnregulierung: Gratis Zahnspange festsitzend oder abnehmbar – Voraussetzungen",
        vCheck1:
          "Es muss eine schwere Zahn-Fehlstellung und/oder Kiefer-Fehlstellung vorliegen, um Anspruch auf eine Gratiszahnspange zu erhalten. Die Korrektur muss aus medizinischen Gründen erforderlich sein (IOTN 4 oder 5). Das wird in einer Erstberatung festgestellt. Schweregrad-Feststellung: Termin für Erstberatung vereinbaren.",
        vCheck2:
          "Vor Behandlungsbeginn (Gratis Zahnspange) ist ein Antrag bei der Krankenkasse einzureichen. Bei positiver Prüfung werden 100% des Kassentarifs der festsitzenden Gratis Zahnspange rückerstattet. Tipp: Erkundigen Sie sich mit der Krankenkasse bereits vor Beginn der Behandlung.",
        vCheck3: "Durchführung ausschließlich mit Metall-Brackets. Aufzahlungen für z. B. Keramik-Brackets sind bei der Krankenkasse nicht zulässig.",
        merkeTitle: "Merke",
        merkeText:
          "Wenn ein Fehlstellung-Schweregrad IOTN 4 oder 5 vorliegt, Eltern ihren Kindern aber alternative Möglichkeiten (ohne Zuschuss von der Krankenkasse) zur Gratis Zahnspange anbieten wollen, dann bieten wir:",
        alt1: "Durchsichtige Zahnspange",
        alt2: "Keramik-Brackets",
        alt3: "Durchsichtige Schienen (Unsichtbare Zahnspange) Clear Aligner, Invisalign",
        werH2: "Wer bekommt die Gratis Zahnspange?",
        werCards: [
          {
            title: "Kinder & Jugendliche",
            text: "Anspruch haben Kinder und Jugendliche während und nach dem Zahnwechsel bis zur Vollendung des 18. Lebensjahres – bei entsprechendem Befund.",
          },
          {
            title: "Schwere Fehlstellung (IOTN 4 oder 5)",
            text: "Die medizinische Notwendigkeit wird in der Erstberatung und Diagnostik festgelegt; ohne entsprechenden Schweregrad besteht kein Kassenanspruch.",
          },
          {
            title: "Timing & Milchgebiss",
            text: "Je nach Befund kann eine Behandlung im Wechselgebiss oder im bleibenden Gebiss sinnvoll sein – wir planen individuell.",
          },
          {
            title: "Alternative Optionen",
            text: "Wenn Eltern bewusst eine kassenfremde Lösung wählen (z. B. Keramik oder Aligner), beraten wir transparent zu Kosten und Ablauf.",
          },
        ],
        behandlungH2: "Behandlungsarten & Optionen",
        behandlungLead:
          "Die Gratis Zahnspange nach Kassentarif ist an Metall-Brackets gebunden. Für andere Wünsche gibt es private Alternativen.",
        beh: [
          {
            title: "Metall-Brackets (Gratis Zahnspange)",
            body: "Die Kassenleistung für die Gratis Zahnspange sieht festsitzende Metall-Brackets vor – das ist die Basis der subventionierten Behandlung.",
          },
          {
            title: "Keramik-Brackets",
            body: "Ästhetisch dezenter; Aufzahlungen für Keramik sind im Kassenweg der Gratis Zahnspange nicht zulässig – möglich als private Alternative.",
          },
          {
            title: "Clear Aligners / unsichtbare Schienen",
            body: "Durchsichtige Schienen für ausgewählte Fälle – außerhalb des Kassentarifs der Gratis Zahnspange, nach individueller Planung.",
          },
          {
            title: "Weitere Kieferorthopädie",
            body: "Je nach Diagnose kombinieren wir die für Sie passenden Verfahren – von klassischer festsitzender Therapie bis zu speziellen Apparaturen.",
          },
        ],
        interH2: "Gratis-Zahnspange: Interzeptive Behandlung in der Wechselgebiss-Phase",
        interBody: (
          <>
            Im{" "}
            <a
              href="https://flexikon.doccheck.com/de/Wechselgebiss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline decoration-accent/50 hover:decoration-accent"
            >
              Wechselgebiss
            </a>{" "}
            eine Behandlung geeignet für Kinder zwischen 6 und 10 Jahren. Es handelt sich um eine Behandlung in der Frühphase: eine begrenzte Therapie im Milch- oder Wechselgebiss. Dauer maximal 1 Jahr, danach Pause. Anschließend regelmäßige Kontrollen im Abstand von 4–6 Monaten. Kinder verlieren in dieser Phase Milchzähne, die bleibenden Zähne brechen durch. Mit 12–13 Jahren erfolgt eine erneute Kontrolle, ob eine weitere Zahnregulierung nötig ist; bei Bedarf Behandlung mit festsitzender Zahnspange.
            <h3 className="mt-10 text-xl font-bold text-primary">Die abnehmbare Gratis Zahnspange</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-800 sm:text-base">
              Die abnehmbare Gratis-Zahnspange ist nur dann hilfreich, wenn sie mindestens 12–14 Stunden pro Tag getragen wird.
              Behandlungsdauer: 1 Jahr.
            </p>
          </>
        ),
        fehlH2: "Kiefer- und Zahnfehlstellungen, die unbedingt eine Behandlung erfordern",
        fehlIntro:
          "Zum Beispiel: Habits oder schlechte Gewohnheiten (Zungenpressen, falsche Schluckmuster, Daumenlutschen, Lippenpressen, Fingernägelkauen usw.).",
        fehlCards: [
          {
            title: "Offener Biss",
            description:
              "Front offener Biss kann die Kaufunktion und das Sprechen beeinflussen.",
          },
          {
            title: "Platzmangel",
            description:
              "Platzmangel durch verschiedene Gründe oder frühzeitiges Verlieren der Milchzähne.",
          },
          {
            title: "Fehlbisse",
            description: "Tiefbiss, Deckbiss und Überbiss können langfristige Probleme verursachen.",
          },
          {
            title: "Kieferfehlstellung",
            description:
              "Ausgeprägte Frontzahnstufe, Rücklage im Oberkiefer oder Maxilla Klasse 3.",
          },
          {
            title: "Kreuzbiss (seitlich)",
            description:
              "Kreuzbiss im Seitenzahnbereich – einseitig oder beidseitig – kann zu asymmetrischer Belastung, Einschränkungen beim Kauen und langfristig zu Kiefergelenksbeschwerden führen und sollte kieferorthopädisch mitbehandelt werden.",
          },
          {
            title: "Kreuzbiss (Front / Progenie)",
            description:
              "Kreuzbiss der Frontzähne bzw. ein Progener Zwangsbiss: die Frontzähne treffen nicht sauber aufeinander. Eine frühzeitige Diagnose und Therapie kann Funktion und Entwicklung von Ober- und Unterkiefer günstig beeinflussen.",
          },
        ],
        hauptH2: "Gratis-Zahnspange: Hauptbehandlung mit festsitzender Zahnspange im bleibenden Gebiss",
        hauptBody:
          "Wenn eine Schweregrad-Fehlstellung von IOTN 4 oder IOTN 5 vorliegt, besteht Anspruch auf Rückerstattung. Die „Gratis-Zahnspange“ für Kinder hat eine wichtige Voraussetzung: Es dürfen nur festsitzende Zahnspangen aus Metall verwendet werden.",
        hauptTipp:
          "Tipp: Auch wenn der Schweregrad der Fehlstellung (IOTN) schon feststeht, empfehle ich immer eine Rücksprache mit der Krankenkasse.",
        hauptDauer:
          "Die Behandlungsdauer ist vom Schweregrad abhängig. Die Behandlung mit einer festsitzenden Gratis Zahnspange dauert etwa 18–24 Monate.",
        kostenH2: "Kosten, Erstattung und wichtige Rahmenbedingungen",
        kostenSub: "Kostenüberblick Gratiszahnspange zwischen 6–18 LJ nur mit IOTN 4/5",
        kostenRows: [
          { label: "Hauptbehandlung bis 18 LJ", detail: "Gratiszahnspange (Kassentarif)" },
          { label: "Interzeptiv bis 10 LJ", detail: "Gratiszahnspange (nach Vorgaben)" },
          { label: "Abbruch", detail: "Gratiszahnspange Abbruch: 350 € (Stand Referenzseite – bei Rückfragen Krankenkasse / Praxis)" },
        ],
        kostenLegal:
          "Medizinische und kassenrechtliche Details können je nach Tarif variieren. Bitte holen Sie verbindliche Auskünfte bei Ihrer Krankenkasse ein und besprechen Sie den Behandlungsplan mit uns.",
        ablaufH2: "Ablauf: von der Erstberatung bis zur Retention",
        ablaufLead: "So läuft die Gratis Zahnspange begleitet von Antrag, Diagnostik und Kontrollen – den gesamten Ablauf in der Kieferorthopädie finden Sie auch gesondert im Detail.",
        steps: [
          "Kostenlose Erstberatung für Zahnfehlstellung in unserer Kieferorthopädie. Termin nur nach Vereinbarung!",
          "Behandlungsunterlagen für den individuellen Behandlungsverlauf erstellen. Diagnose mit Röntgen, Fotos und digitalen Scans – ohne Abdrücke.",
          "Planbesprechung und Erklärung: Röntgenauswertung und Analyse, welche Art von Zahnspange und/oder Brackets im Einzelfall nötig sind.",
          "Behandlungsbeginn: Einsetzen des Geräts und Aufklärung zu Reinigung und Tragezeiten.",
          "Wichtige und notwendige Kontrolltermine alle 6–8 Wochen.",
          "Behandlungsende: Entfernen der Spange und Besprechung des Behandlungsergebnisses.",
          "Retention – Beginn der Stabilisierung des Behandlungsergebnisses.",
        ],
        ablaufLink: "Den gesamten Ablauf in der Kieferorthopädie im Detail",
        ohneH2: "Behandlungsmöglichkeiten bei Zahnfehlstellung ohne Rückerstattung",
        ohneLead:
          "Zum Beispiel wenn Kinder nicht den Schweregrad IOTN 4 oder 5 haben (Voraussetzung für eine Gratis-Zahnspange), sondern nur IOTN 2 oder 3:",
        ohneAlt: "Alternativen zur Gratis Zahnspange",
        ohneLi1: "Behandlung mit Keramik-Brackets – eine festsitzende Zahnspange.",
        ohneLi2: "Behandlung mit Clear Aligners – durchsichtige Aligners oder durchsichtige Schienen.",
        faqH2: "Häufige Fragen",
        faqs: [
          {
            q: "Was bedeuten IOTN 4 und IOTN 5?",
            a: "Der Index of Orthodontic Treatment Need beschreibt, wie schwer eine Fehlstellung ist. Für die Gratis Zahnspange sind typischerweise die Schweregrade 4 und 5 relevant – die genaue Einordnung erfolgt bei uns in der Diagnostik.",
          },
          {
            q: "Warum sind bei der Gratis Zahnspange nur Metall-Brackets erlaubt?",
            a: "Die österreichische Kassenleistung für die subventionierte Kinder- und Jugendkieferorthopädie ist an festsitzende Metall-Brackets gekoppelt. Ästhetische Aufzahlungen (z. B. Keramik) werden nicht mitfinanziert.",
          },
          {
            q: "Wie lange dauert eine festsitzende Gratis Zahnspange?",
            a: "Die Dauer hängt vom Schweregrad ab; für die Hauptbehandlung im bleibenden Gebiss liegt sie häufig bei etwa 18–24 Monaten. Interzeptive Frühbehandlungen sind zeitlich begrenzter.",
          },
          {
            q: "Was ist eine interzeptive Behandlung?",
            a: "Eine begrenzte Therapie in der Wechselgebiss-Phase zur Lenkung von Wachstum und Zahnstellung, oft mit Pause und späterer erneuter Prüfung, ob eine weiterführende Therapie nötig ist.",
          },
        ],
        arztH2: "Dr. med. dent. Manish Sablania M.Sc. Orthodontics",
        arztSub: "Dr. med. dent. Manish Sablania BDS M.Sc. – Kieferorthopädie-Zahnarzt Wien 1200",
        arztLi1:
          "Qualifizierter Wahlkieferorthopäde für „Krankenkasse-Gratis Zahnspange“, spezialisiert in Kieferorthopädie und Orthodontie.",
        arztLi2:
          "Über 28 Jahre Erfahrung und 7800+ Zahnregulierungen und Zahnspangenbehandlungen – mit Fokus auf das Wohlbefinden der Patientinnen und Patienten.",
        arztCta: "Termin zur kostenlosen Erstberatung",
        finalH2: "Jetzt kostenlose Erstberatung vereinbaren",
        finalP:
          "Wir beraten Sie gerne persönlich zur passenden Behandlung und zu Ihren Möglichkeiten bei der Gratis Zahnspange.",
        finalB1: "Termin vereinbaren",
        finalB2: "Kontakt aufnehmen",
      }
    : {
        heroKicker: "Orthodontics Vienna",
        heroTitle: "Publicly funded braces",
        heroLead:
          "Publicly funded braces – metal brackets. Since July 2015, Austria has had updated rules for subsidised orthodontic treatment for children and teens. As a specialist orthodontist and contracted ÖGK partner, we offer treatment under this scheme. Patients can receive 100% of the statutory tariff back from the health insurance fund.",
        ctaPrimary: "Book a free initial consultation",
        ctaSecondary: "Book an appointment online",
        introH2: "Requirements and your entitlement to reimbursement",
        introP1:
          "Children and teenagers during and after the mixed dentition phase, up to age 18, may be eligible if the clinical criteria are met.",
        introBoxTitle: "Key points",
        introBoxText:
          "Treatment must be medically necessary (IOTN 4 or 5). You must apply to your insurer before starting. If approved, 100% of the statutory tariff for fixed metal braces may be reimbursed. Treatment under the scheme uses metal brackets only; add-ons such as ceramic brackets are not covered.",
        vorausH2: "Fixed or removable publicly funded braces – requirements",
        vCheck1:
          "A severe dental and/or jaw misalignment (IOTN 4 or 5) must be present. Severity is assessed at the initial consultation.",
        vCheck2:
          "Submit an application to your insurer before treatment begins. If approved, 100% of the tariff for fixed braces may be reimbursed. Check with your insurer early.",
        vCheck3: "Treatment under the scheme uses metal brackets only; ceramic surcharges are not reimbursed.",
        merkeTitle: "Note",
        merkeText: "If IOTN 4 or 5 is present but parents prefer an alternative without insurer funding, we offer:",
        alt1: "Tooth-coloured braces",
        alt2: "Ceramic brackets",
        alt3: "Clear aligners (e.g. Invisalign)",
        werH2: "Who is eligible?",
        werCards: [
          {
            title: "Children & teens",
            text: "During and after the mixed dentition phase up to age 18, if clinical criteria are met.",
          },
          {
            title: "Severe malocclusion (IOTN 4 or 5)",
            text: "Medical necessity is established in diagnostics; lower severity classes are not covered.",
          },
          {
            title: "Timing",
            text: "Treatment may start in the mixed or permanent dentition depending on findings – we plan individually.",
          },
          {
            title: "Private alternatives",
            text: "If you choose a non-funded option (e.g. ceramic or aligners), we explain costs and process clearly.",
          },
        ],
        behandlungH2: "Treatment options",
        behandlungLead:
          "The subsidised scheme is tied to metal brackets. Other preferences can be addressed as private treatment.",
        beh: [
          {
            title: "Metal brackets (subsidised)",
            body: "The statutory benefit for publicly funded braces is based on fixed metal appliances.",
          },
          {
            title: "Ceramic brackets",
            body: "More discreet; not eligible for surcharge coverage under the public scheme – available as private care.",
          },
          {
            title: "Clear aligners",
            body: "Transparent aligners for selected cases – outside the public tariff, planned individually.",
          },
          {
            title: "Further orthodontics",
            body: "We combine methods that fit your diagnosis – from fixed appliances to specific devices.",
          },
        ],
        interH2: "Interceptive treatment in the mixed dentition",
        interBody: (
          <>
            In the{" "}
            <a
              href="https://flexikon.doccheck.com/de/Wechselgebiss"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline decoration-accent/50 hover:decoration-accent"
            >
              mixed dentition
            </a>
            , early-phase treatment for children around 6–10: limited therapy in primary/mixed dentition, max. about 1 year, then a break, then checks every 4–6 months. Around ages 12–13 we review whether further treatment is needed, including fixed braces if appropriate.
            <h3 className="mt-10 text-xl font-bold text-primary">Removable appliance under the scheme</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-800 sm:text-base">
              The removable option only works if worn at least about 12–14 hours per day. Typical duration: about 1 year.
            </p>
          </>
        ),
        fehlH2: "Malocclusions that require treatment",
        fehlIntro:
          "Including harmful habits (tongue thrust, incorrect swallowing, thumb sucking, etc.).",
        fehlCards: [
          {
            title: "Open bite",
            description: "An anterior open bite can affect chewing and speech.",
          },
          {
            title: "Crowding",
            description: "Crowding due to various causes or early loss of primary teeth.",
          },
          {
            title: "Malocclusions",
            description: "Deep bite, overbite and crossbite can cause long-term problems.",
          },
          {
            title: "Jaw discrepancy",
            description: "Pronounced incisor step, maxillary retrusion or Class III maxilla.",
          },
          {
            title: "Crossbite (posterior)",
            description:
              "A posterior crossbite (on one or both sides) can cause uneven loading, chewing problems, and over time TMJ issues; it usually needs orthodontic correction.",
          },
          {
            title: "Crossbite (anterior / edge-to-edge)",
            description:
              "Anterior crossbite or a forced anterior bite: front teeth do not meet correctly. Early assessment and treatment can support jaw function and growth.",
          },
        ],
        hauptH2: "Main treatment with fixed braces in the permanent dentition",
        hauptBody:
          "If IOTN 4 or 5 applies, reimbursement may be available. Publicly funded treatment for children uses fixed metal appliances only.",
        hauptTipp: "Tip: confirm details with your insurer even if the IOTN severity is already known.",
        hauptDauer: "Duration depends on severity; fixed treatment often lasts about 18–24 months.",
        kostenH2: "Costs and reimbursement",
        kostenSub: "Overview for ages 6–18 with IOTN 4/5 only",
        kostenRows: [
          { label: "Main treatment up to age 18", detail: "Public tariff (subsidised braces)" },
          { label: "Interceptive up to age 10", detail: "According to insurer rules" },
          { label: "Discontinuation fee", detail: "Reference site: €350 – confirm with insurer/practice" },
        ],
        kostenLegal:
          "Benefits may vary by tariff. Please obtain binding information from your insurer and discuss your plan with us.",
        ablaufH2: "Process: consultation to retention",
        ablaufLead: "From application and diagnostics to follow-ups – see our detailed treatment process page.",
        steps: [
          "Free initial consultation (by appointment).",
          "Records: X-rays, photos, digital scans – without impressions.",
          "Planning visit: findings and discussion of appliance type.",
          "Start: fitting and instructions for hygiene and wear.",
          "Regular control visits every 6–8 weeks.",
          "Finishing: debonding and review of results.",
          "Retention to stabilise the outcome.",
        ],
        ablaufLink: "Full treatment process in detail",
        ohneH2: "If reimbursement is not possible",
        ohneLead: "For example IOTN 2 or 3 instead of 4 or 5:",
        ohneAlt: "Alternatives",
        ohneLi1: "Ceramic fixed braces.",
        ohneLi2: "Clear aligners.",
        faqH2: "FAQ",
        faqs: [
          {
            q: "What are IOTN 4 and 5?",
            a: "They describe how severe a malocclusion is. Grades 4–5 are typically relevant for public funding; we classify this in diagnostics.",
          },
          {
            q: "Why metal brackets for the subsidised scheme?",
            a: "Austrian public coverage for this programme is tied to fixed metal appliances; aesthetic surcharges are not funded.",
          },
          {
            q: "How long does treatment take?",
            a: "It depends on severity; main treatment in the permanent dentition is often about 18–24 months. Interceptive phases are shorter.",
          },
          {
            q: "What is interceptive treatment?",
            a: "Limited early treatment in the mixed dentition, often with a pause and later review for further care.",
          },
        ],
        arztH2: "Dr Manish Sablania M.Sc. Orthodontics",
        arztSub: "Specialist orthodontist Vienna 1200",
        arztLi1: "Qualified partner for publicly funded braces.",
        arztLi2: "28+ years of experience and 7800+ orthodontic treatments, patient-centred care.",
        arztCta: "Book a free initial consultation",
        finalH2: "Book your free consultation",
        finalP: "We will explain suitable treatment and your options under the public braces scheme.",
        finalB1: "Book appointment",
        finalB2: "Contact us",
      };

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} hideHeader showCta={false}>
      <div className="not-prose max-w-none space-y-0">
        {/* 1. Hero */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-[#1e3a66] to-primary-muted text-white shadow-soft-lg">
          <div className="relative grid gap-10 px-6 py-12 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent-light/95">{copy.heroKicker}</p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{copy.heroTitle}</h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">{copy.heroLead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-accent-light"
                >
                  {copy.ctaPrimary}
                </a>
                <Link
                  href={terminHref}
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-[3/2] w-full max-w-lg overflow-hidden rounded-2xl border border-white/20 shadow-soft-lg lg:mx-0 lg:max-w-2xl lg:justify-self-start">
              <Image
                src={IMG.hero}
                alt={isDe ? "Patientin in der Kieferorthopädie bei der Beratung" : "Orthodontic consultation"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. Intro */}
        <section className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">{copy.introH2}</h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">{copy.introP1}</p>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-accent/30 bg-accent/10 px-6 py-5 shadow-soft sm:px-8 sm:py-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{copy.introBoxTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.introBoxText}</p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl shadow-soft-lg">
            <div className="relative aspect-[21/9] w-full sm:aspect-[2/1]">
              <Image
                src={IMG.intro}
                alt={isDe ? "Gratis Zahnspange – Metallbrackets, Kieferorthopädie" : "Publicly funded metal braces"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>
        </section>

        {/* 3. Voraussetzungen */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.vorausH2}</h2>
          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5">
              <ul className="space-y-4">
                {[copy.vCheck1, copy.vCheck2, copy.vCheck3].map((text, vi) => (
                  <li
                    key={vi}
                    className="flex gap-3 rounded-2xl border border-gray-100 bg-gray-50/80 px-4 py-4 text-sm leading-relaxed text-slate-800 shadow-soft sm:text-base"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/30 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] px-5 py-4">
                <p className="font-semibold text-primary">{copy.merkeTitle}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{copy.merkeText}</p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
                  <li>{copy.alt1}</li>
                  <li>{copy.alt2}</li>
                  <li>
                    {isDe ? (
                      <>
                        {copy.alt3} —{" "}
                        <Link href={unsichtbarHref} className="font-medium text-accent underline hover:text-primary">
                          Unsichtbare Zahnspange / Aligners
                        </Link>
                      </>
                    ) : (
                      <>
                        {copy.alt3} —{" "}
                        <Link href={unsichtbarHref} className="font-medium text-accent underline hover:text-primary">
                          Invisible braces / aligners
                        </Link>
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-gray-100 shadow-soft-lg lg:max-w-none lg:sticky lg:top-28">
              <Image
                src={IMG.voraussetzungen}
                alt={isDe ? "Festsitzende Metall-Zahnspange (Gratis Zahnspange)" : "Fixed metal braces"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 4. Wer bekommt */}
        <section className="mt-16 rounded-3xl bg-gray-50/90 px-4 py-12 sm:mt-24 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.werH2}</h2>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.werCards.map((card, i) => {
              const imgs = [IMG.wer1, IMG.wer2, IMG.wer3, IMG.wer4];
              const werAlts = isDe
                ? [
                    "Lächelndes Kind in der Kieferorthopädie",
                    "Jugendliche mit festsitzender Zahnspange",
                    "Jugendlicher Patient mit Zahnspange",
                    "Erwachsene Patientin mit Zahnspange bei der Kontrolle",
                  ]
                : [
                    "Smiling child at the orthodontic practice",
                    "Teen with fixed braces",
                    "Teenage patient with braces",
                    "Adult patient at an orthodontic check-up",
                  ];
              return (
                <article
                  key={card.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={imgs[i]!}
                      alt={werAlts[i] ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">{card.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 5. Behandlungsarten */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.behandlungH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600 sm:text-base">{copy.behandlungLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {copy.beh.map((b, i) => {
              const shots = [IMG.interzeptiv, IMG.keramik, IMG.aligners, IMG.lingualAlt];
              const behAlts = isDe
                ? [
                    "Junge Patientin mit selbstbewusstem, strahlendem Lächeln",
                    "Keramik-Brackets – zahnfarbene Brackets",
                    "Durchsichtige Aligner-Schienen",
                    "Ästhetische festsitzende Zahnspange (Beispielabbildung)",
                  ]
                : [
                    "Young patient with a confident, bright smile",
                    "Tooth-coloured ceramic brackets",
                    "Clear aligner trays",
                    "Aesthetic fixed appliance (illustration)",
                  ];
              return (
                <article
                  key={b.title}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[16/10] w-full bg-gray-50">
                    <Image
                      src={shots[i]!}
                      alt={behAlts[i] ?? ""}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">{b.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 6. Interzeptiv */}
        <section className="mt-16 sm:mt-24">
          <div className="rounded-3xl bg-primary/[0.06] px-4 py-10 sm:px-8 sm:py-14">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{copy.interH2}</h2>
                <div className="mt-5 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.interBody}</div>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft-lg">
                <Image
                  src={IMG.metall}
                  alt={isDe ? "Metall-Brackets an den Frontzähnen" : "Metal brackets on front teeth"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Fehlstellungen */}
        <section className="mt-16 sm:mt-24">
          <div className="rounded-3xl bg-gray-50 py-16">
            <div className="mx-auto max-w-6xl px-4 py-20">
              <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 md:text-4xl">{copy.fehlH2}</h2>
              <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-gray-600">{copy.fehlIntro}</p>

              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {copy.fehlCards.map((card, i) => (
                  <article
                    key={`${card.title}-${i}`}
                    className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-600">{card.description}</p>
                  </article>
                ))}
              </div>

              <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-gray-600">
                {isDe ? (
                  <>
                    Kreuzbiss:{" "}
                    <a
                      href="https://de.wikipedia.org/wiki/Kreuzbiss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Wikipedia
                    </a>
                    {" · "}
                    Progener Zwangsbiss:{" "}
                    <Link href={durchsichtigHref} className="font-medium text-blue-600 hover:underline">
                      mehr zur durchsichtigen Zahnspange
                    </Link>
                  </>
                ) : (
                  <>
                    More on related topics:{" "}
                    <a
                      href="https://de.wikipedia.org/wiki/Kreuzbiss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      crossbite (DE)
                    </a>
                    {" · "}
                    <Link href={durchsichtigHref} className="font-medium text-blue-600 hover:underline">
                      clear aligners
                    </Link>
                  </>
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Hauptbehandlung */}
        <section className="mt-16 sm:mt-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">{copy.hauptH2}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.hauptBody}</p>
              <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50/90 px-4 py-3 text-sm text-amber-950">{copy.hauptTipp}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{copy.hauptDauer}</p>
            </div>
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft-lg lg:order-2">
              <Image
                src={IMG.hauptbehandlung}
                alt={isDe ? "Zahnarzt bei der kieferorthopädischen Behandlung" : "Dentist during orthodontic treatment"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* 8. Kosten */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.kostenH2}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm font-medium text-primary">{copy.kostenSub}</p>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {copy.kostenRows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col justify-between gap-1 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-soft sm:flex-row sm:items-center"
              >
                <span className="font-semibold text-primary">{row.label}</span>
                <span className="text-sm text-slate-700">{row.detail}</span>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-primary/20 bg-white px-5 py-5 shadow-soft sm:px-8">
            <p className="text-sm leading-relaxed text-slate-800">{copy.kostenLegal}</p>
          </div>
        </section>

        {/* 9. Ablauf */}
        <section className="mt-16 rounded-3xl bg-gray-50/90 px-4 py-12 sm:mt-24 sm:px-8 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.ablaufH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700 sm:text-base">{copy.ablaufLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
              <Image
                src={IMG.ablauf}
                alt={isDe ? "Kieferorthopädische Instrumente und Spiegel" : "Orthodontic instruments"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <ol className="space-y-4">
              {copy.steps.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <div className="text-sm leading-relaxed text-slate-800 sm:text-base">
                    {idx === 6 ? (
                      <>
                        <Link href={retentionHref} className="font-medium text-accent underline hover:text-primary">
                          Retention
                        </Link>
                        {isDe ? " – der Beginn der Stabilisierung des Behandlungsergebnisses." : " – stabilising the treatment outcome."}
                      </>
                    ) : (
                      step
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10 text-center">
            <Link href={ablaufHref} className="inline-flex items-center gap-2 font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-primary">
              {copy.ablaufLink} →
            </Link>
          </p>
        </section>

        {/* Behandlung ohne Rückerstattung */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.ohneH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-700 sm:text-base">{copy.ohneLead}</p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
            <p className="font-semibold text-primary">{copy.ohneAlt}</p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-800">
              <li>
                <Link href={getHref("/zahnspange-fuer-jugendliche", locale)} className="text-accent underline hover:text-primary">
                  {copy.ohneLi1}
                </Link>
              </li>
              <li>
                <Link href={unsichtbarHref} className="text-accent underline hover:text-primary">
                  {copy.ohneLi2}
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.faqH2}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {copy.faqs.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </section>

        {/* Arzt */}
        <section className="mt-16 sm:mt-24">
          <div className="mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-soft-lg sm:p-10 lg:grid-cols-[minmax(0,280px)_1fr]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={IMG.arzt}
                alt={isDe ? "Dr. med. dent. Manish Sablania, Kieferorthopäde Wien" : "Dr Manish Sablania, orthodontist Vienna"}
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">{copy.arztH2}</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{copy.arztSub}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-800 sm:text-base">
                <li className="flex gap-2">
                  <span className="text-accent">●</span>
                  <span>{copy.arztLi1}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">●</span>
                  <span>{copy.arztLi2}</span>
                </li>
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-muted"
              >
                {copy.arztCta}
              </a>
            </div>
          </div>
        </section>

        {/* 11. Final CTA */}
        <section className="mt-16 mb-4 rounded-3xl bg-gradient-to-br from-primary to-primary-muted px-6 py-12 text-center text-white shadow-soft-lg sm:mt-24 sm:px-10 sm:py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">{copy.finalH2}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90">{copy.finalP}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-primary shadow-soft transition hover:bg-accent-light"
            >
              {copy.finalB1}
            </a>
            <Link
              href={kontaktHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/50 bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {copy.finalB2}
            </Link>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
