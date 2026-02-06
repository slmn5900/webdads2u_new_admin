import { combineReducers } from "redux";
import positionReducer from "./slice/positionSlice";
import socialMediaReducer from "./slice/socialMediaSlice";
const reducer = combineReducers({
  position: positionReducer,
  socialMedia: socialMediaReducer,
});
export default reducer;
