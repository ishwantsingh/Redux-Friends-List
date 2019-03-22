import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

import FriendList from "./components/FriendList";
import Login from "./components/Login";
import Spinner from "./components/Spinner";
import Home from "./components/Home";

const StyledContainer = styled.div`
  width: 100%;
  height: 80%;
  padding: 0;
  background-color: rgb(250, 250, 250);
  margin: 0 auto;
  nav {
    background: palevioletred;
    display: flex;
    justify-content: center;
    a {
      color: white;
      font-size: 23px;
      margin: 20px 50px;
      text-decoration: none;
    }
  }
`;

export default function App() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route
          path="/friends"
          render={() =>
            localStorage.getItem("userToken") ? (
              <Spinner>
                <FriendList />
              </Spinner>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/login"
          render={() => (
            <Spinner>
              <Login />
            </Spinner>
          )}
        />
      </StyledContainer>
    </Router>
  );
}
