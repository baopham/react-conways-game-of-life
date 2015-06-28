import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import GameOfLife from '../lib/GameOfLife.js';

// data storage
let status = false;
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
      text: status ? 'Stop' : 'Start'
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

        interval = setInterval(function () {
          if (status) {
            GameOfLife.run(rows);

            GameStore.emitChange();
          }
        }, 1000);
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
