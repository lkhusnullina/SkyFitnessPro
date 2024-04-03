import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './coursesSlice'
import { authReducer } from './authSlice'
import {getCourses} from '../service/getCourses'
import { workoutsReducer } from './workoutsSlice'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    workouts: workoutsReducer,
    auth: authReducer,
    [getCourses.reducerPath]: getCourses.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getCourses.middleware)
})
