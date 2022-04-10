import { createSlice } from "@reduxjs/toolkit";

const initSate = [
  {
    id: "1",
    title: "About Me",
    description:
      "I am a developer with 1year-5months of experience in ReactJS & Javascript",
    date: "09/04/2022",
    assignedTo: "rajesh",
    duration: "2",
    priority: "high",
  },
];

const todoListSlice = createSlice({
  name: "todoList",
  initialState: initSate,
  reducers: {
    getTodoList(state) {
      return state;
    },
    addTask(state, action) {
      let newtask = action.payload;
      newtask.isCompleted = false;
      return [...state, ...[newtask]];
    },
    removeTask(state, action) {
      let newSate = state.filter((item) => item.id !== action.payload);
      return [...newSate];
    },
    markTaskCompleted(state, action) {
      state.find((item) => item.id === action.payload).isCompleted = true;
      return state;
    },
    activateTaskAgain(state, action) {
      state.find((item) => item.id === action.payload).isCompleted = false;
      return state;
    },
  },
});

export const {
  getTodoList,
  addTask,
  removeTask,
  markTaskCompleted,
  activateTaskAgain,
} = todoListSlice.actions;
export default todoListSlice.reducer;
