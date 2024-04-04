import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './coursesSlice'
import { authReducer } from './authSlice'
import {getCourses} from '../service/getCourses'
import { workoutsReducer } from './workoutsSlice'
import { firestoreApi } from '../service/firestoreApi'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    workouts: workoutsReducer,
    auth: authReducer,
    [getCourses.reducerPath]: getCourses.reducer,
    [firestoreApi.reducerPath]: firestoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(firestoreApi.middleware).concat(getCourses.middleware)
})
