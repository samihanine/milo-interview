import tags from './tags';
import { Todo } from '../interfaces/Todo';
import { getStorage } from '../utils/util';

let todos: Todo[] = [
  {
    title: 'Work',
    isCompleted: false,
    tag: tags[0],
  },
];

todos = getStorage('todos') || todos;

export default todos;
