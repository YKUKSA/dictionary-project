import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [search, setSearch] = useState(null);
  const [word, setWord] = useState(null);
  function displayResponse(response) {
    setWord(response.data[0]);
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
      <Meanings meanings={word} />
    </div>
  );
}
