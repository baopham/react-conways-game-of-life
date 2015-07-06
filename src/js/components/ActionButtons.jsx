import React from 'react';
import PlayPauseButton from './PlayPauseButton.jsx';
import StepButton from './StepButton.jsx';
import ResetButton from './ResetButton.jsx';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';

export default React.createClass({

  render() {

    return (
      <ButtonGroup>
        <PlayPauseButton />
        <StepButton />
        <ResetButton />
      </ButtonGroup>
    );

  }

});
