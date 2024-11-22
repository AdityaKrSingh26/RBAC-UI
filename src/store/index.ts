import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import rolesReducer from './slices/rolesSlice';
import activityReducer from './slices/activitySlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    roles: rolesReducer,
    activity: activityReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;