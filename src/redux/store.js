import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characterSlice/charactersSlice";
import quotesSlice from "./quotesSlice/quotesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
    quotes: quotesSlice,
  },
});
