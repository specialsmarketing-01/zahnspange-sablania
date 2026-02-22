"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalContactBar from "@/components/GlobalContactBar";
import Breadcrumb from "@/components/Breadcrumb";
import { getLocaleFromPathname } from "@/lib/paths";
import { dictionaries } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function LocaleShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale: Locale = getLocaleFromPathname(pathname ?? "");
  const dict = dictionaries[locale] ?? dictionaries.de;

  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : "de";
  }, [locale]);

  return (
    <>
      <Navbar locale={locale} dict={dict} />
      <Breadcrumb locale={locale} dict={dict} />
      <main className="min-h-screen">{children}</main>
      <GlobalContactBar />
      <Footer locale={locale} dict={dict} />
    </>
  );
}
