import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Kieferorthopädie",
  description:
    "Kieferorthopädie in Wien: Korrektur von Zahn- und Kieferfehlstellungen für Kinder, Jugendliche und Erwachsene. Feste Zahnspange, Aligner und Lingualtechnik.",
  alternates: {
    canonical: `${SITE_URL}/kieferorthopaedie`,
    languages: {
      de: `${SITE_URL}/kieferorthopaedie`,
      en: `${SITE_URL}/en/orthodontics`,
    },
  },
};

export default function KieferorthopaediePage() {
  const dict = getDictionary(locale);
  const k = dict.kieferorthopaedie;
  const nd = dict.navDropdown;

  return (
    <PageContent locale={locale} dict={dict} title={k.title} lead={k.lead}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.whatIs}</h2>
      <p className="text-gray-600">{k.whatIsText}</p>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.treatmentOptions}</h2>
      <p className="text-gray-600">{k.treatmentOptionsText}</p>
      <ul className="mt-6 space-y-2 list-disc pl-6 text-gray-600">
        <li>
          <Link href={getHref("/unsichtbare-zahnspange-wien", locale)} className="text-accent hover:underline">
            {nd.invisibleBraces}
          </Link>
        </li>
        <li>
          <Link href={getHref("/unsichtbare-zahnspange-lingual-innenliegende-zahnspange", locale)} className="text-accent hover:underline">
            Linguale / innenliegende Zahnspange
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-kinder", locale)} className="text-accent hover:underline">
            {nd.bracesChildren}
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-jugendliche", locale)} className="text-accent hover:underline">
            {nd.bracesTeens}
          </Link>
        </li>
        <li>
          <Link href={getHref("/zahnspange-fuer-erwachsene", locale)} className="text-accent hover:underline">
            {nd.bracesAdults}
          </Link>
        </li>
        <li>
          <Link href={getHref("/kfo-retainer", locale)} className="text-accent hover:underline">
            {nd.retainers}
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{k.process}</h2>
      <p className="text-gray-600">
        {k.processText}{" "}
        <Link href={getHref("/ablauf-zahnspange-kieferorthopaedie", locale)} className="text-accent hover:underline">
          {k.processLink}
        </Link>
        .
      </p>

      <p className="mt-10 text-gray-600">{k.closing}</p>
    </PageContent>
  );
}
