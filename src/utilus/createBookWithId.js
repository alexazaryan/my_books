import { v4 as uuidv4 } from "uuid";

export const createBookWithId = (book, source) => {
  return {
    ...book,
    id: uuidv4(),
    source,
    isFavorite: false,
  };
};
