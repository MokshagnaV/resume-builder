import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resume";

const store = configureStore({
  reducer: {
    resume: resumeSlice.reducer,
  },
});

export default store;
