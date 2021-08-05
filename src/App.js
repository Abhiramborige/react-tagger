import { Component, Fragment } from "react";
import Input from "./Components/Input";
import TagInput from "./Components/TagInput";
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Input label={"Core Engineering branch"}></Input>
        <Input label={"Prefered Industry"}></Input>
        <TagInput label={"Technical goals"}></TagInput>
        <TagInput label={"Non-technical goals"}></TagInput>
        <TagInput label={"Other goals"}></TagInput>
      </Fragment>
    );
  }
}

export default App;
