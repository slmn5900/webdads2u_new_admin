import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FetchApi } from "@/app/api/FetchApi";

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
      return thunkAPI.rejectWithValue(err.message || "Something went wrong");
    }
  },
);

const positionSlice = createSlice({
  name: "positions",
  initialState: {
    loading: false,
    error: null,
    message: null,
    positions: [],
  },

  reducers: {
    clearPositionError(state) {
      state.error = null;
    },

    clearPositionMessage(state) {
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllPositions.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })

      .addCase(getAllPositions.fulfilled, (state, action) => {
        state.loading = false;
        state.positions = action.payload?.data || [];
        state.message =
          action.payload?.message || "Positions fetched successfully";
      })

      .addCase(getAllPositions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch positions";
      });
  },
});

export const { clearPositionError, clearPositionMessage } =
  positionSlice.actions;

export default positionSlice.reducer;
