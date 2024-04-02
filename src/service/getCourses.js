import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getCourses = createApi({
  reducerPath: 'getCourses',
  tagTypes: ['Courses', 'Workouts'],
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
  }),
})

export const {
  useGetAllCoursesQuery,
  useGetCourseIdQuery,
  useGetAllWorkoutsQuery,
  useGetWorkoutsIdQuery,
  useLazyGetWorkoutsIdQuery
} = getCourses
export default getCourses.reducer
