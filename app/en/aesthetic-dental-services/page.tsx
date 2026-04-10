import type { Metadata } from "next";
import AestheticDentalServicesContent from "@/components/AestheticDentalServicesContent";
import { getDictionary } from "@/lib/dictionaries";
import { getServicePageMetadata } from "@/lib/servicePageMetadata";

const DE_PATH = "/asethetic-dental-services";
const locale = "en" as const;

export async function generateMetadata(): Promise<Metadata> {
  return getServicePageMetadata(DE_PATH, locale);
}

export default function Page() {
  const dict = getDictionary(locale);
  return <AestheticDentalServicesContent locale={locale} dict={dict} />;
}

