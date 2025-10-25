import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IAuth {
  token: string | null;
  user: any;
}

const initialState: IAuth = {
  token: localStorage.getItem("access-token") || null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any | null>) => {
      state.token = action.payload;
      localStorage.setItem("access-token", action.payload);
    },
    removeToken: (state) => {
      state.token = null;
      localStorage.removeItem("access-token");
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, removeToken, setUser } = authSlice.actions;
export default authSlice.reducer;
