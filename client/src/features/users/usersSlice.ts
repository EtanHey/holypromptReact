/* eslint-disable import/no-cycle */
import { createSlice, Slice } from '@reduxjs/toolkit';
import { StatusEnum } from '../../interfaces&enums/statusEnums';
import { UsersInfo, UsersState } from '../../interfaces&enums/usersInterfaces';
import { getUsersInfoThunk, setUserInfo, getGoogleUserThunk } from './usersAPI';

const initialState: UsersState = {
  status: StatusEnum.IDLE,
  user: <UsersInfo>{},
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
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsersInfoThunk.pending, (state: UsersState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getUsersInfoThunk.fulfilled, (state: UsersState, action) => {
        const { user } = action.payload;
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

export const { changeStatus } = usersSlice.actions;

export default usersSlice.reducer;
