import React from 'react';
import GameActions from '../actions/GameActions.js';
import Button from 'react-bootstrap/lib/Button';
import Board from '../util/board-acorn.js';

export default React.createClass({
  _onClick() {
    GameActions.reset(Board.board());
  },

  render() {
    return (
      <Button bsStyle="danger" onClick={this._onClick}>
        Reset
      </Button>
    );
  }
});
