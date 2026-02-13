import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";


export const createSocialMedia = createAsyncThunk(
  "social/create",
  async (data, thunkAPI) => {
    try {
      const res = await FetchApi({
        endpoint: "/social-media/create",
        method: "POST",
        body: data,
      });

      if (res?.data?.success === false) {
        return thunkAPI.rejectWithValue(res?.data?.errors);
      }

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);


export const getAllSocialMedia = createAsyncThunk(
  "social/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await FetchApi({
        endpoint: "/social-media/get-all",
        method: "GET",
      });

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);


export const deleteSocialMedia = createAsyncThunk(
  "social/delete",
  async ({ id }, thunkAPI) => {
    try {
      const res = await FetchApi({
        endpoint: `/social-media/delete/${id}`,
        method: "DELETE",
      });

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const socialSlice = createSlice({
  name: "social",

  initialState: {
    list: [],
    loading: false,
    error: null,
    message: null,
    deletedMsg: null,
  },

  reducers: {
    clearSocialError(state) {
      state.error = null;
    },
    clearSocialMessage(state) {
      state.message = null;
      state.deletedMsg = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(createSocialMedia.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSocialMedia.fulfilled, (state) => {
        state.loading = false;
        state.message = "Created successfully";
      })
      .addCase(createSocialMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAllSocialMedia.fulfilled, (state, action) => {
        state.list = action.payload?.data || [];
      })

      .addCase(deleteSocialMedia.fulfilled, (state, action) => {
        state.deletedMsg = action.payload.message;
      });
  },
});

export const { clearSocialError, clearSocialMessage } = socialSlice.actions;

export default socialSlice.reducer;
