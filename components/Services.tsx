import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { dictionaries } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";

export default function Services({ locale }: { locale: Locale }) {
  const h = dictionaries[locale].homepage as Record<string, unknown>;
  const ctaBook = dictionaries[locale].common.ctaBook;

  const title = (h.firstVisitTitle as string) ?? "Sie sind zum ersten Mal bei uns? Wir machen eine umfangreiche Zahnanalyse!";
  const text1 =
    (h.firstVisitText1 as string) ??
    "Bei jedem neuen Patienten führen wir zunächst eine umfassende Zahnanalyse durch. Hierbei sehen wir uns an, wie es Ihren Zähnen aktuell geht und erarbeiten, was Ihre Ziele sind.";
  const text2 =
    (h.firstVisitText2 as string) ??
    "Egal, ob Sie zur regelmäßigen Zahnreinigung kommen, Zahnersatz brauchen oder Ihre Zähne begradigen lassen möchten – wir erstellen Ihnen einen passenden Plan.";

  return (
    <section className="bg-[#f8f9fb] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5 lg:items-stretch">
          {/* Left: First-visit analysis text card (80%) */}
          <div className="h-full rounded-3xl bg-white shadow-soft border border-gray-100 px-6 py-8 sm:px-8 sm:py-10 flex items-stretch lg:col-span-4">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center">
                <Image
                  src="/clean.png"
                  alt={locale === "en" ? "Tooth icon" : "Zahn-Icon"}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#1e293b] leading-snug">
                  {title}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {text1}
                </p>
                <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {text2}
                </p>
                <div className="mt-5">
                  <Link
                    href={getHref("/online-termine", locale)}
                    className="inline-flex items-center justify-center rounded-xl bg-[#0f2e5c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#163d78]"
                  >
                    {ctaBook}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: quick appointments link (20%) */}
          <div className="flex w-full flex-col justify-center rounded-3xl border border-gray-100 bg-white p-6 shadow-lg lg:col-span-1">
            <Link
              href={getHref("/online-termine", locale)}
              className="block text-center text-base font-semibold text-[#0f2e5c] hover:underline sm:text-lg"
            >
              {(h.firstVisitQuickAppointments as string) ?? (locale === "en" ? "Quick appointments online or by phone" : "Schnelle Termine online oder telefonisch")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
