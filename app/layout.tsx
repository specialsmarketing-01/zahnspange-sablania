// =============================================================================
// CRITICAL LAYOUT - DO NOT BREAK
// =============================================================================
// 1. The line below MUST stay: it loads all global and Tailwind styles.
//    Removing it will break the entire site's CSS.
// 2. Keep <html><body><LocaleShell>{children}</LocaleShell></body></html>.
//    LocaleShell provides Navbar, Footer, Breadcrumb; removing it breaks the app.
// 3. Keep the body className (font-sans, min-h-screen, bg-white, text-primary).
// =============================================================================

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { getMetadataBase } from "@/lib/site";
import LocaleShell from "@/components/LocaleShell";

const GA_MEASUREMENT_ID = "G-MXDRDTJFB3";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Zahnspange Sablania | Kieferorthopädie & Zahnspangen Wien",
    template: "%s | Zahnspange Sablania",
  },
  description:
    "Ihre Spezialisten für moderne Zahnspangen in Wien. Individuelle Beratung, moderne Technik und perfekte Ergebnisse.",
  icons: {
    icon: "/Dr-Manish-fav.png",
    apple: "/Dr-Manish-fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className="font-sans antialiased min-h-screen bg-white text-primary overflow-x-hidden"
        suppressHydrationWarning
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <LocaleShell>{children}</LocaleShell>
      </body>
    </html>
  );
}
