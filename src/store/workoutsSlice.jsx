import { createSlice } from '@reduxjs/toolkit'

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: [],
    isLoaded: false,
    progress: {},
  },
  reducers: {
    setWorkouts(state, action) {
      state.workouts = action.payload.workouts
    },
    setWorkoutsLoaded(state, action) {
      state.isLoaded = true
    },
    updateCourseProgress(state, action) {
      const { workoutId, index, progress } = action.payload
      if (!state.progress[workoutId]) {
        state.progress[workoutId] = []
      }
      state.progress[workoutId][index] = progress
    },
  },
})

export const workoutsReducer = workoutsSlice.reducer
export const { setWorkouts, setWorkoutsLoaded, updateCourseProgress } =
  workoutsSlice.actions
