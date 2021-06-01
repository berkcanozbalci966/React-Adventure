import React from "react";
import ReactDOM from "react-dom";

function LeftSide(props) {
  return (
    <div>
      <h2>Bu Sol TARAF</h2>
    </div>
  );
}

function RightSide(props) {
  return (
    <div>
      <h2>Bu Sağ TARAF</h2>
    </div>
  );
}

function Menu(props) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ marginRight: "5px" }} className="leftSide">
        {props.leftSide}
      </div>
      <div className="rightSide">{props.rightSide}</div>
    </div>
  );
}

class App extends React.Component {
  render() {
    return <Menu leftSide={<LeftSide />} rightSide={<RightSide />} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
