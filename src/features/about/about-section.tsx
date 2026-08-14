import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui/section';
import portrait from '@/assets/images/portrait.jpg';
import type { About } from '@/content';

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

        {/*
          Import statique plutôt qu'un chemin dans public/ : Next dérive les
          dimensions, génère les variantes AVIF et WebP, le hash de cache et le
          placeholder flou. L'image est sous la ligne de flottaison, donc pas de
          `priority` qui viendrait concurrencer le LCP du hero.
        */}
        <Image
          src={portrait}
          alt={content.portraitAlt}
          sizes="(min-width: 1024px) 34vw, 100vw"
          placeholder="blur"
          className="border-rule aspect-4/5 w-full border object-cover"
        />
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
