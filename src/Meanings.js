import React from "react";
import Result from "./Result";
import Phonetic from "./Phonetic";
export default function Meanings(props) {
  if (props.meanings) {
    return (
      <div className="Meanings">
        <section>
          <h2>{props.meanings.word}</h2>
          {props.meanings.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.meanings.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Result meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
