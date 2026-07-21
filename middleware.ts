import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Exact-path spam / casino probe URLs recorded in GA.
 * Return HTTP 410 Gone — do not redirect to dental content.
 */
const GONE_PATHS = new Set([
  "/talismania-kasyno-najlepsze-online-kasyno-w-polsce-2026",
  "/my-math-check-on-the-piratepots-casino-welcome-bonus-offer",
  "/best-online-slot-machine-casinos-a-comprehensive-guide",
]);

/**
 * No locale redirects: German = root (/), English = /en.
 * Do NOT redirect based on browser language. German is always default.
 */
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.replace(/\/$/, "") || "/";

  if (GONE_PATHS.has(pathname)) {
    return new NextResponse("Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
