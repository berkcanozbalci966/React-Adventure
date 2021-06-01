import React from "react";
import ReactDOM from "react-dom";

function Alink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("clicked.");
  }

  return (
    <div>
      <a href="#" onClick={handleClick}>
        GO PAGE
      </a>
    </div>
  );
}

ReactDOM.render(<Alink />, document.getElementById("root"));
