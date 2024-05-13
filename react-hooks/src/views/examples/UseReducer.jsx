import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'numberAdd':
      return { ...state, number: state.number + action.n };
    case 'numberMultiply':
      return { ...state, number: state.number * action.n };
    case 'numberDivision':
      return { ...state, number: state.number / action.n };
    case 'int':
      return { ...state, number: parseInt(state.number) };
    case 'login':
      return { ...state, user: { name: action.payload.name } };
    default:
      return state;
  }
};

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="useReducer">
      <PageTitle
        title="useReducer"
        subtitle="The useReducer Hook is used to store and update states, just like the useState Hook."
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        {state.user ? <span className="text">{state.user.name}</span> : ''}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberAdd', n: 2 })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberMultiply', n: 7 })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: 'numberDivision', n: 25 })}
          >
            /25
          </button>
          <button className="btn" onClick={() => dispatch({ type: 'int' })}>
            int
          </button>
          <button
            className="btn"
            onClick={() =>
              dispatch({ type: 'login', payload: { name: 'user' } })
            }
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
