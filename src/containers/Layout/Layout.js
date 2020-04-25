import React, { Component } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";

import classes from './Layout.module.scss';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      toolbarType: 'default'
    };
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <main className={classes.Layout}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
