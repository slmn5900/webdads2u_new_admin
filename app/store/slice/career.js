import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const createCareer = createAsyncThunk(
  "career/createCareer",
  async (payload, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/career/create",
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

const careerSlice = createSlice({
  name: "career",

  initialState: {
    loading: false,
    error: null,
    message: null,
  },

  reducers: {
    clearError(state) {
      state.error = null;
    },
    clearMessage(state) {
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createCareer.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })

      .addCase(createCareer.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message || "Applied successfully";
      })

      .addCase(createCareer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to submit";
      });
  },
});

export const { clearError, clearMessage } = careerSlice.actions;
export default careerSlice.reducer;
