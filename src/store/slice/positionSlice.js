import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "../../api/FetchApi";

export const createPosition = createAsyncThunk(
  "positions/createPosition",
  async (data, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/position/create",
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

export const getAllPositions = createAsyncThunk(
  "positions/getAllPositions",
  async (_, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/position/get-all",
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

export const deletePosition = createAsyncThunk(
  "positions/deletePosition",
  async ({ id }, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: `/position/delete/${id}`,
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

export const getAllCareers = createAsyncThunk(
  "positions/getAllCareers",
  async (_, thunkAPI) => {
    try {
      const response = await FetchApi({
        endpoint: "/career/get-all",
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

const positionSlice = createSlice({
  name: "positions",
  initialState: {
    positions: [],
    careers: [],
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
      .addCase(createPosition.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPosition.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Position created successfully";
      })
      .addCase(createPosition.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAllPositions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPositions.fulfilled, (state, action) => {
        state.loading = false;
        state.positions = action.payload?.data || [];
      })
      .addCase(getAllPositions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deletePosition.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePosition.fulfilled, (state, action) => {
        state.loading = false;
        state.deletedMsg = action.payload.message;
      })
      .addCase(deletePosition.rejected, (state, action) => {
        state.loading = false;
        state.deletedError = action.payload;
      })
      .addCase(getAllCareers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCareers.fulfilled, (state, action) => {
        state.loading = false;
        state.careers = action.payload?.applications || [];
      })
      .addCase(getAllCareers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearMessage } = positionSlice.actions;

export default positionSlice.reducer;
