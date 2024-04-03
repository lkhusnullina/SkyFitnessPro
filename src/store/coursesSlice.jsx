import { createSlice } from '@reduxjs/toolkit'
import { Pictures } from '../constans'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    pictures: Pictures,
    courses: [],
    isLoaded: false,
  },
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload.courses;
    },
    setCoursesLoaded(state, action) {
      state.isLoaded = true;
    },
  },
  
})
export const coursesReducer = coursesSlice.reducer
export const { setCourses, setCoursesLoaded } = coursesSlice.actions;
