import StatusEnum from './statusEnums';

export interface UsersInfo {
  name: { first: string; last: string };
  email: string;
}

export interface UsersState {
  status: StatusEnum;
  user: UsersInfo;
  error: string;
}
export interface UsersLoginInfo {
  email: string;
  password: string;
}
