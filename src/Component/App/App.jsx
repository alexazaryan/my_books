import BookList from "../BookList/BookList";
import Filter from "../Filter/Filter";
import BookForm from "../BookForm/BookForm";
import Error from "../Error/Error";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <h1>Book Library App</h1>
      </header>
      <main className={`${styles["app-main"]}`}>
        <div className={`${styles["app-left-column"]}`}>
          <BookForm></BookForm>
        </div>
        <div className={`${styles["app-right-column"]}`}>
          <Filter></Filter>
          <BookList></BookList>
        </div>
      </main>
      <Error />
    </div>
  );
}

export default App;
