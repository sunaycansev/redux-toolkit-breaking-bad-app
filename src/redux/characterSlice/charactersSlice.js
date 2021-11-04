import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./charactersServices";

const initialState = {
  items: [],
  status: "idle",
  page: 0,
  hasNextPage: true,
};
export const charactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacters.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCharacters.fulfilled]: (state, action) => {
      if (action.payload.length === 12) {
        state.items = [...state.items, ...action.payload];
        state.page += 1;
      } else {
        state.hasNextPage = false;
      }

      state.status = "succeeded";
    },
    [fetchCharacters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default charactersSlice.reducer;
