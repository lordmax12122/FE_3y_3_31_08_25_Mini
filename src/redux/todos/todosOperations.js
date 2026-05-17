import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6a002f572b7ab34960301f2a.mockapi.io";

// const baseUrl = "https://6a002f572b7ab34960301f2a.mockapi.io";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkAPI) => {
    try {
      const fetchData = await axios.get(`/todos`);
      const data = fetchData.data;

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
