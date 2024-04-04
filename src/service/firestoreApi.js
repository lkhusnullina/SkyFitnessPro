import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  arrayUnion,
  collection,
  doc,
  updateDoc,
  getDocs,
} from 'firebase/firestore'
// import { firestore } from '../../firebase'
import { db } from '../firebase'

export const firestoreApi = createApi({
  reducerPath: 'firestoreApi',
  baseQuery: fakeBaseQuery({
    baseUrl: 'https://fitness-project-bc4c2-default-rtdb.asia-southeast1.firebasedatabase.app/',
  }),
  tagTypes: ['Courses'],
  endpoints: (builder) => ({
    getAll: builder.query({
      // since we are using fakeBaseQuery we use queryFn
      async queryFn() {
        try {
          // posts is the collection name
          const coursesRef = collection(db, 'courses')
          const querySnaphot = await getDocs(coursesRef)
          let courses = []
          querySnaphot?.forEach((doc) => {
            courses.push({ id: doc.id, ...doc.data() })
          })
          return { data: courses }
        } catch (error) {
          return { error }
        }
      },
      providesTags: ['Courses'],
    }),
  }),
})

export const { useGetAllQuery } = firestoreApi
export default firestoreApi.reducer
