import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const getAllOurWork = createAsyncThunk(
  "ourWork/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/our-work/get-all",
        method: "GET",
      });

      if (response?.data?.success === false) {
        return thunkAPI.rejectWithValue(response?.data?.errors);
      }

      return response?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const ourWorkSlice = createSlice({
  name: "ourWork",

  initialState: {
    works: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllOurWork.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOurWork.fulfilled, (state, action) => {
        state.loading = false;
        state.works = action.payload?.data || [];
      })
      .addCase(getAllOurWork.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = ourWorkSlice.actions;

export default ourWorkSlice.reducer;
