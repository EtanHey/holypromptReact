import React, {
  ElementRef,
  LegacyRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectPromptState } from '../../../features/prompt/promptSlice';
import Editor from '../editor/Editor';
import { StyledPromptModal, StyledTextArea } from '../styledComponents';

const PromptModal = () => {
  const promptState = useAppSelector(selectPromptState);
  const lineNumbersRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handlePromptNumbering() {
      try {
        const numberOfLines = promptState.files.find((file) => {
          return file.name === promptState.currentFile?.name;
        })?.text.length;

        const lineNumbersEl = lineNumbersRef.current;
        if (lineNumbersEl) {
          lineNumbersEl.innerHTML = Array(numberOfLines)
            .fill('<span></span>')
            .join('');
        }
      } catch (error) {
        console.log(error);
      }
    }
    // if (styledTextAreaRef.current) {
    //   styledTextAreaRef.current.innerText = 'hello world';
    // }
    handlePromptNumbering();
  }, [promptState]);
  return (
    <StyledPromptModal
      bgColor={promptState.backgroundColor}
      textColor={promptState.color}
      fontSize={promptState.textSize}
      size={promptState.local.size}
      show={promptState.local.monitor}
    >
      <div className="styledPromptModalContainer">
        <div ref={lineNumbersRef} className="lineNumbers">
          <span> </span>
        </div>
        <div
        // readOnly

        // onChange={(event) => handleKeyUpTextArea(event)}
        >
          {promptState.files
            .find((file) => {
              return file.name === promptState.currentFile?.name;
            })
            ?.text.map((line) => {
              return <p>{line}</p>;
            })}
        </div>
      </div>
    </StyledPromptModal>
  );
};

export default PromptModal;
