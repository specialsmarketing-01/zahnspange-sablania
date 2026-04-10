import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HeroSpecialtiesSection from "@/components/HeroSpecialtiesSection";
import ServicesSection from "@/components/ServicesSection";
import BracesCategoriesSection from "@/components/BracesCategoriesSection";
import ServicesSimple from "@/components/ServicesSimple";
import DigitalPracticeSection from "@/components/DigitalPracticeSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import GoogleRating from "@/components/GoogleRating";
import ContactSection from "@/components/ContactSection";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";

const locale = "en" as const;

export const metadata: Metadata = {
  title: "Zahnspange Sablania | Orthodontics & Braces Vienna",
  description:
    "Your specialists for modern braces in Vienna. Individual consultation, modern technology and excellent results for children, teenagers and adults.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      de: SITE_URL,
      en: `${SITE_URL}/en`,
    },
  },
};

export default function EnHomePage() {
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <HeroSpecialtiesSection locale={locale} dict={dict} />
      <ServicesSimple locale={locale} dict={dict} />
      <DigitalPracticeSection locale={locale} dict={dict} />
      <Services locale={locale} />
      <WhyChooseUs dict={dict} />
      <BracesCategoriesSection locale={locale} dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
      <GoogleRating dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
