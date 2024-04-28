import { configureStore } from "@reduxjs/toolkit";
import users from "./usersSlice";

export default configureStore({
  reducer: { users },
});
