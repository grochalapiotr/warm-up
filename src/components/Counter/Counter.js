import React from 'react';
import { useState } from 'react';

import { buttonStatus, counterbox } from './Counter.module.scss';

const Counter = () => {
  const [Counter, setCounter] = useState(0);

  return (
    <div>
      <div className={`${counterbox}`}>
        <p>{Counter}</p>
      </div>
      <button
        className={`${buttonStatus}`}
        onClick={() => (Counter - 1 >= 0 ? setCounter(Counter - 1) : Counter)}
      >
        Decrease
      </button>
      <button
        className={`${buttonStatus}`}
        onClick={() => setCounter(Counter + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Counter;
