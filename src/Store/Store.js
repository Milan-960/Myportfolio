// "createStore is deprecated";
// it's literally just a visual indicator in your editor, like createStore.

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
