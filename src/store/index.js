import {configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducer/authSlice";
import spinnerSlice from "../reducer/spinnerSlice";






const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        spinner:spinnerSlice.reducer
    }
})
export default store