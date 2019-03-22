import React, { Component } from "react";
import { login } from "../state/actionCreators";
import { connect } from "react-redux";

class Login extends Component {
  userRef = React.createRef();

  passRef = React.createRef();

  onLogin = () => {
    const username = this.userRef.current.value;
    const password = this.passRef.current.value;
    this.props.login({ username, password });
  };
  render() {
    return (
      <div>
        <h3>Login</h3>
        <div>
          username <input type="text" ref={this.userRef} />
        </div>
        <div>
          password <input type="text" ref={this.passRef} />
        </div>

        <button onClick={this.onLogin}>Log in</button>
        <button onClick={() => localStorage.clear()}> Log Out </button>
      </div>
    );
  }
}

export default connect(
  st => st,
  { login }
)(Login);
