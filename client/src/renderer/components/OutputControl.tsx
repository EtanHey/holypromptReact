/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { RefObject, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  changeLocalPromptSize,
  changeLocalPromptStatus,
  selectPromptState,
} from '../../features/prompt/promptSlice';
import { PromptSizes } from '../../interfaces&enums/statusEnums';
import CurrentDevice from './CurrentDevice';
import PromptToggle from './PromptToggle';

const OutputControl = () => {
  const dispatch = useAppDispatch();
  const promptSizeRef: RefObject<HTMLDivElement> = useRef(null);
  const promptState = useAppSelector(selectPromptState);
  function toggleBackground(ev: any) {
    if (promptSizeRef.current) {
      const childrenArray = Array.from(promptSizeRef.current.children);
      childrenArray.forEach((child: any) => {
        child.style.backgroundColor = 'var(--gray3)';
        child.style.color = '#868686';
      });
    }
    ev.target.style.backgroundColor = 'var(--blue4)';
    ev.target.style.color = 'var(--white)';
  }
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
      <div className="outputControl__prompt">
        <PromptToggle />
        <div
          ref={promptSizeRef}
          onClick={toggleBackground}
          className="outputControl__prompt-size"
        >
          {Object.values(PromptSizes).map((size) => {
            return (
              <button
                key={size}
                onClick={() => dispatch(changeLocalPromptSize(size))}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutputControl;
