import type { Metadata } from "next";
import Link from "next/link";
import DatenschutzLegalPage from "@/components/datenschutz/DatenschutzLegalPage";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { getHref } from "@/lib/paths";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Praxis Zahnspange Sablania, Wien. Umfassende Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: {
    canonical: `${SITE_URL}/datenschutz`,
    languages: { de: `${SITE_URL}/datenschutz`, en: `${SITE_URL}/en/privacy-policy` },
  },
};

export default function DatenschutzPage() {
  const dict = getDictionary(locale);
  const d = dict.datenschutz;

  return (
    <DatenschutzLegalPage
      footerLinks={
        <>
          <Link href={getHref("/impressum", locale)} className="text-accent hover:underline">
            {d.imprint}
          </Link>
          <span aria-hidden> | </span>
          <Link href={getHref("/", locale)} className="text-accent hover:underline">
            {d.home}
          </Link>
        </>
      }
    />
  );
}
