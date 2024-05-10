import React, { useContext, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { DataContext } from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
  const context = useContext(DataContext);

  const addNumber = (delta) => {
    context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  };

  const { number, setNumber, text, setText } = useContext(AppContext);

  useEffect(() => {
    if (number > 1250) {
      setText('New Text');
    }
  }, [number]);

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
          <button className="btn" onClick={() => addNumber(1)}>
            +1
          </button>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercise #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
