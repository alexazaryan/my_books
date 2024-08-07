import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createBookWithId } from "../../utilus/createBookWithId";
import { setError } from "./errorSlices";

const initialState = {
  books: [],
  isLoading: false,
};

export const fetchBooks = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },

    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        // state.status = "loading";
        // state.push(createBookWithId("", "API"));
      })

      .addCase(fetchBooks.fulfilled, (state, action) => {
        // state.status = "succeeded";
        state.isLoading = false;
        state.books.push(createBookWithId(action.payload, "API"));
      })

      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;
export default bookSlice.reducer;
export const selectAllBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.isLoading;
