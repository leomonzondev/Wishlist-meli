import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice"; 
import managementSlice from "./managementSlice";



export const store = configureStore({
    reducer: {
        lists: listSlice,
        management: managementSlice
    }
})