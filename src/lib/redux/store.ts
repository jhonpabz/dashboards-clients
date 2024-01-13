"use client";

import { configureStore } from "@reduxjs/toolkit";
import { storage } from "@/lib/redux/storage";
import { persistReducer, persistStore } from "redux-persist";
import dashboardReducer from "@/stores/dashboard.reducer";

const persistConfig = (key: string) => ({
  key,
  storage,
});

export const store = configureStore({
  reducer: {
    dashboard: persistReducer(persistConfig("dashboard"), dashboardReducer),
  },
});

export const persistor = persistStore(store);

export type ReduxStore = typeof store;
export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
