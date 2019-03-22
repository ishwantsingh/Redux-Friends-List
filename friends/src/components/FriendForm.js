import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriendAsync, updateFriendAsync } from "../state/actionCreators";

class FriendForm extends Component {
  nameRef = React.createRef();
  ageRef = React.createRef();
  emailRef = React.createRef();
  idRef = React.createRef();

  onUpdateFriend = () => {
    const updatedFriend = {
      id: parseInt(this.idRef.current.value),
      name: this.nameRef.current.value,
      age: parseInt(this.ageRef.current.value),
      email: this.emailRef.current.value
    };
    this.props.updateFriendAsync(updatedFriend);

    this.idRef.current.value = "";
    this.nameRef.current.value = "";
    this.ageRef.current.value = "";
    this.emailRef.current.value = "";
  };

  onAddFriend = () => {
    const newFriend = {
      id: this.props.id,
      name: this.nameRef.current.value,
      age: parseInt(this.ageRef.current.value),
      email: this.emailRef.current.value
    };
    this.props.addFriendAsync(newFriend);

    this.nameRef.current.value = "";
    this.ageRef.current.value = "";
    this.emailRef.current.value = "";
  };
  render() {
    return (
      <div>
        <div>
          <input ref={this.idRef} type="number" placeholder="enter id" />
          <input ref={this.nameRef} type="text" placeholder="enter name" />
          <input ref={this.ageRef} type="number" placeholder="enter age" />
          <input ref={this.emailRef} type="text" placeholder="enter email" />
        </div>
        <div>
          <button onClick={this.onAddFriend}>Add Friend</button>
          <button onClick={this.onUpdateFriend}>Update Friend</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    id: state.FriendList.friends.length + 1
  };
}
export default connect(
  mapStateToProps,
  { addFriendAsync, updateFriendAsync }
)(FriendForm);
