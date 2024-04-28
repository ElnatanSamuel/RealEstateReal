import { createSlice } from '@reduxjs/toolkit'
// import { houseData } from '../data'


const initialState = {
  price:null,
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
    }
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
  },
)

// Action creators are generated for each case reducer function
export const { 
  setSearch
 } = searchSlice.actions

export const selectPrice = (state) => state.price
export const selectLocation = (state) => state.location

export const selectedBedrooms = (state) => state.bedrooms
export const selectBathrooms = (state) => state.bathrooms

export const selectHouseSize = (state) => state.houseSize
export const selectHouseAge = (state) => state.houseAge

export const selectPropertyType = (state) => state.propertyType

export default searchSlice.reducer