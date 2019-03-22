import React, { Component } from "react";
import { connect } from "react-redux";
import { setFriends, deleteFriendAsync } from "../state/actionCreators";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

class FriendList extends Component {
  componentDidMount() {
    this.props.setFriends();
  }
  render() {
    return (
      <div>
        <div>
          {this.props.friends.map(friend => {
            return (
              <Friend
                key={friend.id}
                deleteFriendAsync={this.props.deleteFriendAsync}
                friend={friend}
              />
            );
          })}
        </div>
        <div>
          <FriendForm />
        </div>
      </div>
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
