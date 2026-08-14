import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('nav');

  return (
    <main className="mx-auto w-[min(1240px,100%-3rem)] py-24">
      <p className="eyebrow">Socle technique — phase 1</p>
      <h1 className="mt-6 max-w-[16ch] font-display text-6xl leading-none font-light tracking-tight">
        Reprenez le contrôle de votre front-end,{' '}
        <em className="text-accent">sans tout réécrire.</em>
      </h1>
      <p className="mt-8 text-ink-2">
        {t('about')} · {t('projects')} · {t('contact')} — locale active : {locale}
      </p>
    </main>
  );
}
