import React from "react";
import ReactDOM from "react-dom";

// VERDICT COMPONENT
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Su kaynar. </p>;
  }
  return <p>Su kaynamaz. </p>;
}

// CONVERTER CALLBACK FUNCTIONS
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// MAIN CONVERTER METHOD
function converterMethod(temperature, convert) {
  const input = parseFloat(temperature);
  if (isNaN(input)) return "";

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// MAIN COMPONENT
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
    this.handleCelsius = this.handleCelsius.bind(this);
    this.handleFahrenheit = this.handleFahrenheit.bind(this);
  }

  handleCelsius(temperature) {
    this.setState({ temperature, scale: "c" });
  }
  handleFahrenheit(temperature) {
    this.setState({ temperature, scale: "f" });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.state.scale;
    const celsius =
      scale === "f" ? converterMethod(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? converterMethod(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          temperature={celsius}
          scale={"c"}
          temperatureChange={this.handleCelsius}
        />
        <TemperatureInput
          temperature={fahrenheit}
          scale={"f"}
          temperatureChange={this.handleFahrenheit}
        />
        <BoilingVerdict celsius={celsius} />
      </div>
    );
  }
}

// INPUT COMPONENT
function TemperatureInput(props) {
  function changeHandler(e) {
    props.temperatureChange(e.target.value);
  }

  const scale = props.scale;
  const type = scale === "c" ? "Santigrat" : "Fahrenayt";

  return (
    <fieldset>
      <legend>{type} cinsinden sıcaklık girin:</legend>
      <input value={props.temperature} onChange={changeHandler} type="text" />
    </fieldset>
  );
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
