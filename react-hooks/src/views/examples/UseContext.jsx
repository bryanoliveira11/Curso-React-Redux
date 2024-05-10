import React, { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { DataContext } from '../../data/DataContext';

const UseContext = (props) => {
  const context = useContext(DataContext);

  const setNumber = (delta) => {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  };

  console.log(context);

  return (
    <div className="useContext">
      <PageTitle
        title="useContext"
        subtitle="React hook that provides a way to share data (context) across multiple components without explicitly passing it through props."
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(1)}>
            +1
          </button>
          <button className="btn" onClick={() => setNumber(-1)}>
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
