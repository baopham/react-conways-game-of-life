import React, {PropTypes} from 'react';
import Board from './Board.jsx';
import GameStatus from './GameStatus.jsx';
import ActionButton from './ActionButton.jsx';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default React.createClass({
  propTypes: {

  },

  getDefaultProps() {
    return {};
  },

  render() {

    return (
      <div className="container">
        <PageHeader>
          Conway's Game of Life
        </PageHeader>

        <Board />

        <GameStatus />

        <ActionButton />

      </div>
    );

  }
});
