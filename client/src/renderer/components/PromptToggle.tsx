/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeLocalPromptStatus,
  selectPromptState,
} from '../../features/prompt/promptSlice';
import { PromptSizes } from '../../interfaces&enums/statusEnums';

const PromptToggle = () => {
  const dispatch = useAppDispatch();
  const promptState = useAppSelector(selectPromptState);
  return (
    <div
      className={
        promptState.local.monitor && promptState.local.size === PromptSizes.FULL
          ? 'outputControl__prompt-toggle on'
          : 'outputControl__prompt-toggle'
      }
    >
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(changeLocalPromptStatus(event.target.checked))
        }
        defaultChecked={promptState.local.monitor}
        type="checkbox"
        name="promptToggle"
        id="promptToggle"
      />
      <label htmlFor="promptToggle">
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
};

export default PromptToggle;
