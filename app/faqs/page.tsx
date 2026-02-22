import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Häufige Fragen (FAQs)",
  description: "Häufige Fragen zu Kieferorthopädie, Zahnspange, Kosten und Ablauf in Wien – Praxis Zahnspange Sablania.",
  alternates: { canonical: `${SITE_URL}/faqs`, languages: { de: `${SITE_URL}/faqs`, en: `${SITE_URL}/en/faqs` } },
};

export default function FAQsPage() {
  const dict = getDictionary(locale);
  const f = dict.faqs;
  return (
    <PageContent title={f.title} lead={f.lead} locale={locale} dict={dict}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{f.sectionTitle}</h2>
      <dl className="mt-6 space-y-6">
        {f.items.map((faq) => (
          <div key={faq.question}>
            <dt className="font-semibold text-primary">{faq.question}</dt>
            <dd className="mt-2 text-gray-600">{faq.answer}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-gray-600">
        {f.moreTopics}{" "}
        <Link href={getHref("/leistungen", locale)} className="text-accent hover:underline">{dict.routeTitles["/leistungen"]}</Link>
        , <Link href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)} className="text-accent hover:underline">{f.process}</Link>
        , <a href="http://zahnspange-sablania.termin365.at/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{f.onlineTermin}</a>.
      </p>
    </PageContent>
  );
}
