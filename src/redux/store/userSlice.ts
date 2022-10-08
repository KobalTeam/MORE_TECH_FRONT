import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import host from "@redux/constants";

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const createUser = createAsyncThunk(
  "tasks/addTask",
  async (data: User) => {
    const response = await fetch(`${host}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const answer = await response.json();

    return answer;
  },
);

export const userSlice = createSlice({
  name: "content",
  initialState: {} as User,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    });
  },
});

export default userSlice.reducer;
