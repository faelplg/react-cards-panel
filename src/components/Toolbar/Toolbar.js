import React from "react";
import classes from './Toolbar.module.scss';
const Toolbar = () => {
  return (
    <header className={[classes.Toolbar, 'text--caption'].join(' ')}>
      <span className={classes.Menu}>Menu</span>
      <span>Logo</span>
      <span className={classes.Navigation}>Links</span>
    </header>
  );
};

export default Toolbar;
