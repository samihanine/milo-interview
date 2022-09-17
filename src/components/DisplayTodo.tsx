import { Todo } from '../interfaces/Todo';
import React from 'react';
import DisplayTag from './DisplayTag';

interface DisplayTodoInterface {
  todo: Todo;
  index?: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function DisplayTodo(props: DisplayTodoInterface) {
  const todo: Todo = props.todo;
  const setTodos: React.Dispatch<React.SetStateAction<Todo[]>> = props.setTodos;

  const updateTodo = () => {
    setTodos((prevTodos: Todo[]) => {
      return prevTodos.map((item: Todo) => {
        if (todo.title === item.title) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return item;
      });
    });
  };

  const deleteTodo = () => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((item: Todo) => todo.title !== item.title));
  };

  return (
    <div>
      <strong>{todo.title}</strong>
      <input type="checkbox" checked={todo.isCompleted} onChange={updateTodo} />
      <DisplayTag tag={todo.tag} />
      <span onClick={deleteTodo}>x</span>
    </div>
  );
}
