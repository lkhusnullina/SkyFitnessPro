import { createSlice } from '@reduxjs/toolkit'

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: [],
    isLoaded: false,
  },
  reducers: {
    setWorkouts(state, action) {
      state.workouts = action.payload.workouts;
    },
    setWorkoutsLoaded(state, action) {
      state.isLoaded = true;
    },
  },
})

export const workoutsReducer = workoutsSlice.reducer
export const { setWorkouts, setWorkoutsLoaded } = workoutsSlice.actions;