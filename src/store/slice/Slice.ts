import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ITask = {
  id: string;
  title: string;
  count: number;
  task_finished: number;
  edit: boolean
}

interface ITasksState {
  items: ITask[]
}

const initialTasksState: ITasksState = {
  items: []
}

export const Slice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {

    addTask: (state, action: PayloadAction<ITask>) => {
      state.items.push(action.payload);
    },

  }
})

export const { } = Slice.actions;

export const tasks = (state: RootState) => state.tasks;

export default Slice.reducer;
