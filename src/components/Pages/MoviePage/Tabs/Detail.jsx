import React from "react";

const Detail = ({ movie }) => (
  <div>
    <div className="row details">
      <div className="col">
        <b>Статус</b>
      </div>
      <div className="col ">{movie.status}</div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Дата выхода</b>
      </div>
      <div className="col">{movie.release_date}</div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Продолжительность</b>
      </div>
      <div className="col">{`${movie.runtime} min`}</div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Язык оригинала</b>
      </div>
      <div className="col">{movie.original_language}</div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Страна</b>
      </div>
      <div className="col">
        {movie.production_countries &&
          movie.production_countries.map(country => {
            return (
              <p key={country.name} className="bg-blue">
                {country.name}
              </p>
            );
          })}
      </div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Бюджет</b>
      </div>
      <div className="col">{`${movie.budget}$`}</div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Сборы</b>
      </div>
      <div className="col">{`${movie.revenue}$`}</div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Компания</b>
      </div>
      <div className="col">
        {movie.production_companies &&
          movie.production_companies.map(genre => {
            return (
              <p key={genre.name} className="bg-blue">
                {genre.name}
              </p>
            );
          })}
      </div>
    </div>
    <div className="row details">
      <div className="col">
        <b>Жанры</b>
      </div>
      <div className="col">
        {movie.genres &&
          movie.genres.map(genre => {
            return (
              <p key={genre.name} className="bg-blue">
                {genre.name}
              </p>
            );
          })}
      </div>
    </div>
  </div>
);

export default Detail;
