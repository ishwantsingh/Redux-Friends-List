import React, { Component } from "react";
import styled from "styled-components";

const StyledFriend = styled.div`
  height: 80%;
  font-size: 15px;
  font-style: italic;
  .container {
    padding: 20px;
    width: 100%;
    border: 1px solid rgb(230, 230, 230);
    color: black;
    background: white;
    margin: 0 auto;
  }
  .container-2 {
    text-align: left;
  }
  .container-3 {
    text-align: right;
  }
  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
const Button = styled.button`
  height: 12%;
  width: 20%;
  background: rgb(56, 151, 240);
  border: 1px solid rgb(56, 151, 240);
  border-radius: 3px;
  color: white;
  padding: 0.25em 1em;
`;

class Friend extends Component {
  nameRef = React.createRef();

  render() {
    const { friend } = this.props;
    return (
      <StyledFriend>
        <div className="container">
          <div className="container-2">
            <div>
              <span>ID: </span>
              {friend.id}
            </div>
            <div>
              <span>Name: </span>
              {friend.name}
            </div>
            <div>
              <span>Age: </span>
              {friend.age}
            </div>
            <div>
              <span>Email: </span>
              {friend.email}
            </div>
          </div>
          <div className="container-3">
            <Button onClick={() => this.props.deleteFriendAsync(friend.id)}>
              Delete Me!
            </Button>
          </div>
        </div>
      </StyledFriend>
    );
  }
}

export default Friend;
