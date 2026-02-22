import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import BracesCategoriesSection from "@/components/BracesCategoriesSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import DigitalPracticeSection from "@/components/DigitalPracticeSection";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
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
      <ServicesSection locale={locale} dict={dict} />
      <BracesCategoriesSection locale={locale} dict={dict} />
      <TreatmentsSection locale={locale} dict={dict} />
      <DigitalPracticeSection locale={locale} dict={dict} />
      <AboutSection locale={locale} dict={dict} />
      <Services locale={locale} dict={dict} />
      <WhyChooseUs dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <CTASection locale={locale} dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </>
  );
}
