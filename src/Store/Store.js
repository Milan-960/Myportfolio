// "createStore is deprecated";
// it's literally just a visual indicator in your editor, like createStore.

import { legacy_createStore as createStore } from "redux";

import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
