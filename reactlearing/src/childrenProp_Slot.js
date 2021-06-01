import React from "react";
import ReactDOM from "react-dom";

function UlComponent(props) {
  return <ul>{props.children}</ul>;
}

class App extends React.Component {
  render() {
    return (
      <div>
        <UlComponent>
          <li>Abow</li>
          <li>Fiş</li>
          <li>Vış</li>
          <li>Babuş</li>
        </UlComponent>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
