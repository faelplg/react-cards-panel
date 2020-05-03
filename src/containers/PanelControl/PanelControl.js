import React, {PureComponent} from 'react';
import Panel from '../../components/Panel/Panel';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

import classes from './PanelControl.module.scss';

class PanelControl extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      filterOpen: false,
      panelShrink: false,
    };
  }

  componentDidMount() {
    console.log('DEBUG: on [PanelControl].componentDidMount - this.state', this.state);
    this.setState({
      cards: [
        {id: 1, name: 'Name 1', contact: 'Contact 1'},
        {id: 2, name: 'Name 2', contact: 'Contact 2'},
        {id: 3, name: 'Name 3', contact: 'Contact 3'},
        {id: 4, name: 'Name 4', contact: 'Contact 4'},
        {id: 5, name: 'Name 5', contact: 'Contact 5'},
        {id: 6, name: 'Name 6', contact: 'Contact 6'},
      ],
    });
  }

  componentWillUnmount() {
    console.log('DEBUG: on [PanelControl].componentWillUnmount() - this.state', this.state);
  }

  componentDidUpdate() {
    console.log('DEBUG: on [PanelControl].componentDidUpdate() - this.state', this.state);
  }

  openFilterHandler = () => {
    this.setState((prevState) => {
      return {filterOpen: !prevState.filterOpen, panelShrink: !prevState.panelShrink};
    });
  };

  runFilterHandler = (params) => {
    console.log('DEBUG: on [PanelControl].runFilter() - params', params);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Cards panel</h1>
        <Button whenClicked={this.openFilterHandler} isActive={this.state.filterOpen}>Filter</Button>
        <div className={classes.PanelControl}>
          <Filter open={this.state.filterOpen} runFilter={this.runFilterHandler} />
          <Panel shrink={this.state.panelShrink}>
            {this.state.cards.map((card) => (
              <Card key={card.id} name={card.name} contact={card.contact} />
            ))}
          </Panel>
        </div>
      </React.Fragment>
    );
  }
}

export default PanelControl;
