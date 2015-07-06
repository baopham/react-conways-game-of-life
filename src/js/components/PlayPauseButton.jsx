import React from 'react';
import GameActions from '../actions/GameActions.js';
import GameStore from '../stores/GameStore.js';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({

  _onClick() {
    let {status} = GameStore.getCurrentState();
    if (status) {
      return GameActions.stop();
    }

    return GameActions.start();
  },

  _onStoreChange() {
    this.setState(GameStore.getCurrentState());
  },

  getInitialState() {
    return GameStore.getCurrentState();
  },

  componentDidMount() {
    GameStore.addChangeListener(this._onStoreChange);
  },

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onStoreChange);
  },

  render() {
    let {text, status} = this.state;
    let bsStyle = status ? 'danger' : 'primary';

    return (
      <Button bsStyle={bsStyle} onClick={this._onClick}>
        {text}
      </Button>
    );
  }

});
