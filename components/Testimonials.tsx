import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

export default function Testimonials({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const h = dict.homepage;
  const paymentInfo = (h as unknown as { paymentInfo?: { title: string; description: string }[] }).paymentInfo;
  const paymentTitle = (h as unknown as { paymentInfoTitle?: string }).paymentInfoTitle;
  const testimonials = (Array.isArray((h as unknown as { testimonials?: { quote: string; author: string; role: string }[] }).testimonials)
    ? (h as unknown as { testimonials: { quote: string; author: string; role: string }[] }).testimonials
    : []);
  const starAria = locale === "de" ? "5 von 5 Sternen" : "5 out of 5 stars";

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {h.testimonialsTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            {h.testimonialsSub}
          </p>
        </div>
        {/* Google reviews only – no map */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={`${t.author}-${i}`}
              className="relative rounded-xl border border-primary/10 bg-white p-8 shadow-soft"
            >
              <div className="mb-3 flex items-center gap-2">
                <div className="flex gap-0.5" aria-label={starAria}>
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-500">Google</span>
              </div>
              <p className="text-gray-600">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6">
                <cite className="not-italic">
                  <span className="font-semibold text-primary">{t.author}</span>
                  <span className="text-gray-500"> – {t.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {paymentInfo && paymentInfo.length > 0 && (
          <div className="mt-16 border-t border-gray-200 pt-10">
            {paymentTitle && (
              <h3 className="text-center text-xl font-semibold text-primary">
                {paymentTitle}
              </h3>
            )}
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {paymentInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white p-6 shadow-soft border border-primary/5 flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {index === 0 && <FeeGuideIcon />}
                      {index === 1 && <FinanceIcon />}
                      {index === 2 && <PaymentIcon />}
                    </div>
                    <h4 className="text-base font-semibold text-primary">
                      {item.title}
                    </h4>
                  </div>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeeGuideIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h5M8 17h3" />
    </svg>
  );
}

function FinanceIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="M10.5 10.5L13.5 13.5" />
      <path d="M6 16h4" />
      <path d="M14 8h4" />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 15h2" />
      <path d="M12 15h4" />
    </svg>
  );
}
