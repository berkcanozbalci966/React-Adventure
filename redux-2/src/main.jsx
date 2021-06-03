import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index";
import { Provider } from "react-redux";
import Counter from "./features/counter/Counter";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
