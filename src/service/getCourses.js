import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const user = JSON.parse(localStorage.getItem('user'));

export const getCourses = createApi({
  reducerPath: 'getCourses',
  tagTypes: ['Courses'],
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
    addCourseId: builder.query({
        query: ({id}) => ({
            url: `courses/${id}.json`,
            method: 'GET',
        }),
        providesTags: ['Courses'],
    })
    // getAllWorkouts: builder.query({
    //     query: () => ({
    //       url: 'workouts.json',
    //     }),
    //     providesTags: ['Courses'],
    //   }),
  }),
})

export const { useGetAllCoursesQuery, useAddCourseIdQuery} = getCourses
export default getCourses.reducer
