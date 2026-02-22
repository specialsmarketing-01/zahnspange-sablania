import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { bookingServices } from "@/data/bookingServices";
import type { Locale } from "@/lib/i18n";
import BookingCard from "@/components/BookingCard";

const locale: Locale = "en";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a consultation online at Zahnspange Sablania in Vienna. Quick and easy.",
  alternates: {
    canonical: `${SITE_URL}/en/book-appointment`,
    languages: {
      de: `${SITE_URL}/online-termin`,
      en: `${SITE_URL}/en/book-appointment`,
    },
  },
};

export default function BookAppointmentPage() {
  const dict = getDictionary(locale);
  const { sectionTitle, ctaFreeConsult } = dict.booking;
  return (
    <div className="bg-white">
      <section className="bg-[#f8f9fb] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold text-[#0f2e5c]">
            {sectionTitle}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bookingServices.map((service) => (
              <BookingCard
                key={service.slug}
                title={service.title_en}
                description={service.desc_en}
                image={service.image}
                buttonLabel={ctaFreeConsult}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
