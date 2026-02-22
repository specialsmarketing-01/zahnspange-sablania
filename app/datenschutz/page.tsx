import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Praxis Zahnspange Sablania, Wien. Informationen zur Verarbeitung personenbezogener Daten.",
  alternates: { canonical: `${SITE_URL}/datenschutz`, languages: { de: `${SITE_URL}/datenschutz`, en: `${SITE_URL}/en/privacy-policy` } },
};

export default function DatenschutzPage() {
  const dict = getDictionary(locale);
  const d = dict.datenschutz;
  return (
    <PageContent title={d.title} showCta={false} locale={locale} dict={dict}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{d.section1Title}</h2>
      <p className="text-gray-600">{d.section1Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{d.section2Title}</h2>
      <p className="text-gray-600">{d.section2Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{d.section3Title}</h2>
      <p className="text-gray-600">{d.section3Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{d.section4Title}</h2>
      <p className="text-gray-600">{d.section4Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{d.section5Title}</h2>
      <p className="text-gray-600">{d.section5Text}</p>
      <p className="mt-10 text-gray-600">
        <Link href={getHref("/impressum", locale)} className="text-accent hover:underline">{d.imprint}</Link>
        {" | "}
        <Link href={getHref("/", locale)} className="text-accent hover:underline">{d.home}</Link>
      </p>
    </PageContent>
  );
}
