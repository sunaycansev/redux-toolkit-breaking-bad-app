import { createSlice } from "@reduxjs/toolkit";
import { fetchAllQuotes } from "./quotesServices";

const initialState = {
  items: [],
  status: "idle",
};
export const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: {
    // fetch quotes
    [fetchAllQuotes.pending]: (state) => {
      state.status = "loading";
    },

    [fetchAllQuotes.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    [fetchAllQuotes.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const quotesSelector = (state) => state.quotes.items;
export const statusSelector = (state) => state.quotes.status;
export const errorSelector = (state) => state.quotes.error;

export default quotesSlice.reducer;
