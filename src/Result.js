import React from "react";
import "./Result.css";
import Synonyms from "./Synonyms";
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
            <p>
              <strong>Definition: </strong>
              {definition.definition}
              <br />
              <em>
                <strong>Example:</strong> {definition.example}
              </em>
              <br />
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
