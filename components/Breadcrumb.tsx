"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { EN_TO_DE, getHref } from "@/lib/paths";

export default function Breadcrumb({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? "";
  const homeHref = getHref("/", locale);

  const isHome = pathname === "/" || pathname === "/en" || pathname === "";
  if (isHome) return null;

  const pathForTitle = locale === "de" ? pathname : (EN_TO_DE[pathname] ?? pathname);
  const currentLabel = dict.routeTitles[pathForTitle] ?? pathname;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-primary/10 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <Link href={homeHref} className="hover:text-accent transition-colors">
              {dict.breadcrumb.home}
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary/40" aria-hidden>
              /
            </span>
            <span className="font-medium text-primary" aria-current="page">
              {currentLabel}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
