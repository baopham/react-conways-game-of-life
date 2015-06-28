import React, {PropTypes} from 'react';
import Board from './Board.jsx';
import ActionButton from './ActionButton.jsx';

export default React.createClass({
  propTypes: {

  },

  getDefaultProps() {
    return {
      tasks: []
    }
  },

  render() {

    return (
      <div className="container">
        <Board />
        <ActionButton />
      </div>
    );

  }
});
