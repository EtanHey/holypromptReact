import React from 'react';
import CurrentDevice from './CurrentDevice';

const UsersDevices = () => {
  return (
    <div className="outputControl__usersDevices">
      <h3>Devices:</h3>
      <div className="outputControl__usersDevices-wrapper">
        <CurrentDevice />
        <CurrentDevice />
        <CurrentDevice />
      </div>
    </div>
  );
};

export default UsersDevices;
