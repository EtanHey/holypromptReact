import React from 'react';
import CurrentDevice from './CurrentDevice';

const OutputControl = () => {
  return (
    <div className="outputControl">
      <div className="outputControl__devices">
        <h3>Devices:</h3>
        <div className="outputControl__devices-wrapper">
          <CurrentDevice />
          <CurrentDevice />
          <CurrentDevice />
        </div>
      </div>
      <div className="outputControl__prompts">
        <div className="outputControl__prompts-toggle">
          <input type="checkbox" name="toggle" id="toggle" />
        </div>
        <div className="outputControl__prompts-size">

        </div>
      </div>
    </div>
  );
};

export default OutputControl;
