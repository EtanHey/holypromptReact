/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { PromptState } from '../../interfaces&enums/promptInterfaces';
import { PromptSizes, StatusEnum } from '../../interfaces&enums/statusEnums';
import { saveUserFilesThunk } from './promptAPI';

const initialState: PromptState = {
  status: StatusEnum.IDLE,
  color: 'var(--white)',
  backgroundColor: 'var(--black)',
  font: "'Rubik', sans-serif",
  textSize: '16px',
  files: [],
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
    setCurrentFileText: (
      state: PromptState,
      action: PayloadAction<Array<string>>
    ) => {
      const currentFile = state.files.find((file) => {
        if (state.currentFile) {
          return file.name === state.currentFile.name;
        }
        return undefined;
      });
      if (currentFile) {
        currentFile.text = action.payload;
        console.log(action.payload, 'action.payload');
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(saveUserFilesThunk.pending, (state: PromptState) => {
        state.status = StatusEnum.LOADING;
      })
      .addCase(saveUserFilesThunk.fulfilled, (state: PromptState, action) => {
        state.status = StatusEnum.IDLE;
      })
      .addCase(saveUserFilesThunk.rejected, (state: PromptState, action) => {
        state.status = StatusEnum.FAILED;
      });
  },
});

export const selectPromptState = (state: RootState) => state.prompt;
export const selectCurrentFile = (state: RootState) => state.prompt.currentFile;

export const {
  changeLocalPromptSize,
  changeLocalPromptStatus,
  setCurrentFileText,
} = promptSlice.actions;

export default promptSlice.reducer;
