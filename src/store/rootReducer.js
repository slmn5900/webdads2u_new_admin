import { combineReducers } from "redux";
import positionReducer from "./slice/positionSlice";
import socialMediaReducer from "./slice/socialMediaSlice";
import contactReducer from "./slice/contactSlice";
import hireusReducer from "./slice/hireusSlice";
const reducer = combineReducers({
  position: positionReducer,
  socialMedia: socialMediaReducer,
  contact: contactReducer,
  hireus: hireusReducer,
});
export default reducer;
