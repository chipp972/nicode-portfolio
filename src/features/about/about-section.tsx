import { Section, SectionHeader } from '@/components/ui/section';
import type { About } from '@/content';

/**
 * Le portrait n'est pas encore fourni : DatoCMS le servait, il n'est pas dans le
 * dépôt. En attendant, un cadre neutre porte le texte alternatif prévu, ce qui
 * évite de casser la mise en page et documente le manque.
 */
export function AboutSection({ content }: { content: About }) {
  return (
    <Section id="about">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} />

      <div className="grid items-start gap-[clamp(2rem,5vw,4.5rem)] lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          {content.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={`mb-5 max-w-[62ch] ${index === 0 ? 'text-[1.18rem] leading-[1.5]' : 'text-ink-2'}`}>
              {paragraph}
            </p>
          ))}

          <p className="border-accent text-ink-2 mt-8 border-l-2 py-1 pl-5 text-[0.95rem]">
            {content.note}
          </p>
        </div>

        <div
          className="from-paper-2 to-accent-soft border-rule text-ink-2 font-mono grid aspect-4/5 place-items-center border bg-linear-160 p-4 text-center text-xs"
          role="img"
          aria-label={content.portraitAlt}>
          {content.portraitAlt}
        </div>
      </div>

      <div className="border-rule mt-14 grid border-t md:grid-cols-3">
        {content.services.map((service) => (
          <div
            key={service.index}
            className="border-rule border-b px-7 py-8 md:border-r md:last:border-r-0">
            <p className="eyebrow">
              {service.index} — {service.label}
            </p>
            <h3 className="font-display mt-4 mb-3 text-[1.35rem] font-medium tracking-tight">
              {service.title}
            </h3>
            <p className="text-ink-2 m-0 text-[0.95rem]">{service.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
