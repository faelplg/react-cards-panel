import React from 'react';
import Button from '../Button/Button';

import classes from './Filter.module.scss';
import {IconContext} from 'react-icons';
import {FaFilter, FaSyncAlt} from 'react-icons/fa';

const Filter = (props) => {
  let buttonLayout = 'IconButton';
  if (props.open) {
    buttonLayout = null;
  }
  return (
    <div className={[classes.Filter, props.open ? classes.Open : null].join(' ')}>
      <span
        className="Label"
        style={{
          backgroundColor: 'lightgray',
          borderRadius: '18px',
          height: '3.6rem',
          minWidth: '5.6rem',
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.8rem',
          margin: '0.4rem',
          boxShadow: '0 1px 2px inset #222222',
        }}
      >
        <FaFilter />
      </span>

      <Button
        layoutType={buttonLayout}
        whenClicked={() => props.runFilter({paramOne: 'valueOne', paramTwo: 'valueTwo'})}
      >
        <IconContext.Provider value={{style: {verticalAlign: 'middle', marginRight: props.open ? '0.8rem' : '0'}}}>
          <FaSyncAlt />
        </IconContext.Provider>
        {props.open ? 'Filtrar' : null}
      </Button>
    </div>
  );
};

export default Filter;
