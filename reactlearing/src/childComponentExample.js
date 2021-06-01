import React from "react";
import ReactDOM from "react-dom";
import "./fancy.css";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { travellerName: "" };
    this.nameHandler = this.nameHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  nameHandler(e) {
    this.setState({ travellerName: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    alert(`OKAY YOU will go to MARS BROTHER ${this.state.travellerName}! `);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <FancyBorder
            color="blue"
            message="Dünyadan marsa keşif için birilerini göndereceğiz, başvuru yapmak ister misin?"
            title="Mars Programı"
          >
            <input type="text" onChange={this.nameHandler} />

            <button type="submit" onClick={this.submitHandler}>
              Başvur!
            </button>
          </FancyBorder>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
