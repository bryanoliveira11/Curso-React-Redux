import React from 'react';
import './Button.css';

export default (props) => (
  <button
    className={`button ${props.extraClass}`}
    onClick={() => props.handleClick && props.handleClick(props.label)}
  >
    {props.label}
  </button>
);
