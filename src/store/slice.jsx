import { createSlice } from '@reduxjs/toolkit'
import { Pictures } from '../constans'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    pictures: Pictures,
    courses: [],
  },
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload.courses;
    }
  },
  },
})
export const coursesReducer = coursesSlice.reducer
export const {setCourses} = coursesSlice.actions;
