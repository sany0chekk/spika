import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("userToken");
  const privateRoutes = ["/dashboard", "/profile", "/settings"];
  const publicRoutes = ["/login", "/sign-up"];

  const isPrivateRoute = privateRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );

  if (isPrivateRoute && !token) {
    console.log("🔒 Access Denied: No Token");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isPublicRoute && token) {
    console.log("🔙 Redirecting to /dashboard");
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/login",
    "/sign-up",
  ],
};
