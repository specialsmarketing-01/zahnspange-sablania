import type { Metadata } from "next";
import ZahnspangeJugendlicheContent from "@/components/ZahnspangeJugendlicheContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/zahnspange-fuer-jugendliche";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <ZahnspangeJugendlicheContent locale={locale} dict={dict} />;
}
