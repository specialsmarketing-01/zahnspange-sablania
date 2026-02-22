import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Our Practice",
  description: "Modern practice for orthodontics in Vienna.",
  alternates: { canonical: `${SITE_URL}/en/practice`, languages: { de: `${SITE_URL}/unsere-ordination`, en: `${SITE_URL}/en/practice` } },
};

export default function PracticePage() {
  const dict = getDictionary(locale);
  const o = dict.ordination;
  return (
    <PageContent title={o.title} lead={o.lead} locale={locale} dict={dict}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{o.section1Title}</h2>
      <p className="text-gray-600">{o.section1Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{o.section2Title}</h2>
      <p className="text-gray-600">{o.section2Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{o.section3Title}</h2>
      <p className="text-gray-600">{o.section3Text}</p>
      <p className="mt-10 text-gray-600">
        {o.ctaText}{" "}
        <a href="http://zahnspange-sablania.termin365.at/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{o.onlineTermin}</a>{" "}
        {o.anfragen}
      </p>
    </PageContent>
  );
}
