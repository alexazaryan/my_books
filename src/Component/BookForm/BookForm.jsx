import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBookWithId } from "../../utilus/createBookWithId";
import { addBook, fetchBooks } from "../../redux/slices/bookSlices";
import { FaSpinner } from "react-icons/fa";
import { selectIsLoading } from "../../redux/slices/bookSlices";
// import json
import books from "../../data/books.json";

// styles
import styles from "./BookForm.module.css";

export default function BookForm() {
  const isLoading = useSelector(selectIsLoading);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleSelectRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];

    dispatch(addBook(createBookWithId(selectedBook, "random")));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (author && title) {
      dispatch(addBook(createBookWithId({ title, author }, "manual")));
    }
  };

  const handleRandomBookApi = () => {
    dispatch(fetchBooks("http://localhost:4000/random-book"));
  };

  return (
    <div className={`${styles["app-block"]} ${styles["book-form"]}`}>
      <h2 className={`${styles["h2"]}`}>Add new book</h2>

      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={() => handleSelectRandomBook()}>
          Add Random
        </button>
        <button type="button" onClick={handleRandomBookApi}>
          {/* Add Random via API */}
          {/*  */}
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className={styles["spinner"]} />
            </>
          ) : (
            "Add Random via API"
          )}
          {/*  */}
        </button>
      </form>
    </div>
  );
}
