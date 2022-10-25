import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum StatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface MarkersState {
  status: StatusEnum;
}

const initialState: MarkersState = {
  status: StatusEnum.FAILED,
};

export const markersSlice: any = createSlice({
  name: 'markers',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeStatus: (state: MarkersState) => {
      state.status = StatusEnum.IDLE;
    },
  },

  extraReducers: (builder) => {
    // builder.
  },
});

export const { changeStatus } = markersSlice.actions;

export default markersSlice.reducer;
