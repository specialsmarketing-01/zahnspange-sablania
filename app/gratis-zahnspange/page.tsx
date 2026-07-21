import type { Metadata } from "next";
import GratisZahnspangeContent from "@/components/GratisZahnspangeContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/gratis-zahnspange";
const locale = "de" as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Gratis Zahnspange Wien & ÖGK | Dr. Sablania",
  description:
    "Informationen zur Gratis Zahnspange in Wien: Voraussetzungen, IOTN 4–5, ÖGK-Bewilligung und mögliche Kostenerstattung beim Wahlkieferorthopäden.",
  dePath: DE_PATH,
  locale,
  absoluteTitle: true,
});

export default function Page() {
  const dict = getDictionary(locale);
  return <GratisZahnspangeContent locale={locale} dict={dict} />;
}
