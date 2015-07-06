import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import GameOfLife from '../lib/GameOfLife.js';

// data storage
let state = {
  status: false,
  generations: 0,
  rows: [],
  live: 0
};

let interval = null;

// Facebook style store creation.
const GameStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getRows() {
    return state.rows;
  },

  getCurrentState() {
    state.text = state.status ? 'Stop' : 'Start';
    return state;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function (payload) {
    let action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.ROWS_SET:
        state.rows = action.rows;

        GameStore.emitChange();
        break;

      case Constants.ActionTypes.STARTED:
        state.status = true;
        state.generations = 0;

        let gol = new GameOfLife(state.rows);

        interval = setInterval(function () {
          if (state.status) {
            gol.nextGeneration();

            state.rows = gol.rows;
            state.live = gol.live;

            state.generations++;

            GameStore.emitChange();
          }
        }, 500);
        break;

      case Constants.ActionTypes.STOPPED:
        state.status = false;

        clearInterval(interval);

        GameStore.emitChange();
        break;
    }
  })
});

export default GameStore;
