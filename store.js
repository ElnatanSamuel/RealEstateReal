import { configureStore } from '@reduxjs/toolkit'
// import mapSlice from './slices/mapSlice'
import houseSlice from './slices/houseSlice'

export const store = configureStore({
  reducer: {
    // map:mapSlice,
    house:houseSlice
  },
})