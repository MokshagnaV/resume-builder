import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    personalDetails: {},
    eduDetails: {},
    skills: {},
    moreDetails: {},
  },
  reducers: {
    setPersonalDetails(state, action) {
      state.personalDetails = action.payload;
    },
    setEduDetails(state, action) {
      state.eduDetails = action.payload;
    },
    setSkills(state, action) {
      state.skills = action.payload;
    },
    setMoreDetails(state, action) {
      state.moreDetails = action.payload;
    },
  },
});

export const resumeActions = resumeSlice.actions;
export default resumeSlice;
