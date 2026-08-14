import { describe, expect, it } from 'vitest';
import fr from '../messages/fr.json';
import en from '../messages/en.json';

/** Aplatit un objet de messages en chemins pointés : { a: { b: 1 } } -> ['a.b']. */
function flattenKeys(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return [prefix];
  }

  return Object.entries(value as Record<string, unknown>).flatMap(([key, child]) =>
    flattenKeys(child, prefix ? `${prefix}.${key}` : key),
  );
}

describe('messages', () => {
  const frKeys = flattenKeys(fr).sort();
  const enKeys = flattenKeys(en).sort();

  it('expose exactement les mêmes clés en français et en anglais', () => {
    expect(enKeys).toEqual(frKeys);
  });

  it('ne contient aucune valeur vide', () => {
    for (const [locale, messages] of [
      ['fr', fr],
      ['en', en],
    ] as const) {
      const empty = Object.entries(messages).flatMap(([namespace, group]) =>
        Object.entries(group as Record<string, string>)
          .filter(([, text]) => text.trim() === '')
          .map(([key]) => `${locale}: ${namespace}.${key}`),
      );

      expect(empty).toEqual([]);
    }
  });
});
