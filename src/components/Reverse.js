import React, { Component } from "react";

class Reverse extends Component {
  render() {
    const revText = function(str) {
      return str
        .split("")
        .reverse()
        .join("");
    };

    return (
      <React.Fragment>
        {revText(this.props.textReverse)}
      </React.Fragment>
    );
  }
}

export default Reverse;
