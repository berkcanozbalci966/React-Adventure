import React from "react";
import ReactDOM from "react-dom";

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Bu kısma bir şeyler yazınız",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("Girilen değer : " + this.state.value);
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.value}
        <label>
          Essay
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>

        <button type="submit">GÖNDER</button>
      </form>
    );
  }
}

ReactDOM.render(<EssayForm />, document.getElementById("root"));
