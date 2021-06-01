import React, { Component } from "react";
import { MyContext } from "./Context";

class Image extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent() {
    this.props.providerProp("SecondState");
  }
  static contextType = MyContext;

  render() {
    return (
      <div onClick={this.onClickEvent}>
        Denemelerin denemesi!
        <h1>{this.context} </h1>
      </div>
    );
  }
}

export { Image };
