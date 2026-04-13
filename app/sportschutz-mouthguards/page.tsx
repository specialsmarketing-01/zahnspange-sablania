import type { Metadata } from "next";
import SportschutzMouthguardsContent from "@/components/SportschutzMouthguardsContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/sportschutz-mouthguards";
const locale = "de" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <SportschutzMouthguardsContent locale={locale} dict={dict} />;
}
