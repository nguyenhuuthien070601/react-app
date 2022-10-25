import React from "react";
class DisplayInfo extends React.Component {
  state = {
    isShow: true,
  };
  handleShowHide = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    const { listUsers } = this.props;

    return (
      <div>
        <span
          onClick={() => {
            this.handleShowHide();
          }}
        >
          show/hiden list
        </span>
        {this.state.isShow && (
          <div>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className={user.age > 30 ? "red" : "green"}>
                  <div>{user.name}</div>
                  <div>{user.age}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfo;
