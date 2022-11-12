import SelectedFileEdit from './SelectedFileEdit';
import { StyledEditor } from './styledComponents';
import Tabs from './Tabs';

const Editor = () => {
  return (
    <StyledEditor>
      <Tabs />
      <SelectedFileEdit />
    </StyledEditor>
  );
};

export default Editor;
