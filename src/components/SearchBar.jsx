import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Wyszukaj obrazy i zdjęcia"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Szukaj</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
