import CardReducer from "./reduxthings/cardReducer";
import { createStore } from "redux";

const store = createStore(CardReducer);

export default store;