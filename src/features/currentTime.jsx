import { createSlice } from "@reduxjs/toolkit";

export const currentTimeSlice = createSlice({
  name: "currentTime",
  initialState: {
    value: "",
  },
  reducers: {
    time: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { time } = currentTimeSlice.actions;

export default currentTimeSlice.reducer;
