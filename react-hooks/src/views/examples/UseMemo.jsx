import React, { useMemo, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  function sum(a, b) {
    const future = Date.now() + 500;
    // eslint-disable-next-line no-empty
    while (Date.now() < future) {}
    return a + b;
  }

  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div className="useMemo">
      <PageTitle
        title="useMemo"
        subtitle="function that caches the value produced from an expensive function used inside a React component. It accepts the expensive function and works by storing the value produced from the function when that is passed the same arguments repeatedly."
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;
