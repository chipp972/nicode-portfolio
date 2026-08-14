import { Section } from '@/components/ui/section';
import type { LegalPage } from '@/content';

/** Gabarit partagé par les mentions légales et les crédits. */
export function LegalArticle({ content }: { content: LegalPage }) {
  return (
    <Section>
      <article className="max-w-[68ch]">
        <h1 className="font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-light tracking-tight">
          {content.title}
        </h1>
        <p className="eyebrow mt-4">{content.updatedAt}</p>

        {content.intro && <p className="text-ink-2 mt-8 text-[1.1rem]">{content.intro}</p>}

        {content.sections.map((section) => (
          <section key={section.heading} className="border-rule mt-12 border-t pt-8">
            <h2 className="font-display text-[1.5rem] font-medium tracking-tight">
              {section.heading}
            </h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-ink-2 mt-4">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </Section>
  );
}
