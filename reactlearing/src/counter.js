import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment() {
    console.log("WORKS");
    let counter2 = this.state.counter;
    counter2++;
    this.setState({ counter: counter2 });
  }

  decremenet() {
    let counter2 = this.state.counter;
    this.setState({
      counter: --counter2,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.decremenet()}>-</button>
        <h1>{this.state.counter} </h1>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }
}

function Button(props) {
  return <button> {props.sign} </button>;
}

ReactDOM.render(<Counter />, document.getElementById("root"));
