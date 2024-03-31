import { createSlice } from '@reduxjs/toolkit'
import { Cards } from '../constans'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    cards: Cards,
  },
  reducers: {
  },
})
export const coursesReducer = coursesSlice.reducer
