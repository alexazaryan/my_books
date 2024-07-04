import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/slices/bookSlices";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import {
  selectAuthorFilter,
  selectTitleFilter,
  selectOnlyFavorite,
} from "../../redux/slices/FilterSlices";

import { selectAllBooks } from "../../redux/slices/bookSlices";

// style.css
import styles from "./BookList.module.css";

export default function BookList() {
  const books = useSelector(selectAllBooks);

  const authorFilter = useSelector(selectAuthorFilter);
  const titleFilter = useSelector(selectTitleFilter);
  const favoriteFilter = useSelector(selectOnlyFavorite);

  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleFavorite(id));
  };

  const filteredBook = books.filter((book) => {
    const bookTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const authorBook = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());

    const favoriteBook = favoriteFilter ? book.isFavorite : true;

    return bookTitle && authorBook && favoriteBook;
  });

  const highLight = (text, filter) => {
    if (!filter) {
      return text;
    }

    const regex = new RegExp(`(${filter})`, "gi");

    return text.split(regex).map((subString, i) => {
      if (subString.toLowerCase() === filter.toLowerCase()) {
        return (
          <span className={`${styles["highlight"]}`} key={i}>
            {subString}
          </span>
        );
      }
      return subString;
    });
  };

  return (
    <div className={`${styles["app-block"]} ${styles["book-list"]}`}>
      <h2 className={`${styles["book-list__title"]}`}>BookList</h2>

      {filteredBook.length ? (
        <ul>
          {filteredBook.map((book, i) => (
            <li key={book.id}>
              <div className={`${styles["book-info"]}`}>
                {++i} {highLight(book.title, titleFilter)} by
                <strong> {highLight(book.author, authorFilter)}</strong>
                <p>{book.source}</p>
              </div>
              <div className={`${styles["book-actions"]}`}>
                <span onClick={() => handleToggle(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className={`${styles["star-icon"]}`} />
                  ) : (
                    <BsBookmarkStar className={`${styles["star-icon"]}`} />
                  )}
                </span>

                <button onClick={() => dispatch(deleteBook(book.id))}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}
