import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        description: action.payload,
        isDone: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    editTask: (state, action) => {
      const task = state.find((t) => t.id === action.payload.id);
      if (task) {
        task.description = action.payload.description;
      }
    },
  },
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
