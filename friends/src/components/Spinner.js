import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledSpinner = styled.div`
  height: 100%;
  .spinner {
    display: ${props => (props.spinnerOn ? "block" : "none")};
  }
  .children {
    height: 80%;
    background-color: rgb(250, 250, 250);
    display: ${props => (props.spinnerOn ? "none" : "block")};
  }
`;

export class Spinner extends React.Component {
  render() {
    return (
      <StyledSpinner spinnerOn={this.props.spinner}>
        <div className="spinner">Please Wait...</div>
        <div className="children">{this.props.children}</div>
      </StyledSpinner>
    );
  }
}

const mapStateToProps = function(state) {
  return { spinner: state.Spinner };
};

export default connect(mapStateToProps)(Spinner);
