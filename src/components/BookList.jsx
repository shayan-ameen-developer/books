import { Book } from "../components";
import useBooksContext from "../hooks/useBooksContext";

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ul>
  );

  return books.length > 0 ? renderedBooks : <h2>No Books</h2>;
}

export default BookList;
