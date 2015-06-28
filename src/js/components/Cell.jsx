import React from 'react/addons';

export default React.createClass({

  getDefaultProps() {
    return {
      alive: false
    };
  },

  render() {
    let cx = React.addons.classSet;
    let classes = cx({
      'danger': this.props.alive
    });

    return (
      <td className={classes}>
        &nbsp;
      </td>
    );
  }

});
