import { Component } from "react";

class Tag extends Component {
  state = {};
  render() {
    return (
      <div className="tag">
        <span>{this.props.tag}</span>
        <span className="material-icons-outlined" onClick={this.props.handleDelete}>close</span>
      </div>
    );
  }
}

export default Tag;
