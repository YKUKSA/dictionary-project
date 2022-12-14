import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <span className="audio">
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>{" "}
        </span>
        <span className="text">{props.phonetic.text}</span>
      </div>
    );
  } else {
    return <span className="text">{props.phonetic.text}</span>;
  }
}
