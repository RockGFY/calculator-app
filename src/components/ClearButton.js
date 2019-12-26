import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  state = {};
  render() {
    return (
      <div
        className="clearbutton"
        onClick={() => {
          this.props.handleClear();
        }}
      >
        Clear
      </div>
    );
  }
}

export default ClearButton;
