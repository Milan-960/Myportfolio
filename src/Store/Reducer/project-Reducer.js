import * as actions from "../Actions/Index";

// caling the api
import { fetchProject } from "../../Api/fetchProject";

export const initialState = {
  project: [],
  loading: false,
  error: "",
};

export const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PROJECTS:
      return {
        ...state,
        project: action.payload,
      };
    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actions.ERROR:
      return {
        ...state,
        error: "An error occurred while loading projects.",
      };
    default:
      return state;
  }
};

// Storing the value from API

export const fetchProjectList = () => {
  return async (dispatch) => {
    dispatch({ type: actions.LOADING, payload: true });
    try {
      const projects = await fetchProject();
      dispatch({
        type: actions.PROJECTS,
        payload: projects,
      });
      dispatch({ type: actions.LOADING, payload: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.ERROR });
      dispatch({ type: actions.LOADING, payload: false });
    }
  };
};

export default ProjectReducer;
