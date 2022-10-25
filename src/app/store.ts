import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import markersReducer from '../features/markers/markersSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['your/action/type'],
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          'meta.arg',
          'payload.timestamp',
          'payload.location',
          `payload.circle.location`,
        ],
        // Ignore these paths in the state
        ignoredPaths: [
          'items.dates',
          `circles.currentList.circle.location`,
          'circles.lists.0.circle.location',
          `markers.markers`,
          'circles.lists',
        ],
      },
    }),

  reducer: {
    markers: markersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
