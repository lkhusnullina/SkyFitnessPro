import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    uid: null,
    email: null,
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setAuth(state, action) {
        //const { uid, email, accessToken, refreshToken} = action.payload
        state.uid = action.payload
        // state.email = email;
        // state.accessToken = accessToken;
        // state.refreshToken = refreshToken;
        localStorage.setItem('user', JSON.stringify(state));
        console.log(localStorage.getItem('user'));
        console.log(state.uid);
    },
    removeAuth(state) {
      //const { uid, email, accessToken, refreshToken} = action.payload
      state.uid = null;
      state.email = null;
      state.accessToken = null;
      state.refreshToken = null;
      //localStorage.clear();
      localStorage.removeItem('user');
    }
  },
})
export const { setAuth, removeAuth } = authSlice.actions
export const authReducer = authSlice.reducer