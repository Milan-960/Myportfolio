import * as actions from "../Actions/Index";

// initial state
const initialState = {
  isDarkMode:
    localStorage.getItem("dark") === null ||
    !!JSON.parse(localStorage.getItem("dark")),
};

const DarkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.DARK_MODE:
      // toggle the isDarkMode state
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    default:
      return state;
  }
};

//* changing the darkmode
export const toggleDarkMode = () => ({
  type: "DARK_MODE",
});

export default DarkModeReducer;
