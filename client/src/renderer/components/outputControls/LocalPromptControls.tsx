import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectPromptState } from '../../../features/prompt/promptSlice';
import { PromptSizes } from '../../../interfaces&enums/statusEnums';
import PromptSizeController from './PromptSizeController';
import PromptToggle from './PromptToggle';

const LocalPromptControls = () => {
  const promptState = useAppSelector(selectPromptState);
  return (
    <div
      className={
        promptState.local.monitor && promptState.local.size === PromptSizes.FULL
          ? 'outputControl__prompt on'
          : 'outputControl__prompt'
      }
    >
      <PromptToggle />
      <PromptSizeController />
    </div>
  );
};

export default LocalPromptControls;
