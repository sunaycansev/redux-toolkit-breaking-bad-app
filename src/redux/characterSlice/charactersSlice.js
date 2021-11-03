import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./charactersServices";

const initialState = {
  items: [],
  isLoading: false,
};
export const charactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
