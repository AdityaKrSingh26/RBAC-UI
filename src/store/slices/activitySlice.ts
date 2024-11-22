import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivityLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: string;
}

interface ActivityState {
  logs: ActivityLog[];
  loading: boolean;
  error: string | null;
}

const initialState: ActivityState = {
  logs: [],
  loading: false,
  error: null,
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setLogs: (state, action: PayloadAction<ActivityLog[]>) => {
      state.logs = action.payload;
    },
    addLog: (state, action: PayloadAction<ActivityLog>) => {
      state.logs.unshift(action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setLogs,
  addLog,
  setLoading,
  setError,
} = activitySlice.actions;

export default activitySlice.reducer;