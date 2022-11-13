import { useAppSelector } from '../../app/hooks';
import { selectPromptState } from '../../features/prompt/promptSlice';
import SelectedFileEdit from './SelectedFileEdit';
import { StyledEditor } from './styledComponents';
import Tabs from './Tabs';

const Editor = () => {
  const promptState = useAppSelector(selectPromptState);
  return (
    <StyledEditor
      textColor={promptState.color}
      fontSize={promptState.textSize}
      bgColor={promptState.backgroundColor}
    >
      <Tabs />
      <SelectedFileEdit />
    </StyledEditor>
  );
};

export default Editor;
