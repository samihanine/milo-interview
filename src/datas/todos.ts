import tags from './tags';
import { Todo } from '../interfaces/Todo';
import { getStorage } from '../utils/util';

const todos: Todo[] = getStorage('todos') || [
  {
    title: 'Apprendre Vue.js',
    isCompleted: false,
    tag: tags[2],
  },
  {
    title: 'Faire mes exercices de chimie',
    isCompleted: true,
    tag: tags[2],
  },
  {
    title: 'Trouver un travail à temps partiel',
    isCompleted: true,
    tag: tags[0],
  },
  {
    title: 'Apprendre Capacitor',
    isCompleted: false,
    tag: tags[0],
  },
  {
    title: 'Nourrir mon hamster',
    isCompleted: false,
    tag: tags[1],
  },
  {
    title: 'Nourrir mon chat',
    isCompleted: false,
    tag: tags[1],
  },
  {
    title: 'Regarder la fin de Westworld',
    isCompleted: true,
    tag: tags[1],
  },
];

export default todos;
