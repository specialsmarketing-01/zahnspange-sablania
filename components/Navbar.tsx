"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getPathForLocale, getHref } from "@/lib/paths";
import { SERVICE_CATEGORIES, type ServiceCategoryId } from "@/data/serviceMenu";

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
  const [activeServiceCategory, setActiveServiceCategory] =
    useState<ServiceCategoryId>("orthodontics");
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileLeistungenOpen, setMobileLeistungenOpen] = useState(false);
  const [mobileActiveServiceCategory, setMobileActiveServiceCategory] =
    useState<ServiceCategoryId>("orthodontics");
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const homeHref = getHref("/", locale);
  const pathForDe = getPathForLocale(pathname, "de");
  const pathForEn = getPathForLocale(pathname, "en");

  const nd = dict.navDropdown as Record<string, string>;

  const getCategoryLabel = (id: ServiceCategoryId) => {
    switch (id) {
      case "procedure":
        return nd.procedure;
      case "dentist":
        return nd.dentistVienna;
      case "orthodontics":
        return nd.orthodontics;
      case "aesthetic":
        return nd.aesthetic;
      case "general":
        return nd.general;
      default:
        return id;
    }
  };

  const navLinkClass =
    "font-medium text-[#1e293b] hover:text-[#0f2e5c] transition-colors duration-200 whitespace-nowrap";
  const navLinkActiveClass = "text-[#0f2e5c] font-semibold";

  const isActive = (path: string) => {
    const href = getHref(path, locale);
    const current = pathname?.replace(/\/$/, "") || "/";
    return current === href || current === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full min-w-0 bg-white shadow-sm">
      <nav
        className="mx-auto flex min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:gap-4 sm:px-6 lg:px-8"
        aria-label={dict.nav.ariaNav}
      >
        {/* LEFT: Fav icon + doctor name + credentials (logo area) */}
        <Link
          href={homeHref}
          className="flex min-w-0 shrink flex-row items-center gap-3 sm:gap-4 min-h-[52px]"
          aria-label={`${dict.nav.brandName} – ${dict.nav.home}`}
        >
          <Image
            src="/Dr-Manish-fav.png"
            alt=""
            width={88}
            height={88}
            className="h-14 w-14 shrink-0 object-contain sm:h-[72px] sm:w-[72px] lg:h-[88px] lg:w-[88px]"
            unoptimized
          />
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center text-left gap-1">
            <span className="text-[10px] sm:text-[11px] font-normal text-[#0f2e5c] leading-none uppercase tracking-wide">
              {(dict.nav as { brandTitle?: string }).brandTitle}
            </span>
            <span className="truncate text-base font-bold tracking-tight text-[#0f2e5c] leading-tight sm:text-[20px] lg:text-[22px]">
              {dict.nav.brandName}
            </span>
            <span className="text-[10px] sm:text-[11px] font-normal text-[#0f2e5c] leading-snug">
              {(dict.nav as { brandCredentials?: string }).brandCredentials}
            </span>
          </div>
        </Link>

        {/* CENTER: Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8 lg:flex-1 lg:justify-center">
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
              <div className="absolute left-0 top-full pt-3">
                <div className="flex min-w-[520px] rounded-2xl border border-gray-200 bg-white/95 py-4 shadow-xl backdrop-blur-sm">
                  {/* Left column: service categories */}
                  <div className="w-56 border-r border-gray-100 px-3">
                    <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {dict.nav.services}
                    </p>
                    <ul className="space-y-0.5">
                      {SERVICE_CATEGORIES.map((category) => {
                        if (category.id === "procedure" || category.id === "dentist") {
                          const targetPath =
                            category.items[0]?.dePath ??
                            (category.id === "procedure"
                              ? "/ablauf-zahnspange-kieferorthopaedie"
                              : "/ueber-mich");
                          return (
                            <li key={category.id}>
                              <Link
                                href={getHref(targetPath, locale)}
                                className="flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm text-left text-[#1e293b] hover:bg-gray-50 hover:text-[#0f2e5c] transition-colors"
                                onClick={() => setLeistungenOpen(false)}
                              >
                                <span>{getCategoryLabel(category.id)}</span>
                              </Link>
                            </li>
                          );
                        }

                        return (
                          <li key={category.id}>
                            <button
                              type="button"
                              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-sm text-left transition-colors ${
                                activeServiceCategory === category.id
                                  ? "bg-[#0f2e5c]/5 text-[#0f2e5c] font-semibold"
                                  : "text-[#1e293b] hover:bg-gray-50"
                              }`}
                              onMouseEnter={() => setActiveServiceCategory(category.id)}
                            >
                              <span>{getCategoryLabel(category.id)}</span>
                              {(category.id === "orthodontics" ||
                                category.id === "aesthetic" ||
                                category.id === "general") && (
                                <svg
                                  className="h-3 w-3 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Right column: links for active category */}
                  <div className="w-[360px] px-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                      {getCategoryLabel(activeServiceCategory)}
                    </p>
                    <div className="grid gap-1">
                      {SERVICE_CATEGORIES.find((c) => c.id === activeServiceCategory)?.items.map((item) => (
                        <Link
                          key={item.dePath}
                          href={getHref(item.dePath, locale)}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-[#1e293b] hover:bg-gray-50 hover:text-[#0f2e5c] transition-colors"
                        >
                          <span className="truncate">
                            {(dict.routeTitles as Record<string, string>)[item.dePath] ?? item.dePath}
                          </span>
                          <svg
                            className="ml-2 h-3 w-3 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 flex gap-2 text-xs text-gray-500">
                      <Link
                        href={getHref("/kieferorthopaedie", locale)}
                        className="hover:text-[#0f2e5c] hover:underline"
                      >
                        {nd.orthodontics}
                      </Link>
                      <span>•</span>
                      <Link href={getHref("/leistungen", locale)} className="hover:text-[#0f2e5c] hover:underline">
                        {dict.footer.generalDentistry}
                      </Link>
                    </div>
                  </div>
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
          <Link
            href={locale === "de" ? pathForEn : pathForDe}
            className="hidden lg:inline-flex items-center gap-1.5 px-2 py-1.5 rounded text-sm font-medium text-[#1e293b] hover:text-[#0f2e5c] transition-colors"
            aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
          >
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{locale === "de" ? "EN" : "DE"}</span>
          </Link>

          <a
            href="https://powerforms.at/247674"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center rounded-full border-2 border-[#0f2e5c] px-5 py-2.5 text-sm font-semibold text-[#0f2e5c] transition-colors hover:bg-[#0f2e5c]/5"
          >
            {locale === "de" ? "Gesundheitsfragebogen" : "Health Questionnaire"}
          </a>

        </div>

        {/* Mobile menu button */}
        <div className="flex shrink-0 lg:hidden items-center gap-2">
          <Link
            href={locale === "de" ? pathForEn : pathForDe}
            className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded text-sm font-medium text-[#1e293b] hover:text-[#0f2e5c] transition-colors"
            aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
          >
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{locale === "de" ? "EN" : "DE"}</span>
          </Link>
          <button
            type="button"
            className="relative z-10 inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg p-2 text-[#1e293b] hover:bg-gray-100 transition-colors touch-manipulation"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileOpen((prev) => !prev);
            }}
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
        <div className="relative z-50 lg:hidden border-t border-gray-200 bg-white overflow-y-auto max-h-[85vh]">
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
                <div className="ml-4 border-l border-gray-200 pl-3 space-y-1 py-1">
                  {SERVICE_CATEGORIES.map((category) => {
                    if (category.id === "procedure" || category.id === "dentist") {
                      const targetPath =
                        category.items[0]?.dePath ??
                        (category.id === "procedure"
                          ? "/ablauf-zahnspange-kieferorthopaedie"
                          : "/ueber-mich");
                      return (
                        <Link
                          key={category.id}
                          href={getHref(targetPath, locale)}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-[#1e293b]/90 hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {getCategoryLabel(category.id)}
                        </Link>
                      );
                    }

                    return (
                      <div key={category.id}>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[#1e293b]/90 hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                          onClick={() =>
                            setMobileActiveServiceCategory(
                              mobileActiveServiceCategory === category.id ? "orthodontics" : category.id
                            )
                          }
                          aria-expanded={mobileActiveServiceCategory === category.id}
                        >
                          <span>{getCategoryLabel(category.id)}</span>
                          <svg
                            className={`h-3 w-3 transition-transform ${
                              mobileActiveServiceCategory === category.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {mobileActiveServiceCategory === category.id && (
                          <div className="ml-3 border-l border-gray-200 pl-3 space-y-0.5 py-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.dePath}
                                href={getHref(item.dePath, locale)}
                                className="block rounded-lg px-3 py-1.5 text-sm text-[#1e293b]/80 hover:bg-[#f8f9fb] hover:text-[#0f2e5c]"
                                onClick={() => setMobileOpen(false)}
                              >
                                {(dict.routeTitles as Record<string, string>)[item.dePath] ?? item.dePath}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
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
