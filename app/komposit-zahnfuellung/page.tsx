import type { Metadata } from "next";
import KompositZahnfuellungContent from "@/components/KompositZahnfuellungContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/komposit-zahnfuellung";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <KompositZahnfuellungContent locale={locale} dict={dict} />;
}
