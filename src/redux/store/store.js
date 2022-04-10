import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../slices/todoListSlice";

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

const initStore = () =>
  configureStore({
    reducer: rootReducer,
  });

const store = initStore();

export default store;
