import React, { Profiler, useState } from "react";
import ReactDOM from "react-dom";

class Cat extends React.Component {
  render() {
    const { x, y } = this.props.mouse;
    return (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/June_odd-eyed-cat.jpg"
        style={{
          position: "absolute",
          left: x,
          top: y,
          width: "250px",
        }}
      />
    );
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/*
          We could just swap out the <p> for a <Cat> here ... but then
          we would need to create a separate <MouseWithSomethingElse>
          component every time we need to use it, so <MouseWithCat>
          isn't really reusable yet.
        */}
        <Cat mouse={this.state} />
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </div>
    );
  }
}
ReactDOM.render(<MouseTracker />, document.getElementById("root"));
