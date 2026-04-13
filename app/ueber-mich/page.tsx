import type { Metadata } from "next";
import UeberMichPageContent from "@/components/UeberMichPageContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/ueber-mich";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function UeberMichPage() {
  const dict = getDictionary(locale);
  return <UeberMichPageContent locale={locale} dict={dict} />;
}
