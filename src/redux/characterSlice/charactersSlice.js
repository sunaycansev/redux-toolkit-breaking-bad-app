import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const charactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
});

export default charactersSlice.reducer;
