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
    <div className={`bg-white p-5 rounded-lg flex justify-between ${todo.isCompleted ? 'opacity-70' : ''}`}>
      <div className="flex flex-col gap-2">
        <DisplayTag tag={todo.tag} />
        <strong className={`text-lg ${todo.isCompleted ? 'line-through text-secondary' : ''}`}>{todo.title}</strong>
      </div>

      <div className="flex flex-col justify-between">
        <input className="scale-150" type="checkbox" checked={todo.isCompleted} onChange={updateTodo} />
        <span className="self-center w-full text-primary font-bold cursor-pointer" onClick={deleteTodo}>
          x
        </span>
      </div>
    </div>
  );
}
