import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "@/app/api/FetchApi";

export const createHireUs = createAsyncThunk(
  "hireUs/createHireUs",
  async (payload, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/hireus/create",
        method: "POST",
        body: payload,
      });

      if (response?.data?.success === false) {
        return thunkAPI.rejectWithValue(response?.data?.errors);
      }

      return response?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Something went wrong");
    }
  },
);

const hireUsSlice = createSlice({
  name: "hireUs",

  initialState: {
    loading: false,
    error: null,
    message: null,
  },

  reducers: {
    clearHireUsError(state) {
      state.error = null;
    },
    clearHireUsMessage(state) {
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createHireUs.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })

      .addCase(createHireUs.fulfilled, (state, action) => {
        state.loading = false;
        state.message =
          action.payload?.message || "Request submitted successfully";
      })

      .addCase(createHireUs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Submission failed";
      });
  },
});

export const { clearHireUsError, clearHireUsMessage } = hireUsSlice.actions;

export default hireUsSlice.reducer;
