import React from 'react';
import Button from '../Button/Button';

import classes from './Filter.module.scss';

const Filter = props => {
  return (
    <div className={[classes.Filter, props.open ? classes.Open : null].join(' ')}>
      <h3>Filter A</h3>
      <h3>Filter B</h3>
      <h3>Filter C</h3>
      <h3>Filter D</h3>
      <Button whenClicked={() => props.runFilter({paramOne: 'valueOne', paramTwo: 'valueTwo'})}>Run</Button>
    </div>
  );
};

export default Filter;