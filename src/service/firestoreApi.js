import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { ref, child, get, set } from 'firebase/database'
import { db } from '../firebase'

export const firestoreApi = createApi({
  reducerPath: 'firestoreApi',
  baseQuery: fakeBaseQuery({
    baseUrl:
      'https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/',
  }),
  tagTypes: ['Courses'],
  endpoints: (builder) => ({
    getAll: builder.query({
      // since we are using fakeBaseQuery we use queryFn
      async queryFn() {
        try {
          // posts is the collection name
          const dbRef = ref(db)
          const snapshot = await get(child(dbRef, `courses`))
          if (snapshot.exists()) {
            console.log(snapshot.val())
          } else {
            console.log('No data available')
          }
          return { data: snapshot.val() }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Courses'],
    }),
    add: builder.mutation({
      async queryFn(course) {
        try {
          console.log(course);
          const dbRef = ref(db)
          await set(child(dbRef, `courses/${course._id}`), course)
          return { data: "null" }
        } catch (error) {
          return { error }
        }
      },
    })
  }),
})

export const { useGetAllQuery, useAddMutation } = firestoreApi
export default firestoreApi.reducer
