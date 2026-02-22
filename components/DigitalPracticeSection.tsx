import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { BOOKING_URL } from "@/lib/site";

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2c-1.5 0-2.5 1-3 2.5-.5 1.5-1 3.5-1 5.5 0 2 .5 4 1.5 5 .5.5 1 1 2 1s1.5-.5 2-1c1-1 1.5-3 1.5-5 0-2-.5-4-1-5.5C14.5 3 13.5 2 12 2z" />
      <path d="M12 8v8M9 11h6M10 14h4" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

export default function DigitalPracticeSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const h = dict.homepage;
  const get = (key: string) => {
    if (!(key in h)) return "";
    const value = (h as unknown as Record<string, unknown>)[key];
    return typeof value === "string" ? value : "";
  };

  const title = get("digitalPracticeTitle");
  const stat1Number = get("digitalPracticeStat1Number");
  const stat1Text = get("digitalPracticeStat1Text");
  const stat2Number = get("digitalPracticeStat2Number");
  const stat2Text = get("digitalPracticeStat2Text");
  const cta = get("digitalPracticeCta");
  const ctaUrl = get("digitalPracticeCtaUrl");
  const para1 = get("digitalPracticePara1");
  const para2 = get("digitalPracticePara2");
  const para2Bold = get("digitalPracticePara2Bold");
  const para3 = get("digitalPracticePara3");
  const para4 = get("digitalPracticePara4");

  const renderPara2 = () => {
    if (!para2) return null;
    if (!para2Bold || !para2.includes(para2Bold)) return para2;
    const parts = para2.split(para2Bold);
    return (
      <>
        {parts[0]}
        <strong>{para2Bold}</strong>
        {parts[1]}
      </>
    );
  };

  if (!title) return null;

  const buttonClass =
    "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-soft hover:bg-primary/90 hover:shadow-soft-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";

  return (
    <section className="relative bg-gray-50/80 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-accent/80" aria-hidden />
        </header>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <ToothIcon className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-2xl font-bold text-primary sm:text-3xl tabular-nums">
                    {stat1Number}
                  </p>
                  <p className="mt-2 text-sm text-primary/80 leading-snug">
                    {stat1Text}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                  <ToothIcon className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-2xl font-bold text-primary sm:text-3xl tabular-nums">
                    {stat2Number}
                  </p>
                  <p className="mt-2 text-sm text-primary/80 leading-snug">
                    {stat2Text}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              {ctaUrl ? (
                <a
                  href={ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass} w-full sm:w-auto`}
                >
                  {cta}
                  <ExternalLinkIcon className="h-5 w-5 shrink-0 opacity-90" />
                </a>
              ) : (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonClass} w-full sm:w-auto`}
                >
                  {cta}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-primary/10 bg-white p-8 shadow-soft sm:p-10">
              <div className="space-y-6 text-primary/90">
                {para1 && (
                  <p className="font-serif text-base leading-relaxed sm:text-lg">
                    {para1}
                  </p>
                )}
                {para2 && (
                  <p className="font-serif text-base leading-relaxed sm:text-lg">
                    {renderPara2()}
                  </p>
                )}
                {para3 && (
                  <p className="font-serif text-base leading-relaxed sm:text-lg">
                    {para3}
                  </p>
                )}
                {para4 && (
                  <p className="font-serif text-base leading-relaxed sm:text-lg">
                    {para4}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
