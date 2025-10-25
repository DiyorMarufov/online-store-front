import { configureStore } from "@reduxjs/toolkit";
import setToken from "../../features/auth/model/authSlice";
import removeToken from "../../features/auth/model/authSlice";
import setUser from "../../features/auth/model/authSlice";

export const store = configureStore({
  reducer: {
    setToken,
    removeToken,
    setUser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
