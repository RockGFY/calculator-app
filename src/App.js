import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  clearInput = () => {
    this.setState({ input: "" });
  };

  addFunction = () => {
    //this.setState({ previousNumber: this.state.input });
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    //this.setState({ operator: "plus" });
    this.state.operator = "plus";
  };

  subtractFunction = () => {
    //this.setState({ previousNumber: this.state.input });
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    //this.setState({ operator: "plus" });
    this.state.operator = "subtract";
  };

  multiplyFunction = () => {
    //this.setState({ previousNumber: this.state.input });
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    //this.setState({ operator: "plus" });
    this.state.operator = "multiply";
  };

  divideFunction = () => {
    //this.setState({ previousNumber: this.state.input });
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    //this.setState({ operator: "plus" });
    this.state.operator = "divide";
  };

  equalFunction = () => {
    //this.setState({ currentNumber: this.state.input });
    this.state.currentNumber = this.state.input;
    switch (this.state.operator) {
      case "plus":
        this.setState({
          input:
            parseInt(this.state.previousNumber) +
            parseInt(this.state.currentNumber)
        });
        break;
      case "subtract":
        this.setState({
          input:
            parseInt(this.state.previousNumber) -
            parseInt(this.state.currentNumber)
        });
        break;
      case "divide":
        this.setState({
          input:
            parseInt(this.state.previousNumber) /
            parseInt(this.state.currentNumber)
        });
        break;
      case "multiply":
        this.setState({
          input:
            parseInt(this.state.previousNumber) *
            parseInt(this.state.currentNumber)
        });
        break;
    }

    // if (this.state.operator === "plus") {
    //   this.setState({
    //     input:
    //       parseInt(this.state.previousNumber) +
    //       parseInt(this.state.currentNumber)
    //   });
    // } else if (this.state.operator === "subtract") {
    // }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input === "" ? "0" : this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divideFunction}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiplyFunction}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addFunction}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.equalFunction}>=</Button>
            <Button handleClick={this.subtractFunction}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}></ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
