import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1337);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Update code 👽</p>
    </>
  );
}

export default App;
