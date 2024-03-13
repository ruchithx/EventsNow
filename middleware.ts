// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// import { withAuth } from "next-auth/middleware";

export { default } from "next-auth/middleware";

// import { withAuth } from "next-auth/middleware";

// export const adminMinndleWare = withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log("about page");
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// );

// export const config = { matcher: ["/about", "/auth/signup"] };

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req: NextRequest) {
//     if (req.nextUrl.pathname === "/about") {
//       console.log("middleware");
//     }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => token?.role === "admin",
//     },
//   }
// );

// import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
// export { default } from "next-auth/middleware";

// const nextAuthMiddleware = withAuth({
//   pages: {
//     signIn: "/login",
//   },
// });

// export async function middleware(
//   request: NextRequestWithAuth,
//   event: NextFetchEvent
// ) {
// if (request.nextUrl.pathname === "/about") {
//   console.log("middleware");
// }

//   await nextAuthMiddleware(request, event);
// }

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
