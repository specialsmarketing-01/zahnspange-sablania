import type { Metadata } from "next";
import UeberMichPageContent from "@/components/UeberMichPageContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";
import { DOCTOR } from "@/lib/practiceInfo";

const DE_PATH = "/ueber-mich";
const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Dr. Manish Sablania | Indian Orthodontist Vienna",
  description:
    "Meet Dr. Manish Sablania, an Indian-origin specialist orthodontist and general dentist in 1200 Vienna. Consultations in German, English and Hindi.",
  dePath: DE_PATH,
  locale,
  absoluteTitle: true,
  ogImage: DOCTOR.imagePath,
});

export default function AboutPage() {
  const dict = getDictionary(locale);
  return <UeberMichPageContent locale={locale} dict={dict} />;
}
