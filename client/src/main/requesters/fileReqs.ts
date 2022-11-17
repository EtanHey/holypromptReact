/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { FileInterface } from '../../interfaces&enums/fileInterface';

const proxy = 'http://localhost:4005';

export async function saveUserFiles(file: File) {
  try {
    const { data } = await axios.post(`${proxy}/api/files/saveUserFiles`, file);
    console.log(data, 'returned from server');

    await axios.post(`${proxy}/api/users/addFileToUser`, data);
    return data;
  } catch (error) {
    console.log(error, 'error');
    return { ok: false };
  }
}
