import type { Metadata } from "next";
import AblaufZahnspangeContent from "@/components/AblaufZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/ablauf-zahnspange-kieferorthopaedie";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <AblaufZahnspangeContent locale={locale} dict={dict} />;
}
