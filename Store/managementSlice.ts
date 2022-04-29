import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    management: ''
}

const managementSlice = createSlice({
    name: 'management',
    initialState,
    reducers: {
        addManage(state, action) {
                state.management = action.payload
            }
    }
})

export const selectManage = (state) => state.management

export const { addManage } = managementSlice.actions

export default managementSlice.reducer