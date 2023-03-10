import { useEffect } from "react";
import { BookCreate, BookList } from "./components";
import useBooksContext from "./hooks/useBooksContext";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <BookList />
      <BookCreate />
    </>
  );
}

export default App;
