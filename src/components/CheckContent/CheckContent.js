import React from 'react';
import { useState } from 'react';

import { statusbox, turnbutton } from './CheckContent.module.scss';

const CheckContent = () => {
  const [turnedOn, setTurnedOn] = useState(false);

  const divStyle = {
    border: `2px solid ${turnedOn ? 'green' : 'red'}`,
  };

  return (
    <div>
      <div className={`${statusbox}`} style={divStyle}>
        <p>{turnedOn ? 'turned on' : 'turned off'}</p>
      </div>
      <button
        className={`${turnbutton}`}
        onClick={() => setTurnedOn(!turnedOn)}
      >
        {turnedOn ? 'turn off' : 'turn on'}
      </button>
    </div>
  );
};

export default CheckContent;
