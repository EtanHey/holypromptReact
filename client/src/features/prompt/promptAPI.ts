import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FileInterface } from '../../interfaces&enums/fileInterface';
import { UsersLoginInfo } from '../../interfaces&enums/usersInterfaces';

export const saveUserFilesThunk = createAsyncThunk(
  'files/saveUserFiles',
  async (file: FileInterface) => {
    const { data } = await window.electron.ipcRenderer.saveUserFiles(file);
    return data;
  }
);
export const getUsersInfoThunk = createAsyncThunk(
  'users/fetchUsersInfo',
  async (loginInfo: UsersLoginInfo) => {
    const { user } = await window.electron.ipcRenderer.getUsersInfo(loginInfo);
    if (!Number.isNaN(Number(user))) throw new Error(user);
    return { user };
  }
);
