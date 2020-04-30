import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';

import classes from './Layout.module.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarType: 'default',
    };
  }

  componentDidMount() {
    console.log('DEBUG: on [Layout].componentDidMount - this.state, this.props', this.state, this.props);
  }

  componentWillUnmount() {
    console.log('DEBUG: on [Layout].componentWillUnmount - this.state, this.props', this.state, this.props);
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar layoutType='Default' />
        <main className={[classes.Layout, classes.Default].join(' ')}>
          <h1>Cards panel</h1>
          <div className={classes.Panel}>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
            <div className={classes.Card}>
              <h2>Card Great Title and Long</h2>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
