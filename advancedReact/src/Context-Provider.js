import React from "react";
import ReactDOM from "react-dom";

// Context example

const CheckContext = React.createContext();
CheckContext.themeValue = "red";

class App extends React.Component {
  render() {
    return (
      <CheckContext.Provider value="def">
        <CheckComp />
      </CheckContext.Provider>
    );
  }
}

class CheckComp extends React.Component {
  render() {
    let value = this.context;

    return (
      <div>
        <button> Check this shit :</button>
        {value}
      </div>
    );
  }
}
CheckComp.contextType = CheckContext;

ReactDOM.render(<App />, document.getElementById("root"));
