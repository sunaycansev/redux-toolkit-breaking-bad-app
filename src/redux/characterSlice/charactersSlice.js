import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./charactersServices";

const initialState = {
  items: [],
};
export const charactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default charactersSlice.reducer;
