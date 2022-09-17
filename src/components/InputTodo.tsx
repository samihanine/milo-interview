import { Todo } from '../interfaces/Todo';
import tagsData from '../datas/tags';
import { isEmpty } from '../utils/util';

interface InputTodoInterface {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
}

export default function InputTodo(props: InputTodoInterface) {
  const setTodos = props.setTodos;
  const todos = props.todos;

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title: string = form.get('title')?.toString() || '';
    const tag: string = form.get('tag')?.toString() || '';

    if (isEmpty(title) || isEmpty(tag)) return;
    if (todos.some(item => item.title === title)) return alert('You cannot add a todo that already exists.');

    const input: HTMLInputElement | null = document.getElementById('title') as HTMLInputElement;
    if (input) input.value = '';

    setTodos((prevTodos: Todo[]) => {
      return [
        ...prevTodos,
        {
          title: title.toString(),
          isCompleted: false,
          tag: tagsData.find(item => item.name === tag.toString()) || tagsData[0],
        },
      ];
    });
  };

  return (
    <form onSubmit={addTodo}>
      <input name="title" id="title" type="text" />
      <select name="tag">
        {tagsData.map((tag, index) => (
          <option key={index} value={tag.name}>
            {tag.name}
          </option>
        ))}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
