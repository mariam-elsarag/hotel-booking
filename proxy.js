import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export function proxy(request) {
  const response = intlMiddleware(request);

  return response;
}

export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
