import { createContext, useCallback, useState } from "react";
import axios from "axios";

export const BooksContext = createContext();

function BooksContextProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const { data: books } = await axios.get("http://localhost:3001/books");

    setBooks(books);
  }, []);

  const handleCreateBook = async (title) => {
    const { data: newBook } = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };

  const handleEditBook = async (id, title) => {
    const { data: updatedBook } = await axios.put(
      `http://localhost:3001/books/${id}`,
      {
        title,
      }
    );

    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, ...updatedBook } : book
    );
    setBooks(updatedBooks);
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const value = {
    books,
    fetchBooks,
    handleCreateBook,
    handleEditBook,
    handleDeleteBook,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export default BooksContextProvider;
