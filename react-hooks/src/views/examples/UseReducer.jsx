import React, { useReducer } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { allReducers, initialState } from '../../store';
import { numberAdd, login } from '../../store/actions';

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(allReducers, initialState);

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
          <button className="btn" onClick={() => numberAdd(dispatch, 2)}>
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
          <button className="btn" onClick={() => login(dispatch, 'user')}>
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
