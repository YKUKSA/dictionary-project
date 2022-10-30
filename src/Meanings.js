import React from "react";
import Result from "./Result";
import Phonetic from "./Phonetic";
export default function Meanings(props) {
  console.log(props.meanings);
  if (props.meanings) {
    return (
      <div className="Meanings">
        <h2>{props.meanings.word}</h2>
        {props.meanings.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
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
