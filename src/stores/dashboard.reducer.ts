import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialDashboardState as initialState } from "@/lib/redux/initialState";

const dashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setClient(state, action: PayloadAction<string>) {
      state.client = action.payload;
    },
  },
});

const { setClient } = dashboardReducer.actions;

export type DashboardAction = ReturnType<typeof setClient>;

export default dashboardReducer.reducer;
