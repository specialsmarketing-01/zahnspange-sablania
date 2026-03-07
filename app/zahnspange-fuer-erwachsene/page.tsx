import type { Metadata } from "next";
import ZahnspangeErwachseneContent from "@/components/ZahnspangeErwachseneContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/zahnspange-fuer-erwachsene";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <ZahnspangeErwachseneContent locale={locale} dict={dict} />;
}
