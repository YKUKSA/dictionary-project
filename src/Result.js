import React from "react";
export default function Result(props) {
  console.log(props.meaning);
  return (
    <div className="Result">
      <h4>{props.meaning.partOfSpeech}</h4>{" "}
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
