import React, { useCallback, useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  const inc = useCallback(
    (delta) => {
      setCount((current) => current + delta);
    },
    [setCount],
  );

  return (
    <div className="useCallback">
      <PageTitle
        title="useCallback"
        subtitle="a hook that can be used to memoize callback functions. Memoization is a technique that can be used to cache the results of a function call so that it does not need to be re-evaluated on every render."
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
