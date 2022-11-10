import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pathName: "",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setPathName: (state, action) => {
      state.pathName = action.payload;
    },
  },
});

export const { setPathName } = layoutSlice.actions;
export default layoutSlice.reducer;
