import { Todo } from '../interfaces/Todo';
import DisplayTodo from './DisplayTodo';
import { Tag } from '../interfaces/Tag';
import React from 'react';
import Button from './Button';

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
    <div className="flex-1 flex flex-col gap-5">
      <h2 className="text-xl font-bold">{tag.name}</h2>
      {todos
        .filter(item => !item.isCompleted && item.tag.name === tag.name)
        .map((todo: Todo, index: number) => (
          <DisplayTodo key={index} todo={todo} index={index} setTodos={setTodos} />
        ))}

      <Button variant="secondary" onClick={() => setDisplayCompleted((prev: boolean) => !prev)}>
        {displayCompleted ? 'Hide ᐱ' : 'Show completed todos (' + todos.filter(item => item.isCompleted && item.tag.name === tag.name).length + ') ᐯ'}
      </Button>

      {displayCompleted && (
        <>
          {todos
            .filter(item => item.isCompleted && item.tag.name === tag.name)
            .map((todo: Todo, index: number) => (
              <DisplayTodo key={index} todo={todo} index={index} setTodos={setTodos} />
            ))}
        </>
      )}
    </div>
  );
}
