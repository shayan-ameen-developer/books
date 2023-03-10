import React from "react";
import ReactDOM from "react-dom/client";

import BooksContextProvider from "./contexts/BooksContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BooksContextProvider>
      <App />
    </BooksContextProvider>
  </React.StrictMode>
);
