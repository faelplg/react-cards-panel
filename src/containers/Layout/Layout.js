import React, {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import PanelControl from '../../containers/PanelControl/PanelControl';

import classes from './Layout.module.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarType: 'default',
    };
  }

  componentDidMount() {
    console.log(
      'DEBUG: on [Layout].componentDidMount - this.state, this.props',
      this.state,
      this.props,
    );
  }

  componentWillUnmount() {
    console.log(
      'DEBUG: on [Layout].componentWillUnmount - this.state, this.props',
      this.state,
      this.props,
    );
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar layoutType="Default" />
        <main className={[classes.Layout, classes.Default].join(' ')}>
          <h1>Cards panel</h1>
          <PanelControl />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
