import { createSlice } from '@reduxjs/toolkit'
import { Cards } from '../constans'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: {
    cards: Cards,
    isAllowed: false,
  },
  reducers: {
    setIsAllowed ( state, action ) {
      state.isAllowed = action.payload
    }
  },
})
export const {setIsAllowed} = coursesSlice.actions
export const coursesReducer = coursesSlice.reducer
