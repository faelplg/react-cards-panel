import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
  let buttonClasses = classes.Button;
  if (props.isActive) {
    buttonClasses = `${buttonClasses} ${classes.Active}`;
  }
  if (props.layoutType) {
    switch (props.layoutType) {
      case 'IconButton':
        buttonClasses = `${buttonClasses} ${classes.IconButton}`;
        break;
      default:
        buttonClasses = `${buttonClasses} ${classes.IconButton}`;
        break;
    }
  }
  return (
    <button className={buttonClasses} onClick={props.whenClicked}>
      {props.children}
    </button>
  );
};

export default Button;
