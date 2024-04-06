import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    idUserCourses:[],
    purchasedCourses: null,
    isLoaded: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload.users
    },
    setIdUserCourses(state, action) {
      state.idUserCourses = action.payload
    },
    setIdUserCoursesLoaded(state) {
      state.isLoaded = true;
    },
    setPurchasedCourses(state, action) {
      state.purchasedCourses = action.payload.courses
    },
  },
  
})
export const usersReducer = usersSlice.reducer
export const { setUsers, setIdUserCourses, setIdUserCoursesLoaded, setPurchasedCourses } = usersSlice.actions;