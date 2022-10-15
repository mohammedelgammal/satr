import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/layout/headerSlice";

export default configureStore({
  reducer: { header: headerReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
