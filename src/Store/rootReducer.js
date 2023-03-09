import { combineReducers } from "redux";

import DarkModeReducer from "./Reducer/darkMode-Reducer";
import { ProjectReducer } from "./Reducer/project-Reducer";

const rootReducer = combineReducers({
  darkMode: DarkModeReducer,
  project: ProjectReducer,
});

export default rootReducer;
