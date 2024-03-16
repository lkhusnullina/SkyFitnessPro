import { configureStore } from "@reduxjs/toolkit";
import { lessonsReducer } from "./slice";

export const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
  },
});
