/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PromptState } from '../../interfaces&enums/promptinterfaces';
import { PromptSizes, StatusEnum } from '../../interfaces&enums/statusEnums';
import {
  getUsersInfoThunk,
  setUserInfo,
  getGoogleUserThunk,
} from './promptAPI';

const initialState: PromptState = {
  status: StatusEnum.IDLE,
  color: 'var(--white)',
  backgroundColor: 'var(--black)',
  font: "'Rubik', sans-serif",
  textSize: '16px',
  speed: 1,
  local: {
    monitor: false,
  },
};

export const promptSlice: Slice<PromptState> = createSlice({
  name: 'prompt',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeLocalPromptSize: (
      state: PromptState,
      action: PayloadAction<PromptSizes>
    ) => {
      state.local.size = action.payload;
    },
    changeLocalPromptStatus: (
      state: PromptState,
      action: PayloadAction<boolean>
    ) => {
      state.local.monitor = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUsersInfoThunk.pending, (state: PromptState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getUsersInfoThunk.fulfilled, (state: PromptState, action) => {
        state.status = StatusEnum.IDLE;
      })
      .addCase(getUsersInfoThunk.rejected, (state: PromptState, action) => {
        state.status = StatusEnum.FAILED;
      })
      .addCase(getGoogleUserThunk.pending, (state: PromptState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(getGoogleUserThunk.fulfilled, (state: PromptState, action) => {
        state.status = StatusEnum.IDLE;
      })
      .addCase(getGoogleUserThunk.rejected, (state: PromptState, action) => {
        state.status = StatusEnum.FAILED;
      })
      .addCase(setUserInfo.pending, (state: PromptState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(
        setUserInfo.fulfilled,
        (
          state: PromptState
          // , action: PayloadAction<PromptState>
        ) => {
          state.status = StatusEnum.IDLE;
        }
      )
      .addCase(setUserInfo.rejected, (state: PromptState) => {
        state.status = StatusEnum.FAILED;
      });
  },
});

export const selectPromptState = (state: RootState) => state.prompt;

export const { changeLocalPromptSize, changeLocalPromptStatus } =
  promptSlice.actions;

export default promptSlice.reducer;
