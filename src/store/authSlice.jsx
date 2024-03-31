import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    password: "",
    id: null,
    email: null,
    accessToken: null,
    refreshToken: null,
    authUser: null,
  },
  reducers: {
    setAuth(state, action) {
        //const { uid, email, accessToken, refreshToken} = action.payload
        state.password = action.payload.password;
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.accToken = action.payload.accessToken;
        state.refToken = action.payload.refreshToken;
        localStorage.setItem('user', JSON.stringify(state));
        console.log(JSON.parse(localStorage.getItem('user')));
    },
    // removeAuth(state) {
    //   state.pass = null;
    //   state.id = null;
    //   state.email = null;
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   localStorage.clear();
    //   localStorage.removeItem('user');
    // },
    setAuthUser(state, action) {
      state.authUser = action.payload;
    }
  },
})
export const { setAuth, removeAuth, setAuthUser, setPassword } = authSlice.actions
export const authReducer = authSlice.reducer