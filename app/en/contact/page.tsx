import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { BOOKING_URL } from "@/lib/site";

const locale = "en" as const;

const PHONE = "+43 1 3306090";
const EMAIL = "info@zahnspange-sablania.at";
const HOURS = "Mon–Fri: 10 AM – 5 PM";

export const metadata: Metadata = {
  title: "Contact | Dr. Manish Sablania",
  description:
    "Contact and directions to Zahnspange Sablania practice in Vienna. Book an appointment at +43 1 3306090.",
  alternates: {
    canonical: `${SITE_URL}/en/contact`,
    languages: { de: `${SITE_URL}/kontakt`, en: `${SITE_URL}/en/contact` },
  },
};

export default function ContactPage() {
  const dict = getDictionary(locale);
  const f = dict.footer;
  return (
    <PageContent
      title={dict.nav.contact}
      lead="How to reach us – we look forward to your message."
      locale={locale}
      dict={dict}
    >
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {f.hoursTitle}
          </h3>
          <p className="mt-2 text-[#0f2e5c] font-medium">{HOURS}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{f.phone}</h3>
          <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="mt-2 block text-[#0f2e5c] font-medium hover:underline">
            {PHONE}
          </a>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Email</h3>
          <a href={`mailto:${EMAIL}`} className="mt-2 block text-[#0f2e5c] font-medium hover:underline">
            {EMAIL}
          </a>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">{f.ordinationHeading}</h2>
        <p className="text-gray-600">
          {f.addressTitle} 1200 Vienna. You will receive the exact address and directions when you book your appointment.
        </p>
      </section>

      <p className="mt-10 text-gray-600">
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
          {dict.common.ctaBookOnline}
        </a>
      </p>
    </PageContent>
  );
}
