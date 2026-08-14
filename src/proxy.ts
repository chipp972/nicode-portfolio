import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Convention Next 16 : `proxy.ts` remplace `middleware.ts`.
// next-intl négocie la locale et redirige `/` vers `/fr`.
export default createMiddleware(routing);

export const config = {
  // Tout sauf les routes internes Next, les fichiers statiques et les fichiers avec extension.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
