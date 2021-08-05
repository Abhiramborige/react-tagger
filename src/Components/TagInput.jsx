import { Component, Fragment } from "react";
import Tag from "./Tag";

class TagInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", list: [] };
  }
  style = {
    display: "flex",
  };
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === ",") {
      e.preventDefault();
      if(!this.state.list.includes(this.state.value)){
        this.setState({
        list: [...this.state.list, this.state.value],
        value: "",
        });
      }
    }
  };

  handleDelete = (delete_name) => {
    this.setState({ list: this.state.list.filter((name) => name !== delete_name) });
  };

  render() {
    return (
      <Fragment>
        <div style={this.style}>
          <label htmlFor="input">{this.props.label}</label>
          <span className=" material-icons-outlined">info</span>
        </div>
        <div className="container">
          {this.state.list.map((element) => {
            return (
              <Tag
                tag={element}
                handleDelete={() => this.handleDelete(element)}
                key={element}
              ></Tag>
            );
          })}

          <input
            type="text"
            data-role="taginput"
            data-tag-trigger="Comma"
            name="input"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          ></input>
        </div>
      </Fragment>
    );
  }
}

export default TagInput;
