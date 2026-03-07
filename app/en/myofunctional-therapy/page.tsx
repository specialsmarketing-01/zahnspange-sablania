import type { Metadata } from "next";
import MyofunktionelleTherapieContent from "@/components/MyofunktionelleTherapieContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/myofunktionelle-therapie";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <MyofunktionelleTherapieContent locale={locale} dict={dict} />;
}
