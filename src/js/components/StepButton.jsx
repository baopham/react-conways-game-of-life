import React from 'react';
import GameActions from '../actions/GameActions.js';
import Button from 'react-bootstrap/lib/Button';

export default React.createClass({
  _onClick() {
    GameActions.step();
  },

  render() {
    return (
      <Button onClick={this._onClick}>
        Step
      </Button>
    );
  }
});
