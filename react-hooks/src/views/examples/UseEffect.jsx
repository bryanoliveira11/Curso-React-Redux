import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {
  const [num, setNum] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(() => {
    setFatorial(calcFatorial(num));
  }, [num]);

  const calcFatorial = (num) => {
    if (num < 0) return -1;
    if (num === 0) return 1;
    return calcFatorial(num - 1) * num;
  };

  return (
    <div className="UseEffect">
      <PageTitle
        title="UseEffect"
        subtitle="By using this Hook, you tell React that your component needs to do something after render."
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>
        <input
          type="number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <button className="btn" onClick={calcFatorial(num)}>
          Calculate
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
