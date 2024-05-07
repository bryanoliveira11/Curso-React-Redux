import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const count = useRef(0);
  const input1 = useRef(null);
  const input2 = useRef(null);

  useEffect(() => {
    count.current = count.current + 1;
    input2.current.focus();
  }, [value1]);

  useEffect(() => {
    count.current++;
    input1.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="UseRef"
        subtitle="returns a ref object with a single current property initially set to the initial value you provided."
      />
      <SectionTitle title="Exercise #01" />
      <div className="center">
        <div>
          <span className="text">Value: </span>
          <span className="text">{value1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          ref={input1}
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercise #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          ref={input2}
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
