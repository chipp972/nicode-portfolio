import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/section';
import { ButtonLink } from '@/components/ui/button';
import type { Hero, LedgerEntry } from '@/content';

/**
 * Le hero et son relevé de parcours.
 *
 * La signature de la direction éditoriale : trois lignes datées, lues comme un
 * registre. Pas d'illustration, pas de logos flottants, pas de carrousel.
 * Entièrement en Server Component, aucun JS envoyé au navigateur.
 */
export async function HeroSection({ content, ledger }: { content: Hero; ledger: LedgerEntry[] }) {
  const t = await getTranslations('hero');

  return (
    <section className="border-rule border-b pt-[clamp(4rem,11vw,9rem)] pb-[clamp(3rem,6vw,5rem)]">
      <Container>
        <p className="eyebrow">{content.eyebrow}</p>

        <h1 className="font-display mt-6 max-w-[16ch] text-[clamp(2.6rem,7.4vw,5.6rem)] leading-[1.02] font-light tracking-[-0.035em]">
          {content.titleLead}{' '}
          <em className="text-accent font-medium italic">{content.titleAccent}</em>
        </h1>

        <p className="text-ink-2 mt-7 max-w-[56ch] text-[clamp(1.05rem,1.7vw,1.25rem)]">
          {content.lede}
        </p>

        <div className="mt-10 flex flex-wrap gap-3.5">
          <ButtonLink href="#projects">{t('ctaProjects')}</ButtonLink>
          <ButtonLink href="#contact" variant="ghost">
            {t('ctaContact')}
          </ButtonLink>
        </div>

        <p className="font-mono text-ink-2 mt-9 flex items-center gap-2.5 text-xs">
          <span
            className="bg-positive size-[7px] shrink-0 rounded-full ring-4 ring-[color-mix(in_srgb,var(--positive)_20%,transparent)]"
            aria-hidden
          />
          {content.availability}
        </p>

        <dl className="border-rule mt-[clamp(3rem,6vw,4.5rem)] border-t">
          {ledger.map((entry) => (
            <div
              key={entry.who}
              className="border-rule grid grid-cols-[4.5rem_1fr] items-baseline gap-x-6 gap-y-1 border-b py-4 sm:grid-cols-[5.5rem_1fr_auto]">
              <dt className="font-mono text-ink-2 text-xs">{entry.period}</dt>
              <dd className="font-display col-start-2 m-0 text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium tracking-tight">
                {entry.what}
              </dd>
              <dd className="font-mono text-ink-2 col-start-2 m-0 text-xs sm:col-start-3 sm:text-right">
                {entry.who}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
