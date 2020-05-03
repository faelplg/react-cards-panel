import React from 'react';
import classes from './Toolbar.module.scss';
import logo from '../../assets/logo-white-horizontal.png';

const Toolbar = (props) => {
  let layout_type_class;
  switch (props.layoutType) {
    default:
      layout_type_class = classes.Default;
      break;
  }
  return (
    <header className={[classes.Toolbar, layout_type_class].join(' ')}>
      <span className={[classes.Menu, 'text--button'].join(' ')}>Menu</span>
      <img className={classes.Logo} src={logo} alt='Logomarca fael.tech.'/>
      <span className={[classes.Navigation, 'text--button'].join(' ')}>Links</span>
    </header>
  );
};

export default Toolbar;
