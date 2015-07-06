import React from 'react';
import Board from './Board.jsx';
import GameStatus from './GameStatus.jsx';
import ActionButtons from './ActionButtons.jsx';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default React.createClass({
  render() {

    return (
      <div className="container">
        <PageHeader>
          Conway's Game of Life
        </PageHeader>

        <Board />

        <GameStatus />

        <ActionButtons />

      </div>
    );

  }
});
