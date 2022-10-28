import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UsersLoginInfo } from '../../interfaces&enums/usersInterfaces';

export const getUsersInfoThunk = createAsyncThunk(
  'users/fetchUsersInfo',
  async (loginInfo: UsersLoginInfo) => {
    const { user } = await window.electron.ipcRenderer.getUsersInfo(loginInfo);
    if (!Number.isNaN(user)) throw new Error(user);
    return user;
  }
);
export const setUserInfo = createAsyncThunk('map/setUsersInfo', async () => {
  const data = await window.electron.ipcRenderer.setUsersInfo();
  return data;
});

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&sensor=false&key=AddYourOwnKeyHere
