import { useState } from "react";
import { BookEdit } from "../components";
import useBooksContext from "../hooks/useBooksContext";

function Book({ book }) {
  const [showBookEdit, setShowBookEdit] = useState(false);
  const { handleDeleteBook } = useBooksContext();

  const handleDeleteClick = () => {
    handleDeleteBook(book.id);
  };

  const handleEditClick = () => {
    setShowBookEdit(!showBookEdit);
  };

  const onSubmit = () => {
    setShowBookEdit(false);
  };

  return (
    <div>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delele</button>
      {showBookEdit ? (
        <BookEdit book={book} onSubmit={onSubmit} />
      ) : (
        <h3>{book.title}</h3>
      )}
    </div>
  );
}

export default Book;
