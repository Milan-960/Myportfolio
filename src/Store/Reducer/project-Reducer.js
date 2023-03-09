import axios from "axios";

import * as actions from "../Actions/Index";

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
        project: action.payload, // use "project" instead of "projects"
      };
    case actions.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case actions.ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const fetchItemList = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://nodejs-swagger-api.vercel.app/posts"
      );
      console.log("redux", response.data);
      const project = response.data;
      dispatch({
        type: actions.PROJECTS, // use the correct action type here
        payload: project,
      });
    } catch (error) {
      dispatch({ type: actions.ERROR });
    }
  };
};

export default ProjectReducer;
