// import { clerkMiddleware } from "@clerk/nextjs/server";

// We're disabling authentication for the redesign preview.
// Uncomment the line below and add real keys to .env.local to enable Clerk.
// export default clerkMiddleware();

export default function middleware() {
  return;
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
