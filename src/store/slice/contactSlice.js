import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const getAllContacts = createAsyncThunk(
  "contact/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await FetchApi({
        endpoint: "/contact/get-all",
        method: "GET",
      });

      return res?.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

const contactSlice = createSlice({
  name: "contact",

  initialState: {
    list: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearContactError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllContacts.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload?.contacts || [];
      })

      .addCase(getAllContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearContactError } = contactSlice.actions;

export default contactSlice.reducer;
