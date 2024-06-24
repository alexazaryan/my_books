import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/FilterSlices";
import bookSlice from "./slices/bookSlices";
import errorSlice from "./slices/errorSlices";

const store = configureStore({
  reducer: {
    books: bookSlice,
    filter: filterReducer,
    error: errorSlice,
  },
});

export default store;
