import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const getAllBlogs = createAsyncThunk(
  "blog/getAllBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/blogWebsite/get-all",
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

export const getBlogDetails = createAsyncThunk(
  "blog/getBlogDetails",
  async (id, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: `/blogWebsite/get/${id}`,
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

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    singleBlog: null,
    loading: false,
    error: null,
  },

  reducers: {
    clearBlogError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload?.blogs || [];
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBlogDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload?.blog;
      })
      .addCase(getBlogDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBlogError } = blogSlice.actions;

export default blogSlice.reducer;
