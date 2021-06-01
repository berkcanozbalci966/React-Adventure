import React from "react";
import ReactDOM from "react-dom";
import { Image } from "./image";
import { MyContext } from "./Context";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider: "First State",
    };
    this.setProvider = this.setProvider.bind(this);
    this.contextValueObj = {
      val: "yether",
      setVal: (input = "yes") => {
        this.contextValueObj.val = input;
      },
    };
  }

  setProvider(val) {
    this.setState({ provider: val });
  }

  render() {
    return (
      <div className="app">
        <MyContext.Provider value={this.state.provider}>
          <Image providerProp={this.setProvider} />
          <MyContext.Consumer>
            {(value) => console.log(value)}
          </MyContext.Consumer>
        </MyContext.Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
