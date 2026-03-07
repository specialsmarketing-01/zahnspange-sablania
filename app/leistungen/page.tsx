import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";
import { SERVICE_CATEGORIES } from "@/data/serviceMenu";

const locale = "de" as const;

const CARD_CATEGORY_IDS = ["orthodontics", "general"] as const;

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Kieferorthopädie, unsichtbare Zahnspange, Zahnspange für Kinder, Jugendliche und Erwachsene, Retainer, Mundhygiene, Zahnbleaching und Zahnersatz in Wien – alle Leistungen der Praxis Zahnspange Sablania.",
  alternates: {
    canonical: `${SITE_URL}/leistungen`,
    languages: {
      de: `${SITE_URL}/leistungen`,
      en: `${SITE_URL}/en/services`,
    },
  },
};

export default function LeistungenPage() {
  const dict = getDictionary(locale);
  const l = dict.leistungen;
  const titles = dict.routeTitles as Record<string, string>;
  const leads = dict.pageLeads as Record<string, string>;

  const cardCategories = SERVICE_CATEGORIES.filter((c) =>
    CARD_CATEGORY_IDS.includes(c.id as (typeof CARD_CATEGORY_IDS)[number])
  );

  return (
    <PageContent locale={locale} dict={dict} title={l.title} lead={l.lead}>
      {cardCategories.map((category) => {
        const isOrthodontics = category.id === "orthodontics";

        const sectionTitle = isOrthodontics
          ? l.orthodonticsTitle
          : dict.navDropdown.general;

        const sectionText = isOrthodontics
          ? l.orthodonticsText
          : l.prophylaxisText;

        return (
          <section key={category.id} className="mt-12">
            <h2 className="text-2xl font-bold text-primary mb-3">{sectionTitle}</h2>
            <p className="text-gray-600">{sectionText}</p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => {
                const title = titles[item.dePath] ?? item.dePath;
                const lead = leads[item.dePath];
                const iconSrc = item.iconFile
                  ? `/icons/${encodeURIComponent(item.iconFile)}`
                  : undefined;

                return (
                  <Link
                    key={item.dePath}
                    href={getHref(item.dePath, locale)}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    {iconSrc && (
                      <div className="flex items-center justify-center bg-[#f4f6fb] px-6 py-6">
                        <div className="relative h-16 w-16">
                          <Image
                            src={iconSrc}
                            alt=""
                            fill
                            sizes="64px"
                            className="object-contain drop-shadow-sm"
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col px-6 py-5">
                      <h3 className="text-base font-semibold text-[#0f2e5c] group-hover:text-[#163d78]">
                        {title}
                      </h3>
                      {lead && (
                        <p className="mt-2 line-clamp-3 text-sm text-gray-600">{lead}</p>
                      )}
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#0f2e5c] group-hover:text-[#163d78]">
                        {dict.common.learnMore}
                        <svg
                          className="ml-1 h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.8}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M7 17L17 7" />
                          <path d="M9 7h8v8" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}

      <p className="mt-10 text-gray-600">
        {l.moreInfo}{" "}
        <Link href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)} className="text-accent hover:underline">
          {l.ablaufLink}
        </Link>
        . {l.moreInfoCosts}{" "}
        <Link href={getHref("/gratis-zahnspange", locale)} className="text-accent hover:underline">
          {l.kostenLink}
        </Link>
        .
      </p>
    </PageContent>
  );
}
