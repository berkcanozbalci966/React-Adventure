import React from "react";
import ReactDOM, { render } from "react-dom";

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8];

function ListItem(props) {
  return <li>{props.value} </li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}

ReactDOM.render(
  <NumberList numbers={numberArray} />,
  document.getElementById("root")
);
