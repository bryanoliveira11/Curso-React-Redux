import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.clearDisplay = this.clearDisplay.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearDisplay() {
    console.log('clear');
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(digit) {
    console.log(digit);
  }

  render() {
    return (
      <div className="calculator">
        <Display value="" />
        <Button
          label="AC"
          extraClass="triple"
          handleClick={this.clearDisplay}
        />
        <Button
          label="/"
          extraClass="operation"
          handleClick={this.setOperation}
        />
        <Button label="7" handleClick={this.addDigit} />
        <Button label="8" handleClick={this.addDigit} />
        <Button label="9" handleClick={this.addDigit} />
        <Button
          label="*"
          extraClass="operation"
          handleClick={this.setOperation}
        />
        <Button label="5" handleClick={this.addDigit} />
        <Button label="4" handleClick={this.addDigit} />
        <Button label="6" handleClick={this.addDigit} />
        <Button
          label="-"
          extraClass="operation"
          handleClick={this.setOperation}
        />
        <Button label="1" handleClick={this.addDigit} />
        <Button label="2" handleClick={this.addDigit} />
        <Button label="3" handleClick={this.addDigit} />
        <Button
          label="+"
          extraClass="operation"
          handleClick={this.setOperation}
        />
        <Button label="0" extraClass="double" handleClick={this.addDigit} />
        <Button label="." handleClick={this.addDigit} />
        <Button label="=" handleClick={this.addDigit} />
      </div>
    );
  }
}
