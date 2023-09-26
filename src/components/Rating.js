import React from "react";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className={`fa-solid fa-star ${
        index < rating ? "" : "star-grey"
      }`}
    ></i>
  ));

  return <div className="rating">{stars}</div>;
};

export default Rating;
