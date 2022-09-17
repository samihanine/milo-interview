import { Todo } from './interfaces/Todo';
import todosData from './datas/todos';
import React, { useEffect } from 'react';
import SectionTodo from './components/SectionTodo';
import InputTodo from './components/InputTodo';
import tags from './datas/tags';

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([...todosData]);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="p-8 flex flex-col bg-background min-h-screen gap-5">
      <div className="flex flex-col w-full items-center justify-center">
        <img alt="miloguide logo" width={50} height={50} src="https://pbs.twimg.com/media/Fc4UupSXkAE86fK?format=png&name=240x240" />
        <h1 className="text-2xl font-bold">Miloguide TODO App</h1>
      </div>

      <InputTodo todos={todos} setTodos={setTodos} />

      <div className="flex gap-5">
        {tags.map((tag, index) => (
          <SectionTodo key={index} todos={todos} setTodos={setTodos} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default App;
