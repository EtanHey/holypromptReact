/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RefObject, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
  changeLocalPromptSize,
  selectPromptState,
} from '../../../features/prompt/promptSlice';
import { PromptSizes } from '../../../interfaces&enums/statusEnums';

const PromptSizeController = () => {
  const promptSizeRef: RefObject<HTMLDivElement> = useRef(null);
  const dispatch = useAppDispatch();
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
  );
};

export default PromptSizeController;
