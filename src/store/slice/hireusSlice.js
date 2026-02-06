import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const getAllHireUs = createAsyncThunk(
  "hireus/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await FetchApi({
        endpoint: "/hireus/get-all",
        method: "GET",
      });

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const hireusSlice = createSlice({
  name: "hireus",

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearHireUsError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllHireUs.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllHireUs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload?.hires || [];
      })

      .addCase(getAllHireUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearHireUsError } = hireusSlice.actions;

export default hireusSlice.reducer;
