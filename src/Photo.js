import React from "react";
import "./Photo.css";
export default function Photo(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.landscape} className="img-fluid" alt="" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
