//Sangam added

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/onboard",
  "/membership",
  "/jobs",
  "/account",
  "/feed",
]); //add all other protected routes here ex. activity, membership, account, companies, feed etc

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

//Sangam added
