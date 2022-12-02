/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RefObject, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { saveUserFilesThunk } from '../../../features/prompt/promptAPI';
import {
  selectPromptState,
  setCurrentFileText,
} from '../../../features/prompt/promptSlice';
import { selectUsersFiles } from '../../../features/users/usersSlice';
import { StyledTextArea } from '../styledComponents';

const SelectedFileEdit = () => {
  const dispatch = useAppDispatch();
  const promptState = useAppSelector(selectPromptState);
  const lineNumbersRef: RefObject<HTMLDivElement> = useRef(null);
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const [height, setHeight] = useState(32);
  function handleKeyUpTextArea(event: any) {
    try {
      const numberOfLines = event.target.value.split('\n').length;
      setHeight(() => {
        return 32 * numberOfLines;
      });
      const lineNumbersEl = lineNumbersRef.current;
      if (lineNumbersEl) {
        lineNumbersEl.innerHTML = Array(numberOfLines)
          .fill('<span></span>')
          .join('');
      }
      dispatch(setCurrentFileText(event.target.value.split('\n')));
      // dispatch(saveUserFilesThunk());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="selectedFileEdit">
      <div ref={lineNumbersRef} className="lineNumbers">
        <span> </span>
      </div>
      <StyledTextArea
        onChange={(ev: any) => handleKeyUpTextArea(ev)}
        defaultValue={promptState.files
          .find((file) => {
            return file.name === promptState.currentFile?.name;
          })
          ?.text.map((line) => {
            return `\n${line}`;
          })}
        ref={textAreaRef}
        height={height}
      />
    </div>
  );
};

export default SelectedFileEdit;
