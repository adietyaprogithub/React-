import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
      };
      state.push(newTodo);
    },
  },
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer
