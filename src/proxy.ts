import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

/**
 * Anciennes URLs du site Gatsby, monolingue et sans préfixe de locale.
 *
 * Ces redirections vivent ici plutôt que dans `netlify.toml` : sur Netlify, les
 * edge functions s'exécutent avant les règles de redirection, donc le proxy
 * next-intl interceptait `/terms` et le réécrivait en `/fr/terms` avant que la
 * redirection déclarée n'ait pu s'appliquer.
 */
const LEGACY_REDIRECTS: Record<string, string> = {
  '/terms': '/fr/mentions-legales',
  '/credits': '/fr/credits',
};

// Convention Next 16 : `proxy.ts` remplace `middleware.ts`.
export default function proxy(request: NextRequest) {
  const target = LEGACY_REDIRECTS[request.nextUrl.pathname];

  if (target) {
    return NextResponse.redirect(new URL(target, request.url), 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Tout sauf les routes internes Next, les fichiers statiques et les fichiers avec extension.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
