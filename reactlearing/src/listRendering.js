import React from "react";
import ReactDOM from "react-dom";

const arr = [1, 2, 3, 4, 5];

function NumberList(props) {
  const numberList = props.numbers;
  const numberItems = numberList.map((number, index) => (
    <li key={index.toString()}> {number} </li>
  ));
  return <ul>{numberItems}</ul>;
}

ReactDOM.render(<NumberList numbers={arr} />, document.getElementById("root"));
