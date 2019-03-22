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

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  nav {
    margin: 40px;
    display: flex;
    justify-content: center;
    a {
      font-size: 20px;
      margin: 15px;
      text-decoration: none;
    }
  }
`;

export default function App() {
  return (
    <Router>
      <StyledContainer>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/login">Login</Link>
          </nav>
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
        </div>
      </StyledContainer>
    </Router>
  );
}
