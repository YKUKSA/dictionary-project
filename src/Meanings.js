import React from "react";
import Result from "./Result";
export default function Meanings(props) {
  if (props.meanings) {
    return (
      <div className="Meanings">
        <h2>{props.meanings.word}</h2>
        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Result meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
