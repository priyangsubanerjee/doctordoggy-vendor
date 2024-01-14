import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getToken({ req: req, secret: process.env.SECRET_SALT });
  console.log(session);
  if (
    req.nextUrl.pathname === "/login" ||
    req.nextUrl.pathname === "/register" ||
    req.nextUrl.pathname === "/"
  ) {
    if (session) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    } else {
      if (session?.needPassReset) {
        return NextResponse.redirect(new URL("/password/reset", req.url));
      } else {
        return NextResponse.next();
      }
    }
  } else if (req.nextUrl.pathname === "/password/reset") {
    if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    if (session) {
      if (session?.needPassReset) {
        return NextResponse.redirect(new URL("/password/reset", req.url));
      } else {
        return NextResponse.next();
      }
    } else {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: [
    "/",
    "/login/:path*",
    "/register/:path*",
    "/dashboard/:path*",
    "/password/:path*",
  ],
};
