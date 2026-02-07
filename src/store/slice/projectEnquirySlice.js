import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const getAllProjectEnquiries = createAsyncThunk(
  "projectEnquiry/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await FetchApi({
        endpoint: "/project-enquiry/get-all",
        method: "GET",
      });

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const projectEnquirySlice = createSlice({
  name: "projectEnquiry",

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearProjectEnquiryError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllProjectEnquiries.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProjectEnquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload?.inquiries || []; 
      })

      .addCase(getAllProjectEnquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProjectEnquiryError } = projectEnquirySlice.actions;

export default projectEnquirySlice.reducer;
