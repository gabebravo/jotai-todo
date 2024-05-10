import { atom } from 'jotai';
import { atomWithSwr } from '../atoms/atomWithSwr';
import { fetchTodos } from './../../data/todos';
import { Todo } from '../../types';

export const fetchTodosState = atomWithSwr(
  atom<Promise<Todo[]>>(async () => {
    return await fetchTodos();
  }),
);
