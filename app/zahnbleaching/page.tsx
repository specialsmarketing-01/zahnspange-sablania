import type { Metadata } from "next";
import ZahnbleachingContent from "@/components/ZahnbleachingContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/zahnbleaching";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <ZahnbleachingContent locale={locale} dict={dict} />;
}
