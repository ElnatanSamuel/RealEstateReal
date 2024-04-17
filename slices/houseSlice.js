import { createSlice } from '@reduxjs/toolkit'
import { houseData } from '../data'
import { roomData } from '../data'

const initialState = {
    houseData:houseData,
    roomData,
    saved:[],
    selectedHouse : null
}


export const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        setHouse: (state,action) => {
            state.selectedHouse = action.payload
          },
          setSaved: (state,action) => {
            state.saved=[...state.saved,action.payload]
          },
    }
})

export const {setHouse, setSaved} = houseSlice.actions

export const selectHouseData = (state) => state.house.houseData
export const selectRoomData = (state) => state.house.roomData
export const selectSelectedHouse = (state) => state.house.selectedHouse
export const selectSaved = (state) => state.house.saved

export default houseSlice.reducer