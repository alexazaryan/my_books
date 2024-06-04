import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/FilterSlices";
import bookSlice from "./slices/bookSlices";

const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterReducer,
  },
});

export default store;
