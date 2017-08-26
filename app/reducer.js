import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"
import professions from "./components/professionSelection/reducer";

export default combineReducers({
  professions,
  routing: routerReducer
});

