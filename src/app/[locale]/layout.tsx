import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { getContent } from '@/content';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/seo/json-ld';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-fraunces',
  display: 'swap',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL('https://nicode.fr'),
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      // Next 16 n'émet pas la clé `x-default`, quelle que soit la façon de la déclarer.
      // Les deux locales étant explicitement listées, l'absence reste sans effet notable.
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `/${locale}`,
      siteName: 'Nicode',
      locale: locale === 'fr' ? 'fr_FR' : 'en_GB',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const t = await getTranslations('nav');
  const content = getContent(locale);

  return (
    <html
      lang={locale}
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans text-[17px] leading-relaxed">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="bg-accent sr-only rounded-[2px] px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100">
            {t('skipToContent')}
          </a>

          <JsonLd content={content} locale={locale} />
          <Header locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} social={content.social} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
