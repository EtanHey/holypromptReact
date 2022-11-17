import CurrentDevice from './usersDevices/CurrentDevice';
import LocalPromptControls from './LocalPromptControls';
import PromptSizeController from './PromptSizeController';
import PromptToggle from './PromptToggle';
import UsersDevices from './usersDevices/UsersDevices';

const OutputControl = () => {
  return (
    <div className="outputControl">
      <UsersDevices />
      <LocalPromptControls />
    </div>
  );
};

export default OutputControl;
