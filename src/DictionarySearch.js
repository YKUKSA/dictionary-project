import React, { useState } from "react";
import axios from "axios";
import "./DictionarySearch.css";
export default function DictionarySearch() {
  const [search, setSearch] = useState(null);
  function displayResponse(response) {
    console.log(response);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    axios.get(apiUrl).then(displayResponse);
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
