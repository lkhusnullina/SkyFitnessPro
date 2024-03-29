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
        const { uid, email, accessToken, refreshToken} = action.payload
        state.uid = uid;
        state.email = email;
        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
        localStorage.setItem('user', JSON.stringify(state));
    }
  },
})
export const { setAuth } = authSlice.actions
export const authReducer = authSlice.reducer