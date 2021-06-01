import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { add } from "./math";

const OtherComponent = lazy(() => import("./otherComponent"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> {add(1, 5)} </h1>;
        <Suspense fallback={<div>Yükleniyor .....</div>}>
          <OtherComponent />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
