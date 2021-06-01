import React from "react";
import ReactDOM from "react-dom";

function tick() {
  const element = (
    <div>
      <h1>TİCK TOCK DUDE TİCK TOCK</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);
