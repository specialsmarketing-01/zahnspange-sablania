import type { Metadata } from "next";
import KroneBrueckeContent from "@/components/KroneBrueckeContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/krone-bruecke";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <KroneBrueckeContent locale={locale} dict={dict} />;
}
