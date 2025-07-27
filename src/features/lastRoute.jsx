import { createSlice } from "@reduxjs/toolkit";

export const lastRouteSlice = createSlice({
  name: "lastRouteToReview",
  initialState: { value: "record" },
  reducers: {
    uploadType: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { uploadType } = lastRouteSlice.actions;

export default lastRouteSlice.reducer;
