import React from "react";
import "./Result.css";
import Synonyms from "./Synonyms";

export default function Result(props) {
  return (
    <div className="Result">
      <em>
        <h4>{props.meaning.partOfSpeech}</h4>
      </em>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
