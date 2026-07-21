import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import JsonLd from "./JsonLd";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const IMG = {
  drSs: "/asethetic-dental-services/DrSS-qccg77rgojbtrcav5z20egkfccceiwy9acpag4xm8o.png",
  drMansi: "/asethetic-dental-services/dr.Mansi_-qtukjg7rpcrvhxt5faunya6jmdtn8zsfshb8qy7fgk.png",
} as const;

type Lang = "de" | "en";

const COPY: Record<
  Lang,
  {
    heroKicker: string;
    heroTitle: string;
    heroSub: string;
    statValue: string;
    statPlus: string;
    statCaption: string;
    tags1: { label: string; path: string }[];
    altLabel: string;
    tags2: { label: string; path: string }[];
    ctaTag: string;
    intro: string;
    aboutH: string;
    aboutP: string;
    expLabel: string;
    expSub: string;
    treatValue: string;
    treatSub: string;
    para1: string;
    para2: string;
    langH: string;
    langP: string;
    locationH: string;
    locationP: string;
    faqH: string;
    faqs: { q: string; a: string }[];
    qualH: string;
    quals: { abbr: string; title: string; detail: string }[];
    orthoH: string;
    orthoSub: string;
    orthoItems: { label: string; path: string }[];
    generalH: string;
    generalItems: { label: string; path: string }[];
    memberH: string;
    members: { abbr: string; name: string }[];
    ctaBook: string;
    ctaOnline: string;
    ctaContact: string;
    medicalNote: string;
  }
