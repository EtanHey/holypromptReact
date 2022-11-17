/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { FileInterface } from '../../interfaces&enums/fileInterface';
import { StatusEnum } from '../../interfaces&enums/statusEnums';
import { UsersInfo, UsersState } from '../../interfaces&enums/usersInterfaces';
import { getUsersInfoThunk, setUserInfo, getGoogleUserThunk } from './usersAPI';

const initialState: UsersState = {
  status: StatusEnum.IDLE,
  user: <UsersInfo>{},
  files: [],
  error: '',
};

export const usersSlice: Slice<UsersState> = createSlice({
  name: 'users',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeStatus: (state: UsersState) => {
      state.status = StatusEnum.IDLE;
    },
    addFileToUser: (
      state: UsersState,
      action: PayloadAction<FileInterface>
    ) => {
      state.files = [...state.files, action.payload];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsersInfoThunk.pending, (state: UsersState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getUsersInfoThunk.fulfilled, (state: UsersState, action) => {
        const { user } = action.payload;
        user.id = user._id;
        user._id = undefined;
        state.user = user;
        state.error = '';
        state.status = StatusEnum.IDLE;
      })
      .addCase(getUsersInfoThunk.rejected, (state: UsersState, action) => {
        const errorNumber = action.error.message;
        if (Number(errorNumber) === 404) {
          state.error = `User doesn't exist, Request denied with error ${errorNumber}`;
        }
        if (Number(errorNumber) === 403) {
          state.error = `The password you entered is wrong, Request denied with error ${errorNumber}`;
        }
        state.status = StatusEnum.FAILED;
      })
      .addCase(getGoogleUserThunk.pending, (state: UsersState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getGoogleUserThunk.fulfilled, (state: UsersState, action) => {
        const { user } = action.payload;
        user.id = `${user._id}`;
        user._id = undefined;
        state.user = user;
        state.status = StatusEnum.IDLE;
      })
      .addCase(getGoogleUserThunk.rejected, (state: UsersState, action) => {
        const errorNumber = action.error.message;
        if (errorNumber) {
          state.error = `User doesn't exist, Request denied with error ${errorNumber}`;
        }
        state.status = StatusEnum.FAILED;
      })
      .addCase(setUserInfo.pending, (state: UsersState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(
        setUserInfo.fulfilled,
        (
          state: UsersState
          // , action: PayloadAction<UsersState>
        ) => {
          state.status = StatusEnum.IDLE;
        }
      )
      .addCase(setUserInfo.rejected, (state: UsersState) => {
        state.status = StatusEnum.FAILED;
      });
  },
});

export const { changeStatus, addFileToUser } = usersSlice.actions;

export const selectUsersFiles = (state: RootState) => state.users.files;
export const selectUsersState = (state: RootState) => state.users.user;

export default usersSlice.reducer;
