import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", "true");
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("isLoggedIn");
    },
    signup(state, action) {
      localStorage.setItem("user", JSON.stringify(action.payload));
    }
  }
});
export const { login, logout, signup } = userSlice.actions;

export default userSlice.reducer;
