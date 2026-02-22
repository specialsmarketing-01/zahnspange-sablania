import type { Metadata } from "next";
import ServicePageContent from "@/components/ServicePageContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <ServicePageContent dePath={DE_PATH} locale={locale} dict={dict} />;
}
