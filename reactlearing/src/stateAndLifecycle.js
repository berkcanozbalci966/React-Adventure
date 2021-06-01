import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <p>{this.state.date.toLocaleTimeString()}</p>;
  }
}

function App() {
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

setInterval(App, 1000);
