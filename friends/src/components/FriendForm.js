import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriendAsync, updateFriendAsync } from "../state/actionCreators";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid rgb(230, 230, 230);
  color: black;
  background: white;
`;

const StyledButDiv = styled.div`
  text-align: center;
  padding: 15px;
`;

const Button = styled.button`
  height: 12%;
  width: 20%;
  margin: 0 15px;
  background: rgb(56, 151, 240);
  border: 1px solid rgb(56, 151, 240);
  border-radius: 3px;
  color: white;
  padding: 0.25em 1em;
`;

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
      <StyledDiv>
        <div>
          <input ref={this.idRef} type="number" placeholder="enter id" />
          <input ref={this.nameRef} type="text" placeholder="enter name" />
          <input ref={this.ageRef} type="number" placeholder="enter age" />
          <input ref={this.emailRef} type="text" placeholder="enter email" />
        </div>
        <StyledButDiv>
          <Button onClick={this.onAddFriend}>Add Friend</Button>
          <Button onClick={this.onUpdateFriend}>Update Friend</Button>
        </StyledButDiv>
      </StyledDiv>
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
