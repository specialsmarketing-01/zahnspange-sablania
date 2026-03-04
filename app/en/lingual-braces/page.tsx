import type { Metadata } from "next";
import LingualBracesContent from "@/components/LingualBracesContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <LingualBracesContent locale={locale} dict={dict} />;
}
