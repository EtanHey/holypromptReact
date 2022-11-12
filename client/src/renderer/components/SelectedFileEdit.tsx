/* eslint-disable jsx-a11y/no-static-element-interactions */
import { RefObject, useRef, useState } from 'react';
import { StyledTextArea } from './styledComponents';

const SelectedFileEdit = () => {
  const lineNumbersRef: RefObject<HTMLDivElement> = useRef(null);
  const textAreaRef: RefObject<HTMLTextAreaElement> = useRef(null);

  const [textAreaHeight, setTextAreaHeigh] = useState(32);
  function handleKeyUpTextArea(event: any) {
    const numberOfLines = event.target.value.split('\n').length;
    setTextAreaHeigh(() => {
      return 32 * numberOfLines;
    });

    const lineNumbersEl = lineNumbersRef.current;
    if (lineNumbersEl) {
      lineNumbersEl.innerHTML = Array(numberOfLines)
        .fill('<span></span>')
        .join('');
    }
  }
  return (
    <div className="selectedFileEdit">
      <div ref={lineNumbersRef} className="lineNumbers">
        <span> </span>
      </div>
      <StyledTextArea
        onChange={(ev: any) => handleKeyUpTextArea(ev)}
        ref={textAreaRef}
        height={textAreaHeight}
      />
    </div>
  );
};

export default SelectedFileEdit;
