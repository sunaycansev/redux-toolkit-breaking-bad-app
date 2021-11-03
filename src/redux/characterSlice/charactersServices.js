import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 12;

export const fetchCharacters = createAsyncThunk("getCharacters", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}`
  );
  return response.data;
});
