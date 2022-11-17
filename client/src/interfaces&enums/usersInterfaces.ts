import { FileInterface } from './fileInterface';
import { File } from './promptInterfaces';
import { StatusEnum } from './statusEnums';

export interface UsersInfo {
  name: { first: string; last: string };
  email: string;
  id: string;
}

export interface UsersState {
  status: StatusEnum;
  user: UsersInfo;
  files: Array<FileInterface>;
  error: string;
}
export interface UsersLoginInfo {
  email: string;
  password: string;
}
