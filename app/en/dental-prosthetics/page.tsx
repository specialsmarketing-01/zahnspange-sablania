import type { Metadata } from "next";
import DentalProstheticsContent from "@/components/DentalProstheticsContent";
import { getDictionary } from "@/lib/dictionaries";
import { buildPageMetadata } from "@/lib/seo";

const DE_PATH = "/zahnersatz";
const locale = "en" as const;

const META_DESCRIPTION =
  "Dental prosthetics and dentures in 1200 Vienna. Dr. Manish Sablania provides individual consultation for partial dentures, full dentures and tooth replacement.";

const OG_DESCRIPTION =
  "Personal consultation for partial dentures, full dentures and other tooth-replacement options at our dental practice in 1200 Vienna.";

const baseMetadata = buildPageMetadata({
  title: "Dental Prosthetics & Dentures Vienna | Dr. Sablania",
  description: META_DESCRIPTION,
  dePath: DE_PATH,
  locale,
  absoluteTitle: true,
  ogImage: "/services/teilprothese.jpg",
});

export const metadata: Metadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Dental Prosthetics and Dentures in Vienna",
    description: OG_DESCRIPTION,
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Dental Prosthetics and Dentures in Vienna",
    description: OG_DESCRIPTION,
  },
};

export default function Page() {
  const dict = getDictionary(locale);
  return <DentalProstheticsContent locale={locale} dict={dict} />;
}
