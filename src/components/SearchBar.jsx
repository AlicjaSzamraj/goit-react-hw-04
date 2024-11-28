import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <form className={styles.SearchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Wyszukaj obrazy..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Szukaj</button>
    </form>
  );
};

export default SearchBar;
