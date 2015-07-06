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

  reset() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.RESET
    });
  },

  setRows(rows) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.ROWS_SET,
      rows: rows
    });
  }
};
