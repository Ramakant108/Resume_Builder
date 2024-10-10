import { configureStore } from "@reduxjs/toolkit";
import ResumeStateReducer from'./Redux.js'



 const store=configureStore({
    reducer:ResumeStateReducer
})
export default store;