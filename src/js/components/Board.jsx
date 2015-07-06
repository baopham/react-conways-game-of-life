import React from 'react';
import GameStore from '../stores/GameStore.js';
import GameActions from '../actions/GameActions.js';
import Cell from './Cell.jsx';
import Table from 'react-bootstrap/lib/Table';

import Board from '../util/board-acorn.js';

export default React.createClass({

  getInitialState() {
    let state = Board.board();
    state.rows = Array(state.numrows).join(1).split('');
    state.cols = Array(state.numcols).join(1).split('');

    GameActions.setBoard(state);

    return state;
  },

  _onStoreChange() {
    this.setState(GameStore.getBoard());
  },

  componentDidMount() {
    GameStore.addChangeListener(this._onStoreChange);
  },

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onStoreChange);
  },

  _tableWidth(numcols) {
    let tableWidth = numcols * 30;

    return tableWidth > 1000 ? '100%' : tableWidth + 'px !important';
  },

  _isAlive(x, y, aliveCoords) {
    return aliveCoords[y] !== undefined && aliveCoords[y][x] !== undefined;
  },

  render() {
    let {rows, cols, aliveCoords} = this.state;
    let tableWidth = this._tableWidth(cols.length);

    return (
      <Table style={{width: tableWidth}} className="table-bordered">
        {rows.map((v, y) =>
          <tr key={y}>

            {cols.map((vv, x) =>
              <Cell key={x} alive={this._isAlive(x, y, aliveCoords)} />
            )}

          </tr>
        )}
      </Table>
    );
  }
});
