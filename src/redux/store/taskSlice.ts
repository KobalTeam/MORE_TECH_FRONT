import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import host from "@redux/constants";

export const getTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const url = `${host}/task`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const getTask = createAsyncThunk(
  "tasks/fetchTask",
  async (id: number) => {
    const url = `${host}/task/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

export interface TasksState {
  email: string;
  name: string;
  id: number;
}

const initialState = {
  email: "andrey.radioniv.2003@gmail.com",
  name: "Андрей Радионов",
  id: 1,
} as TasksState;

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.name = action.payload[0].name;
      state.email = action.payload[0].email;
    });
  },
});

export default profileSlice.reducer;
