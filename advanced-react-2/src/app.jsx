import React, { Component } from "react";
import ReactDOM from "react-dom";

function logErrorToMyService(error, errorInfo) {
  console.log("Gardaşım eror var : ", error, errorInfo);
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Custom Error Handler!
    logErrorToMyService(error, errorInfo);
  }

  render() {
    return this.state.hasError ? <div>Eror var</div> : this.props.children;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bakalım var mı yoh mu?</h1>
        <ErrorBoundary>
          <NoError />
        </ErrorBoundary>
      </div>
    );
  }
}

const NoError = () => {
  return <h3>Error Yok çalışıyom bak !</h3>;
};

ReactDOM.render(<App />, document.getElementById("root"));
