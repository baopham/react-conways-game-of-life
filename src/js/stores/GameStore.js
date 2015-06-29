import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import GameOfLife from '../lib/GameOfLife.js';

// data storage
let status = false;
let generations = 0;
let rows = [];
let interval = null;

// Facebook style store creation.
const GameStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getRows() {
    return rows;
  },

  getCurrentState() {
    return {
      status: status,
      text: status ? 'Stop' : 'Start',
      generations: generations
    };
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function (payload) {
    let action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.ROWS_SET:
        rows = action.rows;

        GameStore.emitChange();
        break;

      case Constants.ActionTypes.STARTED:
        status = true;
        generations = 0;

        let gol = new GameOfLife(rows);

        interval = setInterval(function () {
          if (status) {
            gol.nextGeneration();

            rows = gol.rows;

            generations++;

            GameStore.emitChange();
          }
        }, 500);
        break;

      case Constants.ActionTypes.STOPPED:
        status = false;

        clearInterval(interval);

        GameStore.emitChange();
        break;
    }
  })
});

export default GameStore;
