import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { handleCreateBook } = useBooksContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") {
      handleCreateBook(title);
      setTitle("");
    }
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title..." value={title} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
