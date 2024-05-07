import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

const UseRef = (props) => {
  const [value1, setValue1] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  }, [value1]);

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
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
