import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "thien",
    age: 26,
  };
  handleOnSubmit = (event) => {};
  handleOnChangeInput = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <p> toi ten la {this.state.name}</p>
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
