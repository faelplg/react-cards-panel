import React, {PureComponent} from 'react';
import Panel from '../../components/Panel/Panel';

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

  openFilterHandler = () => {
    this.setState((prevState) => {
      return {filterOpen: !prevState.filterOpen, panelShrink: !prevState.panelShrink};
    });
  };

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
    console.log('DEBUG: on [PanelControl].componentWillUnmount - this.state', this.state);
  }

  componentDidUpdate() {
    console.log('DEBUG: on [PanelControl].componentDidUpdate - this.state', this.state);
  }

  render() {
    // const currentCards = [...this.state.cards];
    // console.log('currentCards', currentCards);
    console.log('this.state.cards', this.state.cards);
    return (
      <React.Fragment>
        <button onClick={this.openFilterHandler}>Filtrar</button>
        <div className={classes.PanelControl}>
          <div className={[classes.Filter, this.state.filterOpen ? classes.Open : null].join(' ')}>
            <h3>Filter A</h3>
            <h3>Filter B</h3>
            <h3>Filter C</h3>
            <h3>Filter D</h3>
          </div>
          <Panel shrink={this.state.panelShrink}>
            {this.state.cards.map((card) => (
              <div key={card.id} className={classes.Card}>
                <h2>{card.name}</h2>
                <h2>{card.contact}</h2>
              </div>
            ))}
          </Panel>
        </div>
      </React.Fragment>
    );
  }
}

export default PanelControl;
