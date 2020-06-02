import React, {PureComponent} from 'react';
import Panel from '../../components/Panel/Panel';
import Filter from '../../components/Filter/Filter';
import AdvancedFilter from '../../components/AdvancedFilter/AdvancedFilter';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Tag from '../../components/Tag/Tag';

import classes from './PanelControl.module.scss';
import {IconContext} from 'react-icons';
import {FaFilter} from 'react-icons/fa';

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
    console.log('DEBUG: on [PanelControl].runFilter(...args) - params', params);
  };

  render() {
    return (
      <React.Fragment>
        <div className={classes.Header}>
          <h1>Cards Panel</h1>
        </div>
        <div className={classes.Toolbar}>
          <Button whenClicked={this.openFilterHandler} isActive={this.state.filterOpen}>
            <IconContext.Provider value={{style: {verticalAlign: 'middle', marginRight: '0.8rem'}}}>
              <FaFilter />
            </IconContext.Provider>
            <span>Filter</span>
          </Button>
          <div>
            <Tag>
              <FaFilter />
            </Tag>
            <Tag>
              <FaFilter />
            </Tag>
            <Tag>
              <FaFilter />
            </Tag>
            <Tag>
              <FaFilter />
            </Tag>
          </div>
        </div>
        <div className={classes.PanelControl}>
          <Filter open={this.state.filterOpen} runFilter={this.runFilterHandler} />
          <AdvancedFilter open={this.state.filterOpen} runFilter={this.runFilterHandler} />
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
