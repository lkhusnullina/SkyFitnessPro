import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getCourses = createApi({
  reducerPath: 'getCourses',
  tagTypes: ['Courses', 'Workouts', 'Users'],
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/',
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => ({
        url: 'courses.json',
      }),
      providesTags: ['Courses'],
    }),
    getCourseId: builder.query({
      query: (id) => ({
        url: `courses/${id}.json`,
        method: 'GET',
      }),
      providesTags: ['Courses'],
    }),
   
    getAllWorkouts: builder.query({
      query: () => ({
        url: 'workouts.json',
      }),
      providesTags: ['Workouts'],
    }),
    getWorkoutsId: builder.query({
      query: (id) => ({
        url: `workouts/${id}.json`,
        method: 'GET',
      }),
      providesTags: ['Workouts'],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: `users.json`,
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    getUser: builder.query({
      query: (id) => ({
        url: `users/${id}.json`,
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    getIdUserCourses: builder.query({
      query: (id) => ({
        url: `users/${id}/courses.json`,
        method: 'GET',
      }),
    }),
    getUserProgress: builder.query({
      query: (id, workoutId) => ({
        url: `users/${id}/workouts/.json`,
        method: 'GET',
      }),
    }),
    addUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}.json`,
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
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
  useGetUserProgressQuery,
} = getCourses
export default getCourses.reducer
