import type { Metadata } from "next";
import Link from "next/link";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Ihr Kieferorthopäde in Wien: Ausbildung, Schwerpunkte und Philosophie der Praxis Zahnspange Sablania.",
  alternates: {
    canonical: `${SITE_URL}/ueber-mich`,
    languages: { de: `${SITE_URL}/ueber-mich`, en: `${SITE_URL}/en/about` },
  },
};

export default function UeberMichPage() {
  const dict = getDictionary(locale);
  const u = dict.ueberMich;
  return (
    <PageContent title={u.title} lead={u.lead} locale={locale} dict={dict}>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{u.section1Title}</h2>
      <p className="text-gray-600">{u.section1Text}</p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{u.section2Title}</h2>
      <p className="text-gray-600">
        Mehr zu unseren <Link href={getHref("/leistungen", locale)} className="text-accent hover:underline">{u.services}</Link> erfahren Sie auf der entsprechenden Seite.
      </p>
      <h2 className="text-2xl font-bold text-primary mt-12 mb-4">{u.section3Title}</h2>
      <p className="text-gray-600">{u.section3Text}</p>
      <p className="mt-10 text-gray-600">
        {u.learnMore}{" "}
        <Link href={getHref("/unsere-ordination", locale)} className="text-accent hover:underline">{u.practice}</Link>{" "}
        <Link href={getHref("/unser-team", locale)} className="text-accent hover:underline">{u.team}</Link>.
      </p>
    </PageContent>
  );
}
