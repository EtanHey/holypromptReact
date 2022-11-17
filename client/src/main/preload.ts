import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { FileInterface } from '../interfaces&enums/fileInterface';
import { UsersInfo, UsersLoginInfo } from '../interfaces&enums/usersInterfaces';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    // user functions
    getUsersInfo: async (loginInfo: UsersLoginInfo) => {
      const data = await ipcRenderer.invoke('getUsersInfo', loginInfo);
      return data;
    },
    getGoogleUsersInfo: async (loginJWT: string) => {
      const data = await ipcRenderer.invoke('getGoogleUsersInfo', { loginJWT });
      return data;
    },
    setUsersInfo: async (info: UsersLoginInfo) => {
      const data = await ipcRenderer.invoke('setUsersInfo', info);
      return { data };
    },
    // file functions
    saveUserFiles: async (file: FileInterface) => {
      const data = await ipcRenderer.invoke('saveUserFiles', file);
      return { data };
    },
  },
});
