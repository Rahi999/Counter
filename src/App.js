import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>ADD</button>
      <button onClick={() => setCount((count) => count - 1)}>REDUCE</button>
    </div>
  );
}
