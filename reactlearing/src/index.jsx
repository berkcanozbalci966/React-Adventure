import React from "react";
import ReactDOM from "react-dom";

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Salatalık" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(`Seçtiğin Sebze : ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Ispanak">Ispanak</option>
            <option value="Domates">Domates</option>
            <option value="Salatalık">Salatalık</option>
            <option value="Havuç">Havuç</option>
          </select>

          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<FlavorForm />, document.getElementById("root"));
