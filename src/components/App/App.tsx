import { useState } from "react";

import "./App.css";

import { Button, Input } from "@shared/ui";

import { TodoList, TodoPanel } from "@features/todos/ui";

function App() {
  const [count, setCount] = useState(1337);

  return (
    <>
      <h1>Github Actions</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <TodoList></TodoList>
        <TodoPanel></TodoPanel>
        <Button></Button>
        <Input></Input>
      </div>
      <p className="read-the-docs">Update code 🔆</p>
    </>
  );
}

export default App;
