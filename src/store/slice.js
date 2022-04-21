import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
  name: "query",
  initialState: {
    value: ""
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    reset: (state, action) => {
      state.value = "";
    }
  }
});

export const { set, reset } = querySlice.actions;

export default querySlice.reducer; 