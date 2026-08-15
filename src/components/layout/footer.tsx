import { getTranslations } from 'next-intl/server';
import { SOCIAL_ICONS } from '@/components/icons';
import { Container } from '@/components/ui/section';
import type { SocialProfile } from '@/content';

export async function Footer({ locale, social }: { locale: string; social: SocialProfile[] }) {
  const t = await getTranslations('footer');

  return (
    <footer className="border-rule text-ink-2 border-t py-12 text-[0.88rem]">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <p className="m-0">© 2026 Nicode — Nicolas Pierre-Charles</p>

        <ul className="m-0 flex list-none flex-wrap items-center gap-5 p-0">
          {social.map((profile) => {
            const Icon = SOCIAL_ICONS[profile.id];

            return (
              <li key={profile.id}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-accent flex items-center gap-2 no-underline transition-colors">
                  <Icon className="size-4" />
                  {profile.label}
                </a>
              </li>
            );
          })}

          <li>
            <a href={`/${locale}/mentions-legales`} className="hover:text-accent no-underline">
              {t('legal')}
            </a>
          </li>
          <li>
            <a href={`/${locale}/credits`} className="hover:text-accent no-underline">
              {t('credits')}
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
