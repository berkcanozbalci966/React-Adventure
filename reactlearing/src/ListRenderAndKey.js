import React from "react";
import ReactDOM from "react-dom";

const numberArray = [
  { id: 0, val: 1 },
  { id: 1, val: 2 },
  { id: 2, val: 3 },
  { id: 3, val: 4 },
  { id: 4, val: 5 },
];

function NumberList(props) {
  const numbers = props.numberArray;

  return (
    <div>
      {numbers.map((number) => (
        <Post value={number.val} valueTwo={number.id} key={number.id} />
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <li>
      <span>
        {props.value} ~ {props.valueTwo}
      </span>
    </li>
  );
}

ReactDOM.render(
  <NumberList numberArray={numberArray} />,
  document.getElementById("root")
);
