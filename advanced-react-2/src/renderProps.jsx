import React, { Profiler, useState } from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <>
      <h1>Yes</h1>
      <p>yea</p>
      <h4>Okay brotherrrrrrr</h4>
      <hr />
      <Counter
        render={(count, increment) => (
          <MyButton count={count} incremenet={increment} />
        )}
      />
    </>
  );
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incremenet = this.incremenet.bind(this);
  }

  incremenet() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return this.props.render(this.state.count, this.incremenet);
  }
}

function MyButton(props) {
  const { count, incremenet } = props;
  return <button onClick={incremenet}> {count} clicked </button>;
}

ReactDOM.render(<App />, document.getElementById("root"));
