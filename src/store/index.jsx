import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './slice'
import { authReducer } from './authSlice'
import {getCourses} from '../service/getCourses'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
    [getCourses.reducerPath]: getCourses.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getCourses.middleware)
})
