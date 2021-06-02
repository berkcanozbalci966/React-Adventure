import React, { Component, useRef, forwardRef } from "react";
import ReactDOM from "react-dom";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter name="Berkcan" />
        <HoverCounter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
