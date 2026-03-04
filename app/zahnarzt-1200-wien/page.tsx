import type { Metadata } from "next";
import DentistViennaContent from "@/components/DentistViennaContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "de" as const;

export const metadata: Metadata = {
  title: "Zahnarzt in Wien 1200 | Allgemeine Zahnheilkunde & Kieferorthopädie",
  description:
    "Zahnarzt und Fachzahnarzt für Kieferorthopädie in 1200 Wien. Allgemeine und ästhetische Zahnheilkunde, Implantate, Invisalign, Zahnspangen für Kinder, Jugendliche und Erwachsene.",
  alternates: {
    canonical: `${SITE_URL}/zahnarzt-1200-wien`,
    languages: {
      de: `${SITE_URL}/zahnarzt-1200-wien`,
      en: `${SITE_URL}/en/dentist-1200-vienna`,
    },
  },
};

export default function Page() {
  const dict = getDictionary(locale);
  return <DentistViennaContent locale={locale} dict={dict} />;
}

