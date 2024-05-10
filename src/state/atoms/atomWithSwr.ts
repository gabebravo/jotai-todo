import { Atom, atom } from 'jotai';
import { unwrap } from 'jotai/utils';

export const atomWithSwr = <T>(base: Atom<NonNullable<T>>) => {
  const unwrapped = unwrap(base, (prev) => prev);
  return atom((get) => get(unwrapped) ?? get(base));
};
