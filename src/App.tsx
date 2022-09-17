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
    <div className="p-5 text-center flex-col">
      <h1 className="text-2xl font-bold">Miloguide TODO app</h1>
      <div className="flex flex-col">
        <InputTodo todos={todos} setTodos={setTodos} />
      </div>
      <div>
        {tags.map((tag, index) => (
          <SectionTodo key={index} todos={todos} setTodos={setTodos} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default App;
