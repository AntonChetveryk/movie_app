import React from "react";

const Genres = props => (
  <div className="genres">
    {props.genres.map(genre => (
      <div key={genre.id} className="checkbox-container">
        <input
          type="checkbox"
          name={genre.name}
          id={genre.id}
          value={genre.id}
          onChange={props.onChangeGenres}
          checked={props.with_genres.includes(String(genre.id))}
        />
        <label htmlFor={genre.id} className="ml-2">
          {genre.name}
        </label>
      </div>
    ))}
  </div>
);

export default Genres;
