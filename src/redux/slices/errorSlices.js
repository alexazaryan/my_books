import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const errorSlice = createSlice({
  name: "error",
  initialState,

  reducers: {
    // вызывать при незаполненом поле
    setError: (state, action) => {
      // console.log(state);
      // console.log(action);

      return action.payload;
    },
    clearError: () => {
      // return '';
      // или так
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;
export const selectErrorMessage = (state) => state.error; // сообщение об ошибке это строка, будет находится в state.error
export default errorSlice.reducer;
