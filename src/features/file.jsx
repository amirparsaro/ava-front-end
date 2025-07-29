import { createSlice } from "@reduxjs/toolkit";

export const fileURLSlice = createSlice({
  name: "inputValue",
  initialState: {
    value: "",
  },
  reducers: {
    fileURL: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fileURL } = fileURLSlice.actions;

export default fileURLSlice.reducer;
