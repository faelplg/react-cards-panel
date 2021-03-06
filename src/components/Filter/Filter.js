import React from 'react';
import Button from '../Button/Button';

import classes from './Filter.module.scss';
import {IconContext} from 'react-icons';
import {FaMicroscope} from 'react-icons/fa';

const Filter = (props) => {
  return (
    <div className={[classes.Filter, props.open ? classes.Open : null].join(' ')}>
      <Button
        whenClicked={() => props.runFilter({paramOne: 'valueOne', paramTwo: 'valueTwo'})}
      >
        <IconContext.Provider
          value={{style: {verticalAlign: 'middle', marginRight: '0.8rem'}}}
        >
          <FaMicroscope />
        </IconContext.Provider>
        Advanced
      </Button>
    </div>
  );
};

export default Filter;
