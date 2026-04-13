import type { Metadata } from "next";
import MundhygieneWienContent from "@/components/MundhygieneWienContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/mundhygiene-wien";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <MundhygieneWienContent locale={locale} dict={dict} />;
}
