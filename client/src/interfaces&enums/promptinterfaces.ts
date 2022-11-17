import { FileInterface } from './fileInterface';
import { PromptSizes, StatusEnum } from './statusEnums';

export interface PromptState {
  status: StatusEnum;
  color: string;
  textSize: string;
  font: string;
  backgroundColor: string;
  speed: number;
  files: Array<FileInterface>;
  local: {
    monitor: boolean;
    size?: PromptSizes;
  };
  currentFile?: FileInterface;
}
