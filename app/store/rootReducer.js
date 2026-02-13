import { combineReducers } from "redux";
import contactReducer from "./slice/contact";
import careerReducer from "./slice/career";
import enquiryReducer from "./slice/enquirySlice";
import hireUsReducer from "./slice/hireusSlice";
import positionReducer from "./slice/positionSlice";
import socialMediaReducer from "./slice/socialMediaSlice";
import ourWorkReducer from "./slice/ourWorkSlice";
import blogReducer from "./slice/blog";
const reducer = combineReducers({
  contact: contactReducer,
  enquiry: enquiryReducer,
  career: careerReducer,
  hireUs: hireUsReducer,
  position: positionReducer,
  social: socialMediaReducer,
  blog: blogReducer,
  ourWork: ourWorkReducer,
});
export default reducer;
