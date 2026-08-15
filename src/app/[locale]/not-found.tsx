import { getTranslations } from 'next-intl/server';
import { Section } from '@/components/ui/section';
import { ButtonLink } from '@/components/ui/button';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <Section>
      <div className="max-w-[52ch] py-16">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-5 text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-light tracking-tight">
          {t('title')}
        </h1>
        <p className="text-ink-2 mt-6">{t('description')}</p>
        <div className="mt-9">
          <ButtonLink href="/">{t('cta')}</ButtonLink>
        </div>
      </div>
    </Section>
  );
}
