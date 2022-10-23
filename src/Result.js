import React from "react";
import "./Result.css";
export default function Result(props) {
  console.log(props.meaning);
  return (
    <div className="Result">
      <em>
        <h4>{props.meaning.partOfSpeech}</h4>
      </em>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
          </div>
        );
      })}
    </div>
  );
}
