import { createSlice } from '@reduxjs/toolkit'

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: [],
    isLoaded: false,
    progress: {},
    workoutProgress: [],
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
    setWorkoutProgress(state, action) {
      state.workoutProgress = action.payload
    },
  },
})

export const workoutsReducer = workoutsSlice.reducer
export const { setWorkouts, setWorkoutsLoaded, updateCourseProgress, setWorkoutProgress } =
  workoutsSlice.actions
