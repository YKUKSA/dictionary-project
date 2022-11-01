import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import Photo from "./Photo";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [search, setSearch] = useState(null);
  const [word, setWord] = useState(null);
  const [photos, setPhotos] = useState(null);
  function displayPexelResponse(response) {
    setPhotos(response.data.photos);
  }
  function displayResponse(response) {
    setWord(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    axios.get(apiUrl).then(displayResponse);
    let apiPexelKey =
      "563492ad6f917000010000017f97209591ac4234aeb0caf169d9f15a";
    let apiPexelUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=9`;
    axios
      .get(apiPexelUrl, { headers: { Authorization: `Bearer ${apiPexelKey}` } })
      .then(displayPexelResponse);
  }
  function handleWord(event) {
    setSearch(event.target.value);
  }
  return (
    <div className="DictionarySearch-form">
      {" "}
      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleWord} />{" "}
          <input type="submit" value="Look up" />
        </form>
        <p>suggested words: flower, snow, wine...</p>
      </section>
      <Photo photos={photos} />
      <Meanings meanings={word} />
    </div>
  );
}
