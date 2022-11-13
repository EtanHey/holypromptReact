/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from 'react';
import UserAgent from 'user-agents';
import Desktop from '../../../assets/SVGs/Desktop';
import Phone from '../../../assets/SVGs/Phone';
import Tablet from '../../../assets/SVGs/Tablet';
import { DeviceTypes } from '../../interfaces&enums/statusEnums';

const CurrentDevice = () => {
  const [device, setDevice] = useState<string>();
  // @ts-ignore
  // const WURFLFormFactor = WURFL.form_factor;
  // @ts-ignore
  // const deviceType = deviceAPI.deviceType;
  useEffect(() => {
    const userAgent = new UserAgent();
    const deviceType = userAgent.data.deviceCategory;
    if (deviceType === DeviceTypes.DESKTOP) {
      setDevice(DeviceTypes.DESKTOP);
    }
    if (deviceType === DeviceTypes.PHONE) {
      setDevice(DeviceTypes.PHONE);
    }
    if (deviceType === DeviceTypes.TABLET) {
      setDevice(DeviceTypes.TABLET);
    }
  }, [device]);
  return (
    <div className="device">
      <h6 className="device__status">ONLINE</h6>
      {device === DeviceTypes.DESKTOP ? <Desktop /> : null}
      {device === DeviceTypes.TABLET ? <Tablet /> : null}
      {device === DeviceTypes.PHONE ? <Phone /> : null}
    </div>
  );
};

export default CurrentDevice;
