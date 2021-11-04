import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllQuotes = createAsyncThunk("quotes/fetchAll", async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}/quotes`
  );
  return response.data;
});
