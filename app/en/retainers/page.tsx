import type { Metadata } from "next";
import KfoRetainerContent from "@/components/KfoRetainerContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/kfo-retainer";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <KfoRetainerContent locale={locale} dict={dict} />;
}
