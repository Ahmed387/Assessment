// rootReducer.js
import { combineReducers } from "redux";
import { templatereducer } from "./Templateslice"; // Ensure the correct path
const rootReducer = combineReducers({
  templatered: templatereducer, // Ensure this matches the reducer used in your store
});
export default rootReducer;
