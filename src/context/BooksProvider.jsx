import React, { createContext, useState } from "react";

let BooksContext = createContext(null);

const BooksProvider = ({ children }) => {
  let [books, setBooks] = useState([]);
  let [wish, setWish] = useState([]);

  let allState = {
    books,
    setBooks,
    wish,
    setWish,
  };

  return (
    <BooksContext.Provider value={allState}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
