import React, { Profiler, useEffect, useState } from "react";
import ReactDOM from "react-dom";

function Hook1() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState({ text: "Learn Hooks" });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function changeHandler(e) {
    setFruit(e.target.value);
  }

  return (
    <div>
      <p>You clicked {count}</p>
      <button onClick={() => setCount(count + 1)}> Click</button>
      <hr />

      <div>
        <p>{fruit}</p>
        <input onChange={(e) => setFruit(e.target.value)} type="text" />
      </div>
    </div>
  );
}

ReactDOM.render(<Hook1 />, document.getElementById("root"));
