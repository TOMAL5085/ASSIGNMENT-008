import { NextResponse } from "next/server";

async function getSession(request) {
  const sessionResponse = await fetch(
    new URL("/api/auth/get-session", request.url),
    {
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
      cache: "no-store",
    }
  );

  if (!sessionResponse.ok) {
    return null;
  }

  const payload = await sessionResponse.json().catch(() => null);
  return payload?.data ?? null;
}

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = pathname === "/login" || pathname === "/register";
  const isProtectedRoute =
    pathname === "/my-profile" ||
    pathname.startsWith("/my-profile/") ||
    pathname === "/tile" ||
    pathname.startsWith("/tile/");

  if (!isAuthRoute && !isProtectedRoute) {
    return NextResponse.next();
  }

  const session = await getSession(request);

  if (!session && isProtectedRoute) {
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (session && isAuthRoute) {
    return NextResponse.redirect(new URL("/my-profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/my-profile/:path*", "/tile/:path*"],
};
