import { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookWithId } from "../../utilus/createBookWithId";

import { addBook } from "../../redux/slices/bookSlices";

// import json
import books from "../../data/books.json";

// styles
import styles from "./BookForm.module.css";

export default function BookForm() {
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
        <button type="button">Add Random via API</button>
      </form>
    </div>
  );
}
