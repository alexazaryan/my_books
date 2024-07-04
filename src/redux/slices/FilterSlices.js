// почитать редакс
// почитать corse
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
};

// создаем редусер для фильтров

const filterSlices = createSlice({
  name: "filter",
  initialState,

  //   здесь создаем функцию редюсеры для редусера фильтр
  reducers: {
    setTitleFilter: (state, action) => {
      // ...state
      state.title = action.payload;
    },

    setAuthorFilter: (state, action) => {
      // ...state
      state.author = action.payload;
    },

    setFavoriteFilter: (state) => {
      // ...state
      state.onlyFavorite = !state.onlyFavorite;
    },

    resetFilter: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  resetFilter,
} = filterSlices.actions;

// export перемменой selectTitleFilter порядо export
export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite;

// экспортируем редусер с фильтрами
export default filterSlices.reducer;
