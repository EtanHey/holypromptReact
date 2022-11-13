import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectPromptState } from '../../features/prompt/promptSlice';
import Editor from './Editor';
import { StyledPromptModal, StyledTextArea } from './styledComponents';

const PromptModal = () => {
  const [aspectRatio, setAspectRatio] = useState<string>('16 / 9');
  useEffect(() => {
    setAspectRatio(`${window.innerWidth} / ${window.innerHeight}`);
  }, []);
  const promptState = useAppSelector(selectPromptState);
  return (
    <StyledPromptModal
      bgColor={promptState.backgroundColor}
      textColor={promptState.color}
      fontSize={promptState.textSize}
      size={promptState.local.size}
      show={promptState.local.monitor}
      aspectRatio={aspectRatio}
    >
      <StyledTextArea />
    </StyledPromptModal>
  );
};

export default PromptModal;
