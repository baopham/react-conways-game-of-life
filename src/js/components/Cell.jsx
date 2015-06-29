import React from 'react';
import classNames from 'classnames';

export default React.createClass({

  getDefaultProps() {
    return {
      alive: false
    };
  },

  render() {
    let classes = classNames({
      'danger': this.props.alive
    });

    return (
      <td className={classes}>
        &nbsp;
      </td>
    );
  }

});
