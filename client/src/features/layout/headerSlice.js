import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  anchorElement: null,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    handleClick: (state, action) => {
      state.anchorElement = action.payload;
    },
    handleClose: (state, action) => {
      state.anchorElement = null;
    },
  },
});

export const { handleClick, handleClose } = headerSlice.actions;
export default headerSlice.reducer;
