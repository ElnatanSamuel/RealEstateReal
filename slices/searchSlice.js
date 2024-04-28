import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  price:"jkljkl",
  propertyType:null,
  bedrooms:null,
  bathrooms:null,
  houseSize:null,
  houseAge:null,
  location: {
    coords: {
      lat: null,
      lng: null
        },
    address:null
      },
    }

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload
    },
    setPropertyType: (state, action) => {
      state.propertyType = action.payload
    },
    setBedrooms: (state, action) => {
      state.bedrooms =  action.payload
    },
    setBathrooms: (state, action) => {
      state.bathrooms = action.payload
    },
    setHouseSize: (state, action) => {
      state.houseSize = action.payload
    },
    setHouseAge: (state, action) => {
      state.houseAge = action.payload
    },
    setLocation: (state, action) => {
      state.location = action.payload
    },
  }
})


// Action creators are generated for each case reducer function
export const { 
  setPrice
 } = searchSlice.actions

export const selectPrice = (state) => state.search.price
export const selectLocation = (state) => state.search.location

export const selectedBedrooms = (state) => state.search.bedrooms
export const selectBathrooms = (state) => state.search.bathrooms

export const selectHouseSize = (state) => state.search.houseSize
export const selectHouseAge = (state) => state.search.houseAge

export const selectPropertyType = (state) => state.search.propertyType

export default searchSlice.reducer