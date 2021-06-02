import React, { Component } from "react";
import UpdatedComponent from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name}
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 5);
