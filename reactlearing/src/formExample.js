import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`A name was submitted : ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>State : {this.state.value} </h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("root"));
