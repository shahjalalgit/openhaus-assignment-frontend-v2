import { createSlice } from "@reduxjs/toolkit";

const clearReducer = createSlice({
  name: 'clear',
  initialState: {},
  reducers: {
    clearStorages() {
      // Note that this should be left intentionally empty.
			// Clearing redux state and localForage happens in rootReducer.ts.
    },
  },
})
export const { clearStorages } = clearReducer.actions;