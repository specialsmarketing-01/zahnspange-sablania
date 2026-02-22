import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "en" as const;

const SERVICE_PATHS = [
  "/kieferorthopaedie",
  "/unsichtbare-zahnspange-wien",
  "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange",
  "/zahnspange-fuer-kinder",
  "/zahnspange-fuer-jugendliche",
  "/zahnspange-fuer-erwachsene",
  "/myofunktionelle-therapie",
  "/kfo-retainer",
  "/durchsichtige-zahnspange",
  "/mundhygiene-wien",
  "/zahnbleaching",
  "/komposit-zahnfuellung",
  "/krone-bruecke",
  "/zahnersatz",
  "/sportschutz-mouthguards",
];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Orthodontics, invisible braces, braces for children, teens and adults, retainers, oral hygiene, teeth whitening and dental prosthetics in Vienna – all services at Zahnspange Sablania.",
  alternates: {
    canonical: `${SITE_URL}/en/services`,
    languages: {
      de: `${SITE_URL}/leistungen`,
      en: `${SITE_URL}/en/services`,
    },
  },
};

export default function ServicesPage() {
  const dict = getDictionary(locale);
  const l = dict.leistungen;
  const titles = dict.routeTitles;

  return (
    <PageContent locale={locale} dict={dict} title={l.title} lead={l.lead}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
        {l.orthodonticsTitle}
      </h2>
      <p className="text-gray-600">{l.orthodonticsText}</p>
      <ul className="mt-6 space-y-2 list-disc pl-6 text-gray-600">
        {SERVICE_PATHS.slice(0, 9).map((path) => (
          <li key={path}>
            <Link href={getHref(path, locale)} className="text-accent hover:underline">
              {titles[path] ?? path}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">
        {l.prophylaxisTitle}
      </h2>
      <p className="text-gray-600">{l.prophylaxisText}</p>
      <ul className="mt-6 space-y-2 list-disc pl-6 text-gray-600">
        {SERVICE_PATHS.slice(9).map((path) => (
          <li key={path}>
            <Link href={getHref(path, locale)} className="text-accent hover:underline">
              {titles[path] ?? path}
            </Link>
          </li>
        ))}
      </ul>

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
