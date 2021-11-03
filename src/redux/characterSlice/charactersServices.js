import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk("getCharacters", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=10`
  );
  return response.data;
});
