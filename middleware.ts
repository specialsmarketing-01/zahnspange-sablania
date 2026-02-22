import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * No redirects: German = root (/), English = /en.
 * Do NOT redirect based on browser language. German is always default.
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
