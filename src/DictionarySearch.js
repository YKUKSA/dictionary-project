import React, { useState } from "react";
import "./DictionarySearch.css";
export default function DictionarySearch() {
  const [search, setSearch] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${search}`);
  }
  function handleWord(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleWord} />{" "}
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
