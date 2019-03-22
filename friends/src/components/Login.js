import React, { Component } from "react";
import { login } from "../state/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";

const Input = styled.input`
  height: 10%;
  width: 70%;
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 3px;
  margin: 0.5em auto;
  padding: 5px;
  display: flex;
  align-self: flex-start;
`;

const LoginDiv = styled.div`
  background-color: rgb(250, 250, 250);
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InsideDiv = styled.div`
  background-color: white;
  border: 1px solid rgb(230, 230, 230);
  height: 396px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  margin: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  height: 12%;
  width: 75%;
  margin: 2em auto 0 auto;
  background: rgb(56, 151, 240);
  border: 1px solid rgb(56, 151, 240);
  border-radius: 3px;
  color: white;
  padding: 0.25em 1em;
`;

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
      <LoginDiv>
        <InsideDiv>
          <h3>Login</h3>
          <Form>
            <Input
              type="text"
              ref={this.userRef}
              placeholder="Enter Username"
            />

            <Input
              type="password"
              ref={this.passRef}
              placeholder="Enter Password"
            />

            <Button onClick={this.onLogin}>Log in</Button>
            <Button onClick={() => localStorage.clear()}> Log Out </Button>
          </Form>
        </InsideDiv>
      </LoginDiv>
    );
  }
}

export default connect(
  st => st,
  { login }
)(Login);
