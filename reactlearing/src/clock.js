import React from "react";
import ReactDOM from "react-dom";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };
//   }

//   handleClick(val) {
//     let amcikstate = this.state.counter;

//     val === "+" ? amcikstate++ : amcikstate--;
//     this.setState({
//       counter: amcikstate,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1 onClick={() => this.handleClick("-")}>-</h1>
//         <h1>{this.state.counter}</h1>
//         <h1 onClick={() => this.handleClick("+")}>+</h1>
//       </div>
//     );
//   }
// }

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  timerID = this.tick();
  componentDidMount() {
    setInterval(() => this.timerID, 1000);
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
    return <p> {this.state.date.toLocaleTimeString()} </p>;
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
