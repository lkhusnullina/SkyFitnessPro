import { createSlice } from '@reduxjs/toolkit'

const workoutsSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: [],
  },
  reducers: {
    setWorkouts(state, action) {
      state.workouts = action.payload.workouts;
    }
  },
})

export const workoutsReducer = workoutsSlice.reducer
export const {setWorkouts} = workoutsSlice.actions;