import React, {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PanelControl from '../../containers/PanelControl/PanelControl';

import classes from './Layout.module.scss';

class Layout extends Component {
  componentDidMount() {
    console.log('DEBUG: on [Layout].componentDidMount() - this.state, this.props', this.props);
  }

  componentWillUnmount() {
    console.log('DEBUG: on [Layout].componentWillUnmount() - this.state, this.props', this.props);
  }

  componentDidUpdate() {
    console.log('DEBUG: on [Layout].componentDidUpdate() - this.state, this.props', this.props);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar layoutType={this.props.layoutType} />
        <main className={[classes.Layout, classes.Default].join(' ')}>
          <PanelControl />
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
