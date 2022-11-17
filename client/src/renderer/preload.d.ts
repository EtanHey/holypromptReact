import { FileInterface } from '../interfaces&enums/fileInterface';
import { File } from '../interfaces&enums/promptInterfaces';
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
        // user functions:
        getUsersInfo(info: UsersLoginInfo): any;
        getGoogleUsersInfo(loginJWT: string): any;
        setUsersInfo(): UsersState;
        // file functions:
        saveUserFiles(file: FileInterface): any;
      };
    };
  }
}

export {};
