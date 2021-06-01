import React from "react";
import ReactDOM from "react-dom";

function GreetingUser(props) {
  return <h1>Wellcome brother.</h1>;
}

function GreetingStranger(props) {
  return <h1>Please go login stranger!</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <GreetingUser /> : <GreetingStranger />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById("root")
);
