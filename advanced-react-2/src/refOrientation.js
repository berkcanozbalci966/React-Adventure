import React, { Component, useRef, forwardRef } from "react";
import ReactDOM from "react-dom";

// Ref Orientation
const FancyButton = forwardRef((props, ref) => (
  <button className="FancyButton" ref={ref}>
    {props.children}
  </button>
));

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref.current);
  }

  render() {
    return (
      <div>
        <FancyButton ref={this.ref}>Click me!</FancyButton>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
