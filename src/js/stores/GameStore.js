import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import GameOfLife from '../lib/GameOfLife.js';
import Helpers from '../util/helpers.js';

// data storage
let state = initialState();
let interval = null;
let gol = null;
let initialBoard = {};

function initialState() {
  gol = null;
  interval = null;
  return {
    status: false,
    generations: 0,
    board: initialBoard,
    alive: 0
  };
}

// Facebook style store creation.
const GameStore = assign({}, BaseStore, {
  // public methods used by Controller-View to operate on data
  getBoard() {
    return state.board;
  },

  getCurrentState() {
    state.text = state.status ? 'Stop' : 'Start';
    return state;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: Dispatcher.register(function (payload) {
    let action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.BOARD_SET:
        state.board = action.board;
        initialBoard = Helpers.clone(action.board);

        GameStore.emitChange();
        break;

      case Constants.ActionTypes.STARTED:
        state.status = true;
        state.generations = state.generations || 0;

        gol = gol || new GameOfLife(state.board);

        interval = setInterval(function () {
          if (state.status) {
            gol.nextGeneration();

            state.board.aliveCoords = gol.board.aliveCoords;
            state.alive = gol.alive;

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

      case Constants.ActionTypes.STEPPED:
        clearInterval(interval);
        state.status = true;
        state.generations = state.generations || 0;

        gol = gol || new GameOfLife(state.board);
        gol.nextGeneration();

        state.board.aliveCoords = gol.board.aliveCoords;
        state.alive = gol.alive;

        state.generations++;

        state.status = false;

        GameStore.emitChange();
        break;

      case Constants.ActionTypes.RESET:
        clearInterval(interval);
        state = initialState();
        state.board = initialBoard;
        GameStore.emitChange();
        break;
    }
  })
});

export default GameStore;
