import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const uploadMedia = createAsyncThunk(
  "media/uploadMedia",
  async ({ formData }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.accessToken;
    try {
      const response = await FetchApi({
        endpoint: "/media/upload",
        method: "POST",
        body: formData,
        token,
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

export const getMediaList = createAsyncThunk(
  "media/getMediaList",
  async ({ type, limit, continuationToken }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.accessToken;
    try {
      let query = `?type=${type}&limit=${limit || 10}`;
      if (continuationToken) {
        query += `&continuationToken=${continuationToken}`;
      }
      const response = await FetchApi({
        endpoint: `/media/list${query}`,
        method: "GET",
        token,
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

export const deleteMedia = createAsyncThunk(
  "media/deleteMedia",
  async ({ key }, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state?.auth?.accessToken;
    try {
      const response = await FetchApi({
        endpoint: "/media/delete",
        method: "DELETE",
        body: { key },
        token,
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

const mediaSlice = createSlice({
  name: "media",
  initialState: {
    files: [],
    loadingMore: false,
    loading: false,
    pagination: null,
    error: null,
    message: null,
    deleteMessage: null,
  },
  reducers: {
    clearMediaError(state) {
      state.error = null;
    },
    clearMediaMessage(state) {
      state.message = null;
      state.deleteMessage = null;
    },
    resetMedia(state) {
      state.files = [];
      state.pagination = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadMedia.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadMedia.fulfilled, (state) => {
        state.loading = false;
        state.message = "Media uploaded successfully";
      })
      .addCase(uploadMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getMediaList.pending, (state, action) => {
        if (action.meta.arg?.continuationToken) {
          state.loadingMore = true;
        } else {
          state.loading = true;
        }
      })
      .addCase(getMediaList.fulfilled, (state, action) => {
        state.loading = false;
        state.loadingMore = false;
        const newFiles = action.payload?.files || [];
        if (action.meta.arg?.continuationToken) {
          state.files = [...state.files, ...newFiles];
        } else {
          state.files = newFiles;
        }

        state.pagination = {
          nextToken: action.payload?.nextContinuationToken || null,
          hasNextPage: action.payload?.hasNextPage || false,
        };
      })
      .addCase(getMediaList.rejected, (state, action) => {
        state.loading = false;
        state.loadingMore = false;
        state.error = action.payload;
      })

      .addCase(deleteMedia.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteMessage = action.payload?.message;
      })
      .addCase(deleteMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMediaError, clearMediaMessage, resetMedia } =
  mediaSlice.actions;

export default mediaSlice.reducer;
