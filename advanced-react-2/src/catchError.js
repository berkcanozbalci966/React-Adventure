import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    try {
      asdf;
    } catch (error) {
      this.setState({ error });
    }
  }
  render() {
    if (this.state.error) {
      return <h1>Hata yakalandı.</h1>;
    }
    return <button onClick={this.handleClick}>Bana tıkla</button>;
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