> = {
  de: {
    heroKicker: "Indischer Kieferorthopäde in Wien",
    heroTitle: "Fachzahnarzt für Kieferorthopädie und Zahnarzt Wien 1200",
    heroSub: "",
    statValue: "7.800",
    statPlus: "+",
    statCaption: "Kieferorthopädische Behandlungen und Zahnspangenfälle",
    tags1: [
      { label: "Kieferorthopädie Wien", path: "/kieferorthopaedie" },
      { label: "Unsichtbare Zahnspange Wien", path: "/unsichtbare-zahnspange-wien" },
      { label: "Invisalign Wien-Clear Aligner", path: "/unsichtbare-zahnspange-wien" },
    ],
    altLabel: "Alternative",
    tags2: [
      { label: "Durchsichtige Zahnspange", path: "/durchsichtige-zahnspange" },
      { label: "Unsichtbare Zahnspange Aligner", path: "/unsichtbare-zahnspange-wien" },
      { label: "Gratis-Zahnspange", path: "/gratis-zahnspange" },
      { label: "Myofunktionelle Therapie", path: "/myofunktionelle-therapie" },
      { label: "Unsichtbare Lingualzahnspange", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
    ],
    ctaTag: "Kostenlose Erstberatung vereinbaren",
    intro:
      "Dr. med. dent. Manish Sablania, BDS, M.Sc., ist ein indischstämmiger Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt in 1200 Wien. Er behandelt Kinder, Jugendliche und Erwachsene und bietet moderne kieferorthopädische Behandlungen von klassischen Zahnspangen bis zu transparenten Alignern an. Die Beratung ist auf Deutsch, Englisch und Hindi möglich.",
    aboutH: "Beruflicher Hintergrund",
    aboutP:
      "Als indischstämmiger Kieferorthopäde und Zahnarzt in Wien verbindet Dr. Sablania internationale Ausbildung mit langjähriger Praxis in Österreich. Das Wohlbefinden der Patientinnen und Patienten und ein gesundes, ästhetisches Lächeln stehen im Mittelpunkt. Er bietet moderne kieferorthopädische Behandlungen und allgemeine zahnmedizinische Leistungen in der Ordination in 1200 Wien.",
    expLabel: "Über 28 Jahre Erfahrung",
    expSub: "Kieferorthopädie, Zahnregulierung und Zahnspange",
    treatValue: "7.800+",
    treatSub: "kieferorthopädische Behandlungen und Zahnspangenfälle",
    para1:
      "Über 28 Jahre Erfahrung und mehr als 7.800 kieferorthopädische Behandlungen und Zahnspangenfälle. Inland-, Ausland- und Online-Fortbildungen sowie regelmäßige Weiterbildung halten die Behandlung auf aktuellem Stand.",
    para2:
      "Jahrelange Zusammenarbeit und Vertretungen in der Kieferorthopädie in Wien – mit Fokus auf individuelle Beratung und nachvollziehbare Behandlungsplanung.",
    langH: "Sprachen",
    langP: "Zahnarzt in Wien mit Beratung auf Deutsch, Englisch und Hindi.",
    locationH: "Ordination",
    locationP:
      "Zahnspange Sablania, Forsthausgasse 16–20, Stiege 3, EG, 1200 Wien. Termine Montag–Freitag 10:00–17:00 nach Vereinbarung.",
    faqH: "Häufige Fragen",
    faqs: [
      {
        q: "Ist Dr. Manish Sablania ein indischer Kieferorthopäde in Wien?",
        a: "Ja. Dr. med. dent. Manish Sablania ist ein indischstämmiger Fachzahnarzt für Kieferorthopädie und Allgemeinzahnarzt in 1200 Wien. Sein Bachelor of Dental Surgery (BDS) wurde in Indien abgeschlossen.",
      },
      {
        q: "Welche Sprachen werden in der Ordination gesprochen?",
        a: "Die Beratung ist auf Deutsch, Englisch und Hindi möglich.",
      },
      {
        q: "Was bedeutet Wahlkieferorthopäde?",
        a: "Als qualifizierter Wahlkieferorthopäde für die Krankenkasse-Gratis-Zahnspange ist Dr. Sablania kein direkt vertraglich gebundener Kassenarzt. Nach Genehmigung kann der gesetzliche Kassentarif von der zuständigen Krankenversicherung refundiert werden. Private Aufzahlungen sind nicht automatisch gedeckt.",
      },
      {
        q: "Werden auch Erwachsene behandelt?",
        a: "Ja. Behandelt werden Kinder, Jugendliche und Erwachsene – mit festen Zahnspangen, Alignern und lingualen Optionen je nach Befund.",
      },
      {
        q: "Werden unsichtbare Zahnspangen angeboten?",
        a: "Ja. Angeboten werden unter anderem transparente Aligner und unsichtbare linguale Zahnspangen sowie die öffentlich geförderte Gratis Zahnspange unter den gesetzlichen Voraussetzungen.",
      },
    ],
    qualH: "Qualifikationen",
    quals: [
      { abbr: "BDS", title: "Bachelor of Dental Surgery (BDS), India", detail: "" },
      { abbr: "M.Sc", title: "Master of Science in Specialized Orthodontics, Germany", detail: "" },
      { abbr: "POS", title: "Progressive Orthodontic Diploma, USA", detail: "" },
      {
        abbr: "Qualifizierter Wahlkieferorthopäde",
        title: "für die Krankenkasse-Gratis-Zahnspange",
        detail: "",
      },
      { abbr: "Fortbildungsdiplom", title: "Kieferorthopädisches Fortbildungsdiplom Österreich", detail: "" },
      { abbr: "Fachzahnarzt für Kieferorthopädie", title: "Zahnregulierung und Zahnspange", detail: "" },
    ],
    orthoH: "Kieferorthopädischer Schwerpunkt",
    orthoSub: "Zahnspange / Kieferorthopädie:",
    orthoItems: [
      { label: "Gratiszahnspange", path: "/gratis-zahnspange" },
      { label: "Unsichtbare Zahnspange", path: "/unsichtbare-zahnspange-wien" },
      { label: "Kinder Zahnspange", path: "/zahnspange-fuer-kinder" },
      { label: "Jugendlichen Zahnspangen", path: "/zahnspange-fuer-jugendliche" },
      { label: "Erwachsenen Zahnspangen", path: "/zahnspange-fuer-erwachsene" },
      { label: "Aligner Behandlung", path: "/unsichtbare-zahnspange-wien" },
      { label: "Schiene Behandlung", path: "/kfo-retainer" },
      { label: "Fixe unsichtbare lingual Zahnspange", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
      { label: "Herausnehmbare Zahnspange", path: "/durchsichtige-zahnspange" },
    ],
    generalH: "Allgemeine Zahnheilkunde",
    generalItems: [
      { label: "Professionelle Mundhygiene", path: "/mundhygiene-wien" },
      { label: "Zahnbleaching", path: "/zahnbleaching" },
      { label: "Knirschschiene", path: "/zahnersatz" },
      { label: "Zahnfarbige Füllungen", path: "/komposit-zahnfuellung" },
      { label: "Sportschutz", path: "/sportschutz-mouthguards" },
      { label: "Krone-Brücke", path: "/krone-bruecke" },
      { label: "Implantat", path: "/implantat-wien" },
    ],
    memberH: "Mitgliedschaften",
    members: [
      { abbr: "VÖK", name: "Verband Österreichischer Kieferorthopäden" },
      { abbr: "ÖGZMK", name: "Österreichische Gesellschaft für Zahn-, Mund- und Kieferheilkunde" },
      { abbr: "ZIV", name: "Zahnärztlicher Interessenverband" },
    ],
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online Termin",
    ctaContact: "Kontakt",
    medicalNote:
      "Allgemeine Informationen ersetzen keine persönliche Untersuchung oder Diagnose. Behandlungsempfehlungen erfolgen nach individueller Beratung.",
  },
  en: {
    heroKicker: "Indian orthodontist in Vienna",
    heroTitle: "Specialist orthodontist and dentist, Vienna 1200",
    heroSub: "",
    statValue: "7,800",
    statPlus: "+",
    statCaption: "Orthodontic treatments and braces cases",
    tags1: [
      { label: "Orthodontics Vienna", path: "/kieferorthopaedie" },
      { label: "Invisible braces Vienna", path: "/unsichtbare-zahnspange-wien" },
      { label: "Invisalign Vienna – clear aligners", path: "/unsichtbare-zahnspange-wien" },
    ],
    altLabel: "Alternative",
    tags2: [
      { label: "Clear aligners", path: "/durchsichtige-zahnspange" },
      { label: "Invisible aligner braces", path: "/unsichtbare-zahnspange-wien" },
      { label: "Publicly funded braces", path: "/gratis-zahnspange" },
      { label: "Myofunctional therapy", path: "/myofunktionelle-therapie" },
      { label: "Invisible lingual braces", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
    ],
    ctaTag: "Book a free initial consultation",
    intro:
      "Dr. med. dent. Manish Sablania, BDS, M.Sc., is an Indian-origin specialist orthodontist and general dentist practising in 1200 Vienna. He provides orthodontic care for children, teenagers and adults, including conventional braces, clear aligners and lingual braces. Consultations are available in German, English and Hindi.",
    aboutH: "Professional background",
    aboutP:
      "As an Indian dentist and specialist orthodontist in Vienna, Dr. Sablania combines international training with long-standing clinical practice in Austria. Patient wellbeing and a healthy, aesthetic smile are central. He offers modern orthodontic care and general dentistry at the practice in 1200 Vienna.",
    expLabel: "More than 28 years of experience",
    expSub: "Orthodontics – tooth alignment – braces",
    treatValue: "7,800+",
    treatSub: "orthodontic treatments and braces cases",
    para1:
      "More than 28 years of experience and over 7,800 orthodontic treatments and braces cases. Continuing education in Austria and abroad helps keep treatment approaches up to date.",
    para2:
      "Years of collaboration and locum experience in orthodontics in Vienna—with a focus on clear explanations and individual treatment planning.",
    langH: "Languages",
    langP: "English-speaking and Hindi-speaking orthodontist in Vienna, with consultations also in German.",
    locationH: "Practice location",
    locationP:
      "Zahnspange Sablania, Forsthausgasse 16–20, Stiege 3, EG, 1200 Vienna. Appointments Monday–Friday 10:00–17:00 by prior arrangement.",
    faqH: "Frequently asked questions",
    faqs: [
      {
        q: "Is Dr. Manish Sablania an Indian orthodontist in Vienna?",
        a: "Yes. Dr. med. dent. Manish Sablania is an Indian-origin specialist orthodontist and general dentist in 1200 Vienna. He completed his Bachelor of Dental Surgery (BDS) in India.",
      },
      {
        q: "Which languages are spoken at the practice?",
        a: "Consultations are available in German, English and Hindi.",
      },
      {
        q: "What does elective orthodontist mean in Austria?",
        a: "A qualified elective orthodontist (Wahlkieferorthopäde) for the publicly funded braces programme is not a directly contracted insurer orthodontist. After approval, eligible patients may receive reimbursement of the statutory tariff. Private upgrades are not automatically covered.",
      },
      {
        q: "Does Dr. Sablania treat adults?",
        a: "Yes. He treats children, teenagers and adults with fixed braces, clear aligners and lingual options depending on the diagnosis.",
      },
      {
        q: "Are clear aligners available?",
        a: "Yes. Clear aligners and invisible lingual braces are available, as well as publicly funded braces where the legal criteria are met.",
      },
    ],
    qualH: "Qualifications",
    quals: [
      { abbr: "BDS", title: "Bachelor of Dental Surgery (BDS), India", detail: "" },
      { abbr: "M.Sc", title: "Master of Science in Specialized Orthodontics, Germany", detail: "" },
      { abbr: "POS", title: "Progressive Orthodontics Diploma, USA", detail: "" },
      {
        abbr: "Elective orthodontist",
        title: "Qualified for Austria’s publicly funded braces programme",
        detail: "",
      },
      { abbr: "Postgraduate diploma", title: "Orthodontic continuing-education diploma, Austria", detail: "" },
      { abbr: "Specialist orthodontist", title: "Tooth alignment and braces", detail: "" },
    ],
    orthoH: "Orthodontic focus",
    orthoSub: "Braces / orthodontics:",
    orthoItems: [
      { label: "Publicly funded braces", path: "/gratis-zahnspange" },
      { label: "Invisible braces", path: "/unsichtbare-zahnspange-wien" },
      { label: "Braces for children", path: "/zahnspange-fuer-kinder" },
      { label: "Braces for teens", path: "/zahnspange-fuer-jugendliche" },
      { label: "Braces for adults", path: "/zahnspange-fuer-erwachsene" },
      { label: "Aligner treatment", path: "/unsichtbare-zahnspange-wien" },
      { label: "Splint therapy", path: "/kfo-retainer" },
      { label: "Fixed invisible lingual braces", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
      { label: "Removable braces", path: "/durchsichtige-zahnspange" },
    ],
    generalH: "General dentistry",
    generalItems: [
      { label: "Professional oral hygiene", path: "/mundhygiene-wien" },
      { label: "Teeth whitening", path: "/zahnbleaching" },
      { label: "Night guard (bruxism)", path: "/zahnersatz" },
      { label: "Tooth-coloured fillings", path: "/komposit-zahnfuellung" },
      { label: "Sports mouthguard", path: "/sportschutz-mouthguards" },
      { label: "Crown & bridge", path: "/krone-bruecke" },
      { label: "Implants", path: "/implantat-wien" },
    ],
    memberH: "Professional memberships",
    members: [
      { abbr: "VÖK", name: "Austrian Association of Orthodontists" },
      { abbr: "ÖGZMK", name: "Austrian Society of Dentistry, Oral and Maxillofacial Medicine" },
      { abbr: "ZIV", name: "Dental interest group" },
    ],
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaContact: "Contact",
    medicalNote:
      "General information does not replace a personal examination or diagnosis. Treatment recommendations are made after individual consultation.",
  },
};

function TagLink({
  href,
  children,
  locale,
}: {
  href: string;
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <Link
      href={getHref(href, locale)}
      className="inline-flex rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-medium text-primary shadow-sm transition hover:border-primary/40 hover:bg-primary/[0.04] sm:text-sm"
    >
      {children}
    </Link>
  );
}

export default function UeberMichPageContent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const dePath = "/ueber-mich";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Über mich";
  const lead = leads[dePath];
  const lang = locale === "de" ? "de" : "en";
  const c = COPY[lang];
  const terminHref = getHref("/online-termin", locale);
  const kontaktHref = getHref("/kontakt", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        {/* Hero */}
        <section className="overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-primary/[0.08] via-white to-gray-50 shadow-soft-lg">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:p-2">
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">{c.heroKicker}</p>
              <h2 className="mt-2 text-xl font-bold leading-snug text-primary sm:text-2xl">{c.heroTitle}</h2>
              <div className="mt-6 flex flex-wrap items-end gap-2">
                <span className="text-5xl font-bold tabular-nums text-primary sm:text-6xl">{c.statValue}</span>
                <span className="pb-1 text-3xl font-bold text-accent">{c.statPlus}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">{c.statCaption}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.tags1.map((t) => (
                  <TagLink key={t.path + t.label} href={t.path} locale={locale}>
                    {t.label}
                  </TagLink>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {c.altLabel}
                </span>
                <div className="flex flex-wrap gap-2">
                  {c.tags2.map((t) => (
                    <TagLink key={t.path + t.label} href={t.path} locale={locale}>
                      {t.label}
                    </TagLink>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
                >
                  {c.ctaTag}
                </a>
              </div>
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft-lg lg:mx-0 lg:max-w-sm">
              <Image
                src={IMG.drSs}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
              />
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <p className="text-base leading-relaxed text-gray-800 sm:text-lg">{c.intro}</p>
        </section>

        {/* Über mich + stats */}
        <section className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <h2 className="text-2xl font-bold text-primary sm:text-3xl">{c.aboutH}</h2>
          <p className="mt-5 leading-relaxed text-gray-800">{c.aboutP}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 shadow-soft">
              <p className="text-lg font-bold text-primary">{c.expLabel}</p>
              <p className="mt-2 text-sm text-gray-700">{c.expSub}</p>
            </div>
            <div className="rounded-2xl border border-accent/25 bg-accent/[0.08] p-6 shadow-soft">
              <p className="text-3xl font-bold tabular-nums text-primary sm:text-4xl">{c.treatValue}</p>
              <p className="mt-2 text-sm text-gray-800">{c.treatSub}</p>
            </div>
          </div>
          <p className="mt-8 leading-relaxed text-gray-800">{c.para1}</p>
          <p className="mt-4 leading-relaxed text-gray-800">{c.para2}</p>
        </section>

        {/* Qualifikationen */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.qualH}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.quals.map((q) => (
              <div
                key={q.abbr + q.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-soft transition hover:border-primary/20"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-accent">{q.abbr}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-800">{q.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kieferorthopädie lists */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.orthoH}</h2>
          <h3 className="mt-4 text-base font-semibold text-gray-800">{c.orthoSub}</h3>
          <ul className="mt-4 columns-1 gap-x-10 gap-y-2 sm:columns-2">
            {c.orthoItems.map((item) => (
              <li key={item.path + item.label} className="mb-2 break-inside-avoid">
                <Link href={getHref(item.path, locale)} className="text-accent hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Allgemeine Zahnheilkunde */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.generalH}</h2>
          <ul className="mt-5 space-y-2">
            {c.generalItems.map((item) => (
              <li key={item.path + item.label}>
                <Link href={getHref(item.path, locale)} className="font-medium text-gray-800 hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Mitgliedschaften + portrait */}
        <section className="mx-auto mt-14 grid max-w-5xl gap-10 sm:mt-16 lg:grid-cols-[1fr_280px] lg:items-start">
          <div>
            <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.memberH}</h2>
            <div className="mt-6 space-y-4">
              {c.members.map((m) => (
                <div
                  key={m.abbr}
                  className="rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4 shadow-sm"
                >
                  <p className="font-bold text-primary">{m.abbr}</p>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">{m.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-soft-lg">
            <Image src={IMG.drMansi} alt="" fill className="object-cover object-top" sizes="280px" />
          </div>
        </section>

        {/* Sprachen + Standort */}
        <section className="mx-auto mt-12 grid max-w-5xl gap-6 sm:mt-14 sm:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-primary">{c.langH}</h2>
            <p className="mt-3 leading-relaxed text-gray-800">{c.langP}</p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-bold text-primary">{c.locationH}</h2>
            <p className="mt-3 leading-relaxed text-gray-800">{c.locationP}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <h2 className="text-xl font-bold text-primary sm:text-2xl">{c.faqH}</h2>
          <dl className="mt-6 space-y-4">
            {c.faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 bg-gray-50/80 px-5 py-4">
                <dt className="font-semibold text-primary">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-gray-700">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* CTAs */}
        <section className="mx-auto mt-14 flex max-w-3xl flex-wrap gap-3 sm:mt-16">
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

        <p className="mx-auto mt-10 max-w-3xl text-xs leading-relaxed text-gray-500">{c.medicalNote}</p>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: c.faqs.map((item) => ({
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
