import React from "react";

function Banner({ image, title }) {
  return (
    <h1 className="banner">
      <img src={image} alt="Decors naturel" />
      <span>{title}</span>
    </h1>
  );
}

export default Banner;
