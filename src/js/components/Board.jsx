import React from 'react';
import GameStore from '../stores/GameStore.js';
import GameActions from '../actions/GameActions.js';
import Cell from './Cell.jsx';
import Table from 'react-bootstrap/lib/Table';

import Board from '../util/board-glider.js';

export default React.createClass({

  getInitialState() {
    let rows = Board.rows();

    let state = {
      numrows: rows.length,
      numcols: rows[0].length,
      rows: rows
    };

    GameActions.setRows(state.rows);

    return state;
  },

  _getRows(numrows, numcols) {
    let rows = [];

    for (let r = 0; r < numrows; r++) {
      let row = [];

      for (let c = 0; c < numcols; c++) {
        row.push(this._randomAlive());
      }

      rows.push(row);
    }

    return rows;
  },

  _randomAlive() {
    return Math.round(Math.random());
  },

  _onStoreChange() {
    this.setState(GameStore.getRows());
  },

  componentDidMount() {
    GameStore.addChangeListener(this._onStoreChange);
  },

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onStoreChange);
  },

  render() {
    let {rows} = this.state;
    let tableWidth = rows[0].length * 30;

    tableWidth = tableWidth > 1000 ? '100%' : tableWidth + 'px !important';

    return (
      <Table style={{width: tableWidth}} className="table-bordered">
        {rows.map((cols, i) =>
          <tr key={i}>

            {cols.map((alive, j) =>
              <Cell key={j} alive={alive} />
            )}

          </tr>
        )}
      </Table>
    );
  }
});
