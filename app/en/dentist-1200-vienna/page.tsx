import type { Metadata } from "next";
import DentistViennaContent from "@/components/DentistViennaContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Dentist in Vienna 1200 | General Dentistry & Orthodontics",
  description:
    "Dental practice in Vienna 1200 for general and aesthetic dentistry, implants, Invisalign and braces for children, teens and adults.",
  alternates: {
    canonical: `${SITE_URL}/en/dentist-1200-vienna`,
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

