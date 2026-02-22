"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getPathForLocale, getHref } from "@/lib/paths";

const DROPDOWN_DE_PATHS = [
  "/kieferorthopaedie",
  "/unsichtbare-zahnspange-wien",
  "/zahnspange-fuer-kinder",
  "/zahnspange-fuer-jugendliche",
  "/zahnspange-fuer-erwachsene",
  "/myofunktionelle-therapie",
  "/kfo-retainer",
  "/mundhygiene-wien",
  "/zahnbleaching",
  "/zahnersatz",
] as const;

const ABOUT_NAV_PATHS = [
  { path: "/ueber-mich", labelKey: "aboutTheDoctor" as const },
  { path: "/ueber-uns", labelKey: "ourPractice" as const },
  { path: "/unser-team", labelKey: "ourTeam" as const },
  { path: "/vorher-nachher", labelKey: "beforeAfter" as const },
];

type NavbarProps = { locale: Locale; dict: Dictionary };

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname() ?? "";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leistungenOpen, setLeistungenOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const homeHref = getHref("/", locale);
  const pathForDe = getPathForLocale(pathname, "de");
  const pathForEn = getPathForLocale(pathname, "en");

  const dropdownLabels = [
    dict.navDropdown.orthodontics,
    dict.navDropdown.invisibleBraces,
    dict.navDropdown.bracesChildren,
    dict.navDropdown.bracesTeens,
    dict.navDropdown.bracesAdults,
    dict.navDropdown.myofunctional,
    dict.navDropdown.retainers,
    dict.navDropdown.oralHygiene,
    dict.navDropdown.teethWhitening,
    dict.navDropdown.dentalProsthetics,
  ];

  const navLinkClass =
    "font-medium text-[#1e293b] hover:text-[#0f2e5c] transition-colors duration-200 whitespace-nowrap";
  const navLinkActiveClass = "text-[#0f2e5c] font-semibold";

  const isActive = (path: string) => {
    const href = getHref(path, locale);
    const current = pathname?.replace(/\/$/, "") || "/";
    return current === href || current === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8"
        aria-label={dict.nav.ariaNav}
      >
        {/* LEFT: Logo + clinic name */}
        <Link
          href={homeHref}
          className="flex shrink-0 items-center gap-3 min-h-[52px]"
          aria-label={`Zahnspange Sablania – ${dict.nav.home}`}
        >
          <Image
            src="/Dr-Sablania-websitelogo.png"
            alt="Dr. Sablania – Zahnspange Sablania"
            width={200}
            height={52}
            className="h-12 w-auto object-contain"
            priority
            unoptimized
          />
        </Link>

        {/* CENTER: Navigation */}
        <div className="hidden xl:flex xl:items-center xl:gap-8 xl:flex-1 xl:justify-center">
          <Link
            href={homeHref}
            className={`text-sm ${navLinkClass} ${pathname === "/" || pathname === "/en" ? navLinkActiveClass : ""}`}
          >
            {dict.nav.home}
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setLeistungenOpen(true)}
            onMouseLeave={() => setLeistungenOpen(false)}
          >
            <Link
              href={getHref("/leistungen", locale)}
              className={`inline-flex items-center gap-0.5 text-sm ${navLinkClass} ${pathname?.startsWith("/leistungen") || pathname?.startsWith("/en/services") || pathname?.startsWith("/en/orthodontics") || pathname?.startsWith("/kieferorthopaedie") ? navLinkActiveClass : ""}`}
            >
              {dict.nav.services}
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${leistungenOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {leistungenOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[220px] rounded-xl border border-gray-200 bg-white py-3 shadow-lg">
                  {DROPDOWN_DE_PATHS.map((path, i) => (
                    <Link
                      key={path}
                      href={getHref(path, locale)}
                      className="block px-5 py-2 text-sm text-[#1e293b] hover:bg-gray-100 rounded-md transition-colors duration-200"
                    >
                      {dropdownLabels[i]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <Link
              href={getHref("/ueber-mich", locale)}
              className={`inline-flex items-center gap-0.5 text-sm ${navLinkClass} ${pathname?.startsWith("/ueber-mich") || pathname?.startsWith("/ueber-uns") || pathname?.startsWith("/en/about") || pathname?.startsWith("/en/about-practice") || pathname?.startsWith("/unsere-ordination") || pathname?.startsWith("/en/practice") || pathname?.startsWith("/unser-team") || pathname?.startsWith("/en/team") || pathname?.startsWith("/vorher-nachher") || pathname?.startsWith("/en/before-after") ? navLinkActiveClass : ""}`}
            >
              {dict.nav.aboutUs}
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            {aboutOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[220px] rounded-xl bg-white py-3 shadow-lg">
                  {ABOUT_NAV_PATHS.map(({ path, labelKey }) => (
                    <Link
                      key={path}
                      href={getHref(path, locale)}
                      className="block px-5 py-2 text-sm text-[#1e293b] hover:bg-gray-100 rounded-md transition-colors duration-200"
                    >
                      {dict.nav[labelKey]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href={getHref("/kontakt", locale)}
            className={`text-sm ${navLinkClass} ${isActive("/kontakt") ? navLinkActiveClass : ""}`}
          >
            {dict.nav.contact}
          </Link>
        </div>

        {/* RIGHT: Language + CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="hidden xl:flex items-center gap-1 text-sm font-medium text-[#1e293b]">
            {locale === "de" ? (
              <span className="px-2 py-1 rounded text-[#0f2e5c] font-semibold" aria-current="true">
                DE
              </span>
            ) : (
              <Link href={pathForDe} className="px-2 py-1 rounded hover:text-[#0f2e5c]" aria-label="Deutsch">
                DE
              </Link>
            )}
            <span className="text-gray-300" aria-hidden>|</span>
            {locale === "en" ? (
              <span className="px-2 py-1 rounded text-[#0f2e5c] font-semibold" aria-current="true">
                EN
              </span>
            ) : (
              <Link href={pathForEn} className="px-2 py-1 rounded hover:text-[#0f2e5c]" aria-label="English">
                EN
              </Link>
            )}
          </div>

          <a
            href="https://powerforms.at/247674"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center justify-center rounded-full border-2 border-[#0f2e5c] px-5 py-2.5 text-sm font-semibold text-[#0f2e5c] transition-colors hover:bg-[#0f2e5c]/5"
          >
            {locale === "de" ? "Gesundheitsfragebogen" : "Health Questionnaire"}
          </a>

          <Link
            href={getHref("/online-termin", locale)}
            className="hidden xl:inline-flex items-center justify-center rounded-full bg-[#0f2e5c] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#163d78]"
          >
            {dict.nav.cta}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex xl:hidden items-center gap-2">
          <Link
            href={locale === "de" ? pathForEn : pathForDe}
            className="text-sm font-medium text-[#1e293b] hover:text-[#0f2e5c] px-2 py-1"
            aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
          >
            {locale === "de" ? "EN" : "DE"}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#1e293b] hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? dict.nav.ariaMenuClose : dict.nav.ariaMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-4 space-y-1">
            <Link
              href={homeHref}
              className="block rounded-lg px-4 py-3 text-base font-medium text-[#1e293b] hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
              onClick={() => setMobileOpen(false)}
            >
              {dict.nav.home}
            </Link>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-[#1e293b] hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                onClick={() => setMobileLeistungenOpen(!mobileLeistungenOpen)}
                aria-expanded={mobileLeistungenOpen}
              >
                {dict.nav.services}
                <svg
                  className={`h-4 w-4 transition-transform ${mobileLeistungenOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileLeistungenOpen && (
                <div className="ml-4 border-l border-gray-200 pl-3 space-y-0.5 py-1">
                  {DROPDOWN_DE_PATHS.map((path, i) => (
                    <Link
                      key={path}
                      href={getHref(path, locale)}
                      className="block rounded-lg px-3 py-2 text-sm text-[#1e293b]/90 hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {dropdownLabels[i]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-[#1e293b] hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                aria-expanded={mobileAboutOpen}
              >
                {dict.nav.aboutUs}
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 border-l border-gray-200 pl-3 space-y-0.5 py-1">
                  {ABOUT_NAV_PATHS.map(({ path, labelKey }) => (
                    <Link
                      key={path}
                      href={getHref(path, locale)}
                      className="block rounded-lg px-3 py-2 text-sm text-[#1e293b]/90 hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {dict.nav[labelKey]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={getHref("/kontakt", locale)}
              className="block rounded-lg px-4 py-3 text-base font-medium text-[#1e293b] hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
              onClick={() => setMobileOpen(false)}
            >
              {dict.nav.contact}
            </Link>

            <a
              href="https://powerforms.at/247674"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg px-4 py-3 text-base font-medium text-[#1e293b] hover:bg-[#f8f9fb] hover:text-[#0f2e5c] border-2 border-[#0f2e5c] text-center"
              onClick={() => setMobileOpen(false)}
            >
              {locale === "de" ? "Gesundheitsfragebogen" : "Health Questionnaire"}
            </a>

            <Link
              href={getHref("/online-termin", locale)}
              className="mt-3 flex items-center justify-center rounded-full bg-[#0f2e5c] px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#163d78]"
              onClick={() => setMobileOpen(false)}
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
