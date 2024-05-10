import { atom } from 'jotai';
import { Todo } from '../../types';

export const todosAtom = atom<null | Todo[]>(null);
