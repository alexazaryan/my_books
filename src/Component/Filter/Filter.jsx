import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  setFavoriteFilter,
  setAuthorFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavorite,
  resetFilter,
} from "../../redux/slices/FilterSlices";

import styles from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch(); // useDispatch для отправки действиЯ в редакс сторе

  // Подпишемся на изменения сотстояние переменной selectTitleFilter
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const selectCheckedBooks = useSelector(selectOnlyFavorite);

  const changeTitleFilter = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const changeAuthorFilter = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const changeFavoriteFilterBoors = () => {
    dispatch(setFavoriteFilter());
  };

  const handlerClickResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <div className={`${styles["app-block"]} ${styles.filter}`}>
      <div className={`${styles["filter-row"]}`}>
        <div className={`${styles["filter-group"]}`}>
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleFilter}
            onChange={changeTitleFilter}
          />
        </div>

        <div className={`${styles["filter-group"]}`}>
          <input
            type="text"
            placeholder="Filter by author..."
            value={authorFilter}
            onChange={changeAuthorFilter}
          />
        </div>
        <div className={`${styles["filter-group"]}`}>
          <label>
            <input
              type="checkbox"
              checked={selectCheckedBooks}
              onChange={changeFavoriteFilterBoors}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handlerClickResetFilter}>
          Reset filters
        </button>
      </div>
    </div>
  );
}
