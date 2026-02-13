import { FetchApi } from "@/app/api/FetchApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      return thunkAPI.rejectWithValue(err?.message || "Something went wrong");
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
  },

  reducers: {
    clearSocialError: (state) => {
      state.error = null;
    },
    clearSocialMessage: (state) => {
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllSocialMedia.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllSocialMedia.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload?.data || [];
      })
      .addCase(getAllSocialMedia.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSocialError, clearSocialMessage } = socialSlice.actions;

export default socialSlice.reducer;
