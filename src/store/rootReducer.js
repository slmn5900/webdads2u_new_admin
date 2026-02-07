import { combineReducers } from "@reduxjs/toolkit";
import positionReducer from "./slice/positionSlice";
import socialMediaReducer from "./slice/socialMediaSlice";
import contactReducer from "./slice/contactSlice";
import hireusReducer from "./slice/hireusSlice";
import authReducer from "./slice/authSlice";
import blogReducer from "./slice/blogSlice";
import enquiriesReducer from "./slice/projectEnquirySlice";
import ourWorkReducer from "./slice/ourWorkSlice";
import dashboardReducer from "./slice/dashboardSlice";
const reducer = combineReducers({
  position: positionReducer,
  socialMedia: socialMediaReducer,
  contact: contactReducer,
  hireus: hireusReducer,
  auth: authReducer,
  blog: blogReducer,
  projectEnquiry: enquiriesReducer,
  ourWork: ourWorkReducer,
  dashboard: dashboardReducer,
});
export default reducer;
