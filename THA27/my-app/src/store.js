import TodoReducer from "./reducerthings/To-doreducer";
import { createStore } from "redux";

const store = createStore(TodoReducer);

export default store;