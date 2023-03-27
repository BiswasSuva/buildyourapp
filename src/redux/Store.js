import { configureStore } from "@reduxjs/toolkit";
import User from "./reducers/User";
export const store = configureStore({
  reducer: {
    User,
  },
});
