import type { Metadata } from "next";
import GratisZahnspangeContent from "@/components/GratisZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/gratis-zahnspange";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <GratisZahnspangeContent locale={locale} dict={dict} />;
}

