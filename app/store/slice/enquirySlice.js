import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const createEnquiry = createAsyncThunk(
  "enquiry/createEnquiry",
  async (payload, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/project-enquiry/create",
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

const enquirySlice = createSlice({
  name: "enquiry",

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
      .addCase(createEnquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })

      .addCase(createEnquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload?.message || "Enquiry sent successfully";
      })

      .addCase(createEnquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to submit enquiry";
      });
  },
});

export const { clearError, clearMessage } = enquirySlice.actions;
export default enquirySlice.reducer;
