import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "101smartauto.com";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = request.headers.get("host")?.split(":")[0] ?? url.hostname;
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isCanonicalHost = host === CANONICAL_HOST;
  const isWww = host === `www.${CANONICAL_HOST}`;
  const shouldNormalizeHost = isCanonicalHost || isWww;
  const isHttp = url.protocol === "http:" || forwardedProto === "http";

  if (!shouldNormalizeHost || (!isHttp && !isWww)) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(
    `${url.pathname}${url.search}`,
    `https://${CANONICAL_HOST}`,
  );

  return NextResponse.redirect(redirectUrl, 301);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
