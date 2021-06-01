import React from "react";
import ReactDOM from "react-dom";

// function Counter() {
//   const count = 0;

//   return <div>{count && <h1>Messages : {count} </h1>}</div>;
// }

// ReactDOM.render(<Counter />, document.getElementById("root"));

function WarningBanner(props) {
  if (!props.warn) return null;

  return <div className="warning">bu konuda seni uyarıyorum goçum</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>Toggle Warning!</button>
      </div>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));
