import React from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import GameStore from '../stores/GameStore.js';

export default React.createClass({
  getInitialState() {
    return GameStore.getCurrentState();
  },

  _onStoreChange() {
    this.setState(GameStore.getCurrentState());
  },

  componentDidMount() {
    GameStore.addChangeListener(this._onStoreChange);
  },

  componentWillUnmount() {
    GameStore.removeChangeListener(this._onStoreChange);
  },

  render() {
    let {generations, alive} = this.state;

    return (
      <Alert bsStyle="success">
        Generation count: {generations},
        Live cells: {alive}
      </Alert>
    );
  }
});
