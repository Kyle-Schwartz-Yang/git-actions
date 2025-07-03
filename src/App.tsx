import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1337);

  return (
    <>
      <h1>Github Actions</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 10)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Update code 👽</p>
    </>
  );
}

export default App;
