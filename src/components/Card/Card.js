import React from 'react';

import classes from './Card.module.scss';

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <h2>{props.name}</h2>
      <h2>{props.contact}</h2>
    </div>
  );
};

export default Card;
