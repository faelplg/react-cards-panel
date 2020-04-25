import React from "react";
import classes from './Toolbar.module.scss';
const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <span>Logo</span>
      <span>Menu</span>
    </header>
  );
};

export default Toolbar;
