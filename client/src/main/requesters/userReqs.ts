/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { UsersLoginInfo } from '../../interfaces&enums/usersInterfaces';

const proxy = 'http://localhost:4005';

export async function getUsersInfo(loginInfo: UsersLoginInfo) {
  try {
    const { data } = await axios.post(
      `${proxy}/api/users/getUsersInfo`,
      loginInfo
    );
    return data;
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}
export async function getGoogleUsersInfo(loginJWT: string) {
  try {
    const { data } = await axios.post(
      `${proxy}/api/users/getGoogleUsersInfo`,
      loginJWT
    );
    return data;
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}
