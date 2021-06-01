import React from "react";
import ReactDOM from "react-dom";

// Functions and class
function Wellcome(props) {
  return <h1>Hello {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Wellcome name="Berkcan" />
      <Wellcome name="Ali" />
      <Wellcome name="Veli" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
