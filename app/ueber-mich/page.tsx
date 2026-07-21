import type { Metadata } from "next";
import UeberMichPageContent from "@/components/UeberMichPageContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import { DOCTOR } from "@/lib/practiceInfo";

const DE_PATH = "/ueber-mich";
const locale = "de" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Dr. Manish Sablania | Kieferorthopäde Wien",
  description:
    "Dr. Manish Sablania ist Fachzahnarzt für Kieferorthopädie und Zahnarzt in 1200 Wien. Beratung auf Deutsch, Englisch und Hindi.",
  dePath: DE_PATH,
  locale,
  absoluteTitle: true,
  ogImage: DOCTOR.imagePath,
});

export default function UeberMichPage() {
  const dict = getDictionary(locale);
  return <UeberMichPageContent locale={locale} dict={dict} />;
}
