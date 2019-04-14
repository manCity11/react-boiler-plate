import { createStore } from "redux";
import { actions } from "./reducers";

const store = createStore(actions);

export default store;
