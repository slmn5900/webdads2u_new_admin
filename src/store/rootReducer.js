import { combineReducers } from "@reduxjs/toolkit";
import positionReducer from "./slice/positionSlice";
import socialMediaReducer from "./slice/socialMediaSlice";
import contactReducer from "./slice/contactSlice";
import hireusReducer from "./slice/hireusSlice";
import authReducer from "./slice/authSlice";
import blogReducer from "./slice/blogSlice";
const reducer = combineReducers({
  position: positionReducer,
  socialMedia: socialMediaReducer,
  contact: contactReducer,
  hireus: hireusReducer,
  auth: authReducer,
  blog: blogReducer,
});
export default reducer;
