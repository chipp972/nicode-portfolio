import { setRequestLocale } from 'next-intl/server';
import { getContent } from '@/content';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { HeroSection } from '@/features/hero/hero-section';
import { AboutSection } from '@/features/about/about-section';
import { ProjectsSection } from '@/features/projects/projects-section';
import { ContactSection } from '@/features/contact/contact-section';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const content = getContent(locale);

  return (
    <>
      <HeroSection content={content.hero} ledger={content.ledger} />
      <AboutSection content={content.about} />
      <ProjectsSection content={content.projects} />
      <ContactSection content={content.contact} />
    </>
  );
}
