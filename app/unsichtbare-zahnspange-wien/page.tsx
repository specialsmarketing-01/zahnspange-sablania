import type { Metadata } from "next";
import UnsichtbareZahnspangeContent from "@/components/UnsichtbareZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/unsichtbare-zahnspange-wien";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <UnsichtbareZahnspangeContent locale={locale} dict={dict} />;
}
