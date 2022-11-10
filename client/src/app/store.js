import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../features/layout/layoutSlice";

export default configureStore({
  reducer: { layout: layoutReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
