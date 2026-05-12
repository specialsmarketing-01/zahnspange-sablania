import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
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
  }
> = {
  de: {
    heroKicker: "Dr. Sablania Zahnspange Wien",
    heroTitle: "Fachzahnarzt für Kieferorthopädie und Zahnarzt Wien 1200",
    heroSub: "",
    statValue: "7.500",
    statPlus: "+",
    statCaption: "Kieferorthopädie Wien",
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
      "Herr Dr. Sablania Zahnspange Wien Kieferorthopädie Wien und Zahnarzt (Qualifizierter Wahlkieferorthopäde für „Krankenkasse-Gratis Zahnspange“) spezialisiert in Kieferorthopädie und Orthodontie (Fachzahnarzt für Kieferorthopädie), hat mittlerweile über 25 Jahre Erfahrung und mehr als 7500 Zahnregulierungen und Zahnspangen Behandlungen, Zusammenarbeit, was ihn zu einem Experten auf seinem Gebiet macht, dem das Wohlbefinden seiner Patienten sehr am Herzen liegt.",
    aboutH: "Über mich",
    aboutP:
      "Als Zahnarzt und Fachzahnarzt für Kieferorthopädie mit einem Schwerpunkt auf Zahnspange und Orthodontie steht das schöne Lächeln eines Patienten stets im Mittelpunkt für Dr. Sablania, denn ein sogenanntes gewinnendes Lächeln hilft sowohl im beruflichen als auch im privaten Leben. Daher wendet Dr. Sablania eine Reihe von modernen kieferorthopädischen Behandlungen.",
    expLabel: "über 25+ Jahre Erfahrung",
    expSub: "Kieferorthopädie-Zahnregulierung-Zahnspange",
    treatValue: "7500+",
    treatSub: "Kieferorthopädie Zahnspange Behandlungen",
    para1:
      "Inland-, Ausland- und Online-Fortbildungen sowie regelmäßige Bemühungen, immer auf dem neuesten Stand der Zahnmedizin zu bleiben.",
    para2:
      "Jahrelange Tätigkeiten als Zusammenarbeit und Vertretungen – Erfahrungen in KFO (Zahnregulierung – Zahnspange – Kieferorthopädie) mit renommierten Kieferorthopäden/innen in Wien.",
    qualH: "Qualifikationen",
    quals: [
      { abbr: "BDS", title: "Bachelor of Dental Surgery India (Indien)", detail: "" },
      { abbr: "M.Sc", title: "Masters in Specialized Orthodontics-Deutschland", detail: "" },
      { abbr: "POS", title: "Progressive Orthodontic Diplom-USA", detail: "" },
      {
        abbr: "Qualifizierter Wahlkieferorthopäde",
        title: "für Krankenkasse Gratiszahnspange",
        detail: "",
      },
      { abbr: "Fortbildungsdiplom", title: "Kieferorthopädisches Fortbildungsdiplom Österreich", detail: "" },
      { abbr: "Fachzahnarzt für Kieferorthopädie", title: "Zahnregulierung-Zahnspange", detail: "" },
    ],
    orthoH: "Kieferorthopädie / Zahnregulierung",
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
    memberH: "MITGLIEDSCHAFTEN",
    members: [
      { abbr: "VÖK", name: "Verband Österreichischer Kieferorthopäden" },
      { abbr: "ÖGZMK", name: "Österreichische Gesellschaft für Zahn-Mund und Kieferheilkunde" },
      { abbr: "ZIV", name: "Zahnärztlicher Interessenverband" },
    ],
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online terminieren",
    ctaContact: "Kontakt",
  },
  en: {
    heroKicker: "Dr. Sablania – Braces Vienna",
    heroTitle: "Specialist orthodontist and dentist, Vienna 1200",
    heroSub: "",
    statValue: "7,500",
    statPlus: "+",
    statCaption: "Orthodontics Vienna",
    tags1: [
      { label: "Orthodontics Vienna", path: "/kieferorthopaedie" },
      { label: "Invisible braces Vienna", path: "/unsichtbare-zahnspange-wien" },
      { label: "Invisalign Vienna – clear aligners", path: "/unsichtbare-zahnspange-wien" },
    ],
    altLabel: "Alternative",
    tags2: [
      { label: "Clear aligners", path: "/durchsichtige-zahnspange" },
      { label: "Invisible aligner braces", path: "/unsichtbare-zahnspange-wien" },
      { label: "Free braces (public funding)", path: "/gratis-zahnspange" },
      { label: "Myofunctional therapy", path: "/myofunktionelle-therapie" },
      { label: "Invisible lingual braces", path: "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange" },
    ],
    ctaTag: "Book a free initial consultation",
    intro:
      "Dr. Sablania is a dentist and specialist in orthodontics in Vienna (qualified partner for publicly funded “free braces”), focusing on orthodontics and orthodontic treatment. With over 25 years of experience and more than 7,500 orthodontic and brace treatments, he is recognised in his field and puts patients’ wellbeing first.",
    aboutH: "About me",
    aboutP:
      "As a dentist and specialist orthodontist with a focus on braces and orthodontics, a beautiful smile is always central for Dr. Sablania—a confident smile helps in both professional and private life. He therefore offers a range of modern orthodontic treatments.",
    expLabel: "25+ years of experience",
    expSub: "Orthodontics – tooth alignment – braces",
    treatValue: "7500+",
    treatSub: "Orthodontic brace treatments",
    para1:
      "Continuing education in Austria and abroad, online training and regular effort to stay up to date with dentistry.",
    para2:
      "Years of collaboration and locum work—experience in orthodontics (alignment, braces, orthodontics) with renowned colleagues in Vienna.",
    qualH: "Qualifications",
    quals: [
      { abbr: "BDS", title: "Bachelor of Dental Surgery, India", detail: "" },
      { abbr: "M.Sc", title: "Master in Specialized Orthodontics, Germany", detail: "" },
      { abbr: "POS", title: "Progressive Orthodontics Diploma, USA", detail: "" },
      {
        abbr: "Qualified partner orthodontist",
        title: "for publicly funded free braces",
        detail: "",
      },
      { abbr: "Postgraduate diploma", title: "Orthodontic postgraduate diploma, Austria", detail: "" },
      { abbr: "Specialist orthodontist", title: "Tooth alignment – braces", detail: "" },
    ],
    orthoH: "Orthodontics / tooth alignment",
    orthoSub: "Braces / orthodontics:",
    orthoItems: [
      { label: "Free braces", path: "/gratis-zahnspange" },
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
    memberH: "MEMBERSHIPS",
    members: [
      { abbr: "VÖK", name: "Austrian Association of Orthodontists" },
      { abbr: "ÖGZMK", name: "Austrian Society of Dentistry, Oral and Maxillofacial Medicine" },
      { abbr: "ZIV", name: "Dental interest group" },
    ],
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaContact: "Contact",
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
      </div>
    </PageContent>
  );
}
