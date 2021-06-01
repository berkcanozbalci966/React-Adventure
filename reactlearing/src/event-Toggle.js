import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, e) {
    e.target.textContent = "ABOW";
    console.log("event:", e.target);
    console.log("id", id);
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  }

  render() {
    const id = 0;
    return (
      <div>
        <p> {String(this.state.isToggleOn)} </p>
        <button onClick={this.handleClick.bind(this, id)}>Toggle BTN</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("root"));
