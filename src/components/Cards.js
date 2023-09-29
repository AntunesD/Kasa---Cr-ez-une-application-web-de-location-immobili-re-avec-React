import React from "react";

import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <article className="cards">
      {data.map((item) => (
        <Link to={`/logement/${item.id}`} key={item.id} className="card">
          <img src={item.cover} alt={item.title} />
          <h2 className="card_content">
            <span className="card_title">{item.title}</span>
          </h2>
        </Link>
      ))}
    </article>
  );
}

export default Cards;
