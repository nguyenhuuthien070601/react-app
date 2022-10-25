import React from "react";
import "./App.css";

import MyComponent from "./component/MyComponent";
import DisplayInfo from "./component/DisplayInfo";
class App extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "John", age: 34 },
      { id: 2, name: "John", age: 22 },
      { id: 3, name: "John", age: 18 },
    ],
  };
  render() {
    return <DisplayInfo listUsers={this.state.listUsers} />;
  }
}

export default App;
