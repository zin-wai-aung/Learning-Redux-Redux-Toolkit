// import { combineReducers, createStore, applyMiddleware } from "redux";
// import { thunk  } from "redux-thunk";
// import { counterReducer } from "./reducer/counter.ruducer";

// const reducer = combineReducers({
//   counter: counterReducer,
// });

// export const store = createStore(reducer, {}, applyMiddleware(thunk));


import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counter.slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
