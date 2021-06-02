import React, { Component, useRef } from "react";
import ReactDOM from "react-dom";

// CREATEREF METHOD
class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput() {
    this.myRef.current.focus();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.focusInput()}>Focus Input !</button>
        <input ref={this.myRef}></input>
      </div>
    );
  }
}
// USEREF HOOK
function CustomTextInput(props) {
  const textInput = useRef(null);

  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={handleClick}>Focus the input brother</button>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focusInput();
  }

  render() {
    return (
      <div>
        <MyComponent ref={this.inputRef} />
        <br />
        <hr />
        <br />
        <CustomTextInput />
        <br />
        <hr />
        <br />
        <Parent />
      </div>
    );
  }
}

function ChildTextInput(props) {
  return (
    <div>
      <input type="text" ref={props.inputRef} />
    </div>
  );
}

// CALLBACK REF
class Parent extends Component {
  componentDidMount() {
    this.inputElement.value = "YES";
  }
  render() {
    return <ChildTextInput inputRef={(el) => (this.inputElement = el)} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
