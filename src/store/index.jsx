import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './coursesSlice'
import { authReducer } from './authSlice'
import { FirebaseApi } from '../service/firebaseApi'
import { workoutsReducer } from './workoutsSlice'
import { usersReducer } from './usersSlice'

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    workouts: workoutsReducer,
    auth: authReducer,
    users: usersReducer,
    [FirebaseApi.reducerPath]: FirebaseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FirebaseApi.middleware)
})