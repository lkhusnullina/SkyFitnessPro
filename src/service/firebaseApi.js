import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { child, get, ref, set } from 'firebase/database'
import { db } from '../firebase'

export const FirebaseApi = createApi({
  reducerPath: 'firebase',
  tagTypes: ['Courses', 'Workouts', 'Users', 'User'],
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/'
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => ({
        url: 'courses.json'
      }),
      providesTags: ['Courses']
    }),
    getCourseId: builder.query({
      query: (id) => ({
        url: `courses/${id}.json`,
        method: 'GET'
      }),
      providesTags: ['Courses']
    }),

    getAllWorkouts: builder.query({
      query: () => ({
        url: 'workouts.json'
      }),
      providesTags: ['Workouts']
    }),
    getWorkoutsId: builder.query({
      query: (id) => ({
        url: `workouts/${id}.json`,
        method: 'GET'
      }),
      providesTags: ['Workouts']
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `users.json`,
        method: 'GET'
      }),
      providesTags: ['Users']
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `users/${id}.json`,
        method: 'GET'
      }),
      providesTags: ['Users']
    }),
    addUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}.json`,
        method: 'POST'
      }),
      invalidatesTags: ['Users']
    }),
    getIdUserCourses: builder.query({
      query: (id) => ({
        url: `users/${id}/courses.json`,
        method: 'GET'
      }),
      providesTags: ['User']
    }),
    addCourseToUser: builder.mutation({
      async queryFn({ userId, courseId }) {
        try {
          await set(ref(db, 'users/' + userId + '/courses/' + courseId), {
            courseId
          })
        } catch (error) {
          console.error(error)
        }
      },
      invalidatesTags: ['User']
    }),
    addFullCourseToUser: builder.mutation({
      async queryFn({ userId, course }) {
        try {
          const dbRef = ref(db)
          const snapshot = await get(child(dbRef, `users/${userId}/courses`))
          let courses = []
          if (snapshot.exists()) {
            courses = [...snapshot.val(), course]
          } else {
            courses.push(course)
          }
          await set(child(dbRef, `users/${userId}/courses`), courses)
          return {data: courses}
        } catch (error) {
          console.error(error)
        }
      },
      invalidatesTags: ['User']
    }),
    updateUserCourses: builder.mutation({
      async queryFn({ userId, courses }) {
        try {
          const dbRef = ref(db)
          await set(child(dbRef, `users/${userId}/courses`), courses)
          return {data: courses}
        } catch (error) {
          console.error(error)
        }
      },
      invalidatesTags: ['User']
    })
  })
})

export const {
  useGetAllCoursesQuery,
  useGetCourseIdQuery,
  useGetAllWorkoutsQuery,
  useGetWorkoutsIdQuery,
  useLazyGetWorkoutsIdQuery,
  useAddUserMutation,
  useGetAllUsersQuery,
  useGetIdUserCoursesQuery,
  useAddCourseToUserMutation,
  useAddFullCourseToUserMutation,
  useUpdateUserCoursesMutation,
} = FirebaseApi
export default FirebaseApi.reducer
