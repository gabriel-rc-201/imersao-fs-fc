import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const apiKey = request.cookies.get("apiKey")?.value;

  if (!apiKey && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/invoices/:path*"],
};