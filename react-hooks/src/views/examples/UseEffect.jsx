import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseEffect = (props) => {
  // EX 1
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

  // EX 2
  const [evenOrOdd, setEvenOrOdd] = useState('Odd');

  useEffect(() => {
    setEvenOrOdd(num % 2 === 0 ? 'Even' : 'Odd');
  }, [num]);

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
      </div>

      <SectionTitle title="Exercise #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{evenOrOdd}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
