import React from 'react';
import GameStore from '../stores/GameStore.js';
import GameActions from '../actions/GameActions.js';
import Cell from './Cell.jsx';
import Table from 'react-bootstrap/lib/Table';

export default React.createClass({

  getDefaultProps() {
    return {
      numrows: 20,
      numcols: 20
    };
  },

  getInitialState() {
    let state = this._getRows();
    GameActions.setRows(state.rows);
    return state;
  },

  _getRows() {
    let {numrows, numcols} = this.props;

    let rows = [];

    for (let r = 0; r < numrows; r++) {
      let row = {
        key: r,
        cols: []
      }
      rows.push(row);

      for (let c = 0; c < numcols; c++) {
        row.cols.push({
          alive: this._randomAlive(),
          key: c
        });
      }
    }

    return {
      rows: rows
    };
  },

  _randomAlive() {
    return !!Math.round(Math.random());
  },

  _onChange() {
    this.setState(GameStore.getRows());
  },

  componentDidMount() {
    GameStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onChange);
  },

  render() {
    let {rows} = this.state;

    return (
      <Table>
        {rows.map(row =>
          <tr key={row.key}>

            {row.cols.map(col =>
              <Cell key={col.key} alive={col.alive} />
            )}

          </tr>
        )}
      </Table>
    );
  }
});
