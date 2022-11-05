import {
  UsersInfo,
  UsersLoginInfo,
  UsersState,
} from '../interfaces&enums/usersInterfaces';

import { Channels } from '../main/preload';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: Channels,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: Channels, func: (...args: unknown[]) => void): void;
        checkUserFromCookie(): any;
        getUsersInfo(info: UsersLoginInfo): any;
        getGoogleUsersInfo(loginJWT: string): any;
        setUsersInfo(): UsersState;
      };
    };
  }
}

export {};
