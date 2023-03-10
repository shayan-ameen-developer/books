import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { handleEditBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") {
      handleEditBook(book.id, title);
      setTitle("");
      onSubmit();
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Title</h3>
        <input value={title} onChange={handleChange} placeholder="Title..." />
        <button>Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
