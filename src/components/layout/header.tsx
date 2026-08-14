import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/ui/section';
import { LocaleSwitcher } from './locale-switcher';
import { MobileNav } from './mobile-nav';

export async function Header({ locale }: { locale: string }) {
  const t = await getTranslations('nav');

  const links = [
    { href: `/${locale}#about`, label: t('about') },
    { href: `/${locale}#projects`, label: t('projects') },
    { href: `/${locale}#contact`, label: t('contact') },
  ];

  return (
    <header className="border-rule bg-paper/90 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-17 items-center justify-between gap-8">
        <a
          href={`/${locale}`}
          className="font-display text-[1.35rem] font-bold tracking-tight no-underline">
          nicode<span className="text-accent">.</span>
        </a>

        <nav aria-label={t('projects')} className="hidden md:block">
          <ul className="m-0 flex list-none gap-7 p-0">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink-2 hover:text-ink text-[0.94rem] no-underline transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <LocaleSwitcher />
          <MobileNav links={links} />
        </div>
      </Container>
    </header>
  );
}
