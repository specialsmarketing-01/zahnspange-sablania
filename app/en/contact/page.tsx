import type { Metadata } from "next";
import PageContent from "@/components/PageContent";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { BOOKING_URL } from "@/lib/site";

const locale = "en" as const;

const PHONE = "+43 1 3306090";
const EMAIL1 = "info@zahnspange-sablania.at";
const EMAIL2 = "info@wienzahnaerzte.at";
const WHATSAPP = "+4367764410301";
const WHATSAPP_LINK = "https://wa.me/4367764410301";
const HOURS = "Mon–Fri: 10:00 – 17:00";

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
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
          <a href={`mailto:${EMAIL1}`} className="mt-2 block text-[#0f2e5c] font-medium hover:underline">
            {EMAIL1}
          </a>
          <a href={`mailto:${EMAIL2}`} className="mt-1 block text-[#0f2e5c] font-medium hover:underline">
            {EMAIL2}
          </a>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">WhatsApp</h3>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-[#0f2e5c] font-medium hover:underline"
          >
            <svg className="h-5 w-5 shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {WHATSAPP}
          </a>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-4">{f.ordinationHeading}</h2>
        <p className="text-gray-600">
          Forsthausgasse 16-20/ Stiege 3/ EG, 1200 Vienna
        </p>
        <div className="mt-6 w-full overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.0122893559815!2d16.36961617626859!3d48.24489087125545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9e0f79d997f%3A0x167db0d57f7c7ddd!2sZahnarzt%20%2CKieferorthop%C3%A4die%20Wien%201200%20%7C%20Dr.%20Manish%20Sablania%20BDS%20M.Sc%20%7C%20Fachzahnarzt%20f%C3%BCr%20Kieferorthop%C3%A4die!5e0!3m2!1sen!2sat!4v1772887221462!5m2!1sen!2sat"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location – Dr. Manish Sablania, Vienna 1200"
            className="block w-full rounded-xl"
          />
        </div>
      </section>

      <p className="mt-10 text-gray-600">
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">
          {dict.common.ctaBookOnline}
        </a>
      </p>
    </PageContent>
  );
}
