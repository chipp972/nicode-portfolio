'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRightIcon } from '@/components/icons';
import { Section, SectionHeader } from '@/components/ui/section';
import type { Projects } from '@/content';
import { ProjectDrawer } from './project-drawer';

/**
 * Liste des références : une ligne par projet, façon relevé, comme le hero.
 *
 * Swiper est abandonné. Quatre entrées tiennent dans une liste verticale, et une
 * liste se navigue au clavier sans code supplémentaire, contrairement au carrousel.
 */
export function ProjectsSection({ content }: { content: Projects }) {
  /**
   * Deux états distincts : `open` pilote l'animation, `shownIndex` garde le contenu
   * affiché pendant la sortie. Sans quoi le panneau se viderait avant d'avoir fini
   * de glisser hors de l'écran.
   */
  const [open, setOpen] = useState(false);
  const [shownIndex, setShownIndex] = useState<number | null>(null);
  const t = useTranslations('projects');

  return (
    <Section id="projects">
      <SectionHeader eyebrow={content.eyebrow} title={content.title} />

      <p className="text-ink-2 -mt-8 mb-12 max-w-[62ch]">{content.intro}</p>

      <ul className="border-rule m-0 list-none border-t p-0">
        {content.items.map((project, index) => (
          <li key={project.slug}>
            <button
              type="button"
              onClick={() => {
                setShownIndex(index);
                setOpen(true);
              }}
              aria-haspopup="dialog"
              className="border-rule hover:bg-accent-soft focus-visible:bg-accent-soft grid w-full cursor-pointer grid-cols-1 items-center gap-x-8 gap-y-2 border-b px-2 py-8 text-left transition-[background-color,padding] duration-200 hover:pl-5 md:grid-cols-[7.5rem_1fr_11rem]">
              <span className="font-mono text-ink-2 text-xs">{project.period}</span>

              <span>
                <span className="font-display block text-[clamp(1.5rem,3.6vw,2.4rem)] leading-[1.1] font-medium tracking-tight">
                  {project.name}
                </span>
                <span className="text-ink-2 mt-1 block text-[0.92rem]">{project.role}</span>
                <span className="text-accent font-mono mt-2 block text-xs">{project.tagline}</span>
              </span>

              <span className="font-mono text-ink-2 flex items-center gap-2 text-xs md:justify-end">
                {project.sector}
                <ArrowRightIcon className="size-4" />
                <span className="sr-only">{t('readMore')}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ProjectDrawer
        project={shownIndex === null ? null : (content.items[shownIndex] ?? null)}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Section>
  );
}
