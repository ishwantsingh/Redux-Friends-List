import React, { Component } from "react";

class Friend extends Component {
  nameRef = React.createRef();

  render() {
    const { friend } = this.props;
    return (
      <div>
        <div>ID: {friend.id}</div>
        <div>Name:{friend.name}</div>
        <div>Age:{friend.age}</div>
        <div>Email:{friend.email}</div>
        <button onClick={() => this.props.deleteFriendAsync(friend.id)}>
          Delete Me!
        </button>
      </div>
    );
  }
}

export default Friend;
