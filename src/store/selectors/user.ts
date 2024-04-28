import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../types";

const users = (state: RootState) => state.users;

export const getUserSelector = createSelector([users], (users) => users);
