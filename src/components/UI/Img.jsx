import React from "react";

const Img = ({ poster_path }) => (
  <img
    className="card-img-top card-img--height"
    src={`https://image.tmdb.org/t/p/w500${poster_path || ""}`}
    alt=""
  />
);

export default Img;
