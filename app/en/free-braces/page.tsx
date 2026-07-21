import type { Metadata } from "next";
import GratisZahnspangeContent from "@/components/GratisZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/gratis-zahnspange";
const locale = "en" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Publicly Funded Braces Vienna & ÖGK | Dr. Sablania",
  description:
    "Learn about publicly funded braces in Vienna, IOTN grades 4–5, ÖGK approval and possible reimbursement when using an elective orthodontist.",
  dePath: DE_PATH,
  locale,
  absoluteTitle: true,
});

export default function Page() {
  const dict = getDictionary(locale);
  return <GratisZahnspangeContent locale={locale} dict={dict} />;
}
