import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characterSlice/charactersSlice";

export const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});
