import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    //posts: postReducer,
})

export default rootReducer;