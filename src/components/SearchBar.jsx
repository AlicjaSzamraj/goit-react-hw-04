import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "../styles/SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Proszę wprowadzić hasło wyszukiwania!");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Szukaj
        </button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
