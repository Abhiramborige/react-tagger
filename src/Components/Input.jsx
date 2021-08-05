import { Component, Fragment } from "react";

class Input extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <label htmlFor="input">{this.props.label}</label>
        <input type="text" name="input"></input>
      </Fragment>
    );
  }
}

export default Input;
