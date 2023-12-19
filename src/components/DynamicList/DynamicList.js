import PropTypes from 'prop-types';
import React from 'react';

import { listElement } from './DynamicList.module.scss';

const DynamicList = ({ n }) => {
  const listItems = Array.from({ length: n }, (_, index) => (
    <li className={`${listElement}`} key={index + 1}>
      List element {index + 1}
    </li>
  ));

  return (
    <div>
      <br></br>
      <ul>{listItems}</ul>
    </div>
  );
};

DynamicList.propTypes = {
  n: PropTypes.number.isRequired,
};

export default DynamicList;
