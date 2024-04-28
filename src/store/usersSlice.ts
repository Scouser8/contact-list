import {
  ActionReducerMapBuilder,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "../../axios";
import { User } from "../types";

export type GetUsersQuery = { numberOfUsers: number; nationality: string };

export const getUsers = createAsyncThunk(
  "users/get",
  async ({ numberOfUsers = 5, nationality }: GetUsersQuery, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(
        `/?results=${numberOfUsers}&nat=${nationality}`
      );
      return res.data.results;
    } catch (res: any) {
      return rejectWithValue(res.error);
    }
  }
);

type UsersState = {
  users: User[];
  error: string;
};

const initialState: UsersState = {
  users: [],
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const updatedUser = action.payload;
      state.users = state.users.map((user) => {
        if (user.login.uuid === updatedUser.login.uuid) {
          return updatedUser;
        }
        return user;
      });
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const userIdToDelete = action.payload;
      state.users = state.users.filter(
        (user) => user.login.uuid !== userIdToDelete
      );
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<UsersState>) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.error = "";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.error = "";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = (action.payload as string) || (action.error as string);
      });
  },
});

export default userSlice.reducer;
