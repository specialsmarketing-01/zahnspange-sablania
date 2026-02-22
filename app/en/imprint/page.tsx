import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Imprint and information pursuant to legal requirements – Zahnspange Sablania, Vienna.",
  alternates: {
    canonical: `${SITE_URL}/en/imprint`,
    languages: { de: `${SITE_URL}/impressum`, en: `${SITE_URL}/en/imprint` },
  },
};

export default function ImprintPage() {
  const dict = getDictionary(locale);
  const i = dict.impressum;
  return (
    <PageContent title={i.title} showCta={false} locale={locale} dict={dict}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{i.section1Title}</h2>
      <p className="text-gray-600 whitespace-pre-line">{i.section1Text}</p>
      <p className="mt-4 text-gray-600 whitespace-pre-line">{i.section1Contact}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{i.section2Title}</h2>
      <p className="text-gray-600">{i.section2Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{i.section3Title}</h2>
      <p className="text-gray-600">{i.section3Text}</p>
      <p className="mt-10 text-gray-600">
        <Link href={getHref("/datenschutz", locale)} className="text-accent hover:underline">{i.privacy}</Link>
        {" | "}
        <Link href={getHref("/", locale)} className="text-accent hover:underline">{i.home}</Link>
      </p>
    </PageContent>
  );
}
