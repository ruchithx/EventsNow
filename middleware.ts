// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// import { withAuth } from "next-auth/middleware";

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/admin/:path*",
    "/createevent/:path*",
    "/createorganization",
    "/organization/dashboard/:path*",
    "/profile/:path*",
  ],
};

// export function middleware(request: NextRequest) {
//   // console.log(request.headers.authorization);
//   if (request.nextUrl.pathname === "/about") {
//     return NextResponse.json({ hello: "data delete success" });
//   }
// }

// export function middleware() {
//   // Add a custom middleware to the middleware stack
//   // This middleware will be executed for every request
//   NextResponse.json({ hello: "data delete success" });
//   console.log("middleware");

//   NextResponse.next();

//   // Call the next middleware in the stack
//   // next();
// }
