import React from 'react';
import GameActions from '../actions/GameActions.js';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  _onClick() {
    GameActions.reset();
  },

  render() {
    return (
      <Button bsStyle="danger" onClick={this._onClick}>
        Reset
      </Button>
    );
  }
});
