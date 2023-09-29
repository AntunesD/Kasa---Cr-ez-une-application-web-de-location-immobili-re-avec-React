import React from "react";

function Host({ name, picture }) {
  const nameWithLineBreaks = name
    .split(" ")
    .map((word, index) => <li key={index}>{word}</li>);
  return (
    <div className="host">
      <ul> {nameWithLineBreaks}</ul>
      <img src={picture} alt={name} />
    </div>
  );
}

export default Host;
