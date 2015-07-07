import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

export default {
  start() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.STARTED
    });
  },

  stop() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.STOPPED
    });
  },

  step() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.STEPPED
    });
  },

  reset(board) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.RESET,
      board: board
    });
  },

  setBoard(board) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.BOARD_SET,
      board: board
    });
  }
};
