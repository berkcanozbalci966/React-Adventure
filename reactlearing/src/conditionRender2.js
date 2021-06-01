import React from "react";
import ReactDOM from "react-dom";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    isLoggedIn
      ? (button = <LogoutButton onClick={this.handleLogoutClick} />)
      : (button = <LoginButton onClick={this.handleLoginClick} />);

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>LOG OUT</button>;
}
function LoginButton(props) {
  return <button onClick={props.onClick}>LOG IN</button>;
}

function Greeting(props) {
  return props.isLoggedIn ? <GreetingUser /> : <GreetingStranger />;
}

function GreetingUser() {
  return <h1>Welcome Brother</h1>;
}

function GreetingStranger() {
  return <h1>LOG IN STRANGER !!!</h1>;
}

ReactDOM.render(<LoginControl />, document.getElementById("root"));
