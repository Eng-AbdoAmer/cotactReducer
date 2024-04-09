// store.js
import { createStore } from "redux";

const initialState = {
  name: "",
  age: 0,
};

export const SET_NAME = "SET_NAME";
export const SET_Age = "SET_Age";

const cotactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload.name,
      };
    case "SET_Age":
      return {
        ...state,
        age: action.payload.age,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(cotactReducer);

export default store;
