import React from "react";

export const Tile = (props) => {
  return (
    <>
      <p className="tile-title">{props.name}</p>
      {props.description.map((item, index) => (
        <p key={index} className="tile">{item}</p>
      ))}
    </>
  );
};
