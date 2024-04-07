import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    password: "",
    id: null,
    email: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setAuth(state, action) {
        state.password = action.payload.password;
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.accToken = action.payload.accessToken;
        state.refToken = action.payload.refreshToken;
        localStorage.setItem('user', JSON.stringify(state));
    },
    removeAuth(state) {
      state.pass = null;
      state.id = null;
      state.email = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('user');
    },
    setAuthUser(state, action) {
      state.password = action.payload.user.password;
      state.id = action.payload.user.id;
      state.email = action.payload.user.email;
      state.accToken = action.payload.user.accessToken;
      state.refToken = action.payload.user.refreshToken;
    }
  },
})
export const { setAuth, removeAuth, setAuthUser, setPassword } = authSlice.actions
export const authReducer = authSlice.reducer