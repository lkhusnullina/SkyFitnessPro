import { createSlice } from '@reduxjs/toolkit'
import { child, ref, set } from 'firebase/database'
import { db } from '../firebase'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    idUserCourses:[],
    purchasedCourses: null,
    isLoaded: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload.users
    },
    setIdUserCourses(state, action) {
      state.idUserCourses = action.payload
    },
    setIdUserCoursesLoaded(state) {
      state.isLoaded = true;
    },
    setPurchasedCourses(state, action) {
      state.purchasedCourses = action.payload.courses
    },
    updatePurchasedCourses(state, action) {
      const {courseId, workoutId, progress, userId} = action.payload
      console.log(courseId)
      console.log(workoutId)
      console.log(progress)
      const updated = state.purchasedCourses;
      const upCourse = updated.find((course) => course._id === courseId)
      const upWorkout = upCourse.workouts.find((w) => w._id === workoutId);

      for (let key of Object.keys(progress)) {
        upWorkout.exercises.find(p => p.name === key).count = progress[key]
      }

      state.purchasedCourses = updated

      const dbRef = ref(db)
      set(child(dbRef, `users/${userId}/courses`), updated)
      console.log(updated)
    }
  },
  
})
export const usersReducer = usersSlice.reducer
export const { setUsers, setIdUserCourses, setIdUserCoursesLoaded, setPurchasedCourses, updatePurchasedCourses } = usersSlice.actions;