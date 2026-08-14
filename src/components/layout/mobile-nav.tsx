'use client';

import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CloseIcon, MenuIcon } from '@/components/icons';
import { useDialogBehavior } from '@/hooks/use-dialog-behavior';
import { useExitTransition } from '@/hooks/use-exit-transition';

const EXIT_MS = 200;

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const mounted = useExitTransition(open, EXIT_MS);

  const close = useCallback(() => setOpen(false), []);
  // `mounted` et non `open` : voir ProjectDrawer, le focus doit viser un élément monté.
  const panelRef = useDialogBehavior<HTMLDivElement>(mounted, close);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t('openMenu')}
        aria-expanded={open}
        className="text-ink cursor-pointer md:hidden">
        <MenuIcon className="size-6" />
      </button>

      {mounted && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('openMenu')}
          tabIndex={-1}
          style={{ transitionDuration: `${EXIT_MS}ms` }}
          className={`bg-paper starting:opacity-0 fixed inset-0 z-100 transition-opacity motion-reduce:transition-none md:hidden ${
            open ? 'opacity-100' : 'opacity-0'
          }`}>
          <div className="flex h-full flex-col p-8">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={close}
                aria-label={t('closeMenu')}
                className="border-rule text-ink grid size-11 cursor-pointer place-items-center rounded-full border">
                <CloseIcon className="size-4" />
              </button>
            </div>

            <nav className="mt-12">
              <ul className="m-0 list-none space-y-2 p-0">
                {links.map((link) => (
                  <li key={link.href} className="border-rule border-b">
                    <a
                      href={link.href}
                      onClick={close}
                      className="font-display block py-5 text-3xl font-light tracking-tight no-underline">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
