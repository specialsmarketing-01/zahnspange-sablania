import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getHref } from "@/lib/paths";
import { BOOKING_URL } from "@/lib/site";

const ADDRESS_LINES = ["Forsthausgasse 16–20", "Stiege 3 / EG", "1200 Wien"];

const DENTISTRY_PATHS = [
  "/komposit-zahnfuellung",
  "/krone-bruecke",
  "/mundhygiene-wien",
  "/zahnbleaching",
  "/sportschutz-mouthguards",
];

const ORTHO_PATHS = [
  "/zahnspange-fuer-kinder",
  "/zahnspange-fuer-jugendliche",
  "/zahnspange-fuer-erwachsene",
  "/gratis-zahnspange",
  "/unsichtbare-zahnspange-wien",
  "/unsichtbare-zahnspange-lingual-innenliegende-zahnspange",
];

const FOOTER_LINK_PATHS = [
  "/online-termin",
  "/ueber-mich",
  "/unsere-ordination",
  "/unser-team",
  "/vorher-nachher-fotos",
  "/faqs",
];

const LEGAL_PATHS = ["/impressum", "/datenschutz"];

const dentistryKeys = ["aestheticFillings", "crownBridge", "professionalOralHygiene", "teethWhitening", "sportsGuards"] as const;
const orthoKeys = ["bracesChildren", "bracesTeens", "bracesAdults", "freeBraces", "invisibleBracesInvisalign", "invisibleLingual"] as const;
const linkKeys = ["contact", "aboutMe", "ourPractice", "ourTeam", "beforeAfter", "faqs"] as const;
const legalKeys = ["imprint", "privacy"] as const;

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const f = dict.footer;
  const ctaLabel = dict.common.ctaBookOnline ?? dict.nav.cta;

  return (
    <footer
      className="bg-primary text-white"
      role="contentinfo"
      aria-label={f.ariaFooter}
    >
      {/* CTA band */}
      <div className="border-b border-white/10 bg-primary/95">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link
              href={getHref("/", locale)}
              className="shrink-0 block min-h-[60px]"
              aria-label="Zahnspange Sablania – Startseite"
            >
              <Image
                src="/Dr-Sablania-websitelogo.png"
                alt="Dr. Sablania – Zahnspange Sablania"
                width={250}
                height={65}
                className="h-[60px] w-auto object-contain"
                unoptimized
              />
            </Link>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-primary shadow-lg hover:bg-accent-light transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Ordination & contact */}
          <section className="lg:col-span-1" aria-labelledby="footer-ordination" aria-label={f.ariaHours}>
            <h2 id="footer-ordination" className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {f.ordinationHeading}
            </h2>
            <p className="text-sm font-medium text-white/95">{f.hoursTitle}</p>
            <ul className="mt-2 space-y-1 text-sm text-white/90" aria-label={f.ariaHours}>
              {f.hoursLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li className="text-white/75">{f.hoursNote}</li>
            </ul>
            <p className="mt-5 text-sm font-medium text-white/95">{f.addressTitle}</p>
            <address className="mt-2 not-italic text-sm text-white/90 leading-relaxed">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </section>

          {/* General dentistry */}
          <section aria-labelledby="footer-dentistry" aria-label={f.generalDentistry}>
            <h2 id="footer-dentistry" className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {f.generalDentistry}
            </h2>
            <nav aria-label={f.generalDentistry}>
              <ul className="space-y-3 text-sm">
                {DENTISTRY_PATHS.map((path, i) => (
                  <li key={path}>
                    <Link
                      href={getHref(path, locale)}
                      className="text-white/90 hover:text-accent transition-colors inline-block"
                    >
                      {f[dentistryKeys[i]]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Orthodontics */}
          <section aria-labelledby="footer-ortho" aria-label={f.orthodontics}>
            <h2 id="footer-ortho" className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {f.orthodontics}
            </h2>
            <nav aria-label={f.orthodontics}>
              <ul className="space-y-3 text-sm">
                {ORTHO_PATHS.map((path, i) => (
                  <li key={path}>
                    <Link
                      href={getHref(path, locale)}
                      className="text-white/90 hover:text-accent transition-colors inline-block"
                    >
                      {f[orthoKeys[i]]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {/* Links & legal */}
          <section aria-labelledby="footer-links" aria-label={f.links}>
            <h2 id="footer-links" className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {f.links}
            </h2>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3 text-sm">
                {FOOTER_LINK_PATHS.map((path, i) => (
                  <li key={path}>
                    <Link
                      href={getHref(path, locale)}
                      className="text-white/90 hover:text-accent transition-colors inline-block"
                    >
                      {f[linkKeys[i]]}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-5 text-xs font-semibold uppercase tracking-wider text-white/60 border-t border-white/15">
                {f.legal}
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {LEGAL_PATHS.map((path, i) => (
                  <li key={path}>
                    <Link
                      href={getHref(path, locale)}
                      className="text-white/80 hover:text-accent transition-colors inline-block"
                    >
                      {f[legalKeys[i]]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </div>

      {/* Contact strip */}
      <div className="border-t border-white/10 bg-primary/90">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-white/95">{f.practiceDescription}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <a
                  href="tel:+4313306090"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-accent transition-colors"
                  aria-label={locale === "de" ? "Telefon anrufen" : "Call phone"}
                >
                  <PhoneIcon />
                  +43 1 3306090
                </a>
                <a
                  href="mailto:info@zahnspange-sablania.at"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-accent transition-colors"
                >
                  <EnvelopeIcon />
                  info@zahnspange-sablania.at
                </a>
                <a
                  href="mailto:info@wienzahnaerzte.at"
                  className="inline-flex items-center gap-2 text-white/90 hover:text-accent transition-colors"
                >
                  <EnvelopeIcon />
                  info@wienzahnaerzte.at
                </a>
              </div>
            </div>
            <p className="text-sm text-white/80 lg:text-right lg:max-w-sm">
              {f.copyright}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-white/60">
          {f.atsewa}
        </p>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="h-4 w-4 text-white/90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V21a2 2 0 01-2 2h-1C9.716 23 3 16.284 3 8V5z"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg
      className="h-4 w-4 text-white/90"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
