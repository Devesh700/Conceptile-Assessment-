import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const Store=configureStore({
    reducer:{
        userDetail:userSlice
    }
})
export default Store;