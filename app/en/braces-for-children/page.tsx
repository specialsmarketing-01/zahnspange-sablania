import type { Metadata } from "next";
import ZahnspangeKinderContent from "@/components/ZahnspangeKinderContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/zahnspange-fuer-kinder";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <ZahnspangeKinderContent locale={locale} dict={dict} />;
}
