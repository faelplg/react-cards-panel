import React from 'react';
import classes from './Tag.module.scss';

const Tag = props => {
  return (
    <span className={classes.Tag}>
      {props.children}
    </span>
  );
};

export default Tag;