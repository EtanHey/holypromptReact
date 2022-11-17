/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  changeLocalPromptStatus,
  selectPromptState,
} from '../../../features/prompt/promptSlice';

const PromptToggle = () => {
  const dispatch = useAppDispatch();
  const promptState = useAppSelector(selectPromptState);
  return (
    <div className="outputControl__prompt-toggle">
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
