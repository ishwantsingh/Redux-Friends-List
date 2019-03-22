import React, { Component } from "react";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 80%;
  .container {
    border: 1px solid rgb(230, 230, 230);
    color: black;
    background: white;
    padding: 0.25em 1em;
    border-radius: 8px;
    width: 50%;
    margin: auto;
    height: 40%;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    text-align: center;
    font-size: 25px;
  }
  p {
    padding: 20px;
    fontsize: 19px;
  }
`;

export default class Home extends Component {
  render() {
    return (
      <StyledHome>
        <div className="container">
          <h1>Welcome to the Friends Web App!</h1>

          <p>
            Head over to the Login Page to Login to get authenticated and access
            your Friends List where you can add, delete, update your list by
            making Axios calls to the server.
          </p>
        </div>
      </StyledHome>
    );
  }
}
