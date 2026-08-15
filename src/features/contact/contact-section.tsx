import { getTranslations } from 'next-intl/server';
import { Section, SectionHeader } from '@/components/ui/section';
import type { Contact } from '@/content';
import { BookingWidget } from './booking-widget';

export async function ContactSection({ content }: { content: Contact }) {
  const t = await getTranslations('contact');

  return (
    <Section id="contact">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} />

      <div className="border-rule grid border-t md:grid-cols-3">
        {content.methods.map((method) => (
          <a
            key={method.href}
            href={method.href}
            className="border-rule hover:bg-accent-soft block border-b px-7 py-8 no-underline transition-colors md:border-r md:last:border-r-0">
            <p className="eyebrow">{method.label}</p>
            <strong className="font-display mt-3 mb-1.5 block text-[1.3rem] font-medium tracking-tight">
              {method.value}
            </strong>
            <span className="text-ink-2 text-[0.9rem]">{method.detail}</span>
          </a>
        ))}
      </div>

      <div className="border-rule mt-12 flex flex-wrap items-center justify-between gap-6 border p-9">
        <p className="text-ink-2 m-0 max-w-[46ch]">{t('bookingIntro')}</p>
        <BookingWidget />
      </div>
    </Section>
  );
}
