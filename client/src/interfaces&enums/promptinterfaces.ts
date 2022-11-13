import { PromptSizes, StatusEnum } from './statusEnums';

export interface PromptState {
  status: StatusEnum;
  color: string;
  textSize: string;
  font: string;
  backgroundColor: string;
  speed: number;
  file?: string;
  local: {
    monitor: boolean;
    size?: PromptSizes;
  };
}
export default PromptState;
