import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";


export const createOurWork = createAsyncThunk(
  "ourWork/create",
  async (data, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/our-work/create",
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


export const getAllOurWork = createAsyncThunk(
  "ourWork/getAll",
  async (_, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/our-work/get-all",
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


export const deleteOurWork = createAsyncThunk(
  "ourWork/delete",
  async ({ id }, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: `/our-work/delete/${id}`,
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


const ourWorkSlice = createSlice({
  name: "ourWork",

  initialState: {
    works: [],
    loading: false,
    error: null,
    message: null,
    deletedMsg: null,
    deletedError: null,
  },

  reducers: {
    clearError(state) {
      state.error = null;
      state.deletedError = null;
    },
    clearMessage(state) {
      state.message = null;
      state.deletedMsg = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createOurWork.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOurWork.fulfilled, (state) => {
        state.loading = false;
        state.message = "Our Work created successfully";
      })
      .addCase(createOurWork.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getAllOurWork.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllOurWork.fulfilled, (state, action) => {
        state.loading = false;

        state.works = action.payload?.data || [];
      })
      .addCase(getAllOurWork.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteOurWork.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteOurWork.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedMsg = action.payload?.message;
      })
      .addCase(deleteOurWork.rejected, (state, action) => {
        state.loading = false;
        state.deletedError = action.payload;
      });
  },
});

export const { clearError, clearMessage } = ourWorkSlice.actions;

export default ourWorkSlice.reducer;
