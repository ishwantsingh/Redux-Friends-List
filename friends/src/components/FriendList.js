import React, { Component } from "react";
import { connect } from "react-redux";
import { setFriends, deleteFriendAsync } from "../state/actionCreators";
import Friend from "./Friend";
import FriendForm from "./FriendForm";
import styled from "styled-components";

const StyledList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 80%;
  .container {
    border: 1px solid rgb(230, 230, 230);
    color: black;
    background: white;
    margin: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
  }
`;

class FriendList extends Component {
  componentDidMount() {
    this.props.setFriends();
  }
  render() {
    return (
      <StyledList>
        <div className="container">
          {this.props.friends.map(friend => {
            return (
              <Friend
                key={friend.id}
                deleteFriendAsync={this.props.deleteFriendAsync}
                friend={friend}
              />
            );
          })}

          <FriendForm />
        </div>
      </StyledList>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.FriendList.friends
  };
}
export default connect(
  mapStateToProps,
  { setFriends, deleteFriendAsync }
)(FriendList);
