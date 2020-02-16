import React from "react";

export default class Detail extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div className="row details">
          <div className="col">
            <b>Статус</b>
          </div>
          <div className="col ">{item.status}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Дата выхода</b>
          </div>
          <div className="col">{item.release_date}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Продолжительность</b>
          </div>
          <div className="col">{`${item.runtime} min`}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Язык оригинала</b>
          </div>
          <div className="col">{item.original_language}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Страна</b>
          </div>
          <div className="col">
            {item.production_countries.map(country => {
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
          <div className="col">{`${item.budget}$`}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Сборы</b>
          </div>
          <div className="col">{`${item.revenue}$`}</div>
        </div>
        <div className="row details">
          <div className="col">
            <b>Компания</b>
          </div>
          <div className="col">
            {item.production_companies.map(genre => {
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
            {item.genres.map(genre => {
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
  }
}
