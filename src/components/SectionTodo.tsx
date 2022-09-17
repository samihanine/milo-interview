import { Todo } from '../interfaces/Todo';
import DisplayTodo from './DisplayTodo';
import { Tag } from '../interfaces/Tag';
import React from 'react';

interface SectionTodoInterface {
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
  tag: Tag;
}

export default function SectionTodo(props: SectionTodoInterface) {
  const setTodos = props.setTodos;
  const todos = props.todos;
  const tag = props.tag;

  const [displayCompleted, setDisplayCompleted] = React.useState<boolean>(false);

  return (
    <div style={{ backgroundColor: `${tag.color}22` }}>
      <div>
        {todos
          .filter(item => !item.isCompleted && item.tag.name === tag.name)
          .map((todo: Todo, index: number) => (
            <DisplayTodo key={index} todo={todo} index={index} setTodos={setTodos} />
          ))}
      </div>
      <button onClick={() => setDisplayCompleted((prev: boolean) => !prev)}>{displayCompleted ? 'Hide' : 'Show completed todos'}</button>
      {displayCompleted && (
        <div>
          {todos
            .filter(item => item.isCompleted && item.tag.name === tag.name)
            .map((todo: Todo, index: number) => (
              <DisplayTodo key={index} todo={todo} index={index} setTodos={setTodos} />
            ))}
        </div>
      )}
    </div>
  );
}
