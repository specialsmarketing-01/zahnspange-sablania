import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PageContent from "./PageContent";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const BODY = {
  de: {
    sections: [
      {
        title: "Willkommen bei unseren Artikeln",
        paragraphs: [
          "Hier finden Sie Informationen und Einblicke rund um Kieferorthopädie, Zahnspangen und ästhetische Zahnmedizin in Wien. Die Inhalte werden fortlaufend ergänzt.",
        ],
      },
      {
        title: "Themen",
        bullets: [
          "Behandlungsoptionen von klassischer Zahnspange bis Aligner",
          "Ablauf einer kieferorthopädischen Therapie",
          "Tipps zu Mundhygiene und Retention",
        ],
      },
    ],
    ctaHint:
      "Persönliche Fragen? Vereinbaren Sie einen Termin in unserer Praxis – wir beraten Sie individuell.",
    ctaBook: "Termin vereinbaren",
    ctaOnline: "Online terminieren",
    ctaServices: "Leistungen",
  },
  en: {
    sections: [
      {
        title: "Welcome to our articles",
        paragraphs: [
          "Here you will find information and insights on orthodontics, braces and aesthetic dentistry in Vienna. We add new content over time.",
        ],
      },
      {
        title: "Topics",
        bullets: [
          "Treatment options from fixed braces to aligners",
          "What to expect during orthodontic treatment",
          "Oral hygiene and retention tips",
        ],
      },
    ],
    ctaHint:
      "Have questions? Book an appointment at our practice – we will advise you individually.",
    ctaBook: "Book an appointment",
    ctaOnline: "Book online",
    ctaServices: "Services",
  },
} as const;

export default function ArticlePageContent({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const dePath = "/artikel";
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;
  const title = titles[dePath] ?? "Artikel";
  const lead = leads[dePath];
  const lang = locale === "de" ? "de" : "en";
  const b = BODY[lang];
  const terminHref = getHref("/online-termin", locale);
  const servicesHref = getHref("/leistungen", locale);

  return (
    <PageContent title={title} lead={lead} locale={locale} dict={dict} skipProse>
      <div className="space-y-0">
        <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/[0.04] to-gray-50/80 px-6 py-8 shadow-soft sm:px-10 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            {lang === "de" ? "Praxis & Wissen" : "Practice & knowledge"}
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-800">{lead}</p>
        </div>

        {b.sections.map((section, i) => (
          <section key={i} className="mx-auto mt-12 max-w-3xl sm:mt-14">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">{section.title}</h2>
            {"paragraphs" in section &&
              section.paragraphs?.map((p, j) => (
                <p key={j} className="mt-4 leading-relaxed text-gray-800">
                  {p}
                </p>
              ))}
            {"bullets" in section && section.bullets && (
              <ul className="mt-5 list-none space-y-3">
                {section.bullets.map((item, k) => (
                  <li key={k} className="flex gap-3 text-gray-800">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:mt-14 sm:p-8">
          <p className="leading-relaxed text-gray-800">{b.ctaHint}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-muted"
            >
              {b.ctaBook}
            </a>
            <Link
              href={terminHref}
              className="inline-flex rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/[0.06]"
            >
              {b.ctaOnline}
            </Link>
            <Link
              href={servicesHref}
              className="inline-flex rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              {b.ctaServices}
            </Link>
          </div>
        </section>
      </div>
    </PageContent>
  );
}
