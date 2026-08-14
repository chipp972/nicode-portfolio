'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

/**
 * Bascule FR/EN en conservant le chemin courant.
 * `usePathname` de next-intl renvoie le chemin sans le préfixe de locale, donc
 * la navigation reste sur la même page.
 */
export function LocaleSwitcher() {
  const active = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('nav');

  return (
    <div className="font-mono flex items-center gap-1.5 text-xs">
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1.5">
          {index > 0 && (
            <span className="text-rule" aria-hidden>
              /
            </span>
          )}
          {locale === active ? (
            <span className="text-accent font-medium" aria-current="true">
              {locale.toUpperCase()}
            </span>
          ) : (
            <button
              type="button"
              lang={locale}
              aria-label={t('switchLanguage')}
              onClick={() => router.replace(pathname, { locale })}
              className="text-ink-2 hover:text-ink cursor-pointer transition-colors">
              {locale.toUpperCase()}
            </button>
          )}
        </span>
      ))}
    </div>
  );
}
