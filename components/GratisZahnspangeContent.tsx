import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";
import { DOCTOR, PRACTICE } from "@/lib/practiceInfo";

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

const OEGK_URL = "https://www.gesundheitskasse.at/cdscontent/?contentid=10007.882758";

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

type Faq = { q: string; a: string };
type WerCard = { title: string; text: string };
type BraceCard = { title: string; body: string; img: keyof typeof IMG; alt: string };
type TableRow = { option: string; visibility: string; reimbursement: string; note: string };

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
  const isDe = locale === "de";

  const ueberMichHref = getHref("/ueber-mich", locale);
  const kfoHref = getHref("/kieferorthopaedie", locale);
  const kinderHref = getHref("/zahnspange-fuer-kinder", locale);
  const jugendHref = getHref("/zahnspange-fuer-jugendliche", locale);
  const durchsichtigHref = getHref("/durchsichtige-zahnspange", locale);
  const ablaufHref = getHref("/ablauf-zahnspange-kieferorthopaedie", locale);
  const kontaktHref = getHref("/kontakt", locale);
  const terminHref = getHref("/online-termine", locale);

  const deCopy = {
    heroKicker: "Kieferorthopädie Wien",
    heroTitle: "Gratis Zahnspange in Wien – Voraussetzungen und ÖGK-Erstattung",
    heroLead:
      "Die sogenannte Gratis Zahnspange ist eine Leistung der österreichischen Krankenversicherung für anspruchsberechtigte Kinder und Jugendliche mit schweren Zahn- oder Kieferfehlstellungen. Dr. Manish Sablania ist qualifizierter Wahlkieferorthopäde für dieses Programm. Ob eine Kostenerstattung möglich ist und in welcher Höhe, wird von der zuständigen Krankenkasse nach Prüfung des individuellen Falls entschieden.",
    ctaPrimary: "Kostenlose Erstberatung vereinbaren",
    ctaSecondary: "Termin online buchen",
    infoBoxTitle: "Wichtig zur Kostenerstattung",
    infoBoxText:
      "Bei einer Behandlung durch einen qualifizierten Wahlkieferorthopäden prüft die ÖGK die Kostenerstattung im Einzelfall. Nach aktueller ÖGK-Information können bei positiver Prüfung 80 % des gültigen Kassentarifs erstattet werden – nicht automatisch 80 % des tatsächlichen Rechnungsbetrags. Eine vorherige Bewilligung kann erforderlich sein. Bitte lassen Sie Ihren individuellen Anspruch vor Behandlungsbeginn von der ÖGK bestätigen.",
    oegkLinkLabel: "Aktuelle Informationen der ÖGK zur Zahnspange",
    werH2: "Wer kann eine Gratis Zahnspange bekommen?",
    werLead:
      "Anspruch und Bewilligung sind nicht automatisch. In der Regel kommen folgende Punkte zusammen:",
    werCards: [
      {
        title: "Alter",
        text: "Kinder und Jugendliche, die die geltenden Altersvoraussetzungen der Krankenversicherung erfüllen.",
      },
      {
        title: "Schwere Fehlstellung",
        text: "Schwere Zahn- oder Kieferfehlstellung – in der Regel IOTN-Stufe 4 oder 5.",
      },
      {
        title: "Medizinische Notwendigkeit",
        text: "Die medizinische Notwendigkeit muss kieferorthopädisch festgestellt werden.",
      },
      {
        title: "Bewilligung",
        text: "Die endgültige Entscheidung trifft die zuständige Krankenkasse – eine Bewilligung ist nicht automatisch.",
      },
    ] as WerCard[],
    iotnH2: "Was bedeuten IOTN 4 und IOTN 5?",
    iotnBody:
      "Der Index of Orthodontic Treatment Need (IOTN) beschreibt, wie schwer eine Fehlstellung ist und wie dringend eine kieferorthopädische Behandlung medizinisch nötig erscheint. Die Stufen 4 und 5 stehen für schwere bzw. sehr schwere Behandlungsbedürftigkeit. Die endgültige Einstufung erfolgt erst nach kieferorthopädischer Diagnostik – nicht anhand von Website-Texten.",
    iotnNote:
      "Wir stellen keine Online-Diagnose. Ob IOTN 4 oder 5 vorliegt, klären wir in der Untersuchung und besprechen den Befund mit Ihnen.",
    erstattungH2: "Wie funktioniert die ÖGK-Kostenerstattung beim Wahlkieferorthopäden?",
    erstattungLead:
      "Als qualifizierter Wahlkieferorthopäde rechnet Dr. Sablania nicht wie ein Vertragskieferorthopäde ab. Ein typischer Ablauf sieht so aus:",
    steps: [
      "Erstberatung und kieferorthopädische Untersuchung",
      "Feststellung des Befunds und der IOTN-Einstufung",
      "Erstellung des Behandlungsplans und der erforderlichen Unterlagen",
      "Antrag beziehungsweise Prüfung durch die zuständige Krankenkasse",
      "Behandlungsbeginn nach erforderlicher Bewilligung",
      "Bezahlung entsprechend der Vereinbarung mit der Ordination",
      "Einreichung der erforderlichen Rechnung und Unterlagen",
      "Erstattung durch die Krankenkasse entsprechend ihrer Entscheidung",
    ],
    erstattungNote:
      "Der genaue Ablauf kann von der Versicherung, Behandlung und individuellen Bewilligung abhängen.",
    bracesH2: "Welche Zahnspange wird im Kassenprogramm verwendet?",
    bracesLead:
      "Im öffentlich finanzierten Programm richtet sich die Hauptbehandlung nach den Vorgaben der jeweiligen Krankenversicherung. Wichtig zu wissen:",
    braceCards: [
      {
        title: "Metall-Zahnspange",
        body: "Festsitzende Metall-Brackets sind in der Regel die standardmäßig vorgesehene Option im Kassenprogramm.",
        img: "metall" as const,
        alt: "Festsitzende Metall-Zahnspange",
      },
      {
        title: "Keramik-Brackets",
        body: "Zahnfarbene Keramik-Brackets sind eine ästhetische Privatoption und nicht automatisch Teil der Kassenleistung.",
        img: "keramik" as const,
        alt: "Keramik-Brackets als private Alternative",
      },
      {
        title: "Clear Aligner",
        body: "Durchsichtige Schienen (Clear Aligner / Invisalign) sind nicht automatisch im öffentlich finanzierten Programm enthalten.",
        img: "aligners" as const,
        alt: "Clear Aligner Schienen",
      },
      {
        title: "Lingualzahnspange",
        body: "Innenliegende (linguale) Zahnspangen sind ebenfalls nicht automatisch abgedeckt und bedürfen einer separaten Kostenklärung.",
        img: "lingualAlt" as const,
        alt: "Linguale Zahnspange von innen",
      },
    ] as BraceCard[],
    compareH2: "Gratis Zahnspange oder private Alternative?",
    compareLead:
      "Überblick – ohne Preise. Ob und in welcher Höhe eine Erstattung möglich ist, hängt von Anspruch und Bewilligung ab.",
    tableHeaders: ["Option", "Sichtbarkeit", "Mögliche Kassenerstattung", "Hinweis"] as const,
    tableRows: [
      {
        option: "Metall-Zahnspange",
        visibility: "Sichtbar",
        reimbursement: "Abhängig von Anspruch und Bewilligung",
        note: "In der Regel die Standardoption im Kassenprogramm",
      },
      {
        option: "Keramik-Brackets",
        visibility: "Weniger auffällig",
        reimbursement: "In der Regel privat",
        note: "Ästhetische Aufzahlung / Privatoption",
      },
      {
        option: "Clear Aligner",
        visibility: "Nahezu unsichtbar",
        reimbursement: "In der Regel privat",
        note: "Nicht automatisch im Kassenprogramm",
      },
      {
        option: "Lingualzahnspange",
        visibility: "Von außen unsichtbar",
        reimbursement: "In der Regel privat",
        note: "Separate Kostenklärung erforderlich",
      },
    ] as TableRow[],
    ablaufH2: "Ablauf in unserer Ordination",
    ablaufLead:
      "Von der Erstberatung bis zur Retention begleiten wir Sie strukturiert – inklusive der Unterlagen für Ihre Krankenkasse, soweit erforderlich.",
    ablaufPoints: [
      "Erstberatung und Untersuchung",
      "Diagnostik (u. a. Röntgen, Fotos, digitaler Scan wo sinnvoll)",
      "Individueller Behandlungsplan",
      "Unterlagen für die Krankenkasse bei Bedarf",
      "Regelmäßige Kontrolltermine",
      "Retention zur Stabilisierung des Ergebnisses",
    ],
    ablaufLink: "Den gesamten Ablauf in der Kieferorthopädie im Detail",
    arztH2: "Beratung bei Dr. Manish Sablania",
    arztSub: `${DOCTOR.jobTitleDe} · ${PRACTICE.addressLocality} ${PRACTICE.postalCode}`,
    arztBullets: [
      "Qualifizierter Wahlkieferorthopäde für die Gratis-Zahnspange – kein Vertragskieferorthopäde der ÖGK",
      DOCTOR.experienceComboDe,
      `Beratung auf ${PRACTICE.languagesDisplayDe}`,
      `Behandlung in der Ordination in ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`,
    ],
    arztCta: "Termin zur kostenlosen Erstberatung",
    arztNote:
      "Eine Bewilligung oder Erstattung durch die Krankenkasse können wir nicht zusagen – das entscheidet Ihre Versicherung.",
    faqH2: "Häufige Fragen",
    faqs: [
      {
        q: "Ist die Gratis Zahnspange wirklich vollständig kostenlos?",
        a: "Bei Vertragskieferorthopäden kann die Behandlung unter den geltenden Voraussetzungen als Kassenleistung erbracht werden. Bei Wahlkieferorthopäden gelten andere Erstattungsregeln. Die ÖGK prüft den Einzelfall und kann nach aktueller Information 80 % des gültigen Kassentarifs erstatten. Das entspricht nicht zwingend 80 % der Privatrechnung.",
      },
      {
        q: "Wer hat Anspruch auf die Gratis Zahnspange?",
        a: "Grundsätzlich kommen Kinder und Jugendliche infrage, die die geltenden Altersvoraussetzungen erfüllen und eine schwere Zahn- oder Kieferfehlstellung der IOTN-Stufe 4 oder 5 haben. Die endgültige Entscheidung trifft die zuständige Krankenkasse.",
      },
      {
        q: "Muss die Behandlung vorab bewilligt werden?",
        a: "Je nach Behandlung und Versicherung ist vor Behandlungsbeginn eine Prüfung beziehungsweise Bewilligung erforderlich. Der Anspruch sollte deshalb vor Behandlungsbeginn geklärt werden.",
      },
      {
        q: "Werden Invisalign oder Clear Aligner von der ÖGK bezahlt?",
        a: "Clear Aligner und Invisalign sind nicht automatisch Teil des öffentlich finanzierten Programms. Ob ein Zuschuss möglich ist, muss individuell mit der Krankenkasse geklärt werden.",
      },
      {
        q: "Was bedeutet Wahlkieferorthopäde?",
        a: "Ein Wahlkieferorthopäde rechnet die Behandlung grundsätzlich nicht wie ein Vertragskieferorthopäde direkt als dieselbe Kassenleistung ab. Patientinnen und Patienten können je nach Bewilligung und Versicherungsregeln eine teilweise Kostenerstattung beantragen.",
      },
    ] as Faq[],
    sourceNote:
      "Versicherungsinformationen zuletzt geprüft: Juli 2026. Verbindliche Auskünfte erhalten Sie direkt bei Ihrer Krankenversicherung.",
    relatedLead: "Weitere Informationen:",
    relatedLinks: [
      { href: ueberMichHref, label: "Über Dr. Sablania" },
      { href: kfoHref, label: "Kieferorthopädie" },
      { href: kinderHref, label: "Zahnspange für Kinder" },
      { href: jugendHref, label: "Zahnspange für Jugendliche" },
      { href: durchsichtigHref, label: "Durchsichtige Zahnspange" },
    ],
    finalH2: "Jetzt kostenlose Erstberatung vereinbaren",
    finalP:
      "Wir erklären Ihnen persönlich, ob und wie eine öffentlich finanzierte Zahnspange in Ihrem Fall infrage kommen kann – und welche privaten Alternativen es gibt.",
    finalB1: "Termin vereinbaren",
    finalB2: "Kontakt aufnehmen",
  };

  const enCopy = {
    heroKicker: "Orthodontics Vienna",
    heroTitle: "Publicly Funded Braces in Vienna – Eligibility and ÖGK Reimbursement",
    heroLead:
      "Publicly funded braces are available through Austria’s health-insurance system for eligible children and teenagers with severe dental or jaw misalignments. Dr. Manish Sablania is a qualified elective orthodontist for this programme. Eligibility and the amount of any reimbursement are determined by the relevant health-insurance provider after reviewing the individual case.",
    ctaPrimary: "Book a free initial consultation",
    ctaSecondary: "Book an appointment online",
    infoBoxTitle: "Important information about reimbursement",
    infoBoxText:
      "When treatment is provided by a qualified elective orthodontist, ÖGK reviews reimbursement individually. According to current ÖGK information, approved cases may receive reimbursement of 80% of the applicable contractual tariff. This does not necessarily mean 80% of the orthodontist’s invoice. Prior approval may be required. Patients should confirm their individual eligibility with ÖGK before treatment begins.",
    oegkLinkLabel: "Current ÖGK information on braces",
    werH2: "Who may qualify for publicly funded braces?",
    werLead: "Eligibility and approval are not automatic. These points usually need to come together:",
    werCards: [
      {
        title: "Age",
        text: "Children and teenagers who meet the applicable age requirements of the health-insurance scheme.",
      },
      {
        title: "Severe misalignment",
        text: "Severe dental or jaw misalignment – generally IOTN grade 4 or 5.",
      },
      {
        title: "Medical necessity",
        text: "Medical necessity must be confirmed through orthodontic assessment.",
      },
      {
        title: "Approval",
        text: "The final decision rests with the relevant health-insurance provider – approval is not automatic.",
      },
    ] as WerCard[],
    iotnH2: "What do IOTN grades 4 and 5 mean?",
    iotnBody:
      "The Index of Orthodontic Treatment Need classifies the severity and medical need for orthodontic treatment. Grades 4 and 5 indicate severe or very severe treatment need. The final classification must be established through orthodontic diagnosis – not from website content alone.",
    iotnNote:
      "We do not diagnose online. Whether IOTN 4 or 5 applies is determined in the examination and explained to you in person.",
    erstattungH2: "How does ÖGK reimbursement work with an elective orthodontist?",
    erstattungLead:
      "As a qualified elective orthodontist, Dr. Sablania does not bill like a contracted insurer orthodontist. A typical process looks like this:",
    steps: [
      "Initial consultation and orthodontic examination",
      "Clinical findings and IOTN classification",
      "Treatment plan and required documentation",
      "Application / review by the relevant health-insurance provider",
      "Start of treatment after any required approval",
      "Payment according to the agreement with the practice",
      "Submission of the invoice and required documents",
      "Reimbursement by the insurer according to its decision",
    ],
    erstattungNote:
      "The exact process can depend on the insurer, the treatment and the individual approval.",
    bracesH2: "Which type of braces is included?",
    bracesLead:
      "Under the publicly funded programme, main treatment follows the rules of the relevant insurance scheme. Important points:",
    braceCards: [
      {
        title: "Metal braces",
        body: "Fixed metal brackets are generally the standard funded option for fixed treatment.",
        img: "metall" as const,
        alt: "Fixed metal braces",
      },
      {
        title: "Ceramic brackets",
        body: "Tooth-coloured ceramic brackets are an aesthetic private upgrade and are not automatically covered.",
        img: "keramik" as const,
        alt: "Ceramic brackets as a private option",
      },
      {
        title: "Clear aligners",
        body: "Clear aligners / Invisalign are not automatically included in the publicly funded programme.",
        img: "aligners" as const,
        alt: "Clear aligner trays",
      },
      {
        title: "Lingual braces",
        body: "Lingual (inside) braces are likewise not automatically covered and need a separate cost discussion.",
        img: "lingualAlt" as const,
        alt: "Lingual braces on the inside of the teeth",
      },
    ] as BraceCard[],
    compareH2: "Publicly funded braces or a private alternative?",
    compareLead:
      "Overview – without prices. Whether reimbursement is possible, and at what level, depends on eligibility and approval.",
    tableHeaders: ["Option", "Visibility", "Possible reimbursement", "Note"] as const,
    tableRows: [
      {
        option: "Metal braces",
        visibility: "Visible",
        reimbursement: "Subject to eligibility and approval",
        note: "Usually the standard option in the public programme",
      },
      {
        option: "Ceramic brackets",
        visibility: "Less noticeable",
        reimbursement: "Usually private",
        note: "Aesthetic upgrade / private option",
      },
      {
        option: "Clear aligners",
        visibility: "Nearly invisible",
        reimbursement: "Usually private",
        note: "Not automatically included in the public programme",
      },
      {
        option: "Lingual braces",
        visibility: "Invisible from outside",
        reimbursement: "Usually private",
        note: "Separate cost clarification required",
      },
    ] as TableRow[],
    ablaufH2: "Treatment process at our practice",
    ablaufLead:
      "From the first consultation through to retention, we guide you step by step – including insurance documentation where required.",
    ablaufPoints: [
      "Initial consultation and examination",
      "Diagnostics (including X-rays, photos and digital scan where appropriate)",
      "Individual treatment plan",
      "Insurance documentation if needed",
      "Regular control visits",
      "Retention to stabilise the result",
    ],
    ablaufLink: "Full orthodontic treatment process in detail",
    arztH2: "Consultation with Dr. Manish Sablania",
    arztSub: `${DOCTOR.jobTitleEn} · ${PRACTICE.addressLocality} ${PRACTICE.postalCode}`,
    arztBullets: [
      "Qualified elective orthodontist for publicly funded braces – not a contracted ÖGK orthodontist",
      DOCTOR.experienceComboEn,
      `Consultations in ${PRACTICE.languagesDisplayEn}`,
      `Treatment at the practice in ${PRACTICE.postalCode} ${PRACTICE.addressLocality}`,
    ],
    arztCta: "Book a free initial consultation",
    arztNote:
      "We cannot promise insurer approval or reimbursement – that decision rests with your health-insurance provider.",
    faqH2: "FAQ",
    faqs: [
      {
        q: "Are publicly funded braces completely free of charge?",
        a: "With contracted insurer orthodontists, treatment may be provided as a health-insurance benefit under the applicable rules. With elective orthodontists, different reimbursement rules apply. ÖGK reviews each case individually and, according to current information, may reimburse 80% of the applicable contractual tariff. That is not necessarily 80% of the private invoice.",
      },
      {
        q: "Who may be eligible for publicly funded braces?",
        a: "In general, children and teenagers who meet the applicable age criteria and have a severe dental or jaw misalignment of IOTN grade 4 or 5 may qualify. The final decision is made by the relevant health-insurance provider.",
      },
      {
        q: "Is prior approval required?",
        a: "Depending on the treatment and insurer, a review or approval may be required before treatment begins. Eligibility should therefore be clarified before starting.",
      },
      {
        q: "Does ÖGK pay for Invisalign or clear aligners?",
        a: "Clear aligners and Invisalign are not automatically part of the publicly funded programme. Whether any contribution is possible must be clarified individually with the health-insurance provider.",
      },
      {
        q: "What does elective orthodontist mean?",
        a: "An elective orthodontist (Wahlkieferorthopäde) does not generally bill treatment in the same way as a contracted insurer orthodontist. Patients may apply for partial reimbursement depending on approval and insurance rules.",
      },
    ] as Faq[],
    sourceNote:
      "Insurance information last reviewed: July 2026. Please contact your health-insurance provider for binding information.",
    relatedLead: "Related pages:",
    relatedLinks: [
      { href: ueberMichHref, label: "About Dr. Sablania" },
      { href: kfoHref, label: "Orthodontics" },
      { href: kinderHref, label: "Braces for children" },
      { href: jugendHref, label: "Braces for teens" },
      { href: durchsichtigHref, label: "Clear aligners" },
    ],
    finalH2: "Book your free consultation",
    finalP:
      "We will explain in person whether publicly funded braces may apply in your case – and which private alternatives are available.",
    finalB1: "Book appointment",
    finalB2: "Contact us",
  };

  const copy = isDe ? deCopy : enCopy;

  const werImgs = [IMG.wer1, IMG.wer2, IMG.wer3, IMG.wer4] as const;
  const werAlts = isDe
    ? [
        "Lächelndes Kind in der Kieferorthopädie",
        "Jugendliche mit festsitzender Zahnspange",
        "Jugendlicher Patient mit Zahnspange",
        "Erwachsene Patientin mit ästhetischer Zahnspange",
      ]
    : [
        "Smiling child at the orthodontic practice",
        "Teen with fixed braces",
        "Teenage patient with braces",
        "Adult patient with aesthetic braces",
      ];

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} hideHeader showCta={false}>
      <div className="not-prose max-w-none space-y-0">
        {/* Hero */}
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

        {/* Important info box */}
        <section className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl shadow-soft-lg">
            <div className="relative aspect-[21/9] w-full sm:aspect-[2/1]">
              <Image
                src={IMG.intro}
                alt={isDe ? "Metallbrackets – öffentlich finanzierte Zahnspange" : "Metal brackets – publicly funded braces"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-amber-300/80 bg-amber-50/95 px-6 py-5 shadow-soft sm:px-8 sm:py-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-950">{copy.infoBoxTitle}</p>
            <p className="mt-2 text-sm leading-relaxed text-amber-950/90 sm:text-base">{copy.infoBoxText}</p>
            <p className="mt-4">
              <a
                href={OEGK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-amber-400/80 underline-offset-2 hover:text-accent"
              >
                {copy.oegkLinkLabel} →
              </a>
            </p>
          </div>
        </section>

        {/* Who may qualify */}
        <section className="mt-16 rounded-3xl bg-gray-50/90 px-4 py-12 sm:mt-24 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.werH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700 sm:text-base">{copy.werLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.werCards.map((card, i) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={werImgs[i]!}
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
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
            {isDe ? (
              <>
                Mehr zu{" "}
                <Link href={kinderHref} className="font-medium text-accent underline hover:text-primary">
                  Zahnspange für Kinder
                </Link>{" "}
                und{" "}
                <Link href={jugendHref} className="font-medium text-accent underline hover:text-primary">
                  Zahnspange für Jugendliche
                </Link>
                .
              </>
            ) : (
              <>
                More on{" "}
                <Link href={kinderHref} className="font-medium text-accent underline hover:text-primary">
                  braces for children
                </Link>{" "}
                and{" "}
                <Link href={jugendHref} className="font-medium text-accent underline hover:text-primary">
                  braces for teens
                </Link>
                .
              </>
            )}
          </p>
        </section>

        {/* IOTN */}
        <section className="mt-16 sm:mt-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl">{copy.iotnH2}</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-800 sm:text-base">{copy.iotnBody}</p>
              <p className="mt-4 rounded-xl border border-primary/15 bg-primary/[0.04] px-4 py-3 text-sm text-slate-700">
                {copy.iotnNote}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft-lg">
              <Image
                src={IMG.voraussetzungen}
                alt={isDe ? "Festsitzende Metall-Zahnspange" : "Fixed metal braces"}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Reimbursement steps */}
        <section className="mt-16 rounded-3xl bg-primary/[0.06] px-4 py-12 sm:mt-24 sm:px-8 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.erstattungH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-700 sm:text-base">{copy.erstattungLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
              <Image
                src={IMG.hauptbehandlung}
                alt={isDe ? "Zahnarzt bei der kieferorthopädischen Behandlung" : "Dentist during orthodontic treatment"}
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
                  <span className="text-sm leading-relaxed text-slate-800 sm:text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm italic text-slate-600">{copy.erstattungNote}</p>
        </section>

        {/* Which braces */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.bracesH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600 sm:text-base">{copy.bracesLead}</p>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2">
            {copy.braceCards.map((b) => (
              <article
                key={b.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-soft transition hover:shadow-soft-lg"
              >
                <div className="relative aspect-[16/10] w-full bg-gray-50">
                  <Image
                    src={IMG[b.img]}
                    alt={b.alt}
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
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-600">
            {isDe ? (
              <>
                Private Alternativen wie{" "}
                <Link href={durchsichtigHref} className="font-medium text-accent underline hover:text-primary">
                  durchsichtige Zahnspangen / Clear Aligner
                </Link>{" "}
                besprechen wir transparent in der Beratung.
              </>
            ) : (
              <>
                Private options such as{" "}
                <Link href={durchsichtigHref} className="font-medium text-accent underline hover:text-primary">
                  clear aligners
                </Link>{" "}
                are explained transparently during the consultation.
              </>
            )}
          </p>
        </section>

        {/* Comparison table */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.compareH2}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-slate-600 sm:text-base">{copy.compareLead}</p>
          <div className="mx-auto mt-8 max-w-5xl overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-soft">
            <table className="min-w-[640px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-primary/[0.04]">
                  {copy.tableHeaders.map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold text-primary sm:px-5">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.tableRows.map((row) => (
                  <tr key={row.option} className="border-b border-gray-50 last:border-0">
                    <td className="px-4 py-3 font-medium text-slate-900 sm:px-5">{row.option}</td>
                    <td className="px-4 py-3 text-slate-700 sm:px-5">{row.visibility}</td>
                    <td className="px-4 py-3 text-slate-700 sm:px-5">{row.reimbursement}</td>
                    <td className="px-4 py-3 text-slate-600 sm:px-5">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Treatment process */}
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
            <ul className="space-y-4">
              {copy.ablaufPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 text-sm leading-relaxed text-slate-800 shadow-soft sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/30 text-xs font-bold text-primary">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-gray-100 shadow-soft">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={IMG.interzeptiv}
                alt={isDe ? "Patientin mit strahlendem Lächeln nach Behandlung" : "Patient with a bright smile after treatment"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </div>
          <p className="mt-10 text-center">
            <Link
              href={ablaufHref}
              className="inline-flex items-center gap-2 font-semibold text-accent underline decoration-2 underline-offset-4 hover:text-primary"
            >
              {copy.ablaufLink} →
            </Link>
          </p>
        </section>

        {/* Doctor consultation */}
        <section className="mt-16 sm:mt-24">
          <div className="mx-auto grid max-w-5xl items-center gap-8 overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-soft-lg sm:p-10 lg:grid-cols-[minmax(0,280px)_1fr]">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl bg-gray-50">
              <Image
                src={IMG.arzt}
                alt={
                  isDe
                    ? "Dr. med. dent. Manish Sablania, Kieferorthopäde Wien"
                    : "Dr Manish Sablania, orthodontist Vienna"
                }
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">{copy.arztH2}</h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">{copy.arztSub}</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-800 sm:text-base">
                {copy.arztBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-accent">●</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-600">{copy.arztNote}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-muted"
                >
                  {copy.arztCta}
                </a>
                <Link
                  href={ueberMichHref}
                  className="inline-flex rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/[0.04]"
                >
                  {isDe ? "Mehr über Dr. Sablania" : "More about Dr. Sablania"}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-16 sm:mt-24">
          <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">{copy.faqH2}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {copy.faqs.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
            ))}
          </div>
        </section>

        {/* Source note + related links */}
        <section className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <p className="text-sm leading-relaxed text-slate-600">
            {copy.sourceNote}{" "}
            <a
              href={OEGK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline hover:text-primary"
            >
              {copy.oegkLinkLabel}
            </a>
          </p>
          <p className="mt-6 text-sm text-slate-600">{copy.relatedLead}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
            {copy.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-accent underline hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={kontaktHref} className="font-medium text-accent underline hover:text-primary">
                {isDe ? "Kontakt" : "Contact"}
              </Link>
            </li>
            <li>
              <Link href={terminHref} className="font-medium text-accent underline hover:text-primary">
                {isDe ? "Online-Termine" : "Book appointment"}
              </Link>
            </li>
          </ul>
        </section>

        {/* Final CTA */}
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
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: copy.faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.a,
            },
          })),
        }}
      />
    </PageContent>
  );
}
