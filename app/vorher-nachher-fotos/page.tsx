import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Vorher & Nachher Fotos",
  description: "Behandlungsbeispiele aus der Praxis Zahnspange Sablania: Vorher-Nachher-Fotos kieferorthopädischer Behandlungen in Wien.",
  alternates: {
    canonical: `${SITE_URL}/vorher-nachher-fotos`,
    languages: { de: `${SITE_URL}/vorher-nachher-fotos`, en: `${SITE_URL}/en/before-after` },
  },
};

export default function VorherNachherPage() {
  const dict = getDictionary(locale);
  const v = dict.vorherNachher;
  return (
    <PageContent title={v.title} lead={v.lead} locale={locale} dict={dict}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{v.sectionTitle}</h2>
      <p className="text-gray-600">{v.sectionText}</p>
      <p className="mt-10 text-gray-600">
        {v.ctaText}{" "}
        <a href="http://zahnspange-sablania.termin365.at/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
          {dict.common.ctaBookOnline}
        </a>
        . {v.moreInfo}{" "}
        <Link href={getHref("/leistungen", locale)} className="text-accent hover:underline">{v.services}</Link>,{" "}
        <Link href={getHref("/kieferorthopaedie", locale)} className="text-accent hover:underline">{v.orthodontics}</Link>.
      </p>
    </PageContent>
  );
}
