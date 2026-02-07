import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (data, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/blogWebsite/create",
        method: "POST",
        body: data,
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

export const updateBlog = createAsyncThunk(
  "blog/updateBlog",
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: `/blogWebsite/update/${id}`,
        method: "PUT",
        body: data,
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

export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async ({ id }, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: `/blogWebsite/delete/${id}`,
        method: "DELETE",
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
    message: null,
    deletedMsg: null,
    deletedError: null,
  },

  reducers: {
    clearBlogError(state) {
      state.error = null;
      state.deletedError = null;
    },
    clearBlogMessage(state) {
      state.message = null;
      state.deletedMsg = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBlog.fulfilled, (state) => {
        state.loading = false;
        state.message = "Blog created successfully";
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateBlog.fulfilled, (state) => {
        state.loading = false;
        state.message = "Blog updated successfully";
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBlogDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.singleBlog = action.payload?.data?.blog;
      })
      .addCase(getBlogDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedMsg = action.payload.message;
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.deletedError = action.payload;
      });
  },
});

export const { clearBlogError, clearBlogMessage } = blogSlice.actions;

export default blogSlice.reducer;
